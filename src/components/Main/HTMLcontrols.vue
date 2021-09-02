<template>
  <div>
    <p>
      <constractor-data />
    </p>
    <p>
      <choose-list v-on:vat="newVat($event)" />
    </p>
    <p>
      <numeric-list />
    </p>
  </div>
</template>

<script>
import ConstractorData from "./ContractorData.vue";
import ChooseList from "./ChooseList.vue";
import NumericList from "./NumericList.vue";

export default {
  components: { ConstractorData, ChooseList, NumericList },
  name: "HTMLControls",
  data() {
    return {};
  },
  methods: {
    newVat(val) {
      this.$emit("vat", val);
    },
  },
};
</script>

<style scoped></style>
