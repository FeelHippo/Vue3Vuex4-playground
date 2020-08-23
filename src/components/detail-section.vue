<template>
    <p class="w-auto ">Hello!</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ActionTypes } from '../store/action-types';

export default defineComponent ({
    name: 'Detail',
    setup () {
        const store = useStore();
        const router = useRouter();
        const { params: { id } } = router.currentRoute.value;
        
        onMounted(() => {
            let parsed_params = (<string>id).split("-");
            store.dispatch(ActionTypes.GET_DETAIL, parsed_params);
        })
    },
})
</script>