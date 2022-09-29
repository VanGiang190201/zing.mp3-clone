import axios from 'axios';

const request = axios.create({
    baseURL: 'https://zing-mp3-api.vercel.app/api',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
