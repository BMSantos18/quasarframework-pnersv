<template>
  <q-page class="flex column">
    <div class="text-center">
      <h3 id="text">Página inicial</h3>
    </div>
    <div class="q-ml-lg q-mr-lg">
      <q-btn
        color="primary"
        label="Weather App"
        @click="redirectTo('/weather-app')"
        rounded
        class="q-mr-lg"
      />
      <q-btn
        color="secondary"
        label="Gestor"
        @click="redirectTo('/gestor')"
        rounded
        class="q-ml-lg"
      />
    </div>
    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  methods: {
    // Método genérico para redirecionar com barra de progresso
    async redirectTo(route) {
      this.$q.loading.show();
      this.$router.push(route);
      this.$q.loading.hide();
    },
  },
  setup() {
    const bar = ref(null);

    return {
      bar,
    };
  },
};
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to bottom, #141e30, #243b55)

#text
  color: white
</style>
