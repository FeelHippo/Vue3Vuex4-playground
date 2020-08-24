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

    search(params: string): Promise<Article> {
        let parsed_params = (<string>params).split('-');
        let from = parsed_params[0] + parsed_params[1] + parsed_params[2],
            q = parsed_params[3]; // this is because the API does not provide a search by id option...
        const URL_API = `/everything?q=+${q}&from=${from}`;
        return http.get(URL_API).then(response => {
            console.log(response);
            
            return response.data.articles[0];
        })
    }
}

export default new DataService();