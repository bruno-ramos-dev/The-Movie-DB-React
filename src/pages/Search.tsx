import { useEffect, useState } from 'react'
import api from '../services/api'
import { useSearchParams } from 'react-router-dom'
import * as Styles from '../styles/pages/Search'
import { MovieCard } from '../components/MovieCard'

export function Search() {

    const [keyword] = useSearchParams()

    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get("/search/movie", {
            params: {
                query: keyword.get("keyword"), 
                include_adults: false
            }
        }).then(response => {
            setMovies(response.data.results)
        })
    }, [keyword.get("keyword")])

    return (
        <Styles.Container>
            <section id="movies">
                <h3>{movies.length} resultado{movies.length > 1 ? 's' : ''} encontrado{movies.length > 1 ? 's' : ''}</h3>
                <div className="cards">
                    {
                        movies.map((movie) => (
                            <MovieCard 
                                key={movie.id} 
                                movie={movie} 
                                className="card"
                            />
                        ))
                    }
                </div>
            </section>
        </Styles.Container>
    )
}