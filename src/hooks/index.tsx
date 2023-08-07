import { ToastContainer } from "react-toastify"
import { IAppProviderProps } from "../interfaces/AppProvider"
import { WishlistProvider } from "./WishList"
import { GlobalStyles } from "../styles/globals"

export function AppProvider(props: IAppProviderProps) {
  return (
    <WishlistProvider>
      <GlobalStyles />
      <ToastContainer />
  
      {props.children}
    </WishlistProvider>
  )
}