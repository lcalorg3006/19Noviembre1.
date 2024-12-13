
import { Config } from "../../config/Config";
import { Http } from "./Http";
import { HttpAxios } from "./HttpAxios";
import { HttpFetch } from "./HttpFecth";


export class HttpFactory {
    static build(): Http {
        switch (Config.moviesAPI.type) {
            // si es de tipo fetch se crea una instancia de httpFecth
            case "fetch":
                return new HttpFetch(Config.moviesAPI) as Http;
            // si es de tipo axios se crea una instancia de httpAxios

            case "axios":
                return new HttpAxios(Config.moviesAPI) as Http;
                //  sino coincide con ninguno se pone fetch
            default:
                return new HttpFetch(Config.moviesAPI) as Http;
        }
    }
}