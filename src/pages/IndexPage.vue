<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div
        class="wrap"
        :key="index"
        v-for="(breakingBad, index) in breakingBad"
      >
        <q-card
          class="my-card"
          style="width: auto; height: auto; margin: 4vh 4vh 4vh 4vh"
        >
          <q-img :src="breakingBad.img">
            <div class="absolute-bottom text-h6">{{ breakingBad.name }}</div>
          </q-img>
          <q-card-section id="description"
            >Surnom: {{ breakingBad.nickname }} - Acteur:
            {{ breakingBad.portrayed }}</q-card-section
          >
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      breakingBad: null,
    };
  },
  mounted() {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((reponse) => {
        this.breakingBad = reponse.data;
        console.log(this.breakingBad);
      });
  },
});
</script>
