<template>
  <q-page class="flex column" :class="bgClass">
    <div class="col q-pt-lg q-px-md">
      <q-input
        v-model="search"
        @keyup.enter="getWeatherBySearch"
        label="Procure aqui"
        dark
        borderless
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-btn @click="getWeatherBySearch" round dense flat icon="search" />
        </template>
      </q-input>
    </div>
    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h3 text-weight-light">{{ weatherData.name }}</div>
        <div class="text-h6 text-weight-light maiuscula">
          {{ weatherData.weather[0].description }}
        </div>
        <div class="text-h1 text-weight-thin q-my-lg relative-position">
          <span>{{ Math.round(weatherData.main.temp) }}</span>
          <span class="text-h4 relative-position degree">&deg;C</span>
        </div>
      </div>
      <div class="col text-center">
        <img
          :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
        />
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
import axios from 'axios';
export default {
  name: 'IndexPage',
  data() {
    return {
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
      apiID: '633908cd9a8f16838ef2880e46065870',
      lat: null,
      lon: null,
      weatherData: null,
      search: '',
      lang: 'pt_br',
    };
  },

  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeatherByCoords();
      });
    },
    getWeatherByCoords() {
      axios
        .get(
          `${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&appid=${this.apiID}&lang=${this.lang}&units=metric`
        )
        .then((response) => {
          console.log('response: ', response.data);
          this.weatherData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getWeatherBySearch() {
      axios
        .get(
          `${this.apiUrl}?q=${this.search}&lang=${this.lang}&appid=${this.apiID}&units=metric`
        )
        .then((response) => {
          console.log('response: ', response.data);
          this.weatherData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
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
  background: url(../assets/silhouette2.png) no-repeat center bottom -2px
  z-index: 999
  background-size: contain
  background-attachment: fixed
.maiuscula
  text-transform: capitalize
</style>
