// import { requests } from "https";

const API_KEY = "F1d4a142fb8f8ce4a959ab87dbd3c008";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`
}



export default requests;