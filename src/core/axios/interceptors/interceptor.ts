import {AxiosInstance} from 'axios';
import {AxiosConfig} from '../../entities/axiosConfig';
import {BatchingConfig} from '../../entities/batchingConfig';

let PENDING_REQUESTS = 0;

const batchingInterceptors = (instance: AxiosInstance, config: BatchingConfig) => {
    instance.interceptors.request.use(request => {
        return new Promise((resolve) => {
            let interval = setInterval(() => {
                if (PENDING_REQUESTS < config.maxConcurrentRequests) {
                    PENDING_REQUESTS++
                    clearInterval(interval)
                    resolve(request)
                }
            }, config.intervalBetweenRequests)
        })

    }, error => Promise.reject(error));


    instance.interceptors.response.use(function (response) {
        PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
        return Promise.resolve(response)
    }, function (error) {
        PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
        return Promise.reject(error);
    });
}

export function addInterceptor(instance: AxiosInstance, config: AxiosConfig) {
    batchingInterceptors(instance, config.batching);
}