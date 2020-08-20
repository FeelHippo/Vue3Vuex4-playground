<template>
    <button 
        class="resetSearch text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" 
        type="button" 
        style="transition: all .15s ease"
        @click="resetSearch"
    >
        <svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</template>

<script>
import { defineComponent } from 'vue';
import { MutationTypes } from '../store/mutation-types';
export default defineComponent ({
    methods: {
        resetSearch() {
            this.$store.commit(MutationTypes.UPDATE_FIELD, '')
        }
    }
})
</script>

<style lang="scss">
    .resetSearch {
        padding: 0 !important;
    }
</style>