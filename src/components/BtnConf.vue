<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      push
      @click="showConfetti"
      style="background: linear-gradient(#a8c0ff, #3f2b96); color: white"
      label="CLIQUEZ SUR MOI !"
    >
      <q-popup-proxy>
        <q-banner>
          J'espère que ce site simple vous plaira. J'ai beaucoup apprécié
          utiliser le framework, il est très pratique ! J'espère que vous
          constaterez mon envie et ma motivation pour travailler au sein de
          votre entreprise.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

export default defineComponent({
  name: "BtnConf",
  mounted() {
    this.showConfetti();
  },
  methods: {
    showConfetti() {
      confetti.addConfetti();
    },
  },
});
</script>
