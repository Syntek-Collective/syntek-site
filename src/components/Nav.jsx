import { useState } from 'react'
import { products } from '../data/products.js'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <nav>
                <div className='nav-options'>
                    <NavLink to='/products'>SOFTWARE</NavLink>

                    <button onClick={()=>{setIsOpen(!isOpen)}}>DOCS</button>

                    {isOpen && (
                        <ul>
                            {products.map((product)=>(
                                <li key={product.name}><a href={product.doc}>{product.name}</a></li>
                            ))}
                        </ul>
                    )}

                    <NavLink to='/collective'>THE COLLECTIVE</NavLink>
                </div>
                <div className='logo'>
                    <Link to='/'><img src='/syntek/logo-no-background.png' alt='SYNTEK COLLECTIVE'/></Link>
                </div>
            </nav>
        </header>
    )
}