import { useEffect, useRef, useState } from 'react'

// The 03 / Icon mark: its four circles settle into place the first time it scrolls into view.
export default function MissionMark() {
  const mark = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: .6, rootMargin: '0px 0px -15% 0px' })
    observer.observe(mark.current)
    return () => observer.disconnect()
  }, [])
  return <span ref={mark} className={`mission-mark${visible ? ' is-in' : ''}`} aria-hidden="true"><i/><i/><i/><i/></span>
}
