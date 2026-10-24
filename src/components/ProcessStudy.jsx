import { useRef } from 'react'

export default function ProcessStudy() {
  const art = useRef(null)
  function followPointer(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    art.current.style.setProperty('--study-x', `${x * 8}px`)
    art.current.style.setProperty('--study-y', `${y * 8}px`)
  }
  function resetPointer() {
    art.current?.style.removeProperty('--study-x')
    art.current?.style.removeProperty('--study-y')
  }
  return <figure className="hero-study" onPointerMove={followPointer} onPointerLeave={resetPointer}>
    <div className="study-art" ref={art}><img src="/images/process-study-hires.png" alt="Pencil process study connecting Identify, Synthesize, Build, Deploy, and Iterate." width="1254" height="1254"/></div>
    <figcaption><span className="meta">Our process</span><span>Ideas into useful things.</span></figcaption>
  </figure>
}
