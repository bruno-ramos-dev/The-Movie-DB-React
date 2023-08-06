import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}