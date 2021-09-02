<template>
  <div class="options">
    <div class="option" @click="$emit('options', 'option1')">
      {{ getString("Menu", "option1") }}
    </div>
    <div class="option" @click="$emit('options', 'option2')">
      {{ getString("Menu", "option2") }}
    </div>
    <div class="option" @click="$emit('options', 'option3')">
      {{ getString("Menu", "option3") }}
    </div>
    <div class="option" @click="$emit('options', 'option4')">
      {{ getString("Menu", "option4") }}
    </div>
    <div class="option" @click="$emit('options', 'option5')">
      {{ getString("Menu", "option5") }}
    </div>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    getString,
  },
};
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.option {
  align-self: center;
  padding: 25px;
  margin: 15px;
  background-color: #444554;
  width: 300px;
  color: white;
  border-radius: 30px;
  font-weight: 600;
  text-align: center;
}
.option:hover {
  background-color: #83130f;
  cursor: pointer;
}
</style>
