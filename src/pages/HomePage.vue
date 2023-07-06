<template>
  <q-page class="flex column">
    <div>
      <h3>Página inicial</h3>
      <q-btn color="primary" label="Weather App" @click="redirecionar" />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    redirecionar() {
      this.$router.push('/weather-app');
    },
  },
};
</script>
<style lang="sass">
//.bgHome
  background:
</style>
