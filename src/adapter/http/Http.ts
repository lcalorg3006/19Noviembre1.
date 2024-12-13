import { MoviesResponse } from "../../config/Responses/dataMovies";
import { HttpError } from "./HttpError";

interface Config {
    url_base : string;// url base para las consultas 
    key: string; // clave para autenticar la API
}
// interfaz que devuelve una promesa con las peliculas o con el error
export interface IFilms {
    getFilms(route : string) : Promise<MoviesResponse | HttpError>;
}

export abstract class Http implements IFilms {
    protected url_base: string;
    protected key: string;
// inicializa las propiedades url_base y key a partir del objeto de configuración
    constructor({ url_base, key} : Config) {
        this.url_base = url_base;
        this.key = key;
    }
    // metodo abstracto que debe ser implementa en las subclases para obtener las peliculas
    abstract getFilms(route: string) : Promise<MoviesResponse | HttpError> ;
}