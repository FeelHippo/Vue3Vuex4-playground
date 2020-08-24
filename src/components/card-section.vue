<template>
    <ul
        v-if="searchResults.length"
        id="v-for-searchResults"
        class="max-w-full"
    >
        <li
            v-for="result in searchResults"
            v-bind:key="result.source.id"
            class="max-w-full lg:flex rounded-lg mx-4 my-4"
        >
            <img
                class="h-48 lg:h-auto lg:w-48 object-cover rounded-lg" 
                :src="result.urlToImage" 
                :alt="result.title"
            >
            
            <div class="max-w-full w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ result.title }}</div>
                </div>
                <p>{{ result.description }}</p>
                <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{{ result.author }}</p>
                        <p class="text-gray-600">{{ result.publishedAt }}</p>
                    </div>
                </div>
                <router-link :to="{ path: `detail/${ result.publishedAt }-${ result.title }` }">Read More</router-link>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent ({
    name: 'Cards',
    setup () {
        const store = useStore();
        const searchResults = computed(() => store.state.data);
        
        return { searchResults }
    }
})
</script>