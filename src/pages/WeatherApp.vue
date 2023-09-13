<template>
  <!-- Código abaixo abre a pagina começando com  organização em COLUNAS -flex column- -->
  <q-layout view="lHh Lpr lFf">
    <!-- Resto do conteúdo do layout -->
    <q-page-container>
      <q-page class="flex column" :class="bgClass">
        <!-- Alinhamento na parte superior em telas grandres /  Alinhamento horizontal em tela média -->
        <div class="col q-pt-lg q-px-md">
          <!-- Campo de texto personalizável para fazer a busca do método de Busca por Nome na API -->
          <!-- DARK -> permite que o campo seja definido para campos escuros, alterando suas próprias cores -->
          <q-input
            v-model="search"
            @keyup.enter="getWeatherBySearch"
            label="Procure aqui"
            dark
            borderless
          >
            <!-- Faz com que o ícone apareça antes do campo de texto -->
            <template v-slot:prepend>
              <!-- -->
              <q-btn
                @click="redirectToHome()"
                round
                dense
                flat
                icon="arrow_back"
              />

              <q-icon name="place" />
            </template>
            <!-- Faz com que o ícone apareça após o campo de texto -->
            <template v-slot:append>
              <!-- No clique do botão / Icone da LUPA, ele ativa o METODO de busca -->
              <q-btn
                @click="getWeatherBySearch"
                round
                dense
                flat
                icon="search"
              />
            </template>
          </q-input>
        </div>
        <!-- Verificação se existe dados do Tempo Existentes. Se existe, vai colocar os dados de NOME, TEMPERATURA, DESCRIÇÃO DO TEMPO na tela -->
        <template v-if="weatherData">
          <div class="col text-white text-center">
            <div class="text-h3 text-weight-light">{{ weatherData.name }}</div>
            <div class="text-h6 text-weight-light maiuscula">
              {{ weatherData.weather[0].description }}
            </div>
            <!-- Temperatura em celsius sendo arredondada para valor inteiro -->
            <div class="text-h1 text-weight-thin q-my-lg relative-position">
              <span>{{ Math.round(weatherData.main.temp) }}</span>
              <!-- Simbolo de Graus com um C posicionado ao topo da DIV  -->
              <span class="text-h4 relative-position degree">&deg;C</span>
            </div>
          </div>
          <!-- Imagem sendo buscada pela API, onde mostra o tipo de tempo no local informado -->
          <div class="col text-center">
            <img
              :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
            />
          </div>
        </template>
        <!-- Caso NÃO exista dados do tempo. Uma tela padrão para instruir o usuário no que fazer -->
        <template v-else>
          <!-- Colocação e colocaração do texto pre-definidos de acordo com o fundo previamente escolhido -->
          <div class="col column text-center text-white">
            <div class="col text-h2 text-weight-thin">
              Tempo HOJE<br />
              <div class="col text-h6 text-weight-thin alinha">by BMSantos</div>
            </div>
          </div>
          <!-- Pega sua localização de acordo com a API padrão do QUASAR -->
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
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue';
</script>
<script>
import axios from 'axios';
export default {
  name: 'WeatherApp',
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
  computed: {
    bgClass() {
      if (this.weatherData) {
        if (this.weatherData.weather[0].icon.endsWith('n')) {
          return 'bg-night';
        } else {
          return 'bg-day';
        }
      } else return 'bg-normal';
    },
  },
  methods: {
    redirectToHome() {
      this.$q.loading.show();

      // Remover a classe de fundo da WeatherApp
      this.bgClass = 'bg-homepage';

      // Redirecionar o usuário para a Homepage após um curto período
      setTimeout(() => {
        this.$router.push('/');
        this.$q.loading.hide();
      }, 100);
    },

    getLocation() {
      this.$q.loading.show();
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeatherByCoords();
      });
    },
    getWeatherByCoords() {
      this.$q.loading.show();
      axios
        .get(
          `${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&appid=${this.apiID}&lang=${this.lang}&units=metric`
        )
        .then((response) => {
          this.weatherData = response.data;
          this.$q.loading.hide();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getWeatherBySearch() {
      this.$q.loading.show();
      axios
        .get(
          `${this.apiUrl}?q=${this.search}&lang=${this.lang}&appid=${this.apiID}&units=metric`
        )
        .then((response) => {
          console.log('response: ', response.data);
          this.weatherData = response.data;
          this.$q.loading.hide();
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
  &.bg-normal
    background: linear-gradient(to top, #73c8a9, #373b44)
  &.bg-night
    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364)
  &.bg-day
       background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)
.degree
  top: -42px
.citybg
  flex: 0 0 100px
  background: url(../assets/silhouette2.png) center
  background-position: center bottom
  background-size: contain
  background-repeat: repeat-x // Evita repetição vertical



.maiuscula
  text-transform: capitalize
</style>
