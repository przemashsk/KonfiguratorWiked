<!--Drzwi do PDF -->
<template>
  <v-layer :config="{scaleX: height/wysokoscall , scaleY:height/wysokoscall,x: xprop,y: yprop,}">
    <v-group id="all" :config="{ x: grpx, scaleX: grpsx, draggable: dragprop }" ref="mygroup">
      
      <v-group id="drzwi" :config="{ x: xdrzwi, y: ydrzwi }">
        <oscieznica :grubosc="gruboscc" :height="wysokoscdrzwi" :width="szerokoscdrzwi" :back="backbool" :turnable="turnable"></oscieznica>
        <skrzydlo :left="gruboscc" :top="gruboscc" :height="wysokoscdrzwi - gruboscc" :width="szerokoscdrzwi - 2 * gruboscc" :back="backbool" :turnable="turnable"></skrzydlo>
      </v-group>
      
      <v-group id="naswietleg" :config="{ x: 0, y: wysokoscng, height: wysokoscng, scaleY: -1 }" v-if="drawng">
        <naswietleg :grubosc="53 / 4" :height="wysokoscng" :width="szerokoscng" :back="backbool" :turnable="turnable"></naswietleg>
      </v-group>
      
      <v-group id="naswietle" :config="{ x: xnb1, y: ynb1 }" v-if="drawnb1">
        <naswietle :grubosc="53 / 4" :height="wysokoscdrzwi" :width="szerokoscnb1" :back="backbool" :turnable="turnable"></naswietle>
      </v-group>

      <v-group id="naswietlep" :config="{ x: szerokoscdrzwi, y: ynb2, x: xnb2 }" v-if="drawnb2">
        <naswietlep :s="szerokoscall" :grubosc="53 / 4" :height="wysokoscdrzwi" :width="szerokoscnb2" :back="backbool" :turnable="turnable"></naswietlep>
      </v-group>      

      <v-group id="dostawkal" :config="{ x: xnb1, y: ydrzwi }" v-if="drawdol">
        <oscieznica :grubosc="gruboscc" :height="wysokoscdrzwi" :width="szerokoscnb1" :back="backbool" :turnable="turnable"></oscieznica>
        <dostawka :left="gruboscc" :top="gruboscc" :height="wysokoscdrzwi - gruboscc" :width="szerokoscnb1 - 2 * gruboscc" :back="backbool" :turnable="turnable"></dostawka>
      </v-group>

    </v-group>
    <v-transformer ref="transformer" />
  </v-layer>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import oscieznica from "@/components/Oscieznicakonva.vue";
import naswietle from "@/components/Naswietle.vue";
import naswietlep from "@/components/NaswietleP.vue";
import naswietleg from "@/components/Naswietleg.vue";
import dostawka from "@/components/dostawka.vue";

import skrzydlo from "@/components/Skrzydlo.vue";
import { EventBus } from "@/event-bus.js";

export default {
  components: {
    oscieznica,
    skrzydlo,
    naswietle,
    naswietlep,
    naswietleg,
    dostawka,
  },
  props: {
    // width:Number,
    // height:Number,
    scalexprop: { type: Number, default: 1 },
    scaleyprop: { type: Number, default: 1 },
    xprop: { type: Number, default: 0 },
    yprop: { type: Number, default: 0 },
    dragprop: { type: Boolean, default: false },
    turnable: { type: Boolean, default: true },
    zoombool: { type: Boolean, default: true },
  },
  data() {
    return {
      wysokoscall: 500,
      grpx: 0,
      grpsx: 1,
      height: 2080 * 0.5,
      width: 1025 * 0.5,
      back: false,
      xdata: 0,
      exportImageObj: null,
      drawnaswietle: true,
      szerokoscdrzwi: 1025 * 0.25,
      // szerokoscall:300,
      wysokoscdrzwi: 2080 * 0.25,
      // szerokoscnb1:200,
      // szerokoscnb2:100,
      // wysokoscng:150,
      szerokoscng: 100,
      xdrzwi: 0,
      ydrzwi: 0,
      xnb1: 0,
      ynb1: 0,
      xnb2: 0,
      ynb2: 0,
      xng: 0,
      yng: 0,
      drawnb2: false,
      drawnb1: false,
      drawng: false,
      scalable: true,
      drawdol: false,
    };
  },
  watch: {
    "product.wzor": function () {
      this.fadeIn();
    },
    "product.szyba": function () {
      this.fadeIn();
    },

    "product.kierunek": function () {
      this.handleMirror();
      this.handleZestaw();
    },

    "product.wysokoscng": function () {
      this.handleZestaw();
      this.handleMirror();
    },
    "product.szerokoscnb1": function () {
      this.handleZestaw();
      this.handleMirror();
    },
    "product.szerokoscnb2": function () {
      this.handleZestaw();
      this.handleMirror();
    },
    "product.szerokoscall": function () {
      this.handleZestaw();
    },
    "product.typ": function () {
      this.handleZestaw();
      this.handleMirror();
    },
    // "product.selectedwidok":function(){
    //   this.handleZestaw();
    // },
    selectedwidokc: function () {
      this.handleZestaw();
      this.handleMirror();
    },
  },
  methods: {
    handleMirror() {
      if (
        (this.product.kierunek == "Lz" || this.product.kierunek == "Pw") &&
        this.selectedwidokc == "Z"
      ) {
        this.grpsx = 1;
        this.grpx = 0;
      }
      if (
        (this.product.kierunek == "Lw" || this.product.kierunek == "Pz") &&
        this.selectedwidokc == "Z"
      ) {
        this.grpsx = -1;
        this.grpx = this.szerokoscall;
      }
      if (
        (this.product.kierunek == "Lz" || this.product.kierunek == "Pw") &&
        this.selectedwidokc == "W"
      ) {
        this.grpsx = -1;
        this.grpx = this.szerokoscall;
      }
      if (
        (this.product.kierunek == "Lw" || this.product.kierunek == "Pz") &&
        this.selectedwidokc == "W"
      ) {
        this.grpsx = 1;
        this.grpx = 0;
      }
    },

    handleExports() {
      // let self = this;
      // self.$store.state.selectedwidok = "Z";
      setTimeout(function () {
        // self.exportImage(img);
      }, 2000);
      setTimeout(function () {
        // self.$store.state.selectedwidok = "W";
      }, 4000);
      setTimeout(function () {
        // self.exportImageInner(img);
      }, 6000);
    },

    exportImage() {
      let self = this;
      var imageObj = new Image();
      this.$refs.mygroup._konvaNode.toImage({
        callback: function (img) {
          self.$store.state.exportImageObj = img;
        },
      });
      // document.getElementById("output").appendChild(imageObj);
    },
    exportImageInner() {
      let self = this;
      var imageObj = new Image();
      self.$refs.mygroup._konvaNode.toImage({
        callback: function (img) {
          self.$store.state.exportImageObjInner = img;
        },
      });

      // document.getElementById("output").appendChild(imageObj);
    },

    fadeIn() {
      let self = this;
      document.getElementById("wizcon").style.transition = "0s";
      document.getElementById("wizcon").style.opacity = 0;
      setTimeout(function () {
        document.getElementById("wizcon").style.transition = "0.3s";
      }, 200);

      setTimeout(function () {
        document.getElementById("wizcon").style.opacity = 1;
      }, 400);
    },
    handleZestaw: function () {
      this.drawnb1 = false;
      this.drawnb2 = false;
      this.drawng = false;
      this.ynb1 = 0;
      this.ynb2 = 0;
      this.ydrzwi = 0;
      this.drawdol = false;
      if (this.product.typ == "D1") {
        //drzwi
        this.xdrzwi = 0;
        this.drawnb1 = false;
        this.drawnb2 = false;
        this.szerokoscall = this.szerokoscdrzwi;
        this.wysokoscall = this.wysokoscdrzwi;
        // this.wysokoscng=0;
      }
      if (this.product.typ == "D1F01") {
        //do po lewej
        this.szerokoscall = this.szerokoscdrzwi + this.szerokoscnb1;
        this.xdrzwi = this.szerokoscnb1;
        this.drawdol = true;
        this.wysokoscall = this.wysokoscdrzwi;
        this.xnb1 = 0;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = 0;
          this.xnb1 = this.szerokoscdrzwi;
        }
      }
      if (this.product.typ == "D1N01") {
        //nb po lewej
        this.szerokoscall = this.szerokoscdrzwi + this.szerokoscnb1;
        this.xdrzwi = this.szerokoscnb1;
        this.drawnb1 = true;
        this.wysokoscall = this.wysokoscdrzwi;
        this.xnb1 = 0;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = 0;
          this.xnb1 = this.szerokoscdrzwi;
        }
      }
      if (this.product.typ == "D1N02") {
        //nb po prawej
        this.szerokoscall = this.szerokoscdrzwi + this.szerokoscnb2;
        this.xdrzwi = 0;
        this.xnb2 = this.szerokoscdrzwi;
        this.drawnb2 = true;
        this.wysokoscall = this.wysokoscdrzwi;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = this.szerokoscnb2;
          this.xnb2 = 0;
        }
      }
      if (this.product.typ == "D1N03") {
        //oba nb
        this.szerokoscall =
          this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.xdrzwi = this.szerokoscnb1;
        this.ydrzwi = 0;
        this.ynb1 = 0;
        this.ynb2 = 0;
        this.xnb1 = 0;
        this.drawnb1 = true;
        this.drawng = false;
        this.drawnb2 = true;
        this.szerokoscng =
          this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.xnb2 = this.szerokoscnb1 + this.szerokoscdrzwi;
        this.wysokoscall = this.wysokoscdrzwi;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = this.szerokoscnb2;
          //  this.xnb2=this.szerokoscnb2;
          this.xnb1 = this.szerokoscdrzwi + this.szerokoscnb2;
          this.xnb2 = 0;
        }
      }
      if (this.product.typ == "D1N04") {
        //nb górne
        this.szerokoscall = this.szerokoscdrzwi;
        this.drawnb1 = false;
        this.drawnb2 = false;
        this.xdrzwi = 0;
        this.ydrzwi = this.wysokoscng;
        this.drawng = true;
        this.szerokoscng = this.szerokoscdrzwi;
        this.wysokoscall = this.wysokoscdrzwi + this.wysokoscng;
      }
      if (this.product.typ == "D1N05") {
        //nb górne i boczne lewe
        this.szerokoscall = this.szerokoscdrzwi + this.szerokoscnb1;
        this.xdrzwi = this.szerokoscnb1;
        this.xnb2 = this.szerokoscnb1 + this.szerokoscdrzwi;
        this.ydrzwi = this.wysokoscng;
        this.ynb1 = this.wysokoscng;
        this.ynb2 = this.wysokoscng;
        this.drawnb1 = true;
        this.drawng = true;
        this.drawnb2 = false;
        this.szerokoscng = this.szerokoscdrzwi + this.szerokoscnb1;
        this.wysokoscall = this.wysokoscdrzwi + this.wysokoscng;
        this.xnb1 = 0;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = 0;
          this.xnb1 = this.szerokoscdrzwi;
        }
      }

      if (this.product.typ == "D1N06") {
        //nb górne i boczne prawe
        this.szerokoscall = this.szerokoscdrzwi + this.szerokoscnb2;
        this.xdrzwi = 0;
        this.xnb2 = this.szerokoscdrzwi;
        this.ydrzwi = this.wysokoscng;
        this.ynb1 = this.wysokoscng;
        this.ynb2 = this.wysokoscng;
        this.drawnb1 = false;
        this.drawng = true;
        this.drawnb2 = true;
        this.szerokoscng = this.szerokoscdrzwi + this.szerokoscnb2;
        this.wysokoscall = this.wysokoscdrzwi + this.wysokoscng;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = this.szerokoscnb2;
          this.xnb2 = 0;
        }
      }

      if (this.product.typ == "D1N07") {
        //wszystkie
        this.szerokoscall =
          this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.xdrzwi = this.szerokoscnb1;
        this.xnb2 = this.szerokoscnb1 + this.szerokoscdrzwi;
        this.ydrzwi = this.wysokoscng;
        this.ynb1 = this.wysokoscng;
        this.ynb2 = this.wysokoscng;
        this.drawnb1 = true;
        this.drawng = true;
        this.drawnb2 = true;
        this.szerokoscng =
          this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.wysokoscall = this.wysokoscdrzwi + this.wysokoscng;
        this.xnb1 = 0;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = this.szerokoscnb2;
          //  this.xnb2=this.szerokoscnb2;
          this.xnb1 = this.szerokoscdrzwi + this.szerokoscnb2;
          this.xnb2 = 0;
        }
      }

      if (this.product.typ == "D1N08") {
        //wszystkie
        this.szerokoscall=this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.xdrzwi = this.szerokoscnb1;
        this.xnb2 = this.szerokoscnb1 + this.szerokoscdrzwi;
        this.ydrzwi = this.wysokoscng;
        this.ynb1 = this.wysokoscng;
        this.ynb2 = this.wysokoscng;
        // if(this.selectedwidok != 'W'){
          this.drawng = true;this.drawnb1 = true;this.drawnb2 = true;
        // }else{this.drawnb1 = false;this.drawng = false;this.drawnb2 = false;}      
        this.szerokoscng =
          this.szerokoscdrzwi + this.szerokoscnb1 + this.szerokoscnb2;
        this.wysokoscall = this.wysokoscdrzwi + this.wysokoscng;
        this.xnb1 = 0;
        if (this.product.kierunek == "Pz" || this.product.kierunek == "Lw") {
          this.xdrzwi = this.szerokoscnb2;
          //  this.xnb2=this.szerokoscnb2;
          this.xnb1 = this.szerokoscdrzwi + this.szerokoscnb2;
          this.xnb2 = 0;
        }
      }

    },
  },
  mounted() {
    this.fadeIn();
    this.handleZestaw();
    EventBus.$on("exportImages", (payload) => {
      this.handleExports();
      // this.exportImage();
      // this.exportImageInner();
    });
  },
  computed: {
    ...mapState({
      selectedwidok: "selectedwidok",
      product: "product",
      // wysokoscng:'product.wysokoscng'
    }),
    szerokoscnb1() {
      let wys = parseInt(this.$store.state.product.szerokoscnb1);
      // if (wys==200){return 2}
      // else if (wys==300){return 140}
      // else if (wys==400){return 170}
      // else if (wys==500){return 200}
      return wys * 0.25;
    },
    szerokoscnb2() {
      let wys = parseInt(this.$store.state.product.szerokoscnb2);
      // if (wys==200){return 110}
      // else if (wys==300){return 140}
      // else if (wys==400){return 170}
      // else if (wys==500){return 200}
      return wys * 0.25;
    },
    wysokoscng() {
      let wys = parseInt(this.$store.state.product.wysokoscng);
      // if (wys==200){return 110}
      // else if (wys==300){return 140}
      // else if (wys==400){return 170}
      // else if (wys==500){return 200}
      return wys * 0.25;
      // return parseInt(this.$store.state.product.wysokoscng);
    },
    gruboscc: function () {
      if (this.backbool == true) {
        return 37 / 4; //49
      } else {
        return 53 / 4; //81
      }
    },
    backbool: function () {
      if (this.selectedwidokc == "Z" && this.product.kierunek == "Lz") {
        return true;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Lw") {
        return false;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Pz") {
        return true;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Pw") {
        return false;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Lz") {
        return false;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Lw") {
        return true;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Pz") {
        return false;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Pw") {
        return true;
      }
    },
    flipCx: function () {
      if (this.flipCscale === 1) {
        return 0;
      } else {
        return this.width;
      }
    },
    flipCscale: function () {
      if (this.selectedwidokc == "Z" && this.product.kierunek == "Lw") {
        return -1;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Lz") {
        return 1;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Pz") {
        return -1;
      } else if (this.selectedwidokc == "Z" && this.product.kierunek == "Pw") {
        return 1;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Lz") {
        return -1;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Lw") {
        return 1;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Pz") {
        return 1;
      } else if (this.selectedwidokc == "W" && this.product.kierunek == "Pw") {
        return -1;
      }
    },

    selectedwidokc: function () {
      if (this.turnable == false) {
        return "Z";
      } else {
        return this.selectedwidok;
      }
    },
    ...mapGetters({
      activeTyp: "activeTyp",
    }),
  },
};
</script>

<style lang="css" scoped>
</style>