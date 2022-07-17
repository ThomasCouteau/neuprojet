<template>
  <div
    class="q-pa-md"
    style="width: 70%; height: auto; margin: auto; margin-top: 30px"
  >
    <q-carousel
      infinite
      :autoplay="15000"
      arrows
      animated
      v-model="slide"
      widht="300vh"
      height="70vh"
    >
      <q-carousel-slide name="first" img-src="~assets/portfolio.png">
        <div
          class="absolute-bottom custom-caption"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <div class="text-h4" style="color: white">Mon portfolio</div>
          <div class="text-body1" style="color: white">
            Développé en HTML, CSS et Javascript. Je l'utilise pour y mettre les
            projets que je réalise.
          </div>
          <a
            class="text-subtitle1"
            style="color: #31ccec; text-decoration: none"
            href="https://portfolio-thomas.couteau.it/"
            >https://portfolio-thomas.couteau.it/</a
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/StudioLumen.png">
        <div
          class="absolute-bottom custom-caption"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <div class="text-h4" style="color: white">StudioLumen</div>
          <div class="text-body1" style="color: white">
            Développé en HTML, CSS et Javascript. Il est utilisé pour exposer
            des photographies.
          </div>
          <a
            href="https://studiolumen.fr/"
            class="text-subtitle1"
            style="color: #31ccec; text-decoration: none"
            >https://studiolumen.fr/</a
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/EspaceSanteContact.png">
        <div
          class="absolute-bottom custom-caption"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <div class="text-h4" style="color: white">
            Site réalisé durant un stage
          </div>
          <div class="text-body1" style="color: white">
            Plateforme de contact réalisé en ReactJs. Elle est utilisée comme
            carte de contact par un cabinet.
          </div>
          <a
            href="https://contact.espacesante.fr/"
            class="text-subtitle1"
            style="color: #31ccec; text-decoration: none"
            >https://contact.espacesante.fr/</a
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourt" img-src="~assets/beautypam.png">
        <div
          class="absolute-bottom custom-caption"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <div class="text-h4" style="color: white">BeautyPam</div>
          <div class="text-body1" style="color: white">
            Développé en HTML et CSS en utilisant les "grid". Il est responsive.
            Il est utilisé comme vitrine.
          </div>
          <a
            href="https://beauty-pam.fr/"
            class="text-subtitle1"
            style="color: #31ccec; text-decoration: none"
            >https://beauty-pam.fr/</a
          >
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
      autoplay: ref(true),
    };
  },
});
</script>
