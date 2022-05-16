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
                <el-input placeholder="Name" v-model="inputs[i]" ></el-input>
              <el-input
              type="textarea"
              placeholder="Description"
              v-model="textareas[i]"
              maxlength="30"
              show-word-limit
            />
             </div>   
            </el-card>   
        </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      cards: [...Array(10).keys]
    }
  }

}
</script>

<style>

</style>