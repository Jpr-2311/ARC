import React from 'react'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'listen() & Audio Clean',
    desc: 'Audio is captured via PyAudio, stripped of noise via WebRTC VAD, and instantly transcribed using local OpenAI Whisper without sending voice packets to the cloud.'
  },
  {
    num: '02',
    title: 'normalize() & Context',
    desc: 'The NLP engine strips filler words and automatically resolves contextual pronouns (e.g. replacing "that" with "superman.txt") using the recent file cache.'
  },
  {
    num: '03',
    title: 'fast_intent() Routing',
    desc: 'Before invoking an LLM, ARC checks Local Sentence Embeddings for high-confidence matches. If similarity is >85%, it natively executes the command in under 100ms.'
  },
  {
    num: '04',
    title: 'ManagerBrain DAG',
    desc: 'If the command is complex or low confidence ("create a folder AND open vscode"), it falls back to the ManagerBrain to generate a multi-step Directed Acyclic Graph (DAG).'
  },
  {
    num: '05',
    title: 'safe_execute()',
    desc: 'Agents sequentially traverse the DAG, running python modules or os processes. Destructive commands (like deleting files) hook into a confirmation manager to ensure safety.'
  },
  {
    num: '06',
    title: 'Reinforcement Interrupt',
    desc: 'If ARC misclassifies an intent, you can interrupt it by saying "No, I meant X." The InterruptManager instantly kills the subprocess and triggers the correction loop.'
  },
  {
    num: '07',
    title: 'Negative Self-Learning',
    desc: 'When corrected, reinforcement.py logs the original phrase as an "anti-example," mathematically penalizing its vector similarity score so ARC never iterates the same mistake.'
  },
  {
    num: '08',
    title: 'Confidence Boost Vectoring',
    desc: 'Conversely, successful executions trigger a positive reinforcement boost. The more a command works, the higher its local similarity score climbs, permanently hardwiring the neural pathway.'
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className="hiw">
    <div className="hiw-inner">
      <div className="hiw-header reveal">
        <p className="eyebrow">Execution Pipeline</p>
        <h2 className="section-title">A true cognitive architecture.<br /><em>Here's how ARC processes commands.</em></h2>
        <p className="section-sub">
          Below is the exact execution loop from the 'core/intent_router.py' daemon. No fake API delays. No hardcoded RegEx patterns. True Agentic routing.
        </p>
      </div>

      <div className="hiw-steps">
        {steps.map((s, i) => (
          <div className={`hiw-step reveal delay-${(i % 3) + 1}`} key={s.num}>
            <div className="hiw-step-num">{s.num}</div>
            <div className="hiw-step-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hiw-flow reveal delay-2">
        {[
          'listen()',
          'normalize()',
          'fast_intent()',
          'ManagerBrain DAG',
          'safe_execute()',
          'rlhf_loop()'
        ].map((node, i, arr) => (
          <React.Fragment key={node}>
            <div className={`flow-node ${node === 'Arc AI' ? 'flow-node--center' : ''}`}>
              <span>{node}</span>
            </div>
            {i < arr.length - 1 && <div className="flow-connector">—</div>}
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>
)

export default HowItWorks