import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div>
            <Link href='/'>
                <Image src='./next.svg' alt='my logo' width={150} height={40}/>
            </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default Header