<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="#444554" dark>
      <v-toolbar-title>{{ getString("NumericList", "title") }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group active-class="--text" multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title
                  v-text="index + 1 + '. ' + item.title"
                ></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>

                <v-icon v-if="!active" color="grey lighten-1">
                  mdi-star-outline
                </v-icon>

                <v-icon v-else color="yellow darken-3">
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "List",
  data() {
    return {
      items: [
        { title: "Element 1" },
        { title: "Element 2" },
        { title: "Element 3" },
      ],
    };
  },
  methods: {
    getString,
  },
};
</script>
