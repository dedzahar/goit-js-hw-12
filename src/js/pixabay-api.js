import axios from "axios";
const fetchFromPixabay = async (searchStr, page = 1) => {
    const API_KEY = "43468244-0e08b5bd3673b3a8f95726aef";
    const url = "https://pixabay.com/api/";

    const params = {
        key: API_KEY,
        q: searchStr,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page
    };

    const response = await axios({ url, params });
    return response.data;

};

export default fetchFromPixabay;