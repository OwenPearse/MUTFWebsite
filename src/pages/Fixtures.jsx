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

  const onUploadCsv = (file) => {
    if (!file) return
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Expect headers: division, date, time, field, opposition
        const next = {}
        for (const row of results.data) {
          const division = row.division?.trim() || 'Unassigned'
          if (!next[division]) next[division] = []
          next[division].push({
            date: row.date?.trim() || '',
            time: row.time?.trim() || '',
            field: row.field?.trim() || '',
            opposition: row.opposition?.trim() || '',
          })
        }
        setFixtures(next)
        const firstKey = Object.keys(next)[0]
        if (firstKey) setActiveTab(firstKey)
      },
      error: (err) => {
        console.error('CSV parse error', err)
        alert('Failed to parse CSV. Please check the format.')
      },
    })
  }

  const divisions = Object.keys(fixtures)
  const rows = fixtures[activeTab] || []

  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Fixtures</h2>
            <label className="btn" style={{ cursor: 'pointer' }}>
              Upload CSV
              <input
                type="file"
                accept=".csv"
                onChange={(e) => onUploadCsv(e.target.files?.[0])}
                style={{ display: 'none' }}
              />
            </label>
          </div>

          <p className="muted" style={{ marginTop: 8 }}>
            Expected CSV headers: division, date, time, field, opposition
          </p>

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