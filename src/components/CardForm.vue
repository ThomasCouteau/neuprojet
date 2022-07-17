<template>
  <q-card class="my-card">
    <q-card-section>
      <h3 class="text-h3 text-center">Inscription</h3>
      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row">
            <q-input
              class="col"
              style="margin-right: 2vh"
              filled
              v-model="nom"
              label="Votre nom..."
              hint="Nom"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Veuillez entrer votre nom',
              ]"
            />
            <q-input
              class="col"
              filled
              v-model="prenom"
              label="Votre prénom..."
              hint="Prénom"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Veuillez entrer votre prénom',
              ]"
            />
          </div>

          <q-input
            filled
            v-model="adresse"
            label="Votre adresse..."
            hint="Adresse"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Veuillez entrer votre adresse',
            ]"
          />
          <div class="pays">
            <select
              style="
                width: 70%;
                height: 6vh;
                background: rgba(0, 0, 0, 0.05);
                color: rgba(0, 0, 0, 0.87);
                border-radius: 5px;
              "
              name="ISO-Pays"
              v-model="paysISO"
            >
              <option value="Veuillez renseigner votre pays...">
                Veuillez renseigner votre pays...
              </option>
              <option :key="index" v-for="(pays, index) in pays">
                {{ pays.alpha2Code }} - {{ pays.translations.fr }}
              </option>
            </select>
          </div>

          <div class="phone row">
            <select
              class="col-2"
              style="
                width: 20%;
                height: 7.75vh;
                background: rgba(0, 0, 0, 0.05);
                color: rgba(0, 0, 0, 0.87);
                border-radius: 5px;
              "
              name="callingCode"
              v-model="callingCode"
            >
              <option>+...</option>
              <option :key="index" v-for="(pays, index) in pays">
                +{{ pays.callingCodes[0] }}
              </option>
            </select>

            <q-input
              class="col-9"
              filled
              v-model="phone"
              label="Votre numéro..."
              hint="Téléphone"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Veuillez entrer votre numéro de téléphone',
              ]"
            />
          </div>
          <q-toggle v-model="accept" label="J'accepte la licence" />
          <div>
            <q-btn label="CONFIRMER" type="submit" color="primary" />
            <q-btn
              label="ANNULER"
              type="reset"
              color="negative"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";

export default defineComponent({
  name: "CardForm",
  data() {
    return {
      pays: null,
    };
  },
  mounted() {
    axios.get("https://restcountries.com/v2/all").then((reponse) => {
      this.pays = reponse.data;
      console.log(this.pays);
    });
  },
  setup() {
    const $q = useQuasar();

    const nom = ref(null);
    const prenom = ref(null);
    const adresse = ref(null);
    const paysISO = ref("Veuillez renseigner votre pays...");
    const phone = ref(null);
    const callingCode = ref("+...");
    const accept = ref(false);

    return {
      nom,
      prenom,
      adresse,
      paysISO,
      phone,
      callingCode,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Vous devez accepter la licence",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Envoyé !",
          });
        }
      },

      onReset() {
        nom.value = null;
        prenom.value = null;
        adresse.value = null;
        paysISO.value = "Veuillez renseigner votre pays...";
        phone.value = null;
        callingCode.value = "+...";
        accept.value = false;
      },
    };
  },
});
</script>
