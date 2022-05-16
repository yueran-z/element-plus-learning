<template>
  <el-table v-bind="$attrs">
    <slot />
  </el-table>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  }
};
</script>
————————————————
版权声明：本文为CSDN博主「九段刀客」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_35958891/article/details/102685825