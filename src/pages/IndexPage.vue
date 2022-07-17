<template>
  <q-page class="flex flex-center">
    <input
      type="text"
      v-model="search"
      style="width: 40vh; height: 5vh; margin: auto; margin-top: 3vh"
    />
    <div class="row">
      <div
        style="margin: auto"
        class="wrap"
        :key="index"
        v-for="(breakingBadInfo, index) in filteredInfo"
      >
        <q-card
          class="my-card"
          style="width: auto; height: auto; margin: 4vh 4vh 4vh 4vh"
        >
          <q-img :src="breakingBadInfo.img">
            <div class="absolute-bottom text-h6">
              {{ breakingBadInfo.name }}
            </div>
          </q-img>
          <q-card-section id="description"
            >Surnom: {{ breakingBadInfo.nickname }} - Acteur:
            {{ breakingBadInfo.portrayed }}</q-card-section
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
  props: ["breakingBadInfo"],
  data() {
    return {
      search: "",
      breakingBad: null,
    };
  },
  // mounted() {
  //   axios
  //     .get("https://www.breakingbadapi.com/api/characters")
  //     .then((reponse) => {
  //       this.breakingBad = reponse.data;
  //       console.log(this.breakingBad);
  //     });
  // },
  async mounted() {
    try {
      let reponse = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      this.breakingBad = reponse.data;
      console.log(this.breakingBad);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    filteredInfo() {
      return this.breakingBad.filter((breakingBadInfo) =>
        breakingBadInfo.toLowerCase().includes(this.search.toLowerCase())
      );
      // setTimeout(this.filteredInfo, 1000);
    },
  },
});
</script>
