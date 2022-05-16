.<template>
  <el-menu
  :default-active="activeIndex"
  :router="true"
   class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
<el-menu-item :route="{name: 'home'}"></el-menu-item>
<el-button @click="openDrawer" type="primary" style="margin-left: 16px;"></el-button>
  </el-menu>
</template>

<script>
export default {
    props:{
        openDrawer: function
    },
    data(){
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key,keyPath){
            onsole.log(key, keyPath)
        }
    },
}
</script>

<style>

</style>