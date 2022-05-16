<template>
  <el-tree
    :data="data"
    node-key="id"
    default-expand-all
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
    draggable
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    show-checkbox
  >
  </el-tree>
</template>

<script>
export default {

}
</script>

<style>

</style>