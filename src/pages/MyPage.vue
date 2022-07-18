<template>
  <q-page>
    <BtnConf />
    <SliderProject />

    <q-card
      class="my-card relative-position"
      style="
        width: 70%;
        height: auto;
        margin: auto;
        margin-bottom: 3vh;
        padding-bottom: 2vh;
        background-color: rgba(0, 0, 0, 0.1);
        max-width: 400px;
      "
    >
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Les technologies que j'ai déjà utilisées :</div>
      </q-card-section>
      <input
        type="text"
        placeholder="Rechercher une techno..."
        v-model="search"
        style="width: 70%; height: 5vh; margin-bottom: 3vh; margin-top: 2vh"
      />
      <div v-for="techno in filteredTechno" :key="techno.id">
        <MyPost :techno="techno"></MyPost>
      </div>
    </q-card>
    <ChatCard />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SliderProject from "components/SliderProject.vue";
import BtnConf from "components/BtnConf.vue";
import ChatCard from "components/ChatCard.vue";
import MyPost from "src/components/MyPost.vue";

export default defineComponent({
  name: "MyPage",
  components: {
    SliderProject,
    BtnConf,
    ChatCard,
    MyPost,
  },
  data() {
    return {
      search: "",
      technos: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "Javascript",
        },
        {
          id: 4,
          name: "ReactJS",
        },
        {
          id: 5,
          name: "PHP",
        },
        {
          id: 6,
          name: "MySQL",
        },
        {
          id: 7,
          name: "CodeIgniter4",
        },
        {
          id: 8,
          name: "Python",
        },
        {
          id: 9,
          name: "C++",
        },
        {
          id: 9,
          name: "VueJS 3",
        },
      ],
    };
  },
  computed: {
    filteredTechno() {
      return this.technos.filter((techno) =>
        techno.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
});
</script>
