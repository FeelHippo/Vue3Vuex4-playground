import { 
    createStore,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
} from 'vuex';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';

export interface Source {
    id: string,
    name: string,
}

export interface Article {
    source: {
        [key: string]: Source
    },
    title: string,
    description: string,
    url: string,
    author: string,
    urlToImage: string | null,
    content: string,
    publishedAt: string,
}

export type State = { 
    loading: boolean,
    user_input: string,
    country: string,
    category: string,
    data: Array<Article>, 
    locales: Array<string>,
    categories: Array<string>
};

const state: State = {
    loading: false,
    user_input: '',
    country: 'us',
    category: 'category',
    data: [],
    locales: [
        'us',
        'gb',
        'it',
    ],
    categories: [
        'business',
        'entertainment', 
        'general', 
        'health', 
        'science',
        'sports',
        'technology',
    ]
}

export const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export type Store = Omit<
    VuexStore<State>,
    'getters' | 'commit' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

export function useStore() {
    return store as Store;
}
