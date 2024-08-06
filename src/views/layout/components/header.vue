<script setup lang="ts">
import { Expand, Fold, ArrowDownBold } from '@element-plus/icons-vue';
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
const globalStore = useGlobalStore();
const { isCollapse, userInfo } = storeToRefs(globalStore);
const signOut = globalStore.signOut;
const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'signOut':
      signOut();
      break;
  }
};
</script>

<template>
  <div
    class="header justify-between"
    :style="{
      left: isCollapse ? '60px' : '200px',
      paddingRight: isCollapse ? '90px' : '230px',
    }"
  >
    <div class="collapse-box flex items-center">
      <el-icon
        size="28"
        @click="isCollapse = !isCollapse"
        class="cursor-pointer"
      >
        <Expand v-if="isCollapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <div class="user-info flex items-center">
      <el-avatar shape="circle" :size="40" :src="userInfo.url" />
      <el-dropdown @command="handleCommand">
        <div
          class="el-dropdown-link font-bold ml-4 cursor-pointer flex items-center"
        >
          {{ userInfo.userName }}
          <el-icon class="el-icon--right"><ArrowDownBold /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">主题设置</el-dropdown-item>
            <el-dropdown-item command="signOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 63px;
  position: fixed;
  line-height: 63px;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
</style>
