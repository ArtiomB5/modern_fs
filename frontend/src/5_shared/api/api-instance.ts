import axios, { AxiosError } from "axios";
import { AxiosRequestConfig } from './../../../node_modules/axios/index.d';

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        'Content-Type': 'application/json',
    }   
});

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options
    }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;