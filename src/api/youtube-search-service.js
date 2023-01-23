import axios from "axios"
import { settings } from "../utils/settings";
import authHeader from "./auth-header";


const searchUrl = settings.youtubeSearch.apiUrl;
const searchKey = settings.youtubeSearch.apiKey;
const searchHost = settings.youtubeSearch.host;

export const searchVideos = (query) => {
    return axios.get(`${searchUrl}/search?query=${query}`, {
        headers: authHeader(searchKey, searchHost)
    })
}