<template>
  <div>
    <div class="employeesTable">
      <table>
        <tr>
          <th>{{ getString("Employees", "h1") }}</th>
          <th>{{ getString("Employees", "h2") }}</th>
          <th>{{ getString("Employees", "h3") }}</th>
          <th>{{ getString("Employees", "h4") }}</th>
          <th>{{ getString("Employees", "h5") }}</th>
          <th>{{ getString("Employees", "h6") }}</th>
        </tr>
        <tr
          v-for="index in 6"
          :key="index"
          v-bind:style="[isEven(index) ? evenColor : notEvenRow]"
        >
          <td>{{ index }}</td>
          <td>{{ data[index - 1].name }}</td>
          <td>{{ data[index - 1].lastName }}</td>
          <td>{{ data[index - 1].position }}</td>
          <td>{{ data[index - 1].date }}</td>
          <td>{{ data[index - 1].amount }}</td>
        </tr>
      </table>
    </div>
    <PickColor
      v-on:even="color = $event"
      v-on:notEven="notEvenColor = $event"
    />
  </div>
</template>

<script>
import PickColor from "./PickColor.vue";
import { getString } from "../../locale/string";

export default {
  name: "Employees",
  data() {
    return {
      data: [
        {
          name: "Katarzyna",
          lastName: "Kulesa",
          position: "junior",
          date: "10.11.2020",
          amount: "10",
        },
        {
          name: "Joanna",
          lastName: "Maniak",
          position: "junior",
          date: "10.12.2020",
          amount: "8",
        },
        {
          name: "Maciej",
          lastName: "Kruk",
          position: "senior",
          date: "10.11.2010",
          amount: "20",
        },
        {
          name: "Lena",
          lastName: "Nowak",
          position: "junior",
          date: "10.11.2020",
          amount: "4",
        },
        {
          name: "Mikołaj",
          lastName: "Genor",
          position: "junior",
          date: "10.11.2020",
          amount: "10",
        },
        {
          name: "Wojciech",
          lastName: "Łukasik",
          position: "junior",
          date: "4.12.2020",
          amount: "10",
        },
      ],
      notEvenColor: "#444554",
      color: "#83130f",
    };
  },
  components: {
    PickColor,
  },
  methods: {
    getString,
    isEven(val) {
      return !(val % 2);
    },
  },
  computed: {
    evenColor() {
      return {
        backgroundColor: this.color,
        color: "white",
        fontWeight: 200,
      };
    },
    notEvenRow() {
      return {
        backgroundColor: this.notEvenColor,
        color: "white",
        fontWeight: 200,
      };
    },
  },
};
</script>

<style scoped>
.employeesTable {
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
