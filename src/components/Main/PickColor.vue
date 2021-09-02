<template>
  <div>
    <div class="nextTo">
      <div class="choose">
        <div class="option" @click="change(true)">
          {{ getString("PickColor", "chooseEven") }}
        </div>
        <div>
          <v-color-picker
            v-show="even"
            dot-size="25"
            swatches-max-height="200"
            v-model="color"
          ></v-color-picker>
        </div>
      </div>
      <div class="choose">
        <div class="option" @click="change(false)">
          {{ getString("PickColor", "chooseNotEven") }}
        </div>
        <div>
          <v-color-picker
            v-show="notEven"
            dot-size="25"
            swatches-max-height="200"
            v-model="notEvenColor"
          ></v-color-picker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "PickColor",
  data() {
    return {
      notEvenColor: "#444554",
      color: "#83130f",
      even: false,
      notEven: false,
    };
  },
  watch: {
    color: function(val) {
      this.$emit("even", val);
    },
    notEvenColor: function(val) {
      this.$emit("notEven", val);
    },
  },
  methods: {
    getString,
    change(option) {
      if (option) {
        this.notEven = false;
        this.even = !this.even;
      } else {
        this.even = false;
        this.notEven = !this.notEven;
      }
    },
  },
};
</script>

<style scoped>
.nextTo {
  display: flex;
  justify-content: center;
}
.option {
  padding: 15px;
  background-color: #444554;
  width: 300px;
  border-radius: 15px;
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 20px;
}

.option:hover {
  background-color: #83130f;
  cursor: pointer;
}
.choose {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 900px) {
  .nextTo {
    flex-direction: column;
    align-items: center;
  }
}
</style>
