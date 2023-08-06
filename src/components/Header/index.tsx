import { FaBars, FaHome } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import { Button } from "../Button"
import * as Styles from "./styles"
import { Link } from "../Link"
import { useNavigate } from "react-router-dom"

export function Header() {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/search?keyword=test")
  }

  return (
    <Styles.Container>
      <div>
        <Link to="/">

        <img
            src={Logo}
            alt="Logo de The Movie DB. Botão de play ao lado do texto 'The Movie DB'"
          />

        </Link>
        <Link to="/">
          <FaHome />
            Home
        </Link>
        <Link to="/wishlist">
          <FaBars />
          Minha lista
        </Link>

      </div>

      <form className="search-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquise um filme"
        />

        <Button style={{ borderRadius: "0 4px 4px 0" }} type="submit">Pesquisar</Button>
      </form>
    </Styles.Container>
  )
}
