
import React,{useState} from "react";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";

const App=()=>{
  
     const [movies,setMovies] = useState("");
   
    return(

        <div>
            <MovieList setMovies={setMovies} />
            <MovieDisplay movies={movies} />
        </div>
    )
}
 export default App;


