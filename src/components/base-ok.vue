<template>
    <button 
        class="resetSearch text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1" 
        type="button" 
        style="transition: all .15s ease"
        @click="okSearch"
    >
        <svg viewBox="0 0 20 20" fill="currentColor" class="check w-6 h-6"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    </button>
</template>

<script>
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/action-types';
export default defineComponent ({
    methods: {
        okSearch() {
            this.$store.dispatch(
                ActionTypes.GET_ARTICLE, 
                [
                    this.$store.state.country, 
                    this.$store.state.category,
                ])
        }
    }
})
</script>
