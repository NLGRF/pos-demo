// config baseUrl axios

import axios from "axios";

export const httpClient = axios.create({
    baseURL: "https://my.domain.xyz/api",
});
