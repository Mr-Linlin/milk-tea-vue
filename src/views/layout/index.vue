<template>
  <div class="layout-container">
    <sidebar/>
    <Header/>
    <content/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sidebar from './components/sidebar.vue'
import Header from './components/header.vue'
import content from './components/content.vue'

export default defineComponent({
  components: { sidebar,Header,content },
  setup() {
    return {

    };
  },
});
</script>

<style scoped>

</style>
