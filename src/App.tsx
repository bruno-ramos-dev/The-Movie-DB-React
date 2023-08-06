import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globals"
import { theme } from "./styles/theme"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
      <h1>The Movie DB</h1>
    </ThemeProvider>
  )
}

export default App
