<template>
  <article style="padding: auto">{{ techno.name }}</article>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyPost",
  props: ["techno"],
});
</script>
