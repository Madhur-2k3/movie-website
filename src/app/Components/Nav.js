import React from 'react'
import Link from 'next/link'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <div>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/movie'>
                        Movies
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav