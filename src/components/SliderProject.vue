<template>
  <div class="q-pa-md absolute-center" style="width: 70%; height: auto">
    <q-carousel arrows animated v-model="slide" widht="120vh" height="70vh">
      <q-carousel-slide name="first" img-src="~assets/portfolio.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Mon portfolio</div>
          <div class="text-subtitle1">https://portfolio-thomas.couteau.it/</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/StudioLumen.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">StudioLumen</div>
          <div class="text-subtitle1">https://studiolumen.fr/</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/EspaceSanteContact.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Site réalisé durant un stage</div>
          <div class="text-subtitle1">https://contact.espacesante.fr/</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourt" img-src="~assets/beautypam.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">BeautyPam</div>
          <div class="text-subtitle1">https://beauty-pam.fr/</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SliderProject",
  setup() {
    return {
      slide: ref("first"),
    };
  },
});
</script>
