import { useEffect, useState } from "react";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";
import { Movie } from "../config/entities/Movie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie>({
        total: 0,
        page: 0,
        movies: <Movie[]>[]
    });
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Página actual

    const loadMovies = async (page: number) => {
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, { total: nowPlaying.total, page });
        if (movies != null) {
            setNowPlaying(prev => ({
                ...movies,
                movies: [...prev.movies, ...movies.movies] // Agregar películas nuevas a las existentes
            }));
            setLoading(false);
        }
    }

    const loadNextPage = () => {
        setCurrentPage(prev => prev + 1); // Incrementar la página actual
    }

    useEffect(() => {
        loadMovies(currentPage); // Cargar películas de la página actual
    }, [currentPage]);

    return {
        nowPlaying,
        loading,
        loadNextPage // Retornar la función para cargar la siguiente página
    }
}