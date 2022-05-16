.<template>
  <el-row>
    <el-col :span="12" :offset="6">
        <el-table
        :data="tableData"
        style="width: 100%"
        class="grid-content"
        >
        <el-table-column
            header-align="center"
            align="center"
            prop="prop"
            label="label" />
        
        </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>