<template>
  <div>
    <h3>Página inicial</h3>
    <q-btn color="primary" label="Weather App" @click="redirecionar" />
  </div>
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
