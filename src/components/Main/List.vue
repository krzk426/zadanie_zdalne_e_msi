<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="#444554" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        active-class="--text"
        color='#83130f'
      >
        <template v-slot:activator >
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item-group active-class="gray --text" >
        <v-list-item v-for="child in item.items" :key="child.title" link >
          <v-list-item-content @click="change(child.title)">
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "List",
  props: ["title", "items"],
  data() {
    return {};
  },
  methods: {
    change(val) {
      this.$emit("vat", val);
    },
  },
};
</script>
