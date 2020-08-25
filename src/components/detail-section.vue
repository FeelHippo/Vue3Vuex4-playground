<template>
    <section class="fixed px-4 py-48 mx-4">
        <h1 class="w-auto font-semibold">{{ searchResult.title }}</h1>
        <h3 class="w-auto italic">{{ searchResult.author }}</h3>
        <h4>{{ searchResult.description }}</h4>
        <h6>{{ searchResult.content }}</h6>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ActionTypes } from '../store/action-types';

export default defineComponent ({
    name: 'Detail',
    setup () {
        const store = useStore();
        const router = useRouter();
        const { params: { id } } = router.currentRoute.value;
        const searchResult = computed(() => store.state.detail)

        onMounted(() => {
            store.dispatch(ActionTypes.GET_DETAIL, id);
        })

        watch(ref(id), () => {
            store.dispatch(ActionTypes.GET_DETAIL, id);
        })
        
        return { searchResult }
    },
})
</script>