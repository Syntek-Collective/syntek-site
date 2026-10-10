import {Link} from 'react-router-dom'
import {Orbit} from '../components/StudioElements.jsx'
export default function NotFound(){return <section className="container page-intro not-found"><div><p className="meta">404 / Page not found</p><h1>Page not <em>found.</em></h1><p>This wasn’t the kind of discovery we had in mind.</p><Link className="button" to="/">Back to home ↗</Link></div><Orbit/></section>}
