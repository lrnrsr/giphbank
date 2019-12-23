import axios from 'axios';
const API_KEY = 'K9XoBeN59aE1BhNELO6zHZgzdHuaBctk';
const BASE_URL = '//api.giphy.com/v1/gifs/search?';

const getGifs = async (searchTerm) => {
    try {
        return await axios({
            method: 'get',
            url: `https://${BASE_URL}api_key=${API_KEY}&q=${searchTerm}&limit=750&rating=G`,
        })
            .then(result => result.data)
    } catch (error) {
        return error;
    }
}

export default getGifs;