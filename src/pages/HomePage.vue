<template>
  <q-page class="flex column">
    <div class="text-center">
      <h3 id="text">Página inicial</h3>
    </div>
    <div class="q-ml-lg q-mr-lg">
      <q-btn
        color="primary"
        label="Weather App"
        @click="redirecionar"
        rounded
        class="q-mr-lg"
      />
      <q-btn
        color="secondary"
        label="Gestor"
        @click="redG"
        rounded
        class="q-ml-lg"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    // Método para redirecionar para outra página
    redirecionar() {
      this.$router.push('/weather-app');
    },
    redG() {
      this.$router.push('/gestor');
    },
  },
};
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to bottom, #141e30, #243b55)

#text
  color: white
</style>
