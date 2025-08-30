import React from 'react'
import Papa from 'papaparse'

const demoData = {
  "Men's A": [
    { date: '2025-09-01', time: '19:00', field: 'Field 1', opposition: 'Opposition A' },
    { date: '2025-09-08', time: '20:00', field: 'Field 2', opposition: 'Opposition B' },
  ],
  "Women's A": [
    { date: '2025-09-02', time: '18:30', field: 'Field 3', opposition: 'Opposition C' },
  ],
  Mixed: [
    { date: '2025-09-03', time: '19:30', field: 'Field 4', opposition: 'Opposition D' },
  ],
}

export default function Fixtures() {
  const [activeTab, setActiveTab] = React.useState(Object.keys(demoData)[0])
  const [fixtures, setFixtures] = React.useState(demoData)

  const divisions = Object.keys(fixtures)
  const rows = fixtures[activeTab] || []

  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Fixtures</h2>
          </div>

          <div className="tabs">
            {divisions.map((d) => (
              <button key={d} className={d === activeTab ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab(d)}>
                {d}
              </button>
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Field</th>
                  <th>Opposition</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="muted">No fixtures yet.</td>
                  </tr>
                ) : (
                  rows.map((r, idx) => (
                    <tr key={idx}>
                      <td>{r.date}</td>
                      <td>{r.time}</td>
                      <td>{r.field}</td>
                      <td>{r.opposition}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h3 className="section-title">CSV Template</h3>
          <pre className="muted" style={{ overflowX: 'auto' }}>{`division,date,time,field,opposition
Men's A,2025-09-01,19:00,Field 1,Opposition A
Women's A,2025-09-02,18:30,Field 3,Opposition C
Mixed,2025-09-03,19:30,Field 4,Opposition D`}</pre>
        </div>
      </div>
    </div>
  )
} 