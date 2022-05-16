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
export default {
  name: "App",
  components: {},
  data(){
    return {
      drawer: false,
    }
  },
  methods:{
    openDrawer(){
      
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
