import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State, Article } from './index';

export type Mutations<S = State> = {
    [MutationTypes.SET_LOADING](state: S, payload: boolean): void,
    [MutationTypes.UPDATE_FIELD](state: S, payload: string): string,
    [MutationTypes.UPDATE_COUNTRY](state: S, payload: string): string,
    [MutationTypes.UPDATE_TOPIC](state: S, payload: string): string,
    [MutationTypes.FETCH_NEWS](state: S, payload: Array<Article>): Array<Article>,
    [MutationTypes.REMOVE_FAV](state: S, payload: Article): Array<Article>,
    [MutationTypes.ADD_FAV](state: S, payload: Article): Array<Article>,
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_LOADING](state, payload: boolean) {
        state.loading = payload
        return state
    },
    [MutationTypes.UPDATE_FIELD](state, payload: string) {
        state.user_input = payload
        return state.user_input
    },
    [MutationTypes.UPDATE_COUNTRY](state, payload: string) {
        state.country = payload
        return state.country
    },
    [MutationTypes.UPDATE_TOPIC](state, payload: string) {
        state.category = payload
        return state.category
    },
    [MutationTypes.FETCH_NEWS](state, payload: Array<Article>) {
        state.data = payload
        return state.data
    },
    [MutationTypes.REMOVE_FAV](state, payload: Article) {
        state.data = [payload]
        return state.data
    },
    [MutationTypes.ADD_FAV](state, payload: Article) {
        state.data = [payload]
        return state.data
    }
}