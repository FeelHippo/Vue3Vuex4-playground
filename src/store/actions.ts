import { ActionTree, ActionContext } from 'vuex';
import { State, Article } from './index';
import { ActionTypes } from './action-types';
import { Mutations } from './mutations';
import { MutationTypes } from './mutation-types';
import DataService from '../services/DataService';

type AugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ) : ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.GET_ARTICLE] (
        { commit }: AugmentedActionContext,
        payload: Array<string>,
    ): Promise<Article[]>;
    [ActionTypes.GET_DETAIL] (
        { commit }: AugmentedActionContext,
        payload: string,
    ): Promise<Article>
    [ActionTypes.UPDATE_SEARCH] (
        { commit }: AugmentedActionContext,
        payload: string,
    ): Promise<string>;
    [ActionTypes.UPDATE_GEO] (
        { commit }: AugmentedActionContext,
        payload: string,
    ): Promise<string>;
    [ActionTypes.UPDATE_CATEGORY] (
        { commit }: AugmentedActionContext,
        payload: string,
    ): Promise<string>
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GET_ARTICLE]({ commit }, payload) {
        return new Promise((resolve) => {            
            // API CALL
            DataService.getLatest(payload)
                .then(data => {
                    commit(MutationTypes.FETCH_NEWS, data)
                    resolve(data)
                })
        })
    },
    [ActionTypes.GET_DETAIL]({ commit }, payload) {
        return new Promise((resolve) => {
            DataService.search(payload)
                .then(data => {
                    commit(MutationTypes.FETCH_DETAIL, data)
                    resolve(data)
                })
        })
    },
    [ActionTypes.UPDATE_SEARCH]({ commit }, payload) {
        return new Promise((resolve) => {
            commit(MutationTypes.UPDATE_FIELD, payload)
            resolve(payload)
        })
    },
    [ActionTypes.UPDATE_GEO]({ commit }, payload) {
        return new Promise((resolve) => {
            commit(MutationTypes.UPDATE_COUNTRY, payload)
            resolve(payload)
        })
    },
    [ActionTypes.UPDATE_CATEGORY]({ commit }, payload) {
        return new Promise((resolve) => {
            commit(MutationTypes.UPDATE_TOPIC, payload)
            resolve(payload)
        })
    },
}