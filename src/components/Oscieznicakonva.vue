<template>
  <v-group :config="{ x: 0, y: 0 }">
    <v-image id="okleina" :config="{ image: okleinaimage, width: width, height: height, crop: { width: width * 2, height: height * 2, x: 500, y: 10 } }"></v-image>
    <v-image id="wycinka" :config="{ image: okleinaimage, width: width, height: height, crop: { width: width * 2, height: height * 2, x: 500, y: 10 } }"></v-image>
    <v-image id="gora" :config="{ image: nt, y: 0, x: 53 / 4, height: 53 / 4, width: width - 2 * (53 / 4), crop: { width: 280, height: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="prawe" :config="{ image: nl, x: width, height: height - 53 / 4, y: 53 / 4, width: 53 / 4, scaleX: -1, crop: { height: 280, width: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="lewe" :config="{ image: nl, x: 0, height: height - 53 / 4, y: 53 / 4, width: 53 / 4, crop: { height: 280, width: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="lewagoraskos" v-if="this.product.seria != '20' && this.product.seria != '30' && this.product.seria != '60'" :config="{ image: nlt, x: 0, y: 0, width: 53 / 4, height: 53 / 4, crop: { width: 110, height: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="lewagora" v-if="this.product.seria == '20' || this.product.seria == '30' || this.product.seria == '60'" :config="{ image: nt, x: 0, y: 0, width: 53 / 4, height: 53 / 4, crop: { width: 110, height: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="prawegoraskos" v-if="this.product.seria != '20' && this.product.seria != '30' && this.product.seria != '60'" :config="{ image: nlt, y: 0, x: width, height: 53 / 4, width: 53 / 4, scaleX: -1, crop: { width: 110, height: 110, x: 0, y: 0 } }"></v-image>
    <v-image id="prawegora" v-if="this.product.seria == '20' || this.product.seria == '30' || this.product.seria == '60'" :config="{ image: nt, y: 0, x: width, height: 53 / 4, width: 53 / 4, scaleX: -1, crop: { width: 110, height: 110, x: 0, y: 0 } }"></v-image>
    <v-rect id="Obramówka" :config="{ width: width, height: height, stroke: '#222', strokeWidth: 0.5, x: 0, y: 0 }"></v-rect>
    <v-rect id="Próg" :config="{ width: width, height: 5, fill: '#999', stroke: '#222', strokeWidth: 0.5, x: 0, y: height - 5 }" v-if="this.product.seria == '31' || this.product.seria == '41'"></v-rect>
    <v-rect id="Próg" :config="{ width: width - 53 / 2, height: 5, fill: '#999', stroke: '#222', strokeWidth: 0.5, x: 53 / 4, y: height - 5 }" v-else></v-rect>
    <v-rect id="Obramówka" :config="{ width: width, height: height, opacity: 0.15, fill: '#fff', x: 0, y: 0 }"></v-rect>
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
      setTimeout(function() {
        self.drawOscieznicaParts();
      }, 0);
    },
    "product.seria": function() {
      this.drawOkleina();

      this.drawOscieznicaParts();
    },
    "product.kolor": function() {
      this.drawOkleina();
    },
    "product.wariant": function() {
      this.drawOkleina();
    },
    "product.kolor2": function() {
      this.drawOkleina();
    },
    "product.kolor5": function() {
      this.drawOkleina();
    },
    "product.kolor6": function() {
      this.drawOkleina();
    },
    selectedwidok: function() {
      this.drawOkleina();
      this.drawOscieznicaParts();
    },
    "product.kierunek": function() {
      this.drawOscieznicaParts();
    },
    "product.sposobotw": function() {
      this.drawOscieznicaParts();
    },
  },
  methods: {
    drawOscieznicaParts: function() {
      let self = this;
      let nlt = new Image();
      let nl = new Image();
      let nt = new Image();
      let b = "b";
      let sc = 100;

      if (this.back == false) {
        b = "";
      }
      if (this.product.seria == 661) {
        b = "b";
      }

      nlt.src = `/images/naswietle/${b}nlt.webp`;
      nl.src = `/images/naswietle/${b}nl.webp`;
      nt.src = `/images/naswietle/${b}nt.webp`;

      nlt.onload = function() {
        self.nlt = nlt;
        self.nl = nl;
        self.nt = nt;
        if (nt.width == 0 || nl.width == 0 || nlt.width == 0) {
          self.drawOscieznicaParts();
        }
      };
    },
    drawOkleina: function() {
      // const folder = this.activeKolorTyp;
      var folder = this.product.kolor1typ;

      const okleinaObj = new Image();
      let kolor = this.kolorc;
      if (this.turnable == false) {
        if (this.product.wariant == "B" || this.product.wariant == "MB") {
          kolor = this.product.kolor6;
        } else {
          kolor = this.product.kolor;
        }
      } else {
        if (["B", "MB"].indexOf(this.product.wariant) > -1) {
          // console.log(this.product.seria)
          if (this.product.seria.indexOf("1") != -1) {
            kolor = this.selectedwidok == "Z" ? this.product.kolor6 : this.product.kolor5;
            folder = this.selectedwidok == "Z" ? this.product.kolor6typ : this.product.kolor5typ;
          } else {
            kolor = this.product.kolor6;
            folder = this.product.kolor6typ;
          }
        }
        // console.log(kolor)

        // if (this.product.seria == "20" || this.product.seria == "30") {
        //   if (this.product.wariant == "B" || this.product.wariant == "MB") {
        //     kolor = this.product.kolor6;
        //   } else {
        //     kolor = this.product.kolor;
        //   }
        // } else {
        //   if (this.product.wariant == "B" || this.product.wariant == "MB") {
        //     if (this.selectedwidok == "W") {
        //       kolor = this.product.kolor5;
        //     }
        //     if (this.selectedwidok == "Z") {
        //       kolor = this.product.kolor6;
        //     }
        //   } else {
        //
        //   }
        // }
      }
      if (kolor == "18") {
        kolor = "14";
      }
      // okleinaObj.src = `/images/okleiny/${kolor}.jpg`;
      let ext = "jpg";
      // folder = "xDEK";
      if (["DEK", "SKY"].includes(folder)) {
        ext = "WEBP";
      }
      okleinaObj.src = `/images/okleiny/${folder}/${kolor}.${ext}`;
      // console.log(okleinaObj.src);
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
      activeKolorTyp: "activeKolorTyp",
    }),
  },
};
</script>
