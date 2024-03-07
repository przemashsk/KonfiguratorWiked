<template>
  <div class="btn btn-light" onclick="document.getElementById('opcje2').style.display = 'flex'">
       Zmień tło
      <!-- <div class="rightdiv" style=""> -->
          <!-- <i class="arrow down"></i> -->
      <!-- </div> -->
      <!-- <p style="clear:both;padding:0px;margin:0px;"></p> -->

  </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
  data(){
    return{
      showoptions:false
    }
  },
  methods:{
    setActiveBackground(elem){
      this.$store.commit('setActiveBackground',elem);
      // this.$store.state.activebackground = elem;
    }
  },
  computed:{
    ...mapState({
      backgrounds:'backgrounds'
    })
  }
}


</script>

<style scoped>
.btn-light{
  padding: 8px 12px;
}
.arrow {
    border: solid #c6c6c6;
    border-width: 0 2px 2px 0;
    display: inline-block;
    /* padding: 4px; */
}

/* .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
} */

/* .customselect {
  display:inline-block;
  margin-right:1em;
  top:13px; */
  /* margin-top:5px;
    box-sizing: content-box;
    color: #c6c6c6;
    position: relative;
    width: 200px;
    height: 30px;
    border: 2px #c6c6c6 solid;
    z-index: 800;
    border-radius: 20px;
    padding: 1px;
    
    margin: -14px 0px;

} */

div {
    box-sizing: content-box; 
    line-height: 1;

}

.customselect:hover {
    border: 2px #444 solid;
    color: #444;
    cursor: pointer;
}

/* .customselect:hover .rightdiv {
    background: #c6c6c6;
} */


.customselect:hover .arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
}

.options {
  position: absolute;
  top:70px;
  /* left: 50%; */
  height: 40px;
  width: 100px;
  z-index: 99999;
    /* border: 1px solid rgba(0, 0, 0, .15); */
    border-radius: .25rem;

}

/* .rightdiv {
    width: 15px;
    background: #f1f1f1;
    height: 26px;
    padding-left: 5px;
    padding-top: 4px;
    border-left: 1px #c6c6c6 solid;
    float: right;
    margin-left: 20px;
} */

.myoption {
  display: inline-block;
  background:white;
    height: 100%;
    /* width:100px; */
    /* margin-left: 20px; */
}

.myoption:hover {
    background: #c6c6c6
}

/* .desc {
    position: absolute;
    top: 5px;
    left: 3px;
    margin: 0px;
    padding: 4px;
    margin-left: 35px;
} */

/* .customselect img {
    width: 60px;
    max-height: 100%;
    display: inline-block;
    height: 40px;
    margin-left: 60px
} */
</style>
