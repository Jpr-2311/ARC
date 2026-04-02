import React from 'react'
import './TechStack.css'

const stack = [
  {
    layer: 'Voice & AI',
    color: '#f45d00',
    icon: '◈',
    desc: 'The brain of Jarvis',
    items: [
      { name: 'OpenAI Whisper', note: 'Speech → Text, runs locally' },
      { name: 'Gemini 1.5 Flash', note: 'Natural language & memory' },
      { name: 'Porcupine', note: 'Wake word detection' },
      { name: 'Mac TTS — Daniel', note: 'Voice output with personality' },
    ],
  },
  {
    layer: 'Security',
    color: '#3b82f6',
    icon: '◉',
    desc: 'Only you can use Jarvis',
    items: [
      { name: 'ECAPA-TDNN', note: 'Speaker verification neural net' },
      { name: 'WebRTC VAD', note: 'Noise cancellation pipeline' },
      { name: 'Voice Embeddings', note: 'Your voice signature stored' },
      { name: 'Face Verification', note: 'HUD access control via camera' },
    ],
  },
  {
    layer: 'Hardware',
    color: '#22c55e',
    icon: '◎',
    desc: 'Control from your wrist',
    items: [
      { name: 'ESP32', note: 'Wristband microcontroller' },
      { name: 'INMP441 Mic', note: 'Digital mic on the wristband' },
      { name: 'Heart Rate Sensor', note: 'Live biometric data' },
      { name: 'ngrok Tunnel', note: 'Remote laptop access' },
    ],
  },
  {
    layer: 'Backend & HUD',
    color: '#a855f7',
    icon: '◇',
    desc: 'The live visual layer',
    items: [
      { name: 'FastAPI', note: 'Real-time data server' },
      { name: 'OpenCV + MediaPipe', note: 'Face tracking at 30fps' },
      { name: 'Canvas API', note: 'HUD rendering engine' },
      { name: 'JSON Memory Store', note: 'Jarvis learns from you' },
    ],
  },
]

const TechStack = () => (
  <section id="tech" className="tech">
    <div className="tech-inner">
      <div className="tech-header reveal">
        <p className="eyebrow">Architecture</p>
        <h2 className="section-title">The stack<br /><em>behind Jarvis</em></h2>
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