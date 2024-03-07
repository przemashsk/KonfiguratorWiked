<template>
  <v-group :config="{x:left,y:top}">
      <!-- <v-image id="okleina" :config="{width:width,height:height,image:okleinaimage}"></v-image> -->
      <!-- <v-image id="mixokleina" v-if="mixbool" :config="{width:mixcCorrectWidth,height:height,x:mixcCorrectX-6,image:okleinaimage2,crop:{width:mixc.cropwidth,height:height}}"></v-image> --> -->
      <!-- <v-rect id="szyba" :config="{width:width,height:height,fill:'#999999'}"></v-rect> -->
      <!-- <v-image id="szyba" :config="{width:width,height:height,image:szybaimage}"></v-image> -->
      <!-- <v-image id="tloczenie"  :config="{width:width,height:height,image:tloczenieimage}"></v-image> -->
      <!-- <v-image v-if="(this.selectedwidok=='Z' && this.product.kopniak=='2') || (this.selectedwidok=='W' && this.product.kopniak=='1') || this.product.kopniak=='3'" id="tloczeniee" :config="{width:width,height:height,image:tloczenieimagee}"></v-image> -->
      <!-- <v-image id="klamka" :config="{width:width,height:height,image:klamkaimage}"></v-image> -->
      <!-- <v-rect :config="{width:width,height:left-12,fill:'#999999',y:height-left+12}" ></v-rect> -->
      <v-rect :config="{width: width+2,height: -left,fill: '#999999',x:0,y:height+6,}"></v-rect>
  </v-group>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  props:['left','top','width','height','back','turnable'],
  data(){
    return{
      okleinaimage:null,
      okleinaimage2:null,
      klamkaimage:null,
      szybaimage:null,
      tloczenieimage:null,
      tloczenieimage2:null,
      tloczenieimagee:null,
      tloczenieimagee2:null,
      mixdanetab:
        [
        {model:'F1A',dane:{x:182,width:76,correctx:9,cropwidth:100, correctwidth:0}},
        {model:'F1B',dane:{x:158,width:49,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F1C',dane:{x:107,width:45,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F1D',dane:{x:56,width:48,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F2A',dane:{x:181,width:77,correctx:5,cropwidth:200,correctwidth:4}},
        {model:'F2B',dane:{x:181,width:77,correctx:5,cropwidth:200,correctwidth:4}},
        {model:'F4A',dane:{x:123,width:17,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4B',dane:{x:178,width:16,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4C',dane:{x:56,width:16,correctx:2,cropwidth:20,correctwidth:0}},
        {model:'F4D',dane:{x:179,width:16,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F4E',dane:{x:179,width:16,correctx:5,cropwidth:20,correctwidth:0}},
        {model:'F6A',dane:{x:112,width:38,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F6B',dane:{x:167,width:40,correctx:7,cropwidth:100,correctwidth:0}},
        {model:'F6C',dane:{x:54,width:40,correctx:5,cropwidth:100,correctwidth:0}},
        {model:'F6D',dane:{x:167,width:40,correctx:7,cropwidth:100,correctwidth:0}},
        {model:'F6E',dane:{x:167,width:40,correctx:7,cropwidth:100,correctwidth:0}}
      ]
    }
  },
  watch:{
    "product.kolor":function(){
      this.drawOkleina();
    },
    "product.kolor2":function(){
      this.drawMix();
      this.drawOkleina();

    },

    "product.klamka":function(){
      this.drawKlamka();
    },
    "product.kopniak":function(){
      this.drawTloczeniee();
    },
    "product.kopniakkolor":function(){
      this.drawTloczeniee();
    },
    "product.szyba":function(){
      this.drawSzyba();
      this.drawTloczenie();
    },
    "product.selectedwidok":function(){
      this.drawTloczeniee();
      this.drawKlamka();
    },
    "product.wzor":function(){
      this.drawTloczenie();
      this.drawSzyba();
    },
    "product.seria":function(){
      this.drawKlamka();
    },
    "product.inoxkolor":function(){
      this.drawTloczenie();
      this.drawTloczeniee();
    },
    "product.klamkakolor":function(){
      this.drawKlamka();
    },
    "product.inoxstrona":function(){
      this.drawTloczeniee();
      this.drawTloczenie();
      this.drawSzyba();
    },
    "selectedwidok":function(){
      this.drawTloczenie();
      this.drawOkleina();
      this.drawKlamka();
    }
  },
  methods:{
    drawOkleina:function(){
      const imageObj = new Image();
      let kolor = '';
      if(this.turnable==false){
        kolor = this.product.kolor;
      }else{
        kolor = this.kolorc;
      }

      imageObj.src = `/images/okleiny/${kolor}.jpg`;
      imageObj.onload = () => {
        this.okleinaimage = imageObj;
      };
    },
    drawMix:function(){
      const imageObj = new Image();
      imageObj.src = `/images/okleiny/${this.product.kolor2}.jpg`;
      imageObj.onload = () => {
        this.okleinaimage2 = imageObj;
      };
    },
    drawKlamka:function(){
      const imageObj = new Image();
      let folder = 'klamki';
      if(this.product.seria == '41'){
        folder = 'klamkibezrozety'
      }

      imageObj.src = '/images/'+folder  +'/'+this.klamkac+'_'+this.product.klamkakolor+'.png';
      imageObj.onload = () => {
        this.klamkaimage = imageObj;
      };
    },
    drawSzyba(){
      this.szybaimage = null;
      const imageObj = new Image();
      imageObj.src = '/images/szyby/'+this.odpszyb+'_'+this.szybac+'.png';
      imageObj.onload = () => {
        this.szybaimage = imageObj;
      };
    },
    drawTloczenie:function(){
      this.tloczenieimage = null;
      const imageObj = new Image();

      let file = this.product.wzor;

       if (this.product.inoxkolor=='10304'){
       file = this.product.wzor+'_black';
       }

       if(typeof(this.tloczeniepcv) !='undefined'){
       if (this.tloczeniepcv==true){
       file = this.product.wzor+'_00';
       }
     }

       if(this.inoxpelne==true){
         file = this.product.wzor+'_PELNE';
       }

      imageObj.src = '/images/tloczenia/'+file+'.png';
      imageObj.onload = () => {
        this.tloczenieimage = imageObj;
      };
    },
    drawTloczeniee:function(){
      this.tloczenieimagee = null;
      const imageObj = new Image();

      // let file = '';

      //  if (this.product.inoxkolor=='10304'){
      //  file = '_black';
      //  } else if (this.product.inoxkolor=='10301'){
      //  file = '';
      //  }

    //    if(typeof(this.tloczeniepcv) !='undefined'){
    //    if (this.tloczeniepcv==true){
    //    file = this.product.wzor+'_00';
    //    }
    //  }

    //    if(this.inoxpelne==true){
    //      file = this.product.wzor+'_PELNE';
    //    }

      imageObj.src = '/images/tloczenia/kopniak'+this.product.kopniakkolor+'.png';
      imageObj.onload = () => {
        this.tloczenieimagee = imageObj;
      };
    }

  },
  computed:{
    ...mapState({
      product:'product',
      selectedwidok:'selectedwidok',
      mixkolorlista:'mixkolorlista'
    }),
    ...mapGetters({
      odpszyb:'odpszyb',
      inoxpelne:'inoxpelne',
      activeModel:'activeModel',
      activeKlamka:'activeKlamka',
      activeSotw:'activeSotw',
      kolorc:'kolorc'
    }),
    mixc(){
     return (this.mixdanetab.find((el)=>el.model == this.product.wzor)) ? this.mixdanetab.find((el)=>el.model == this.product.wzor).dane : {}
    },
    mixcCorrectX(){
      return this.back == true ? this.mixc.x + this.mixc.correctx : this.mixc.x
    },
    mixcCorrectWidth(){
      return this.back == true ? this.mixc.width + this.mixc.correctwidth : this.mixc.width
    },
    mixbool(){
      if(this.product.wzor){
      return (this.mixkolorlista.indexOf(this.product.wzor)>= 0 && this.product.wariant == 'M') ? true : false;
      }else{return false}
    },
    szybac(){
       if(typeof(this.product.szyba) !='undefined'){
         if (this.product.szyba == '19') {
           return this.product.szyba.replace('19','06')
         }else {
           return this.product.szyba
         }
       }
     },
     klamkac(){
      if(this.selectedwidok=='W' && this.activeSotw.artnr =='KG'){
        return this.product.klamka.slice(0,-1)
      } else if (this.selectedwidok=='W' && this.product.sposobotw =='KP' && this.product.klamka){
          console.log('slimsolo');
          
        return "SlimSolo"
      }else{
        return this.product.klamka
      }
    },
    tloczeniepcv(){
       return (this.activeModel.typ=='PCV' && this.product.szyba=='00') ? true : false ;
    },

  },
  created() {
    this.drawOkleina();
    this.drawKlamka();
    this.drawSzyba();
    this.drawMix();
    this.drawTloczenie();
    this.drawTloczeniee();
  }
}
</script>

<style lang="css" scoped>
</style>
