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
            <a href="mailto:operations@mutouchfootball.com">operations@mutouchfootball.com</a>
          </div>
          <div>
            <a href="https://www.facebook.com/search/top?q=melbourne%20university%20touch%20football" target="_blank" rel="noreferrer">Facebook</a>
            {' · '}
            <a href="https://www.instagram.com/melbunitouch/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
} 