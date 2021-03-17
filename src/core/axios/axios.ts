import axios from "axios";
import {DefaultAxiosConfig} from "../configs/axiosConfig";
import {AxiosConfig} from "../entities/axiosConfig";
import {addInterceptor} from "./interceptors/interceptor";

export const getAxiosClient = (config: AxiosConfig) => {
    const instance = axios.create(config.axios);
    addInterceptor(instance, config);
    return instance;
}
export default getAxiosClient(DefaultAxiosConfig);
