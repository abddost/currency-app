import HttpClient from "../utils/HttpClient";

export const list = (query: any) => {
  return HttpClient.doGet("/currencies", query);
};

export const convert = (query: any) => {
  return HttpClient.doGet("/latest?", query);
};
