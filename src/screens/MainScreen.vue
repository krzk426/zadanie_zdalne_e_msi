<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <div class="nextTo">
          <div class="menuSection" id="Lewy">
           <Menu v-on:options="changeOption($event)"/>
          </div>
          <div class="optionSection" id="Prawy">
            <div v-show="option=='option1'"><HTMLControls v-on:vat="newVat($event)"/></div>
            <div v-show="option=='option2'"><Employees/></div>
            <div v-show="option=='option3'"><Invoices :vat="vat"/></div>
            <div v-show="option=='option4'"><Delegation/></div>
            <div v-show="option=='option5'"><Constractors/></div>
          </div>
        </div>
    </div>
</template>

<script>
import Menu from '../components/Main/Menu.vue'
import HTMLControls from '../components/Main/HTMLcontrols.vue'
import Employees from '../components/Main/Employees.vue'
import Delegation from '../components/Main/BDDelegations.vue'
import Constractors from '../components/Main/ConstractorsData.vue'
import Invoices from '../components/Main/Invoices.vue'

export default {
  name: 'MainScreen',
  data() {
    return {
      title:'Zadanie zdalne e-MSI',
      option: 'option1',
      vat:'23%'
    }
  },
  components:{
    Menu,
    Delegation,
    HTMLControls,
    Employees,
    Constractors,
    Invoices
  },
  methods: {
    changeOption(option){
      this.option = option 
    },
    newVat(val){
      this.vat= val
    }
  },
}
</script>

<style scoped>
  .title{
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
    border-bottom: 1px solid;
    border-radius: 60px;
    justify-content: center;
    display: flex;
  }
  .nextTo{
    display: flex;
    margin-top: 50px;
  }
  .menuSection{
    width: 25%;
  }
  .optionSection{
    width: 75%;
  }
  @media only screen and (max-width: 1100px) {
  .nextTo{
    flex-direction: column;
    align-items: center;
  }
  .menuSection{
    width: 100%;
  }
  .optionSection{
    width: 100%;
  }
}
</style>