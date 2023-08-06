import { useEffect } from 'react'
import api from '../services/api'
import { useSearchParams } from 'react-router-dom'
import * as Styles from '../styles/pages/Search'

export function Search() {

    const [keyword] = useSearchParams()

    useEffect(() => {
        api.get("/search/movie", {
            params: {
                query: keyword.get("keyword"), 
                include_adults: false
            }
        }).then(response => {
            console.log(response)
        })
    }, [])

    return (
        <Styles.Container>
            <section id="movies">
                <h3>10 resultados encontrados</h3>
                <div className="cards"></div>
            </section>
        </Styles.Container>
    )
}