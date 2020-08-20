<template>
    <section>
        <Select ui_element="categories" store_element="category" />
        <Select ui_element="locales" store_element="country" />
        <BaseSearch />
        <Reset /> 
        <Ok />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseSearch from './base-search.vue';
import Reset from './base-reset.vue';
import Ok from './base-ok.vue';
import Select from './base-select.vue';

export default defineComponent ({
    name: 'Navbar',
    components: {
        BaseSearch,
        Reset,
        Ok,
        Select,
    },
});
</script>

<style lang="scss">
    
</style>