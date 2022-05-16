<template>
  <div id="app">
    <TopNav :openDrawer="openDrawer" />
    <el-main> 
      <router-view></router-view>
    </el-main>
    <el-drawer
    :visible.sync="drawer"
    :with-header="false"
    ></el-drawer>
  </div>
</template>

<script>
import TopNav from "@TopNav.vue"
export default {
  name: "App",
  components: {
    // TopNav
  },
  data(){
    return {
      drawer: false,
    }
  },
  methods:{
    openDrawer(){
      this.drawer = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
