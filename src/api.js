import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7183/Api",
});

export default api;