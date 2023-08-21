import axios from "axios";

const api_url = 'http://2.59.156.122:8000';

export const FilterApi = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
