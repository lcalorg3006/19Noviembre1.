import { useEffect, useState } from "react";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";
import { Movie } from "../config/entities/Movie";

export const useMovies = () => {
    // estado para almacenar la lista de peliculas
    const [nowPlaying, setNowPlaying] = useState<ResultMovie>({
        total: 0,
        page: 0,
        movies: <Movie[]>[]
    });
    // estado para manejar el estado de carga
    const [loading, setLoading] = useState(false);
    //estado para llevar el control de la pagina actual
    const [currentPage, setCurrentPage] = useState(1); 

    const loadMovies = async (page: number) => {
        // llama a filmAdapter para obtener las peliculas de una ruta
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, { total: nowPlaying.total, page });
        // si hay peliculas actualiza el estado
        if (movies != null) {
            setNowPlaying(prev => ({
                ...movies, // mantiene los dato 
                movies: [...prev.movies, ...movies.movies] // Agregar películas nuevas a las existentes
            }));
            //cambia el estado a false
            setLoading(false);
        }
    }

    const loadNextPage = () => {
        setCurrentPage(prev => prev + 1); // Aumenta la página actual
    }

//se ejecuta cada vez que camvie la pagina actual
    useEffect(() => {
        loadMovies(currentPage); 
    }, [currentPage]);

    return {
        nowPlaying,
        loading,
        loadNextPage 
    }
}