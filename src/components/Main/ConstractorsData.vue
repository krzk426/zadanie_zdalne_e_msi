<template>
  <div class="contractors">
    <div>
      <table>
        <tr>
          <th></th>
          <th>{{ getString("ConstractorsData", "h1") }}</th>
          <th>{{ getString("ConstractorsData", "h2") }}</th>
          <th>{{ getString("ConstractorsData", "h3") }}</th>
          <th>{{ getString("ConstractorsData", "h4") }}</th>
          <th>{{ getString("ConstractorsData", "h5") }}</th>
          <th>{{ getString("ConstractorsData", "h6") }}</th>
          <th>{{ getString("ConstractorsData", "h7") }}</th>
        </tr>
        <tr v-for="(elem, index) in contractors" :key="index">
          <td class="edit">
            <v-icon
              class="icon"
              color="red darken-2"
              @click="deleteAccount(index)"
            >
              mdi-delete
            </v-icon>
            <v-icon
              class="icon"
              color="green darken-2"
              @click="editAccount(index)"
            >
              mdi-account-edit
            </v-icon>
          </td>
          <td>{{ elem.nip }}</td>
          <td>{{ elem.regon }}</td>
          <td>{{ elem.nazwa }}</td>
          <td>{{ elem.czyVat ? "tak" : "nie" }}</td>
          <td>{{ elem.ulica }}</td>
          <td>{{ elem.numerDomu }}</td>
          <td>{{ elem.numerMieszkania }}</td>
        </tr>
      </table>

      <div class="title" v-if="addUser">
        {{ getString("ConstractorsData", "newUser") }}
      </div>
      <div class="title" v-else>
        {{ getString("ConstractorsData", "editUserLabel") }}
      </div>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="nip"
          :counter="10"
          :rules="nipRules"
          :label="getString('ConstractorsData', 'h1')"
          required
        ></v-text-field>
        <v-text-field
          v-model="regon"
          :rules="regonRules"
          :label="getString('ConstractorsData', 'h2')"
          required
        ></v-text-field>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :label="getString('ConstractorsData', 'h3')"
          required
        ></v-text-field>
        <v-checkbox
          v-model="ifVat"
          :label="getString('ConstractorsData', 'h4')"
        ></v-checkbox>
        <v-text-field
          v-model="street"
          :rules="streetRules"
          :label="getString('ConstractorsData', 'h5')"
          required
        ></v-text-field>
        <v-text-field
          v-model="streetNumber"
          :rules="homeRules"
          :label="getString('ConstractorsData', 'h6')"
          required
        ></v-text-field>
        <v-text-field
          v-model="flatNumber"
          :label="getString('ConstractorsData', 'h7')"
        ></v-text-field>
        <v-btn class="mr-4" @click="submit" v-if="addUser">
          {{ getString("ConstractorsData", "add") }}
        </v-btn>
        <v-btn class="mr-4" @click="submit" v-else>
          {{ getString("ConstractorsData", "editUser") }}
        </v-btn>
        <v-btn @click="clear">
          {{ getString("ConstractorsData", "clearData") }}
        </v-btn>
      </v-form>
    </div>
    <div class="button" @click="addUserIcon">+</div>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "Constractors",
  data() {
    return {
      valid: false,
      contractors: [],
      name: "",
      nip: "",
      regon: "",
      ifVat: false,
      addUser: true,
      street: "",
      streetNumber: "",
      flatNumber: "",
      newContractor: {
        nip: "",
        regon: "",
        czyVat: false,
        ulica: "",
        numerDomu: "",
        numerMieszkania: "",
        active: true,
      },
      nipRules: [
        (v) => !!v || getString("ConstractorsData", "nipRequired"),
        (v) => v.length == 10 || getString("ConstractorsData", "nipError"),
      ],
      regonRules: [
        (v) => !!v || getString("ConstractorsData", "regonRequired"),
      ],
      nameRules: [(v) => !!v || getString("ConstractorsData", "nameRequired")],
      streetRules: [
        (v) => !!v || getString("ConstractorsData", "streetRequired"),
      ],
      homeRules: [(v) => !!v || getString("ConstractorsData", "homeRequired")],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getString,
    async editAccount(index) {
      this.nip = this.contractors[index].nip;
      this.regon = this.contractors[index].regon;
      this.ifVat = this.contractors[index].czyVat;
      this.street = this.contractors[index].ulica;
      this.streetNumber = this.contractors[index].numerDomu;
      this.flatNumber = this.contractors[index].numerMieszkania;
      this.name = this.contractors[index].nazwa;
      this.newContractor.id = this.contractors[index].id;
      this.addUser = false;
    },
    reset() {
      this.$refs.form.reset();
    },
    async deleteAccount(index) {
      this.$confirm(
        this.getString("ConstractorsData", "confirmMessage"),
        this.contractors[index].nazwa,
        "warning",
        "tak"
      ).then(async () => {
        var contractor = this.contractors[index];
        contractor.active = false;
        await this.$http
          .put("kontrahenci/" + contractor.id + ".json", contractor)
          .then((response) => console.log(response));

        await this.getData();
      });
    },
    clear() {
      this.nip = "";
      this.regon = "";
      this.ifVat = false;
      this.street = "";
      this.streetNumber = "";
      this.flatNumber = "";
      this.name = "";
    },
    addUserIcon() {
      this.addUser = true;
      this.clear();
      this.reset();
    },
    validate() {
      this.$refs.form.validate();
    },
    async submit() {
      this.validate();
      if (this.valid) {
        this.newContractor.nip = this.nip;
        this.newContractor.regon = this.regon;
        this.newContractor.czyVat = this.ifVat;
        this.newContractor.ulica = this.street;
        this.newContractor.numerDomu = this.streetNumber;
        this.newContractor.numerMieszkania = this.flatNumber;
        this.newContractor.nazwa = this.name;
        this.newContractor.active = true;
        this.clear();

        if (this.addUser)
          await this.$http
            .post("kontrahenci.json", this.newContractor)
            .then((response) => console.log(response));
        else
          await this.$http
            .put(
              "kontrahenci/" + this.newContractor.id + ".json",
              this.newContractor
            )
            .then((response) => console.log(response));
        this.addUser = true;
        this.newContractor = {};
        this.reset();
        await this.getData();
      }
    },
    async getData() {
      this.$http
        .get("kontrahenci.json")
        .then((response) => response.json())
        .then((data) => {
          let list = [];
          for (let key in data) {
            if (data[key].active)
              list.push({
                ...data[key],
                id: key,
              });
          }
          this.contractors = list;
        });
    },
  },
};
</script>

<style scoped>
.contractors {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
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
.edit:hover {
  cursor: auto !important;
}
.icon:hover {
  background-color: #83130f;
}

.button {
  align-self: center;
  padding: 25px;
  margin: 15px;
  background-color: #444554;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  border-radius: 15px;
  font-weight: 600;
  text-align: center;
  align-self: flex-start;
}
.button:hover {
  background-color: #83130f;
  cursor: pointer;
}
.title {
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 70px;
}
</style>
