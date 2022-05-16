.<template>
  <el-menu
  :>
<el-menu-item></el-menu-item>
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
    }
}
</script>

<style>

</style>