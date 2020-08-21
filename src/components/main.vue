<template>
    <section
        class="flex-row mt-16"
    >
        <Cards />
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

<style lang="scss">
    
</style>