<template>
  <section>
    <div class="mt-10">
      <bottom v-bind="$attrs" v-on="$listeners" />
    </div>
  </section>
</template>

<script>
  import bottom from '~/components/bottom';
  export default {
    components: {
      bottom
    },
    props: {
      age: {
        type: String,
        default: 'default'
      }
    }
  };
</script>