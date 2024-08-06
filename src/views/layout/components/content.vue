<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
const globalStore = useGlobalStore();
const { isCollapse } = storeToRefs(globalStore);
</script>

<template>
<div class="content" :style="{marginLeft:isCollapse?'60px':'200px'}">
  <router-view/>
</div>
</template>

<style scoped>
.content {
  padding: 10px;
  margin-top: 63px; /* space for header */
  overflow: auto;
  height: 100%;
}
</style>
