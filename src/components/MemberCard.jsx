import { useState } from 'react'
import { ExternalLink } from './StudioElements.jsx'
export default function MemberCard({
  name,
  position,
  linkedin,
  headshot,
  index,
}) {
  const [failed, setFailed] = useState(false)
  return (
    <article className="member">
      <span className="meta member-index">0{index + 1}</span>
      {headshot && !failed ? (
        <img
          src={headshot}
          alt={name}
          width="144"
          height="144"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="portrait-fallback" aria-hidden="true">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      )}
      <div className="member-copy">
        <h3>{name}</h3>
        <p className="meta">{position}</p>
        <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
      </div>
    </article>
  )
}
