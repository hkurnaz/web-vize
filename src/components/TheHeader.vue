<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div>
          <q-avatar :size="'md'"><img src="photo/turkcell.png" /></q-avatar>
          <a href="/" style="text-decoration: none; color: grey"
            >turkcell.com.tr</a
          >
        </div>
      </v-col>

      <v-col align="right">
        <div class="text-black">
          <v-row>
            <v-col
              ><a href="" style="text-decoration: none; color: grey"
                >Favorilerim</a
              ></v-col
            >&nbsp;
            <v-col
              ><a href="" style="text-decoration: none; color: grey"
                >Kampanyalar</a
              ></v-col
            >&nbsp;
            <v-col
              ><a href="" style="text-decoration: none; color: grey"
                >Yardım</a
              ></v-col
            >&nbsp;
            <v-col
              ><a href="" style="text-decoration: none; color: grey"
                >Neden Pasaj?</a
              ></v-col
            >&nbsp;
            <v-col
              ><a href="" style="text-decoration: none; color: grey"
                >Pasaj Blog</a
              ></v-col
            >&nbsp;
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row style="display: flex">
      <v-col
        ><a href="">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png?17735349480651"
            width="131"
            height="55"
          /> </a
      ></v-col>
      <v-col style="margin-left: 20px; margin-top: 10px"><SearchBar /></v-col>
      <v-col><LoginButton /></v-col>
      <v-col style="margin-top: 15px"
        ><q-btn
          style="background: #ffc900; color: rgb(0, 0, 0)"
          label="Sepet"
        ></q-btn
      ></v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row style="display: flex">
      <v-col> <div class="color-change">Cep Telefonu Akseuarı</div></v-col>
      <v-col> <div class="color-change">Bilgisayar-Tablet</div></v-col>
      <v-col> <div class="color-change">Elektirkli Ev Aletleri</div></v-col>
      <v-col> <div class="color-change">Beyaz Eşya</div></v-col>
      <v-col> <div class="color-change">Sağlık-Kişisel Bakım</div></v-col>
      <v-col> <div class="color-change">Hobi-Oyun</div></v-col>
      <v-col> <div class="color-change">TV-Ses Sistemleri</div></v-col>
      <v-col> <div class="color-change">Ev-Yaşam</div></v-col>
      <v-col> <div class="color-change">Anne-Bebek-Oyuncak</div></v-col>
    </v-row>
  </v-container>
  <HomeCarousel />
</template>

<script setup>
import SearchBar from 'components/SearchBar.vue';
import LoginButton from 'components/LoginButton.vue';
import HomeCarousel from 'components/HomeCarousel.vue';
</script>

<style>
.color-change:hover {
  color: #ffc900;
  transition: color 0.3s ease;
}
</style>
