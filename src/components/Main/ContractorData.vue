<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <div class="title">{{ getString("ConstractorData", "data") }}</div>
        <div class="row">
          <v-col md="1" />
          <v-col md="4">
            <v-text-field
              v-model="NIP"
              :counter="10"
              :rules="nipRules"
              :label="getString('ConstractorData', 'h1')"
              required
            ></v-text-field>
          </v-col>
          <v-col md="2" />
          <v-col md="4">
            <v-text-field
              v-model="street"
              :rules="streetRules"
              :label="getString('ConstractorData', 'h2')"
              required
            ></v-text-field>
          </v-col>
        </div>

        <div class="row">
          <v-col md="1" />
          <v-col md="4">
            <v-text-field
              v-model="regon"
              :label="getString('ConstractorData', 'h3')"
              :rules="regonRules"
              required
              type="number"
            ></v-text-field>
          </v-col>
          <v-col md="2" />
          <v-col md="4">
            <v-text-field
              v-model="homeNuber"
              :label="getString('ConstractorData', 'h4')"
              :rules="homeRules"
              required
            ></v-text-field>
          </v-col>
        </div>

        <div class="row">
          <v-col md="1" />
          <v-col md="4">
            <v-text-field v-model="name" :label="getString('ConstractorData', 'h7')" required :rules="nameRules"></v-text-field>
          </v-col>
          <v-col md="2" />
          <v-col md="4">
            <v-text-field
              v-model="flatNumber"
              :label="getString('ConstractorData', 'h5')"
            ></v-text-field>
          </v-col>
        </div>

        <div class="row">
          <v-col md="1" />
          <v-col md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
              :rules="beginRules"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  :label="getString('ConstractorData', 'h6')"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  {{getString('ConstractorData', 'cancel')}}
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  {{getString('ConstractorData', 'ok')}}
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col md="2" />

          <v-col md="4">
            <v-textarea
              v-model="additionalInformations"
              label="Uwagi"
            ></v-textarea>
          </v-col>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "ConstractorData",
  data() {
    return {
      valid: false,
      NIP: "",
      regon: 0,
      name: "",
      street: "",
      homeNuber: "",
      flatNumber: "",
      additionalInformations: "",
      menu: false,
      date:"",
      nipRules: [
        v => !!v || getString('ConstractorData', 'nipRequired'),
        v => v.length == 10 ||  getString('ConstractorData', 'nipError'),
      ],
      streetRules:[
         v => !!v || getString('ConstractorData', 'streetRequired'),
      ],
      regonRules:[
         v => !!v || getString('ConstractorData', 'regonRequired'),
      ],
      homeRules:[
         v => !!v || getString('ConstractorData', 'homeRequired'),
      ],
      beginRules:[
         v => !!v || getString('ConstractorData', 'beginRequired'),
      ],
      nameRules:[
         v => !!v || getString('ConstractorData', 'nameRequired'),
      ]
    };
  },
  methods: {
    getString,
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
