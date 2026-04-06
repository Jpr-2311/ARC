import React from 'react'
import './Team.css'
import Aariyan from '../assets/Aariyan.jpeg'
import Jithin from '../assets/jithin.jpeg'

const members = [
  { name: 'S.Aariyan', role: 'FOUNDER', bio: 'Life is never ending constant,ascend towards perfection.', initials: 'M1', photo: Aariyan },
  { name: 'Jithin PR', role: 'CO-FOUNDER', bio: 'Add your bio here.', initials: 'M2', photo: Jithin },
  { name: 'Laasya UG', role: 'Social-Media Lead', bio: 'Add your bio here.', initials: 'M3', photo: null },
  { name: 'Shivani S', role: 'UI/UX Design', bio: 'Add your bio here.', initials: 'M4', photo: null },
]

const Team = () => (
  <section id="team" className="team">
    <div className="team-inner">
      <div className="team-header reveal">
        <p className="eyebrow">The People</p>
        <h2 className="section-title">Meet the<br /><em>team.</em></h2>
        <p className="section-sub">Four builders who turned an idea into a system.</p>
      </div>

      <div className="team-grid">
        {members.map((m, i) => (
          <div className={`team-card reveal delay-${i + 1}`} key={m.name}>
            <div className="tc-photo">
              {m.photo
                ? <img src={m.photo} alt={m.name} />
                : <div className="tc-placeholder">
                    <span className="tc-initials">{m.initials}</span>
                    <span className="tc-placeholder-label">Add photo</span>
                  </div>
              }
              <div className="tc-photo-overlay" />
            </div>
            <div className="tc-info">
              <h3 className="tc-name">{m.name}</h3>
              <span className="tc-role">{m.role}</span>
              <p className="tc-bio">{m.bio}</p>
            </div>
            <div className="tc-number">0{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Team