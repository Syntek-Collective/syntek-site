import { useRef, useState } from 'react'
import { Orbit, ExternalLink } from './StudioElements.jsx'
export default function ProductCard({
  name,
  description,
  repo,
  logo,
  website,
  doc,
  index = 0,
}) {
  const [flipped, setFlipped] = useState(false),
    [failed, setFailed] = useState(false)
  const summary = description
    ? description.split(/(?<=[.!?])\s/)[0]
    : 'Explore this project on GitHub.'
  const frontButton = useRef(null),
    backButton = useRef(null)
  function flip(next) {
    setFlipped(next)
    requestAnimationFrame(() => {
      ;(next ? backButton : frontButton).current?.focus()
    })
  }
  return (
    <article
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && flipped) {
          e.preventDefault()
          flip(false)
        }
      }}
    >
      <div className="flip-inner">
        <div
          className="card-face card-front"
          inert={flipped}
          aria-hidden={flipped}
        >
          <button
            className="card-front-button"
            ref={frontButton}
            onClick={() => flip(true)}
            aria-label={`Show information about ${name}`}
            aria-expanded={flipped}
            aria-controls={`product-info-${index}`}
          >
            <span className="project-meta meta">
              <span>0{index + 1} / Software</span>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </span>
            <span className="card-logo">
              {logo && !failed ? (
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  onError={() => setFailed(true)}
                />
              ) : (
                <>
                  <Orbit />
                  <span className="fallback-wordmark">{name}</span>
                </>
              )}
            </span>
            <span className="card-front-bottom">
              <span className="card-title">{name}</span>
              <span className="meta">Explore project +</span>
            </span>
            <span className="card-summary">{summary}</span>
          </button>
        </div>
        <div
          className="card-face card-back"
          id={`product-info-${index}`}
          inert={!flipped}
          aria-hidden={!flipped}
        >
          <div className="card-back-top">
            <span className="meta">0{index + 1} / Project notes</span>
            <button
              className="flip-back meta"
              ref={backButton}
              onClick={() => flip(false)}
              aria-label={`Show ${name} logo`}
            >
              Back ↶
            </button>
          </div>
          <h2>{name}</h2>
          <div className="card-description">
            <p>{description || 'Explore this project on GitHub.'}</p>
          </div>
          <div className="project-links">
            <ExternalLink href={repo}>GitHub</ExternalLink>
            <ExternalLink href={doc}>Docs</ExternalLink>
            <ExternalLink href={website}>Website</ExternalLink>
          </div>
        </div>
      </div>
    </article>
  )
}
