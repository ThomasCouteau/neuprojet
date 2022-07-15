<template>
  <q-page class="flex flex-center"> <CardForm /> </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CardForm from "components/CardForm.vue";

export default defineComponent({
  name: "FormPage",
  components: {
    CardForm,
  },
});
</script>
