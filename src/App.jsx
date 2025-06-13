import { useEffect, useState } from "react";
import Search from "./components/search";
import Spinner from "./components/spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}
const App = () => {
    const [searchTerm,setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading,setIsLoading] = useState(false)

    const fetchMovies = async (query='') => {
        setIsLoading(true);
        setErrorMessage('');

        try{
            const endpoint = query 
            ? `{API_BASE_URL}/search/movie/query=${encodeURIComponent(query)}`
            :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint,API_OPTIONS)
            
            if(!response.ok){
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();
            if(data.Response == 'false'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
        } catch(error){
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later');
        } finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchMovies(searchTerm);
      }, [searchTerm]); //whenever the searchTerm changes fetchMovies will be called thats why we add the dependency array
    
    return ( 
        <main>
            <div className="pattern"/>
            <div className="wrapper">
             <header>
                <img src="./hero-img.png" alt="Hero Banner" />
                <h1>Discover <span className="text-gradient">Movies</span> You'll Love-Effortlessly</h1>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
             </header>
             <section className="all-movies">
                <h2 className="mt-[40px]">All Movies</h2>

                {isLoading ? (
                    <p className="text-white"><Spinner /></p>
                ) : errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                ) : (
                    <ul>
                    {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                    </ul>
                )}
             </section>
            </div>
        </main>
     );
}
 
export default App;

//when you reload the page the component will get re-rendered and the state 
//will return to its initial value
//hooks are special functions that allow us to tap into react features like state management

