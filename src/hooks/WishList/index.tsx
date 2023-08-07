import { createContext, useContext, useState} from "react";
import {
  IWishlistContextData,
  IMovieProps,
  IWishlistProviderprops,
} from "./types"

export const WishlistContext = createContext({} as IWishlistContextData)

export function WishlistProvider(props:IWishlistProviderprops): JSX.Element {

  const [wishlist, setWishlist] = useState<IMovieProps[]>(() => {
    return JSON.parse(localStorage.getItem('wishlist') || '[]')
  })

  function isMovieInWishList(movieId: number): boolean  {
    const movieFound = wishlist.find((wishlistFilm) => wishlistFilm.id === movieId)
    return !!movieFound
  }

  function handleAddOrRemoveMovieOnWishlist(movie: IMovieProps) {
    if (isMovieInWishList(movie.id)) {
      const filteredWishlist = wishlist.filter(
        (wishlistFilm) => wishlistFilm.id !== movie.id
      )
  
      setWishlist(filteredWishlist)
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist))
  
      return
    }
  
    setWishlist((prevState) => [...prevState, movie])
    localStorage.setItem("wishlist", JSON.stringify([...wishlist, movie]))
  }
 

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        handleAddOrRemoveMovieOnWishlist, 
        isMovieInWishList
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  )
 }

 export function useWishList(): IWishlistContextData {
    const context = useContext(WishlistContext)

    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider")
    }

    return context
 }