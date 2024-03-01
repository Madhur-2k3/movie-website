import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
   <>
     <div>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find the requested resources</p>
        <Link href='./'>
            <button>
                Go to Home Page
            </button>
        </Link>
    </div>
   </>
  )
}

export default NotFound