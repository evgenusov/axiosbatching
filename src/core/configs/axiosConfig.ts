import {AxiosConfig} from "../entities/axiosConfig";
import {DefaultBatchingConfig} from "./batchingConfig";

export const DefaultAxiosConfig: AxiosConfig = {
    axios: {
        baseURL: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
    },
    batching: DefaultBatchingConfig
}