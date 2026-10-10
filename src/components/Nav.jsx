import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data/products.js'
export default function Nav(){
 const [mobile,setMobile]=useState(false),[docs,setDocs]=useState(false)
 const root=useRef(null),docsButton=useRef(null),menuButton=useRef(null)
 useEffect(()=>{ const close=e=>{if(!root.current?.contains(e.target))setDocs(false)}; const resize=()=>{if(window.innerWidth>=720)setMobile(false)}; document.addEventListener('pointerdown',close); window.addEventListener('resize',resize); return()=>{document.removeEventListener('pointerdown',close);window.removeEventListener('resize',resize)} },[])
 const items=products.filter(p=>p.doc)
 return <header onKeyDown={e=>{if(e.key==='Escape'){if(docs){setDocs(false);docsButton.current?.focus()}else{setMobile(false);menuButton.current?.focus()}}}}><nav className="container" aria-label="Main navigation"><Link className="nav-logo" to="/"><img src="/syntek/logo-no-background.png" alt="Syntek Collective" width="2172" height="724"/></Link><button ref={menuButton} className="menu-toggle meta" aria-expanded={mobile} aria-controls="nav-links" onClick={()=>setMobile(!mobile)}>{mobile?'Close −':'Menu +'}</button><div id="nav-links" className={`nav-links ${mobile?'is-open':''}`}><NavLink to="/products">Software</NavLink><div className="docs" ref={root} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setDocs(false)}}><button ref={docsButton} aria-expanded={docs} aria-controls="docs-panel" onClick={()=>setDocs(!docs)}>Docs {docs?'−':'+'}</button>{docs&&<div id="docs-panel" className="docs-panel">{items.length?<ul>{items.map(p=><li key={p.name}><a href={p.doc}>{p.name} ↗</a></li>)}</ul>:<p>Find project guidance in the repositories.<a href="https://github.com/Syntek-Collective">Explore the repositories ↗</a></p>}</div>}</div><NavLink to="/collective">The Collective</NavLink></div></nav></header>
}
