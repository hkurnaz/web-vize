<template>
  <div class="search-bar-wrapper">
    <q-toolbar class="bg-grey-3 rounded-borders">
      <q-avatar><img src="photo/searchi.png" /></q-avatar>
      <q-input
        dense
        standout
        v-model="text"
        class=""
        placeholder="Ürün, marka veya kategori ara"
        @click="toggleOverlay"
      ></q-input>
    </q-toolbar>

    <!-- Overlay (açılır katman) -->
    <div v-if="showOverlay" class="overlay bg-grey-3">
      <!-- İçerikler -->
      <div class="text-grey-6">Sana Özel Kategoriler</div>
      <div>
        <b-container>
          &nbsp;
          <b-row>
            <b-col
              ><q-btn class="overlay-content">TLC Televizyonlar</q-btn></b-col
            >
            &nbsp;
            <b-col
              ><q-btn class="overlay-content">0 Faiz 10.000 TL</q-btn></b-col
            >
            &nbsp;
            <b-col
              ><q-btn class="overlay-content">Aksesuar Fırsatları</q-btn></b-col
            >
            &nbsp;
            <b-col
              ><q-btn class="overlay-content"
                >Faturaya Ek Telefonlar</q-btn
              ></b-col
            >
          </b-row>
        </b-container>
        &nbsp;
      </div>
      &nbsp;
      <div class="bg-white">
        &nbsp;
        <div class="text-grey-6">Popüler Aramalar</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showOverlay = ref(false);
const text = ref('');

const toggleOverlay = () => {
  showOverlay.value = !showOverlay.value;
};
</script>

<style scoped>
/* Overlay için stillendirme */
.search-bar-wrapper {
  position: relative;
  width: 700px;
  max-width: 100%;
}

.overlay {
  position: absolute;
  top: calc(100%);
  left: 0;
  width: 100%;
  background-color: rgba(184, 184, 184, 0.267);
  z-index: 999;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background-color: white;
  padding: 5px;
  border-radius: 20px;
  position: relative;
}
</style>
