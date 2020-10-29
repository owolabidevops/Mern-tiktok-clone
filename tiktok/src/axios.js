import axios from "axios"

const instance = axios.create({
    baseURL: "https://mern-tiktok-backendd.herokuapp.com/",
});
export default instance