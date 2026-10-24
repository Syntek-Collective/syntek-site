import { useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Products from './pages/Products.jsx'
import Collective from './pages/Collective.jsx'
import NotFound from './pages/NotFound.jsx'
export default function App() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    document.title =
      {
        '/': 'Syntek Collective — Tools for developers',
        '/products': 'Software — Syntek Collective',
        '/collective': 'The Collective — Syntek Collective',
      }[pathname] || 'Page not found — Syntek Collective'
    if (first.current) {
      first.current = false
      return
    }
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname, hash])
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav key={pathname} />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="container">
        <div className="footer-top">
          <Link to="/" className="brand-text">
            SYNTEK
            <br />
            COLLECTIVE
          </Link>
          <p>
            Problems welcome.
            <br />
            <span>Especially the developer kind.</span>
          </p>
          <div className="footer-links">
            <Link to="/products">Software</Link>
            <Link to="/collective">The Collective</Link>
            <a href="https://github.com/Syntek-Collective">GitHub ↗</a>
          </div>
        </div>
        <div className="footer-bottom meta">
          <span>© {new Date().getFullYear()} Syntek Collective</span>
          <span lang="ja">より良い仕組みをつくる</span>
          <span>Built by SYNTEK.</span>
        </div>
      </footer>
    </>
  )
}
