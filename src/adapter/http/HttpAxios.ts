import axios from "axios";
import { MoviesResponse } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";



export class HttpAxios extends Http {
    //implementacion del metodo abstracto para obtener la peliculas de la api
    async getFilms(route: string): Promise<MoviesResponse | HttpError> {
        try {
            //realiza la solicitud get utilizando axios y esperar 
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}`);
            return data;// devuelve la repuesta
        } catch(error) {
            // muestra el error 
            return new HttpError(`${error}`);
        }
    }
}