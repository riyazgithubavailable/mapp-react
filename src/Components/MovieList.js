import React from "react";

import moviesData from "../Data/moviesData";

const MovieList=({setMovies})=>{



    return(
           <div>
            <div className="movieList">
              {
                moviesData.map((item,index)=>(
                    <p onClick={()=>setMovies(item)}
                    key={index}>{item.title}</p>
                ))
              }
            </div>
           </div>
 
    )
}

export default MovieList;