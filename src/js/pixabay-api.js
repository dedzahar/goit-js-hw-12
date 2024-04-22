const fetchFromPixabay = ((searchStr) => {
    const API_KEY = "43468244-0e08b5bd3673b3a8f95726aef";
    const url = "https://pixabay.com/api/";

    const params = new URLSearchParams({
        key: API_KEY,
        q: searchStr,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9,
    });

    return fetch(`${url}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
});

export default fetchFromPixabay;