复制代码
<template>
  <section>
    <centers
      name="name"
      age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    ></centers>
  </section>
</template>
<script>
  import centers from '~/components/center';
  export default {
    components: {
      centers
    },
    methods: {
      asd() {
        console.log(999);
      },
      isClick() {
        console.log(666);
      }
    }
  };
</script>