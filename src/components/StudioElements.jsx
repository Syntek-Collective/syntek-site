export function Label({ children, number }) {
  return (
    <div className="section-label">
      <span>
        {number} / {children}
      </span>
      <span aria-hidden="true">+</span>
    </div>
  )
}
export function Orbit() {
  return (
    <svg className="orbit" viewBox="0 0 500 400" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth=".7">
        <path d="M40 200h420M250 30v340" opacity=".4" />
        {[-50, -30, -10, 10, 30, 50].map((a) => (
          <ellipse
            key={a}
            cx="250"
            cy="200"
            rx="178"
            ry="65"
            transform={`rotate(${a} 250 200)`}
          />
        ))}
        <circle cx="250" cy="200" r="145" opacity=".35" />
      </g>
      <circle cx="145" cy="127" r="8" fill="currentColor" />
      <circle cx="356" cy="273" r="8" fill="currentColor" />
      <g
        fill="currentColor"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="8"
        letterSpacing="1"
      >
        <text x="98" y="108">
          01 / IDENTIFY
        </text>
        <text x="304" y="76">
          02 / SYNTHESIZE
        </text>
        <text x="397" y="210">
          03 / BUILD
        </text>
        <text x="292" y="316">
          04 / DEPLOY
        </text>
        <text x="58" y="282">
          05 / ITERATE
        </text>
      </g>
    </svg>
  )
}
export function ExternalLink({ href, children }) {
  if (!href) return null
  const url = href.startsWith('https://') ? href : `https://${href}`
  return (
    <a className="text-link" href={url}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}
