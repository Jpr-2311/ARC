import React from 'react'
import './About.css'

const stats = [
  { val: 'M-Brain', label: 'Agent Router' },
  { val: 'Obsidian', label: 'Second Brain' },
  { val: 'Local', label: 'Voice Execution' },
  { val: 'Future', label: 'Biometric HUD' },
]

const About = () => (
  <section id="about" className="about">
    <div className="about-inner">
      <div className="about-left reveal-left">
        <p className="eyebrow">About ARC</p>
        <h2 className="section-title">Born from<br />imagination,<br /><em>built for reality.</em></h2>
        <div className="about-line" />
        <p className="about-text">
          ARC — Adaptive Reality Core — started with an obsession: what if we could actually interact with our macs like the sci-fi AI assistants?
        </p>
        <p className="about-text">
          Instead of just another chatbot, we built an agentic background operating system. It orchestrates a ManagerBrain, semantic long-term memory via Obsidian, and full control of your Mac. The software is the foundation; a real-time biometric HUD is the ultimate future.
        </p>
        <div className="about-stats">
          {stats.map(s => (
            <div className="as-item" key={s.label}>
              <span className="as-val">{s.val}</span>
              <span className="as-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-right reveal-right">
        <div className="about-quote-card">
          <div className="aq-mark">"</div>
          <p className="aq-text">
            Build the brain first. The interface will follow. ARC redefines human-computer interaction.
          </p>
          <div className="aq-line" />
          <span className="aq-attr">— The ARC Team</span>
        </div>

        <div className="about-pills">
          {['Gemini 1.5 Flash', 'OpenAI Whisper', 'Obsidian Memory', 'Python Back-End', 'ManagerBrain', 'Future ESP32 UX'].map(p => (
            <span key={p} className="about-pill">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About