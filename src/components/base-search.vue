<template>
    <div>
        <input 
            type="text" 
            name="user_input" 
            v-model="user_input" 
            class="searchField text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
            placeholder="Search Criteria"> 
    </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/action-types';

export default defineComponent ({
    computed:{
        user_input:{
            get() {
                return this.$store.state.user_input;
            }, 
            set(update: string) {
                this.$store.dispatch(ActionTypes.UPDATE_SEARCH, update); 
            }
        }
    } 
})
</script>

<style lang="scss">
    input {
        margin-bottom: 5%;
    }

    .searchField {
        padding: 0 !important;
    }
</style>