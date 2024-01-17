import React from "react";


const MovieDisplay=({movies})=>{


    return(
        <div>
           {
            movies!=="" && (
           <div className="movieDisplay">
           <div>
            <h1>MovieDetails:</h1>
            {
                movies.banner && <img src={movies.banner} alt={movies.title} />
            }
             <p>{movies.title}</p>
             <p>{movies.actor}</p>
             <p>{movies.genre}</p>
           </div>
           </div>
            )
           }
           
    
    </div>
    )
         
        
    
    
}

export default MovieDisplay;