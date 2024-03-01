import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './MovieCard.css'

const MovieCard = (curElem) => {

    const{id,type,title,synopsis}=curElem.jawSummary;

  return (
    <>
        
            <div className='card'>
                <div className='card_image'>
                    <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={150} height={100} loading='lazy' />
                </div>
                <div className='card_data'>
                    <h2>{title}</h2>
                    <p>
                        {synopsis.substring(0,66)}<span>...</span>
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>                
                    </Link>
                </div>
            </div>
        
    </>
  )
}

export default MovieCard