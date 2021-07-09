import axios, { AxiosError, AxiosResponse } from "axios";

function success<T = any>(res: AxiosResponse<T>) {
  return res.data;
}

function fail(e: AxiosError) {
  console.log(e.response);
}

export function get(url: string, params?: any, data?: any) {
  return axios
    .get(url, {
      params,
      data,
    })
    .then(success)
    .catch(fail);
}

export function post(url: string, params?: any, data?: any) {
  return axios
    .post(url, {
      params,
      data,
    })
    .then(success)
    .catch(fail);
}

export function remove(url: string, params?: any, data?: any) {
  return axios
    .delete(url, {
      params,
      data,
    })
    .then(success)
    .catch(fail);
}

export function put(url: string, params?: any, data?: any) {
  return axios
    .put(url, {
      params,
      data,
    })
    .then(success)
    .catch(fail);
}
