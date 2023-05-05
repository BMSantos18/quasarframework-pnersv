<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input v-model="search" label="Procure aqui" dark borderless>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="search" />
        </template>
      </q-input>
    </div>

    <div class="col text-white text-center">
      <div class="text-h4 text-weight-light">Realengo</div>
      <div class="text-h6 text-weight-light">Nublado</div>
      <div class="text-h1 text-weight-thin q-my-lg relative-position">
        <span>24</span>
        <span class="text-h4 relative-position degree">&deg;</span>
      </div>
    </div>

    <div class="col citybg">
      <q-img
        class="my-image"
        src="../assets/silhouette2.png"
        alt="Silhueta cidade BG"
        :style="{
          'background-size': 'contain',
          'background-position': 'center',
          bottom: '-23px',
        }"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const search = ref('');
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to top, #73c8a9, #373b44)
.degree
  top: -42px
.my-image
  width: 100%
</style>
