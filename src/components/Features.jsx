import React from 'react'
import './Features.css'

const features = [
  {
    id: 'F-01',
    icon: '[NLP]',
    title: 'Heuristic NLP Intent Router',
    desc: 'Bypasses brittle regex mapping. Commands are normalized, context is resolved, and then rapidly classified via local sentence embeddings and RapidFuzz before fallback to the LLM Brain.',
    tags: ['Embeddings', 'Fuzzy Match', 'Python']
  },
  {
    id: 'F-02',
    icon: '[S.B]',
    title: 'Obsidian Second Brain',
    desc: 'Local, markdown-based vector memory. ARC logs your conversations, parses deep intent, and retrieves past interactions so it remembers exactly what you mean from day to day.',
    tags: ['Vector DB', 'Markdown', 'Semantic']
  },
  {
    id: 'F-03',
    icon: '[E.X]',
    title: 'Zero Latency Voice Execution',
    desc: 'Using local OpenAI Whisper and Mac TTS mechanisms, ARC accurately transcribes your speech and executes deep system commands (opening apps, writing code) securely on your machine.',
    tags: ['Whisper STT', 'Mac Engine', 'Local']
  },
  {
    id: 'F-04',
    icon: '[SEC]',
    title: 'ECAPA-TDNN Voice Auth',
    desc: 'Your voice is your password. ARC utilizes deep neural speaker embeddings to filter out roommates, music, or background noise. If it’s not your voice signature, ARC doesn’t act.',
    tags: ['Neural Net', 'Security', 'WebRTC']
  },
  {
    id: 'F-05',
    icon: '[RL]',
    title: 'Negative Self-Learning Matrix',
    desc: 'True local RLHF. Misclassifications corrected by the user generate "anti-examples" in reinforcement.py, applying mathematical penalties to semantic routing to prevent repeated errors.',
    tags: ['RLHF', 'Feedback Loop', 'Self-Repair']
  },
  {
    id: 'F-06',
    icon: '[V27]',
    title: 'Vision \'27: Edge Hardware',
    desc: 'A roadmap towards bringing ARC into physical reality. A seamless ecosystem powered by ESP32 wristbands and a real-time biometric HUD for face tracking and constant ambient presence.',
    tags: ['ESP32', 'IoT HUD', 'Future']
  }
]

const Features = () => (
  <section id="features" className="features">
    <div className="features-inner">
      <div className="features-header reveal">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title">An OS replacement.<br /><em>Not just a chatbot.</em></h2>
        <p className="section-sub">Replacing the core mouse-keyboard workflow with an uncompromised multi-agent architecture.</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className={`feat-card reveal delay-${i + 1}`} key={f.id}>
            <div className="feat-top">
              <span className="feat-id">{f.id}</span>
              <span className="feat-icon">{f.icon}</span>
            </div>
            
            <h3 className="feat-title">{f.title}</h3>
            <p className="feat-desc">{f.desc}</p>
            
            <div className="feat-tags">
              {f.tags.map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="feat-corner tl" />
            <div className="feat-corner br" />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features