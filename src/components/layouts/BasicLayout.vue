<template>
  <el-container class="main2">
    <el-header><BasicHeader /></el-header>
    <el-container>
      <el-aside :width="menuWidth"
        ><SideMenu
          :isCollapse="isCollapse"
          @menuSelect="
            (item) => {
              $emit('menuSelect', item);
            }
          "
      /></el-aside>
      <el-container>
        <el-main><slot></slot></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import BasicHeader from "./BasicHeader.vue";
import SideMenu from "./SideMenu.vue";
import useBreakpoint from "@/composables/useBreakpoint";
import { computed } from "vue";
export default {
  name: "basicLayout",
  components: {
    BasicHeader,
    SideMenu,
  },
  setup() {
    const { type } = useBreakpoint();
    const isCollapse = computed(() => {
      if (type.value === "sm") return true;
      else return false;
    });
    const menuWidth = computed(() => (isCollapse.value ? "65px" : "200px"));
    return {
      isCollapse,
      menuWidth,
    };
  },
};
</script>

<style>
.el-header {
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
}
.main2 {
  height: 100%;
}
</style>
