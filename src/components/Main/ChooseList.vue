<template>
  <div>
    <div class="nextTo">
      <List
        :title="getString('ChooseList', 'title')"
        :items="items"
        v-on:vat="newVat($event)"
      />
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { getString } from "../../locale/string";

export default {
  components: { List },

  name: "ChooseList",
  data() {
    return {
      items: [
        {
          action: "mdi-palette",
          active: true,
          items: [
            { title: "zielony" },
            { title: "niebieski" },
            { title: "szary" },
            { title: "turkusowy" },
            { title: "granatowy" },
            { title: "czerwony" },
            { title: "biały" },
          ],
          title: "KOLORY",
        },
        {
          action: "mdi-wallet",
          active: true,
          items: [
            { title: "ZW" },
            { title: "NP." },
            { title: "0%" },
            { title: "3%" },
            { title: "8%" },
            { title: "23%" },
          ],
          title: "VAT",
        },
      ],
    };
  },
  methods: {
    getString,
    newVat(val) {
      this.$emit("vat", val);
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
}
</style>
