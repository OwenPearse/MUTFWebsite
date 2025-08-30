import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="grid">
        <div className="col-8">
          <strong>Melbourne University Touch Football (MUTF)</strong>
          <div className="muted">Since 1997 • Melbourne, Australia</div>
        </div>
        <div className="col-4" style={{ textAlign: 'right' }}>
          <div>
            <a href="mailto:info@mutf.org.au">info@mutf.org.au</a>
          </div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            {' · '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
} 