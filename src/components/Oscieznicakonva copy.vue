<template>
  <v-group>
    <!-- <v-rect :config="{width:50,height:50,fill:'red'}"></v-rect> -->
    <!-- <v-image id="okleina" :config="{image:okleinaimage,width:width,height:height }"></v-image> -->
    <v-image
      id="prawegora"
      :config="{ image: nlt, width: grubosc, height: grubosc }"
    ></v-image>
    <v-image
      id="lewe"
      :config="{
        image: nl,
        y: grubosc,
        width: grubosc,
        height: height - grubosc,
        crop: { width: 110, height: 280, x: 0, y: 0 },
      }"
    ></v-image>
    <v-image
      id="gora"
      :config="{
        image: nt,
        x: grubosc,
        height: grubosc,
        width: width - 2 * grubosc,
        crop: { width: 272, height: 110, x: 0, y: 0 },
      }"
    ></v-image>
    <v-image
      id="prawegora"
      :config="{
        image: nlt,
        x: width,
        height: grubosc,
        width: grubosc,
        scaleX: -1,
        crop: { width: 101, height: 101, x: 0, y: 0 },
      }"
    ></v-image>
    <v-image
      id="prawe"
      :config="{
        image: nl,
        x: width,
        height: height - grubosc,
        y: grubosc,
        width: grubosc,
        scaleX: -1,
        crop: { width: 110, height: 280, x: 0, y: 0 },
      }"
    ></v-image>
  </v-group>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["width", "height", "grubosc", "back", "turnable"],
  watch: {},
  data() {
    return {
      nl: null,
      nlt: null,
      nt: null,
      okleinaimage: null,
    };
  },
  watch: {
    back() {
      let self = this;
      setTimeout(function () {
        self.drawOscieznicaParts();
      }, 0);
    },
    "product.kolor": function () {
      this.drawOkleina();
    },
    "product.kolor2": function () {
      this.drawOkleina();
    },
    "product.kolor5": function () {
      this.drawOkleina();
    },
    "product.kolor6": function () {
      this.drawOkleina();
    },
    selectedwidok: function () {
      this.drawOkleina();
      this.drawOscieznicaParts();
    },
    "product.kierunek": function () {
      this.drawOscieznicaParts();
    },
  },
  methods: {
    drawOscieznicaParts: function () {
      let self = this;
      let nlt = new Image();
      let nl = new Image();
      let nt = new Image();
      let b = "";

      if (this.back == true) {
        b = "b";
      }

      nlt.src = `/images/naswietle/${b}nlt.png`;
      nl.src = `/images/naswietle/${b}nl.png`;
      nt.src = `/images/naswietle/${b}nt.png`;

      nlt.onload = function () {
        self.nlt = nlt;
        self.nl = nl;
        self.nt = nt;
        if (nt.width == 0 || nl.width == 0 || nlt.width == 0) {
          self.drawOscieznicaParts();
        }
      };
    },
    drawOkleina: function () {
      const okleinaObj = new Image();
      let kolor = "";
      if (this.turnable == false) {
        kolor = this.product.kolor;
      } else {
            if(this.product.wariant == "B"){
                if(this.selectedwidok == "W"){
                    kolor = this.product.kolor5;
                }
                if(this.selectedwidok == "Z"){
                    kolor = this.product.kolor6;
                }
            }else{
                kolor = this.kolorc;
            }          
        } 

      okleinaObj.src = `/images/okleiny/${kolor}.jpg`;
      okleinaObj.onload = () => {
        this.okleinaimage = okleinaObj;
      };
    },
  },
  created() {
    this.drawOscieznicaParts();
    this.drawOkleina();
  },
  computed: {
    ...mapState({
      product: "product",
      selectedwidok: "selectedwidok",
    }),
    ...mapGetters({
      kolorc: "kolorc",
    }),
  },
};
</script>

<style lang="css" scoped>
</style>
