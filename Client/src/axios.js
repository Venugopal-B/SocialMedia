import axios from "axios";

export const makeRequest= axios.create({
    baseURL:"https://social-media-server-inky.vercel.app/api/",
    withCredentials:true,
});