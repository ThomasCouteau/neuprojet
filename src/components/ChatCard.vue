<template>
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
    <q-card-section class="bg-teal text-white">
      <div class="text-h6">Chat <q-icon name="mark_chat_unread" /></div>
      <div class="text-subtitle2">Thomas Couteau</div>
    </q-card-section>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          avatar="https://avatars.githubusercontent.com/u/85634434?s=400&u=3a25e0fc895b7e989f252c761f99b566d7a40785&v=4"
          :text="['Bonjour ! Que puis-je faire pour vous ?']"
          sent
          bg-color="info"
        />
        <q-chat-message
          avatar="https://assets.justacote.com/photos_entreprises_250/neu-jkf-delta-neu-les-sorinieres-les-sorinieres-61f0febbc67e4.png"
          :text="['Bonjour...']"
          bg-color="secondary"
        />
      </div>
    </div>
    <q-input
      style="margin-top: 5vh"
      rounded
      outlined
      v-model="text"
      label="Aa"
    />
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatCard",
});
</script>
