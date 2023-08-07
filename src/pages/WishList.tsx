import { MovieCard } from "../components/MovieCard"
import { useWishList } from "../hooks/WishList"
import * as Styles from "../styles/pages/Wishlist"

export function WishList() {

  const { wishlist, isMovieInWishList, handleAddOrRemoveMovieOnWishlist } = useWishList()

  return (
    <Styles.Container>
      <h1>Minha lista  ({wishlist.length})</h1>

      <div className="cards">
        {wishlist.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            inWishlist={ isMovieInWishList(movie.id) }
            handleAddMovieOnWishlist={() => handleAddOrRemoveMovieOnWishlist(movie)}
            className="card"
          />
        ))}
      </div>
    </Styles.Container>
  )
}