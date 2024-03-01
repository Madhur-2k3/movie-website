import React from 'react'
import Link from 'next/link'
import MovieCard from '../Components/MovieCard';
import { resolve } from 'styled-jsx/css';

const Movie= async()=> {

  await new Promise(resolve=>setTimeout(resolve,2000));

  const url = process.env.RAPID_KEY;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b3838691c0msh1c4cfc8c3e60284p103a5djsnce23ac222205',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

  const res=await fetch(url,options);
  const data=await res.json();
  const main_data=data.titles;
  console.log(main_data.jawSummary)

  return (
    <>

      <div>
        <h1>Series and Movies</h1>
        <div className='cards'>
        {
            main_data.map((curElem)=>{
              return <MovieCard key={curElem.id} {...curElem}/>
            })
          }
        </div>
          
      </div>
        
    </>
  )
}

export default Movie