<template>
  <div 
    id="app"
    class="flex-col"  
  >
    <Navbar 
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="child-nav fixed flex w-full bg-white border-b items-center justify-center flex-wrap p-5 m-auto top-0 duration-300"
      style="transition: all .15s ease"
    />
    <Main />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from './store/index';
// import { ActionTypes } from './store/action-types';
import Navbar from './components/navbar.vue';
import Main from './components/main.vue';

export default defineComponent ({
  name: 'App',
  components: {
    Navbar,
    Main,
  },
  setup() {
    const store = useStore();
    const search = computed(() => store.state);
    return { search }
  },
  data () {
    return {
        view: {
          atTopOfPage: true,
        }
    }
  },
  beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
        if(window.pageYOffset>0){
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        } else {
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
  }
})
</script>

<style lang="scss">
#app {
  max-width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}

.child-nav {
  z-index: 10;
}

.child-nav.scrolled {
  -webkit-box-shadow: 0 25px 50px -12px black;
	-moz-box-shadow: 0 25px 50px -12px black;
	box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
  border-bottom: 0px;
}
</style>
