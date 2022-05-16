<template>
  <div>
    <e-test :data="tableData" border>
      <el-table-column label="名字" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </e-test>
  </div>
</template>

<script>
import eTest from "./a.vue";
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
————————————————
版权声明：本文为CSDN博主「九段刀客」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_35958891/article/details/102685825