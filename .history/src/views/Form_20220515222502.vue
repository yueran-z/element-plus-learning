.<template>
  <el-row>
    <el-col :span="18" :offset="3">
        <div class="card-wrapper">
            <el-card class="box-card" v-for="(card, i) in cards" :key="i">
                <div slots="header" class="card-header">
                    <span>Add Task</span>
                    <el-button type="text">Submit</el-button>
                </div>

             <div class="text item">
               
            </el-card>   
        </div>
    </el-col>
  </el-row>

</template>

<script>
export default {

}
</script>

<style>

</style>