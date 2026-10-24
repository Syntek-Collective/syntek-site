import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import ProcessStudy from '../components/ProcessStudy.jsx'
import MissionMark from '../components/MissionMark.jsx'

export default function LandingPage() {
  return <>
    <section className="home-hero container">
      <div className="hero-index meta"><span>An open-source software collective</span><span>OSP—001</span></div>
      <div className="hero-identity">
        <img className="hero-wordmark" src="/syntek/logo-no-background.png" alt="Syntek Collective" width="2172" height="724"/>
        <h1>Solving problems for developers.</h1>
        <p className="hero-description">We turn the problems developers face into open-source tools. Useful, well made, and free to build on.</p>
        <div className="hero-actions">
          <a className="button" href="https://github.com/Syntek-Collective">Explore GitHub <span aria-hidden="true">↗</span></a>
          <Link className="text-link" to="/products#documentation">Browse docs <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <ProcessStudy/>
    </section>
    <section className="home-mission container">
      <h2>Start with<br/><em>the problem.</em></h2>
      <p>Every project begins with a real problem, not a feature list. We study it, build the tool it calls for, and keep refining. <span>People, problems, systems, solutions.</span></p>
      <MissionMark/>
    </section>
    <section className="home-software container">
      <div className="section-heading"><div><p className="meta">From the collective</p><h2>What we’re building</h2></div><Link className="text-link" to="/products">All software <span aria-hidden="true">↗</span></Link></div>
      <div className="product-grid">{products.map((product,index)=><ProductCard key={product.name} {...product} index={index}/>)}</div>
    </section>
    <section className="home-collective container">
      <div><p className="meta">The people behind the projects</p><h2>Software engineers.<br/><em>Also people.</em></h2></div>
      <div><p>Our engineers are spread across the world. We build together, share what we make, and keep it open.</p><Link className="text-link" to="/collective">Meet the collective <span aria-hidden="true">↗</span></Link></div>
    </section>
  </>
}
