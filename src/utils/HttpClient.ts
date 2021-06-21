import axios from "axios/index";
import { HttpConfig } from "../constants/Constants";

export default class HttpClient {
  static headers: any = {
    "Content-Type": "application/json",
  };

  /**@private*/
  static doRequest() {
    return axios.create({
      headers: {
        ...HttpClient.headers,
      },
    });
  }

  static doGet(url: string, params = {}) {
    return HttpClient.doRequest().get(makeUrl(url), { params });
  }
  static doGetBlob(url: string, params = {}) {
    return HttpClient.doRequest().get(makeUrl(url), {
      params,
      responseType: "blob",
    });
  }
  static doGetBase(url: string, params = {}) {
    return HttpClient.doRequest().get(url, { params });
  }

  static doDeleteBase(url: string, params = {}) {
    return HttpClient.doRequest().delete(url, { params });
  }

  // static doPost(url, data) {
  //     return HttpClient.doRequest().post(url, data);
  // }
  //
  //   static doPost(url: string, data: any, up = null) {
  //     return HttpClient.doRequest().post(makeUrl(url), data, up);
  //   }

  static doPut(url: string, data: any) {
    return HttpClient.doRequest().put(makeUrl(url), data);
  }

  static doDelete(url: string, params = {}) {
    return HttpClient.doRequest().delete(makeUrl(url), { params });
  }
}

function makeUrl(url: any) {
  return url.includes("http") ? url : `${HttpConfig.API_PATH}${url}`;
}

export function makeBaseUrl(url: any) {
  return url.includes("http") ? url : `${HttpConfig.BASE_URL}${url}`;
}
