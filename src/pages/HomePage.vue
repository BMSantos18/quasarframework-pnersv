<template>
  <q-page class="flex column">
    <div class="text-center">
      <h3 id="text">Página inicial</h3>
    </div>
    <div class="q-ml-lg q-mr-lg">
      <q-btn
        color="primary"
        label="Weather App"
        @click="redW"
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
    // Método para redirecionar para outra página após a conclusão da barra de progresso
    async redW() {
      // Iniciar a barra de progresso
      this.bar.start();

      // Gerar um atraso aleatório entre 1 e 5 segundos (ou ajuste conforme necessário)
      const delay = Math.random() * 3000 + 1000; // Entre 1000ms e 5000ms
      await new Promise((resolve) => setTimeout(resolve, delay));

      // Parar a barra de progresso
      this.bar.stop();

      // Aguardar um curto período adicional, se necessário
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Redirecionar para a página Weather App
      this.$router.push('/weather-app');
    },
    async redG() {
      // Iniciar a barra de progresso
      this.bar.start();

      // Gerar um atraso aleatório entre 1 e 5 segundos (ou ajuste conforme necessário)
      const delay = Math.random() * 3000 + 1000; // Entre 1000ms e 5000ms
      await new Promise((resolve) => setTimeout(resolve, delay));

      // Parar a barra de progresso
      this.bar.stop();

      // Aguardar um curto período adicional, se necessário
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Redirecionar para a página Gestor
      this.$router.push('/gestor');
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
