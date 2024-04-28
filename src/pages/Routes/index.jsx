import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "../Pokemons";
import { Pokemon } from "../Pokemon"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Pokemons />} />
                <Route path="/pokemons/:id" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>    
    )
}