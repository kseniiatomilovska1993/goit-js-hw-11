import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
// TODO: replace with your own key from https://pixabay.com/api/docs/
const API_KEY = 'YOUR_API_KEY';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
