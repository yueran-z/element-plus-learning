.<template>
  <el-menu
  :>
<el-menu-item></el-menu-item>
<el-button @click="openDrawer" type></el-button>
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
    }
}
</script>

<style>

</style>