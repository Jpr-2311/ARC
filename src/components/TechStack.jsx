import React from 'react'
import './TechStack.css'

const stack = [
  {
    layer: 'OS & Intelligence',
    color: '#f45d00',
    icon: '◈',
    desc: 'The reasoning and routing core.',
    items: [
      { name: 'ManagerBrain (Gemini 1.5)', note: 'Semantic router for deep tasks' },
      { name: 'RAPIDFUZZ Matching', note: 'Fast local intent regex fallbacks' },
      { name: 'Obsidian integration', note: 'Second brain vector retrieval' },
      { name: 'Python Core', note: 'Background daemon processes' },
    ],
  },
  {
    layer: 'Audio & Speech Analytics',
    color: '#3b82f6',
    icon: '◉',
    desc: 'Local speech comprehension.',
    items: [
      { name: 'OpenAI Whisper', note: 'Deep-learning local transcription' },
      { name: 'WebRTC VAD', note: 'Real-time noise silence detection' },
      { name: 'ECAPA-TDNN Embs', note: 'Neural speaker verification' },
      { name: 'PyAudio Buffers', note: 'Continuous local memory chunks' },
    ],
  },
  {
    layer: 'Execution Modules',
    color: '#a855f7',
    icon: '◇',
    desc: 'Acting securely on your machine.',
    items: [
      { name: 'Agent.TaskGraph', note: 'DAG-based multi-agent plans' },
      { name: 'Subprocess Sandboxing', note: 'Secure code execution loops' },
      { name: 'Mac Automation', note: 'Native AppleScript/Shell bridges' },
      { name: 'Mac TTS (Daniel)', note: 'Personality-injected feedback' },
    ],
  },
  {
    layer: 'Edge Hardware (Vision \'27)',
    color: '#22c55e',
    icon: '◎',
    desc: 'Future-proofing the digital ecosystem.',
    items: [
      { name: 'ESP32 & INMP441', note: 'Low-power ambient watch mics' },
      { name: 'OpenCV & MediaPipe', note: '30fps face-tracking HUDs' },
      { name: 'FastAPI WebSockets', note: 'Real-time duplex streams' },
      { name: 'Biometric Sensors', note: 'Heart/Temperature analytics' },
    ],
  },
]

const TechStack = () => (
  <section id="tech" className="tech">
    <div className="tech-inner">
      <div className="tech-header reveal">
        <p className="eyebrow">Architecture</p>
        <h2 className="section-title">The stack<br /><em>behind ARC.</em></h2>
        <p className="section-sub">Every tool chosen for a reason — speed, privacy, and intelligence.</p>
      </div>

      <div className="tech-grid">
        {stack.map((s, i) => (
          <div
            className={`tech-layer reveal delay-${i + 1}`}
            key={s.layer}
            style={{ '--layer-color': s.color }}
          >
            <div className="tl-top">
              <span className="tl-icon">{s.icon}</span>
              <div>
                <div className="tl-name">{s.layer}</div>
                <div className="tl-desc">{s.desc}</div>
              </div>
            </div>

            <div className="tl-divider" />

            <div className="tl-items">
              {s.items.map(item => (
                <div className="tl-item" key={item.name}>
                  <div className="tl-item-row">
                    <span className="tl-item-dot" />
                    <span className="tl-item-name">{item.name}</span>
                  </div>
                  <span className="tl-item-note">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack