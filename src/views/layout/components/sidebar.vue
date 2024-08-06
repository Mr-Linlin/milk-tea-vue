<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import {
  HelpFilled,ChromeFilled
} from '@element-plus/icons-vue';

/*路由模块开始*/
const globalStore = useGlobalStore();
let { defaultActive,isCollapse,menus } = storeToRefs(globalStore);
const router = useRouter();
const iconMap: Record<string, typeof HelpFilled> = {
  HelpFilled,
  ChromeFilled,
};
const handleOpen = (path:string)=>{
  defaultActive.value = path
  router.push(path)
}
/*路由模块结束*/
</script>

<template>
<div class="sidebar" :style="{width: isCollapse?'60px':'200px'}">
 <div class="logo flex justify-center mx-2 py-2 items-center">
   <img src="~@/assets/images/logo.png" alt="" width="40px" height="40px">
  <span v-if="!isCollapse" class="brand-name ml-2 text-2xl">茶道云端</span>
 </div>
  <div class="menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo custom-menu"
      :collapse="isCollapse"
      background-color="#111827"
      text-color="#8aa3af"
      active-text-color="#fffff2"
    >
      <template v-for="(menu) in menus" >
        <el-menu-item v-if="!menu.children" @click="handleOpen(menu.path)" :index="menu.path" >
          <component class="w-5 h-5 mr-2" :is="iconMap[menu.icon]" />
          <span>{{menu.name}}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="menu.path">
          <template #title>
            <component class="w-5 h-5 mr-2" :is="iconMap[menu.icon]" />
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(item) in menu.children" :key="item.path">
              <el-menu-item @click="handleOpen(item.path)" :index="item.path" >{{item.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-sub-menu>
      </template>

    </el-menu>
  </div>
</div>
</template>

<style scoped lang="less">
.sidebar{
  width: 200px;
  background-color: rgb(17, 24, 39);
  overflow-x: hidden;
  color: rgb(156 163 175);
  font-weight: 600;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .logo{
    .brand-name {
      font-family: 'Pacifico', cursive; /* 使用复古字体 */
      font-size: 24px; /* 字体大小 */
      color: #ffffff; /* 字体颜色为白色 */
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
      margin-left: 8px; /* 左边距 */
      transition: color 0.3s, text-shadow 0.3s; /* 颜色渐变和阴影过渡 */
      cursor: pointer;
    }
    .brand-name:hover {
      color: #00bfff; /* 鼠标悬停时字体颜色为亮蓝色 */
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* 悬停时增加阴影 */
    }
  }
  }
.el-menu-vertical-demo{
  border-right: 1px;
}
.el-menu-item-group__title{
  padding: 0 !important;
}
.el-menu-item:hover {
  background-color: #1f2937;
  color:#fffff2 ;
}
</style>
