import React from 'react'

export default function CommitteeMember({ role, name, photoSrc }) {
  return (
    <div className="committee-member">
      <img className="committee-photo" src={photoSrc} alt={`${role} - ${name || 'Name'}`} />
      <div className="committee-meta">
        <div className="committee-role">{role}</div>
        <div className="committee-name">{name || 'Enter Name'}</div>
      </div>
    </div>
  )
} 