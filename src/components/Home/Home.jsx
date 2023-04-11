import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies()
    }, [])

    async function getTrendingMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=1c76d8cad246ccd99e5b58258055a6ad`)
        console.log(data.results);
        setTrendingMovies(data.results)
    }

    return (
        <>
            <div className="row">
                {trendingMovies.map((movie, index) => <div className="col-md-4 col-lg-3">
                    <div className="movie">
                        <h4>{movie.title} </h4>
                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Image is not Found" />
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Home



