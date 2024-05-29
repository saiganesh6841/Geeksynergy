import { useEffect, useState } from "react";
import Navbar from "./navbar"
import axios from "axios";
import MovieList from "./movieList";




const HomePage=()=>{

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.post('https://hoblist.com/api/movieList', {
                    category: 'movies',
                    language: 'kannada',
                    genre: 'all',
                    sort: 'voting'
                });
                setMovies(response.data.result);
                console.log(response.data.result)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <>
        <Navbar/>
        <h1>Movie List</h1>
        <div className="container mt-5">
                
                <div className="row">
                    {movies.map((movie, index) => (
                        <MovieList key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default HomePage