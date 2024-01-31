import { useEffect, useState } from "react";
import './Movies.css'

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
const Movies = () => {
    const [movies,setMovies]=useState([])
   
    







    useEffect(()=>{


      fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res=>res.json())
      .then(data=>setMovies(data))
  
  
  
  },[])

console.log(movies)

    return (
        <div>
           <p className="text-center md:text-2xl my-8">Here Our Movies List</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-6 my-6 gap-6">
                {
                    movies.map((movie,idx)=><div key={idx} className="card zoom-image  w-full bg-slate-500 shadow-xl">
                    <figure><img src={movie?.show?.image?.medium} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{movie?.show?.name}</h2>
                    

                     <div className="">
                        <p className="text-slate-300">RunTime:{movie?.show?.runtime}</p>
                        <p className="text-slate-300">Language:{movie?.show?.language}</p>
                        <p className="text-slate-300">premiered:{movie?.show?.premiered }</p>

                     </div>
                      <div className="card-actions justify-end">
                      <Link to={`/detail/${movie?.show?.id}`} className="flex items-center relative w-36 border-2 border-sky-500 text-sky-500 p-4 rounded-lg group"><span>See More</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></Link>
                      </div>
                    </div>
                  </div> )
                }
            </div>


        </div>
    );
};

export default Movies;