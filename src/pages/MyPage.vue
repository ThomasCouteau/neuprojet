<template>
  <q-page>
    <h4 class="text-h4 text-center">Ma page</h4>
    <SliderProject />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SliderProject from "components/SliderProject.vue";

export default defineComponent({
  name: "MyPage",
  components: {
    SliderProject,
  },
});
</script>
