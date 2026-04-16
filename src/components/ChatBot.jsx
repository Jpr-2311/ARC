import React, { useState, useRef, useEffect } from 'react'
import './ChatBot.css'
import logoImg from '../assets/logo.png'

const SYSTEM_PROMPT = `You are the ARC System Terminal interface. You answer complex technical inquiries regarding the ARC (Adaptive Reality Core) Agentic AI OS.

Here is exactly what we engineered:

PROJECT: ARC — Agentic Personal OS
ARC is a fully local, voice-controlled, multi-agent proactive AI operating system. It completely bypasses simple "chatbot" patterns, operating as a true cognitive architecture running natively on macOS.

CORE ARCHITECTURES & ALGORITHMS:
1. ManagerBrain Orchestration (brain.py) — A sophisticated decision engine utilizing a Think → Plan → Execute loop. For complex or low-confidence commands, the ManagerBrain invokes Gemini 1.5 Flash to construct a multi-step Agent Task Graph (DAG) for modular execution.
2. Negative Self-Learning Pipeline (reinforcement.py) — True local RLHF. If ARC misclassifies an intent, and you correct it ("No, I meant X"), ARC records the original command as a "Negative Example". This applies a mathematical penalty to the Vector Similarity search in future categorizations, continuously repairing the fast-intent matrix.
3. Confidence Boost Engine — Successful command executions dynamically increment embedding scores. Frequent neural pathways encode themselves into near-zero latency hardcoded routes automatically.
4. Semantic Fast Intent Router (intent_router.py) — Replaces hard-bound regex. ARC normalizes inputs, extracts context entities, and runs local Fast Sentence Embeddings for <100ms request routing.
5. The Obsidian Second Brain — Vectorized long-term memory system holding semantic interaction histories and automatically-extracted facts.
6. Autonomous Chron Loops — Proactive background scripts generate nightly extractions and daily briefings asynchronously without any user wake-word.
7. Local Audio Processing — OpenAI Whisper converts speech locally, filtered by an aggressive WebRTC Voice Activity Detector.
8. ECAPA-TDNN Biometric Sec — Deep Neural Net speaker verification strictly parses localized voice embeddings to reject roommates or media playback.

TECH STACK:
- Platform OS: Python daemon, subprocess sandboxing, Mac TTS (Daniel)
- NLP & AI: Gemini 1.5 Flash, Local Sentence Embeddings, RapidFuzz
- Reinforcement Loops: Custom Negative Penalties & Confidence Boosters
- Audio Sec: PyAudio, WebRTC VAD, ECAPA-TDNN

RULES:
- When queried, provide deeply technical, software-engineering explanations emphasizing ARC's architecture (ManagerBrain, Negative Self Learning, NLP).
- Treat this as a developer terminal. Be concise, extremely impressive, clinical, and accurate. Talk about "we built" the system.`

const SUGGESTED = [
  'Explain the Negative Learning pipeline.',
  'How does the ManagerBrain construct task graphs?',
  'What NLP routing mechanisms do you use?',
  'Detail the voice auth architecture.',
]

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '[SYSTEM] Neural Uplink Established. Query ARC Architecture, ManagerBrain routing, NLP structures, or Reinforcement Learning (RL) mechanics.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggested, setShowSuggested] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open, messages])

  const sendMessage = async (text) => {
    const userText = text || input.trim()
    if (!userText || loading) return

    setInput('')
    setShowSuggested(false)
    const newMessages = [...messages, { role: 'user', content: userText }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role,
        content: m.content,
      }))

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      })

      const data = await response.json()
      const reply = data.content?.[0]?.text || 'Sorry, I couldn\'t get a response. Please try again or email arconwrist@gmail.com'

      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Something went wrong. Please try again or reach us at arconwrist@gmail.com',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`chatbot-trigger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open Neural Terminal"
      >
        {open ? (
          <span className="trigger-close">✕</span>
        ) : (
          <img src={logoImg} alt="ARC" className="trigger-logo" />
        )}
        {!open && <span className="trigger-ping" />}
      </button>

      {/* Chat window */}
      <div className={`chatbot-window ${open ? 'open' : ''}`}>
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-left">
            <img src={logoImg} alt="ARC" className="cb-logo" />
            <div>
              <div className="cb-title">ARC System Terminal</div>
              <div className="cb-status">
                <span className="status-dot" />
                [SESSION ACTIVE]
              </div>
            </div>
          </div>
          <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        {/* Messages */}
        <div className="cb-messages">
          {messages.map((m, i) => (
            <div key={i} className={`cb-msg ${m.role}`}>
              {m.role === 'assistant' && (
                <img src={logoImg} alt="" className="msg-avatar" />
              )}
              <div className="msg-bubble">{m.content}</div>
            </div>
          ))}

          {loading && (
            <div className="cb-msg assistant">
              <img src={logoImg} alt="" className="msg-avatar" />
              <div className="msg-bubble typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Suggested questions */}
          {showSuggested && messages.length === 1 && (
            <div className="suggested">
              <p className="suggested-label">Quick Questions</p>
              {SUGGESTED.map(s => (
                <button key={s} className="suggested-btn" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="cb-input-wrap">
          <input
            ref={inputRef}
            className="cb-input"
            type="text"
            placeholder="Query ARC architecture..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            className="cb-send"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            ↑
          </button>
        </div>

        <div className="cb-footer-note">
          Need more help?{' '}
          <a href="mailto:arconwrist@gmail.com">arconwrist@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default ChatBot