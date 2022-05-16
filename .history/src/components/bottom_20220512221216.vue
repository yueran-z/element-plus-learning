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
