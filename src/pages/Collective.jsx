import { team } from '../data/team.js'
import MemberCard from '../components/MemberCard.jsx'
import { Label } from '../components/StudioElements.jsx'
export default function Collective() {
  return (
    <section className="container wire-collective">
      <p className="meta page-eyebrow">The collective / About us</p>
      <div className="wire-about">
        <section>
          <Label number="01">Our focus</Label>
          <h1>Solving problems for developers.</h1>
          <p>
            We’re SYNTEK, a collective of software engineers building
            open-source tools. We’re interested in problems of all kinds, but
            the ones developers face are where we focus.
          </p>
        </section>
        <section>
          <Label number="02">Our approach</Label>
          <h2>Better systems, one tool at a time.</h2>
          <p>
            We identify a problem, build something useful around it, release it
            in the open, and keep iterating. Each tool is small on its own.
            Together they make the work around them a little better.
          </p>
        </section>
      </div>
      <div className="team alternating-team">
        {team.map((m, i) => (
          <MemberCard key={m.name} {...m} index={i} />
        ))}
      </div>
      <section className="wire-open">
        <h2>The code is open. Have a look.</h2>
        <p>
          Explore our code, follow the work, and build on what’s useful. Each
          project’s repository contains its own licensing terms; check its
          license before reusing or distributing code.
        </p>
        <a className="text-link" href="https://github.com/Syntek-Collective">
          Explore our GitHub ↗
        </a>
      </section>
    </section>
  )
}
