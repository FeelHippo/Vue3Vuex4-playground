<template>
    <section>
        <article class="w-2/3">
            <Cards class="max-w-full flex-row mt-32"/>
        </article>
        <article class="absolute top-0 right-0 w-1/3 h-screen">
            <router-view class="flex-col"></router-view>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cards from './card-section.vue';

export default defineComponent ({
    name: 'Main',
    components: {
        Cards
    },
});
</script>
