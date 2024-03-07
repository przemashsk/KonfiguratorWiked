<template>
  <div class="contain myrow2" v-cloak id="all" style="position:relative;z-index:2000;margin-top:10px">
    <p style="display:inline-block;">widok zewnątrz</p>
      <div class="switch" id="switch" @click="performSwitch" style="width:40px;margin-top:2px;margin-left:8px;margin-right:8px" >
          <div class="bar"></div>
          <div class="dot" :style="{left:leftc+'px',backgroundColor:color}"></div>
      </div>
      <p>widok wewnątrz</p>
    </div>
</template>


<script>
export default {


  data(){
    return {
      state: 'off',
      left: 0,
      color: '#eaeaea'
    }
  },
  methods: {
      performSwitch() {
        this.$store.state.selectedwidok == 'Z' ? this.$store.state.selectedwidok='W' : this.$store.state.selectedwidok='Z';
          // this.left == 0 ? this.left = 20 : this.left = 0;
          // this.color == 'eaeaea' ? this.color = 'blue' : this.color = 'red';
      }
  },
  computed:{
    leftc(){
      return this.$store.state.selectedwidok=='Z' ? 0 : 20;
    }
  },

  mounted(){

  }
}


</script>

<style>
.myrow2{
  display:flex;
      flex-wrap: wrap;      
}
.fitCenter{
  margin:auto;
  width: fit-content;
}

.switch {
    transition: .4s;
    position: relative;
    opacity: 0.6;
    width:30px;
    cursor:pointer;

}


[v-cloak]{
  display:none
}

.contain{
  opacity:0.6;
}

.contain:hover{
  opacity:1
}

.switch:hover {
    opacity: 1;
}

.bar {
    position: absolute;
    top: 3px;
    width: 40px;
    height: 14px;
    border-radius: 7px;
    opacity: 0.38;
    background-color: currentColor;
    box-shadow: 0px 0px 4px black;
}

.dot {
    transition: 1s;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px #999 solid;
    display: inline-block;
    box-shadow: 0px 0px 2px black;
}


</style>
