<template>
  <v-group :config="{ x: 0, y: 0 }">
    <div v-if="['D1N01', 'D1N02', 'D1N03', 'D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
      <v-image id="okleina" :config="{ image: okleinaimage, width: width, height: height, crop: { width: width * 2, height: height * 2, x: 10, y: 10 } }"></v-image>
      <v-image id="lewe" :config="{ image: nl, y: grubosc, width: grubosc, height: height - 2 * grubosc, crop: { width: 90, height: 272, x: 0, y: 0 } }"></v-image>
      <v-image id="prawe" :config="{ image: nl, x: width, height: height - 2 * grubosc, y: grubosc, width: grubosc, scaleX: -1, crop: { width: 82, height: 110, x: 0, y: 0 } }"></v-image>
      <v-image id="gora" :config="{ image: nt, x: grubosc, height: grubosc, width: width - 2 * grubosc, crop: { width: 272, height: 90, x: 0, y: 0 } }"></v-image>
      <v-image id="dol" :config="{ image: nt, x: grubosc, height: grubosc, scaleY: -1, y: height, width: width - 2 * grubosc, crop: { width: 272, height: 90, x: 0, y: 0 } }"></v-image>
      <v-image id="lewegora" :config="{ image: nlt, width: grubosc, height: grubosc, crop: { width: 90, height: 90, x: 0, y: 0 } }"></v-image>
      <v-image id="lewedol" :config="{ image: nlt, scaleY: -1, y: height, width: grubosc, height: grubosc, crop: { width: 90, height: 90, x: 0, y: 0 } }"></v-image>
      <v-image id="prawegora" :config="{ image: nlt, x: width, height: grubosc, width: grubosc, scaleX: -1, crop: { width: 82, height: 90, x: 0, y: 0 } }"></v-image>
      <v-image
        id="prawedol"
        :config="{
          image: nlt,
          x: width,
          height: grubosc,
          width: grubosc,
          scaleX: -1,
          scaleY: -1,
          y: height,
          crop: { width: 90, height: 90, x: 0, y: 0 },
        }"
      ></v-image>
      <v-image
        id="tlo"
        :config="{
          image: okleinaimage5,
          x: grubosc,
          y: height - grubosc,
          width: width - 2 * grubosc,
          height: height - 2 * grubosc,
          scaleY: -1,
          crop: {
            width: (width - 2 * grubosc) * 4,
            height: (height - 2 * grubosc) * 4,
            x: (grubosc + (500 - this.product.szerokoscnb2) / 4) * 4,
            y: 500 - this.product.wysokoscng + grubosc * 4,
          },
        }"
      ></v-image>
      <!-- <v-image
        id="grafika"
        :config="{
          image: okleinaimage4,
          x: grubosc,
          y: height - grubosc,
          width: width - 2 * grubosc,
          height: height - 2 * grubosc,
          scaleY: -1,
          crop: {
            width: (width - 2 * grubosc) * 4,
            height: (height - 2 * grubosc) * 4,
            x: (grubosc + (500 - this.product.szerokoscnb2) / 4) * 4,
            y: 500 - this.product.wysokoscng + grubosc * 4,
          },
        }"
      ></v-image> -->
      <v-image
        id="okleina2"
        :config="{
          image: okleinaimage3,
          x: grubosc,
          y: grubosc,
          width: width - 2 * grubosc,
          height: height - 2 * grubosc,
        }"
      ></v-image>
      <!-- <v-rect id="szyba" :config="{x:grubosc,y:grubosc,width:width-2*grubosc,height:height-2*grubosc,fill:'#cceeff'}"></v-rect> -->
      <!-- <v-rect v-for="elem in paski" :config="{x:grubosc,y:elem,height:5,width:width-2*grubosc,fill:'#000099',opacity:0.3}"></v-rect> -->
      <v-line
        id="lg"
        :config="{
          points: [0, 0, grubosc, grubosc, width - grubosc, grubosc, width, 0, 0, 0, 0, height, grubosc, height - grubosc, width - grubosc, height - grubosc, width, height, width, 0],
          stroke: 'black',
          strokeWidth: 0.3,
        }"
      ></v-line>
      <v-rect id="Obramówka" :config="{ width: width, height: height, opacity: 0.15, fill: '#fff', x: 0, y: 0 }"></v-rect>
    </div>
    <div v-if="['D1N08'].indexOf(product.typ) >= 0">
      <v-image
        id="okleina"
        :config="{
          image: okleinaimage,
          x: width,
          y: -25 / 4,
          width: height,
          height: width,
          crop: { width: height * 2, height: width * 2, x: 10, y: 10 },
          rotation: 90,
        }"
      ></v-image>
      <v-line
        id="lg"
        :config="{
          points: [0, -25 / 4, width, -25 / 4, width, height - 25 / 4, 0, height - 25 / 4, 0, -25 / 4],
          stroke: 'black',
          strokeWidth: 0.5,
        }"
      ></v-line>
    </div>
  </v-group>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["width", "widthtc", "szerokoscall", "height", "grubosc", "back", "turnable", "fill"],
  watch: {},
  data() {
    return {
      paski: [100, 200],
      nl: null,
      nlt: null,
      nt: null,
      okleinaimage: null,
      okleinaimage3: null,
      okleinaimage4: null,
      okleinaimage5: null,
    };
  },
  watch: {
    back() {
      let self = this;
      setTimeout(function() {
        self.drawOscieznicaParts();
      }, 0);
    },
    "product.wariant": function() {
      this.drawOkleina();
    },
    "product.wzor": function() {
      this.drawOkleina3();
    },
    "product.kolor": function() {
      this.drawOkleina();
    },
    "product.kolor2": function() {
      this.drawOkleina();
    },
    "product.kolor3": function() {
      this.drawOkleina();
    },
    "product.kolor5": function() {
      this.drawOkleina();
    },
    "product.kolor6": function() {
      this.drawOkleina();
    },
    "product.szyba2": function() {
      this.drawOkleina3();
    },
    "product.baza": function() {
      this.drawOkleina3();
    },
    "product.wysokoscng": function() {
      this.drawOkleina3();
      // this.drawOkleina2();
    },
    selectedwidok: function() {
      this.drawOkleina();
      this.drawOscieznicaParts();
    },
    "product.kierunek": function() {
      this.drawOscieznicaParts();
    },
  },
  methods: {
    drawOscieznicaParts: function() {
      let self = this;
      let nlt = new Image();
      let nl = new Image();
      let nt = new Image();
      let b = "";

      if (this.back == true) {
        b = "b";
      }

      nlt.src = `/images/naswietle/nlt.png`;
      nl.src = `/images/naswietle/nl.png`;
      nt.src = `/images/naswietle/nt.png`;

      nlt.onload = function() {
        self.nlt = nlt;
        self.nl = nl;
        self.nt = nt;
        // console.log(nt.width);
        if (nt.width == 0 || nl.width == 0 || nlt.width == 0) {
          self.drawOscieznicaParts();
        }
      };
    },
    drawOkleina: function() {
      var folder = this.product.kolor1typ;
      const okleinaObj = new Image();
      let kolor = "";
      let g = "";

      if (this.product.typ == "D1N08") {
        kolor = this.product.kolor3;
      } else {
        if (this.turnable == false) {
          if (this.product.wariant == "B" || this.product.wariant == "MB") {
            kolor = this.product.kolor6;
            folder = this.product.kolor6typ;
          } else {
            kolor = this.product.kolor;
          }
          //   kolor = this.product.kolor6;
        } else {
          if (this.product.wariant == "B" || this.product.wariant == "MB") {
            if (this.selectedwidok == "W") {
              kolor = this.product.kolor5;
              folder = this.product.kolor5typ;
            }
            if (this.selectedwidok == "Z") {
              kolor = this.product.kolor6;
              folder = this.product.kolor6typ;
            }
          } else {
            kolor = this.kolorc;
          }
        }
      }

      if (this.$store.state.product.seria == "60") {
        g = "g";
      } else {
        g = "";
      }
      // okleinaObj.src = `/images/okleiny/${kolor}${g}.jpg`;
      if (kolor == "18") {
        kolor = "14";
      }

      let ext = "jpg";
      // folder = "xDEK";
      if (["DEK", "SKY"].includes(folder)) {
        ext = "WEBP";
      }
      okleinaObj.src = `/images/okleiny/${folder}/${kolor}.${ext}`;
      // okleinaObj.src = `/images/okleiny/${kolor}.jpg`;
      okleinaObj.onload = () => {
        // console.log(okleinaObj.src)
        this.okleinaimage = okleinaObj;
      };
    },
    drawOkleina3: function() {
      const okleinaObj3 = new Image();
      const okleinaObj4 = new Image();
      const okleinaObj5 = new Image();
      let kolorg = "n";
      let tlo = "n.png";
      // kolorg = this.product.szyba2;
      const okleinaObj2 = new Image();

      let rozmiarg = "";
      let rozmiarb = "";

      let baza = this.product.szyba2;
      // kolor = this.product.szyba2;
      if (this.product.szyba2 == "g" || this.product.szyba2 == "b") {
        rozmiarg = this.product.wysokoscng;
        rozmiarb = this.szerokoscall;
        tlo = "n.png";
        kolorg = "g"; /*this.product.szyba2;*/
      }
      if (this.product.szyba2 == "28" || this.product.szyba2 == "29" || this.product.szyba2 == "08" || this.product.szyba2 == "p") {
        rozmiarg = "";
        tlo = this.product.wzor + "/" + this.product.szyba2 + ".png";
        baza = this.product.baza;
        // kolor = this.product.baza;
      }
      if (this.product.szyba2 == "p2") {
        kolorg = this.product.szyba2;
      }
      okleinaObj3.src = `/images/naswietla/${kolorg}${rozmiarg}g.png`;
      okleinaObj3.onload = () => {
        this.okleinaimage3 = okleinaObj3;
      };
      okleinaObj4.src = `/images/naswietla/${tlo}`;
      okleinaObj4.onload = () => {
        this.okleinaimage4 = okleinaObj4;
      };

      okleinaObj5.src = `/images/naswietla/${baza}.jpg`;
      // console.log(okleinaObj5.src)
      okleinaObj5.onload = () => {
        this.okleinaimage5 = okleinaObj5;
      };
    },
  },
  created() {
    this.drawOscieznicaParts();
    this.drawOkleina();
    this.drawOkleina3();
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

<style lang="css" scoped></style>
