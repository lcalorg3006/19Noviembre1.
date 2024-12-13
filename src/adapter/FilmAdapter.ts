import { Config } from "../config/Config";
import ResultMovie from "../config/entities/ResultMovie";
//error
import { movieMapper } from "../config/mapper/movieMapper";
import { resultMovieMapper } from "../config/mapper/resultMovieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";


interface DataMovieRequest {
    total: number;
    page: number;
}

export class FilmAdapter {
//define las rutas disponibles
    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies(route: string, {total, page}:DataMovieRequest): Promise<ResultMovie | null> {
        //crea una instancia de la http utilizando la factoria
        const http = HttpFactory2.build();
        //si la ruta no es balida se establece la ruta por defecto
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        // realiza la solicitud para obtener las peliculas
        const movies = await http.getFilms(route);
        // si se produce un error devuelve null
        if (movies instanceof HttpError) return null;
        //  mapea los datos de las peliculas
        const dataMovies = resultMovieMapper(movies);
        //devuelve los datos mapeados
        return dataMovies;
    }
}