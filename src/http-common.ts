import axios from 'axios';

const token: string = '3816a8e8e5be4855acb47ecac262aaf5';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "Content-type": "application/json",
    },
})