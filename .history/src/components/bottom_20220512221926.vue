<template>
  <section>
    <div>
      {{ $attrs['name'] }}  在$attrs里面只会有props没有注册的属性
      <br>
      {{ name }}
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      gender: {
        type: String,
        default: ''
      }
    },
    mounted() {
      console.log(this.$attrs);
      console.log(this.$listeners);
      this.$listeners.isClick();
      this.$listeners.asd();
    }
  };
</script>