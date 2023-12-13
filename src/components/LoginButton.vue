<template>
  <div>
    <div class="q-pa-md">
      <q-btn-dropdown color="white" label="Giriş Yap" text-color="black">
        <v-container>
          <v-row style="display: flex">
            <v-col>
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/login-image.png"
              />
              <div
                style="font-size: x-large; color: #253342; font-weight: bold"
              >
                Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!
              </div>
              <div style="color: #525d69">
                Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok
                ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı
                limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz
                ürünler için bilgilendirmelerden, siparişlerinizle ilgili tüm
                işlemlere ve daha da fazlasına kolaylıkla erişim
                sağlayabilirsiniz.
              </div>
            </v-col>
            <v-col>
              <div
                style="font-size: x-large; color: #253342; font-weight: bold"
              >
                Giriş
              </div>
              <div style="color: #525d69">
                Size özel ödeme avantajları ve size özel tekliflerden
                faydalanmak için Giriş Yap/Üye Ol seçeneği ile devam
                edebilirsiniz.
              </div>
              <q-btn
                block
                style="background: #ffc900; color: rgb(0, 0, 0)"
                label="Giriş Yap / Üye Ol"
              ></q-btn>
            </v-col>
          </v-row>
        </v-container>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
</script>
