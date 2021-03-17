import { BatchingConfig } from "./batchingConfig"

type BaseAxiosConfig = {
    baseURL: string;
}

export type AxiosConfig = {
    axios: BaseAxiosConfig;
    batching: BatchingConfig;
}