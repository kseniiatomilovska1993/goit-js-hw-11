import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26446637-6b2024f1e83459fb5ae31c9ee';

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
