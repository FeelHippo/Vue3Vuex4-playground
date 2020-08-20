import { GetterTree } from 'vuex';
import { State } from './index';

export type Getters = {
    search_field(state: State): string
};

export const getters: GetterTree<State, State> & Getters = {
    search_field: (state) => {
        return state.user_input; // needs implementation, this getter doesn't do anything
    }
}