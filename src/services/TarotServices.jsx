import axios from 'axios';

const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export const getAllCards = () => axios.get(API_URL);
export const getCardById = (id) => axios.get(`${API_URL}/${id}`);
