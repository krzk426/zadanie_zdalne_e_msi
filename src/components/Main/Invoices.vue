<template>
  <div class="invoices">
    <div>
      <table>
        <tr>
          <th>{{ getString("Invoices", "h1") }}</th>
          <th>{{ getString("Invoices", "h2") }}</th>
          <th>{{ getString("Invoices", "h3") }}</th>
          <th>{{ getString("Invoices", "h4") }}</th>
          <th>{{ getString("Invoices", "h5") }}</th>
          <th>{{ getString("Invoices", "h6") }}</th>
          <th>{{ getString("Invoices", "h7") }}</th>
          <th>{{ getString("Invoices", "h8") }}</th>
          <th>{{ getString("Invoices", "h9") }}</th>
        </tr>
        <tr
          v-for="(elem, index) in data"
          :key="index"
          :style="[changeRowsColor && elem.netto > 1000 ? greenStyle : '']"
        >
          <td>{{ index }}</td>
          <td>{{ elem.opis }}</td>
          <td>{{ elem.mpk }}</td>
          <td>{{ elem.netto }}</td>
          <td>{{ elem.ilosc }}</td>
          <td>{{ vat }}</td>
          <td>{{ getBrutto(elem.netto) }}</td>
          <td>{{ getNettoAmount(elem.netto, elem.ilosc) }}</td>
          <td>{{ getBruttoAmount(elem.netto, elem.ilosc) }}</td>
        </tr>
      </table>

      <div class="button" @click="changeColor">{{ colorRows }}</div>
    </div>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "Invoices",
  props: ["vat"],
  data() {
    return {
      data: [
        {
          opis: "linia produkcyjna",
          mpk: "hurtownia",
          netto: 1000,
          ilosc: 2,
        },
        {
          opis: "maszyna",
          mpk: "dział A",
          netto: 1900,
          ilosc: 5,
        },
        {
          opis: "telewizja",
          mpk: "biura",
          netto: 100,
          ilosc: 1,
        },
        {
          opis: "internet",
          mpk: "dział C",
          netto: 70,
          ilosc: 3,
        },
        {
          opis: "internet",
          mpk: "biura",
          netto: 900,
          ilosc: 13,
        },
      ],
      colorRows: " Powyżej 1000,00 zł Netto",
      changeRowsColor: false,
    };
  },
  methods: {
    getString,
    getBrutto(val) {
      if (this.vat != "NP." && this.vat != "ZW") {
        var cntr = this.vat.substr(0, this.vat.indexOf("%")) * 0.01 + 1;
        return (val * cntr).toFixed(2);
      } else {
        return val.toFixed(2);
      }
    },
    getBruttoAmount(val, amount) {
      return (this.getBrutto(val) * amount).toFixed(2);
    },
    getNettoAmount(val, amount) {
      return (val * amount).toFixed(2);
    },
    changeColor() {
      this.changeRowsColor = !this.changeRowsColor;
    },
  },
  computed: {
    greenStyle() {
      return {
        backgroundColor: "#3cbd3c",
      };
    },
  },
};
</script>

<style scoped>
.invoices {
  margin: 50px;
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
.button {
  padding: 15px;
  background-color: #444554;
  width: 300px;
  border-radius: 15px;
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 20px;
}

.button:hover {
  background-color: #83130f;
  cursor: pointer;
}
</style>
