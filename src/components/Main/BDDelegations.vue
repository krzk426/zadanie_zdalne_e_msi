<template>
  <div class="delegations">
    <table>
      <tr>
        <th>{{ getString("BDDDelegations", "h1") }}</th>
        <th>{{ getString("BDDDelegations", "h2") }}</th>
        <th>{{ getString("BDDDelegations", "h3") }}</th>
        <th>{{ getString("BDDDelegations", "h4") }}</th>
        <th>{{ getString("BDDDelegations", "h5") }}</th>
        <th>{{ getString("BDDDelegations", "h6") }}</th>
      </tr>
      <tr v-for="(elem, index) in delegations" :key="index">
        <td>{{ elem.lp }}</td>
        <td>{{ elem.imieNazwisko }}</td>
        <td>{{ elem.dataOd }}</td>
        <td>{{ elem.dataDo }}</td>
        <td>{{ elem.miejsceWyjazdu }}</td>
        <td>{{ elem.miejscePrzyjazdu }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "Delegation",
  data() {
    return {
      delegations: [],
    };
  },
  methods: {
    getString,
  },
  created() {
    this.$http
      .get("delegacje.json")
      .then((response) => response.json())
      .then((data) => {
        let list = [];
        for (let key in data) {
          list.push({
            ...data[key],
            id: key,
          });
        }
        this.delegations = list;
      });
  },
};
</script>

<style scoped>
.delegations {
  display: flex;
  justify-content: center;
}
table {
  padding: 30px;
}
td {
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td:hover {
  background-color: #5a5b68;
}
th {
  padding: 20px;
  text-align: center;
}
tr {
  background-color: #c9c9cf;
  text-align: center;
}
</style>
