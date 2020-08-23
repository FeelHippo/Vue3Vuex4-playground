import http from '../http-common';
import { Article } from '../store';

class DataService {
    getLatest(params: Array<string>): Promise<Array<Article>> {
        let locale = params[0],
            category = params[1];
        const URL_API = `/top-headlines?country=${locale}${category.length && category !== 'category' ? `&category=${category}` : ''}`;
        return http.get(URL_API).then(response => {
            return response.data.articles;
        })
    }

    search(params: Array<string>): Promise<Array<Article>> {
        let q = params[0],
            from = params[1];
            const URL_API = `/everything?q=+${q}&from=${from}`;
        return http.get(URL_API).then(response => {
            return response.data.articles[0];
        })
    }
}

export default new DataService();