<template>
    <div class="select-container text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1">
        <div class="relative" v-click-outside-select="closeDropdown">
            <span class="inline-block w-full rounded-md shadow-sm">
                <button 
                    type="button" 
                    @click="openDropdown" 
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    class="selectButton cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                    <div class="flex items-center space-x-3">
                        <span class="block truncate w-full">
                            {{ value }}
                        </span>
                    </div>
                </button>
            </span>

            <div
                v-show="isOpen"
                class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
                <ul
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                    class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                >
                    <li
                        tabindex="0"
                        @click="select(element)"
                        id="listbox-item-0"
                        role="option"
                        v-for="element in elements"
                        v-bind:key="element"
                        class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                    >
                        <div class="flex items-center space-x-3">
                            <span
                                class="block truncate"
                                v-bind:class="{
                                    'font-normal': !isSelected(element),
                                    'font-semibold': isSelected(element) 
                                }"
                            >
                                {{ element }}
                            </span>
                        </div> 

                        <span
                            v-show="isSelected(element)"
                            class="absolute inset-y-0 right-0 flex items-center pr-4"
                        >
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                        </span>  
                    </li>  
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/action-types';

export default defineComponent ({
    props: {
        ui_element: String, 
        store_element: String
    },
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {
        value() {
            return this.$store.state[this.store_element]
        },
        elements() {
            return this.$store.state[this.ui_element]
        }
    },
    methods: {
        isSelected(value) {
            return this.$store.state.country === value;
        },
        closeDropdown() {
            this.isOpen = false;
        },
        openDropdown() {
            this.isOpen = true;
        },
        select(value) {
            this.isOpen = false;
            this.$store.dispatch(this.store_element === "country" ? ActionTypes.UPDATE_GEO : ActionTypes.UPDATE_CATEGORY, value)
        }
    },
    directives: {
        "click-outside-select": {
            beforeMount: function(el, binding) {
                const clickEventHandler = event => {
                    // console.log('AAAAAA', 
                    //     'Element:', el, 
                    //     'Event', event.target,
                    //     'Binding', binding)
                    if (!el.contains(event.target) && el !== event.target) {
                        binding.value(event);
                    }
                }

                el.__vueClickEventHandler__ = clickEventHandler;

                document.addEventListener('click', clickEventHandler);
            },
            unmounted: function(el) {
                document.removeEventListener('click', el.__vueClickEventHandler__)
            }
        }
    }
})
</script>

<style lang="scss">
    .select-container, .selectButton {
        width: 9rem;
        padding: 0 !important;
    }
</style>