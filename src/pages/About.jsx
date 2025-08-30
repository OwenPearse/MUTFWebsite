import React from 'react'
import CommitteeMember from '../components/CommitteeMember.jsx'

const base = import.meta.env.BASE_URL

const executiveMembers = [
  { role: 'President', name: 'Millie Davis', photo: base + 'ExecPhotos/President.png' },
  { role: 'Vice President', name: 'Owen Pearse', photo: base + 'ExecPhotos/VicePresident.png' },
  { role: 'Secretary', name: 'Allie Harland', photo: base + 'ExecPhotos/Secretary.png' },
  { role: 'Treasurer', name: 'Kitty Smyth', photo: base + 'ExecPhotos/Treasurer.png' },
]

const nonExecutiveMembers = [
  { role: 'All Abilities Program', name: 'Ged Moriarty', photo: base + 'NonExecPhotos/AllAbilities.png' },
  { role: 'Junior Program', name: 'Lily Scmhidlechner', photo: base + 'NonExecPhotos/Juniors.png' },
  { role: 'Social Media', name: 'Freya Henriksen', photo: base + 'NonExecPhotos/SocialMedia.png' },
  { role: 'MPIO', name: 'Tayla Fox', photo: base + 'NonExecPhotos/MPIO.png' },
  { role: 'Coaching Program', name: 'Mick Lovett', photo: base + 'NonExecPhotos/Coaching.png' },
  { role: 'Referee Program', name: 'Summer Nelson', photo: base + 'NonExecPhotos/Referee.png' },
  { role: 'University Program', name: 'Hubert Lin', photo: base + 'NonExecPhotos/University.png' },
  { role: 'Representative Program', name: 'Peter Stulpner', photo: base + 'NonExecPhotos/Representative.png' },
  { role: 'Club Competition', name: 'Avena Henriksen & Jess Hooker', photo: base + 'NonExecPhotos/ClubComp.png' },
  { role: 'Tournaments', name: 'Georgia Weston', photo: base + 'NonExecPhotos/Tournaments.png' },
]

export default function About() {
  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <h2 className="section-title">Who We Are</h2>
          <p>
            Melbourne University Touch Football (MUTF) is a community-driven club that
            supports players of all levels, from beginners discovering the sport to elite
            athletes competing at representative levels. Since 1997, we have created a
            welcoming environment to learn, play, coach, referee, and grow.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h2 className="section-title">Meet the Committee</h2>

          <h3>Executive Committee</h3>
          <div className="committee-exec-grid">
            {executiveMembers.map((m) => (
              <CommitteeMember key={m.role} role={m.role} name={m.name} photoSrc={m.photo} />
            ))}
          </div>

          <h3 style={{ marginTop: 20 }}>Non-Executive Roles</h3>
          <div className="committee-nonexec-grid">
            {nonExecutiveMembers.map((m) => (
              <CommitteeMember key={m.role} role={m.role} name={m.name} photoSrc={m.photo} />
            ))}
          </div>

          <p className="muted" style={{ marginTop: 16 }}>
            To add names, open <code>src/pages/About.jsx</code> and fill the <code>name</code> fields in
            <code>executiveMembers</code> and <code>nonExecutiveMembers</code>. Place photos in
            <code>public/ExecPhotos</code> and <code>public/NonExecPhotos</code> and update the filenames if needed.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h2 className="section-title">Contact</h2>
          <p>Email: <a href="mailto:operations@mutouchfootball.com">operations@mutouchfootball.com</a></p>
          <p>
            Socials: <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> ·{' '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  )
} 