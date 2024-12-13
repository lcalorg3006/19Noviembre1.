import { MoviesResponse } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    // implementación del metodo abstracto para obtener las peliculas desde la API
    async getFilms(route : string): Promise<MoviesResponse | HttpError> {
        try {
            //realiza una solicitud utilizando fetch y espera 
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}`);
            // lo convierte a json
            const jsonData: MoviesResponse = await data.json();
            //devuelve
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}