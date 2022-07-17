<template>
  <q-page>
    <BtnConf />
    <SliderProject />
    <ChatCard />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SliderProject from "components/SliderProject.vue";
import BtnConf from "components/BtnConf.vue";
import ChatCard from "components/ChatCard.vue";

export default defineComponent({
  name: "MyPage",
  components: {
    SliderProject,
    BtnConf,
    ChatCard,
  },
});
</script>
