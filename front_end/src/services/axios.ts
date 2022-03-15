import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'painel.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3001/api",
  });

  if (token) {
    api.defaults.headers['authorization'] = `Bearer ${token}`
  };

  return api;
}