<template>
    <div style="" id="custompopup" v-if="showmodal">
    <div id="custompopupcontent" style="top: 50%;margin-top:-200px">
              <p id="opis">Przepraszamy, wystąpił błąd , prosimy spróbować jeszcze raz bo odświeżeniu przeglądarki (ctrl+F5)</p>
              <div style="" id="krzyzyk" @click="close">×</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            closed:false
        }
    },
    methods:{
        close(){
            this.$store.state.showmodal = TR;      
        }
    },
    computed:{
        ...mapState([
            'showmodal'
        ])
    }
}
</script>

<style>
    .closed{
        display:none !important; 
    }

    #custompopup{
        margin: auto; width: 300px; display: block;
    }

    #custompopupcontent{
        z-index:1000;
        font-family: Poppins, sans-serif;
        font-size: 14px;
        color: #5b5b5b;
        outline: 0;
        overflow: hidden;
        right: 0;
        left: 0;
        position:fixed;
        padding:20px;
      
        min-width:300px;
        max-width:600px;
        margin: 0 auto;
        background: rgba(230, 230, 230, 1);
        border:1px black solid;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        transition: transform all 0.4s ease-out;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    #krzyzyk{
        position:absolute;top:10px;right:15px;cursor: pointer;font-size: 20px; color: #1BB4BF;
    }


  
</style>