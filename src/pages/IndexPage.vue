<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input v-model="search" label="Procure aqui" dark borderless>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-btn @click="getLocation" round dense flat icon="search" />
        </template>
      </q-input>
    </div>
    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light">Realengo</div>
        <div class="text-h6 text-weight-light">Nublado</div>
        <div class="text-h1 text-weight-thin q-my-lg relative-position">
          <span>24</span>
          <span class="text-h4 relative-position degree">&deg;</span>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="col column text-center text-white">
        <div class="col text-h2 text-weight-thin">
          Tempo HOJE<br />
          <div class="col text-h6 text-weight-thin alinha">by BMSantos</div>
        </div>
      </div>
      <q-btn
        @click="getLocation"
        square
        color="black"
        icon="my_location"
        label="Onde estou?"
      />
    </template>

    <div class="col citybg"></div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
</script>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      search: '',
      weatherData: null,
    };
  },
  methods: {
    getLocation() {
      console.log('getLocation');
    },
  },
};
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to top, #73c8a9, #373b44)

.degree
  top: -42px

.citybg
  background: url(../assets/silhouette2.png) no-repeat center bottom
  z-index: 999
  background-size: contain
  background-attachment: fixed
</style>
