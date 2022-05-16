.<template>
  <el-row>
    <el-col :span="12" :offset="6">
        <el-table
        :data="tableData"
        style="width: 100%"
        class="grid-content"
        >
        <el-table-column
            fixed
            type="selection"
            width="55"
        />
        <el-table-column
        v-for="(col,i) in columns"
        :key="i"
        :prop="col"
        :label="col"
        width="150"
        ></el-table-column>
        
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