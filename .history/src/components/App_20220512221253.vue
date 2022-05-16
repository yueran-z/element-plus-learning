<template>
  <div>
    <e-test :data="tableData" border>
      <el-table-column label="名字" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </e-test>
  </div>
</template>

<script>
import eTest from "./bo.vue";
export default {
  name: "Menu2",
  components: { eTest },
  data() {
    return {
      tableData: [{ name: "tom1", age: 22 }, { name: "tom2", age: 33 }]
    };
  }
};
</script>
