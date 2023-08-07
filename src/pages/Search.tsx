import { useEffect, useState } from 'react'
import api from '../services/api'
import { useSearchParams } from 'react-router-dom'
import * as Styles from '../styles/pages/Search'
import { MovieCard } from '../components/MovieCard'
import { Loading } from '../components/Loading'
import { useWishList } from '../hooks/WishList'
import { IMovieRequestProps } from '../interfaces/Movie'

export function Search() {

    const { isMovieInWishList, handleAddOrRemoveMovieOnWishlist } = useWishList()
    const [isLoading, setIsLoading] = useState(true)
    const [keyword] = useSearchParams()
    const [movies, setMovies] = useState<IMovieRequestProps[]>([])

    useEffect(() => {
        api.get("/search/movie", {
            params: {
                query: keyword.get("keyword"), 
                include_adults: false
            }
        }).then(response => {
            setMovies(response.data.results)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [keyword.get("keyword")])

    return (
        <Styles.Container>
            <section id="movies">
                <h3>{movies.length} resultado{movies.length > 1 ? 's' : ''} encontrado{movies.length > 1 ? 's' : ''}</h3>
                <div className="cards">
                    { isLoading ? (
                        <Loading />
                    ) : (
                        movies.map((movie) => (
                            <MovieCard 
                                key={movie?.id} 
                                movie={movie}
                                inWishlist={ isMovieInWishList(movie.id) }
                                handleAddMovieOnWishlist={() => handleAddOrRemoveMovieOnWishlist(movie)} 
                                className="card"
                            />
                        ))
                    )}
                </div>
            </section>
        </Styles.Container>
    )
}