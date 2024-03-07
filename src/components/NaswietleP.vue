<template>
  <v-group :config="{ x: left, y: top }">
    <div v-if="['D1N01', 'D1N02', 'D1N03', 'D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
      <v-image
        id="okleina"
        :config="{
          image: okleinaimage,
          width: width,
          height: height,
          crop: { width: width * 2, height: height * 2, x: 1500, y: 10 },
        }"
      ></v-image>
      <v-image
        id="lewe"
        :config="{
          image: nl,
          y: grubosc,
          width: grubosc,
          height: height - 2 * grubosc,
          crop: { width: 90, height: 272, x: 0, y: 0 },
        }"
      ></v-image>
      <v-image
        id="prawe"
        :config="{
          image: nl,
          x: width,
          height: height - 2 * grubosc,
          y: grubosc,
          width: grubosc,
          scaleX: -1,
          crop: { width: 90, height: 110, x: 0, y: 0 },
        }"
      ></v-image>
      <v-image
        id="gora"
        :config="{
          image: nt,
          x: grubosc,
          height: grubosc,
          width: width - 2 * grubosc,
          crop: { width: 272, height: 90, x: 0, y: 0 },
        }"
      ></v-image>
      -->
      <v-image
        id="dol"
        :config="{
          image: nt,
          x: grubosc,
          height: grubosc,
          scaleY: -1,
          y: height,
          width: width - 2 * grubosc,
          crop: { width: 272, height: 90, x: 0, y: 0 },
        }"
      ></v-image>
      <v-image
        id="lewegora"
        :config="{
          image: nlt,
          width: grubosc,
          height: grubosc,
          crop: { width: 90, height: 90, x: 0, y: 0 },
        }"
      ></v-image>
      <v-image
        id="lewedol"
        :config="{
          image: nlt,
          scaleY: -1,
          y: height,
          width: grubosc,
          height: grubosc,
          crop: { width: 90, height: 90, x: 0, y: 0 },
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
          crop: { width: 90, height: 90, x: 0, y: 0 },
        }"
      ></v-image>
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
        id="grafika"
        :config="{
          image: okleinaimage5,
          x: grubosc,
          y: grubosc,
          width: width - 2 * grubosc,
          height: height - 2 * grubosc,
          crop: {
            width: (width - 2 * grubosc) * 4,
            height: (height - 2 * grubosc) * 4,

            x: grubosc * 4 + (500 - this.product.szerokoscnb2) / 4,
            y: 500,
          },
        }"
      ></v-image>
      <v-image
        v-if="['Pz', 'Lw'].indexOf(this.product.kierunek) == -1"
        id="grafika"
        :config="{ image: okleinaimage4, x: grubosc, y: grubosc, width: width - 2 * grubosc, height: height - 2 * grubosc, crop: { width: (width - 2 * grubosc) * 4, height: (height - 2 * grubosc) * 4, x: 1525 + grubosc * 4, y: 500 } }"
      ></v-image>
      <v-image
        v-else
        id="grafika"
        :config="{ image: okleinaimage4, x: grubosc, y: grubosc, width: width - 2 * grubosc, height: height - 2 * grubosc, crop: { width: (width - 2 * grubosc) * 4, height: (height - 2 * grubosc) * 4, x: grubosc * 4 + (500 - this.product.szerokoscnb2), y: 500 } }"
      ></v-image>
      <!-- <v-image
      id="grafika"
      :config="{
        image: okleinaimage4,
        x: grubosc,
        y: grubosc,
        width: width - 2 * grubosc,
        height: height - 2 * grubosc,
        crop: {
          width: (width - 2 * grubosc) * 4,
          height: (height - 2 * grubosc) * 4,

          x: grubosc * 4+(500-this.product.szerokoscnb2),
          y: 500,
        },
      }"
    ></v-image> -->
      <v-image
        id="okleina3"
        :config="{
          image: okleinaimage2,
          x: grubosc,
          y: grubosc,
          width: width - 2 * grubosc,
          height: height - 2 * grubosc,
        }"
        turnable="false"
      ></v-image>

      <!-- <v-image id="okleina3" :config="{image:okleinaimage2,x:grubosc,y:grubosc, width:width-2*grubosc,height:height-2*grubosc,crop:{width:325,height:1479-30,x:0,y:30} }" turnable="false"></v-image> -->

      <!-- <v-image id="okleina3" :config="{image:okleinaimage2,x:grubosc,y:grubosc, width:width-2*grubosc,height:height-2*grubosc ,crop:{width:100,height:1479,x:-200,y:0}}" turnable="false"></v-image> -->
      <!-- <v-rect id="lg" :config="{x:0,y:0,width:width,height:0.4,fill:'black',crop:{width:280,height:110,x:0,y:0}}"></v-rect> -->
      <!-- <v-rect id="ll" :config="{x:0,y:0,width:0.4,height:height,fill:'black',crop:{width:280,height:110,x:0,y:0}}"></v-rect> -->
      <!-- <v-rect id="lp" :config="{x:width,y:0,width:0.4,height:height,fill:'black',crop:{width:280,height:110,x:0,y:0}}"></v-rect> -->
      <!-- <v-rect id="szyba" :config="{x:grubosc,y:grubosc,width:width-2*grubosc,height:height-2*grubosc,fill:'#cceeff'}"></v-rect> -->
      <!-- <v-rect v-for="elem in paski" :config="{x:grubosc,y:elem,height:5,width:width-2*grubosc,fill:'#000099',opacity:0.3}"></v-rect> -->
      <div v-if="this.product.szyba2 == 'o4piaskPWzL'">
        <v-image
          id="LED"
          :config="{
            image: LED2,
            x: grubosc + margines,
            y: grubosc,
            width: width - 2 * grubosc,
            height: height - 2 * grubosc,
            crop: {
              width: (width - 2 * grubosc) * 4,
              height: (height - 2 * grubosc) * 4,

              x: grubosc * 4 + (500 - this.product.szerokoscnb2) / 4,
              y: 500,
            },
          }"
        ></v-image>
        <div v-if="this.selectedwidok == 'Z'">
          <div v-for="i in leds[0].ilosc" :key="i">
            <v-image
              v-if="leds[0].odstep2"
              id="LED"
              :config="{
                image: LED,
                x: grubosc + margines,
                y: (leds[0].gora + (([8].includes(i) ? 3 : [7, 6, 5].includes(i) ? 2 : [4, 3, 2].includes(i) ? 1 : 0) * leds[0].odstep + ([8, 7].includes(i) ? 4 : [6].includes(i) ? 3 : [5, 4].includes(i) ? 2 : [3].includes(i) ? 1 : 0) * leds[0].odstep2)) / 4,
                width: width - 2 * grubosc - 2 * margines,
                height: 25 / 4,
              }"
              turnable="false"
            ></v-image>

            <v-image
              v-if="leds[0].odstep3"
              id="LED"
              :config="{ image: LED, x: grubosc + margines, y: (leds[0].gora + (([4].includes(i) ? 2 : [3, 2].includes(i) ? 1 : 0) * leds[0].odstep + ([4, 3].includes(i) ? 1 : 0) * leds[0].odstep3)) / 4, width: width - 2 * grubosc - 2 * margines, height: 25 / 4 }"
              turnable="false"
            ></v-image>

            <v-image v-else id="LED" :config="{ image: LED, x: grubosc + margines, y: (leds[0].gora + (i - 1) * leds[0].odstep) / 4, width: width - 2 * grubosc - 2 * margines, height: 25 / 4 }" turnable="false"></v-image>
          </div>
        </div>
      </div>
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
          width: width + 25 / 4,
          height: height,
          crop: { width: width * 2, height: height * 2, x: 10, y: 10 },
        }"
      ></v-image>
      <v-line
        id="lg"
        :config="{
          points: [0, 25 / 4, width + 25 / 4, 25 / 4, width + 25 / 4, height, 0, height, 0, 0],
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
  props: ["width", "s", "height", "grubosc", "back", "turnable", "fill"],
  watch: {},
  data() {
    return {
      paski: [100, 200],
      margines: 0,
      nl: null,
      nlt: null,
      nt: null,
      okleinaimage: null,
      okleinaimage2: null,
      okleinaimage4: null,
      okleinaimage5: null,
      top: null,
      left: null,
      LED: null,
      LED2: null,
    };
  },
  watch: {
    back() {
      let self = this;
      setTimeout(function() {
        self.drawOscieznicaParts();
      }, 0);
    },
    "product.wzor": function() {
      this.drawOkleina2();
    },
    "product.kolor": function() {
      this.drawOkleina();
    },
    "product.wariant": function() {
      this.drawOkleina();
    },
    "product.szerokoscnb1": function() {
      this.drawOkleina2();
    },
    "product.szerokoscnb2": function() {
      this.drawOkleina2();
    },

    "product.wysokoscng": function() {
      this.drawOkleina2();
    },
    "product.baza": function() {
      this.drawOkleina2();
    },
    "product.typ": function() {
      this.drawOkleina2();
    },
    "product.szyba2": function() {
      this.drawOkleina2();
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
      this.drawOkleina2();
    },
    selectedwidok: function() {
      this.drawOkleina();
      this.drawOkleina2();
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

      if (this.product.typ == "D1N08") {
        kolor = this.product.kolor3;
      } else {
        if (this.turnable == false) {
          if (this.product.wariant == "B" || this.product.wariant == "MB") {
            kolor = this.product.kolor6;
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
      if (kolor == "18") {
        kolor = "14";
      }
      let ext = "jpg";
      // folder = "xDEK";
      if (["DEK", "SKY"].includes(folder)) {
        ext = "WEBP";
      }
      okleinaObj.src = `/images/okleiny/${folder}/${kolor}.${ext}`;
      //   console.log(okleinaObj.src);
      okleinaObj.onload = () => {
        this.okleinaimage = okleinaObj;
      };
    },
    drawOkleina2: function() {
      const okleinaObj2 = new Image();
      const okleinaObj4 = new Image();
      const okleinaObj5 = new Image();
      const LEDobj = new Image();
      const LEDobj2 = new Image();
      LEDobj.src = `/images/LED/LED w naświetlu.png`;
      let podklad = this.selectedwidok == "Z" ? "b" : "r";
      LEDobj2.src = `/images/naswietla/` + podklad + `.png`;
      LEDobj.onload = () => {
        this.LED = LEDobj;
      };
      LEDobj2.onload = () => {
        this.LED2 = LEDobj2;
      };
      let kolor = "n";
      let rozmiar = "";
      let tlo = this.product.szyba2 + ".png";
      let baza = this.product.szyba2;
      if (this.product.szyba2 == "g" || this.product.szyba2 == "b") {
        rozmiar = this.product.szerokoscnb2;
        tlo = "n.png";
        kolor = "g"; /*this.product.szyba2;*/
      }
      if (this.product.szyba2 == "28" || this.product.szyba2 == "29" || this.product.szyba2 == "08" || this.product.szyba2 == "p") {
        rozmiar = "";
        tlo = this.product.wzor + "/" + this.product.szyba2 + ".png";
        baza = this.product.baza;
      }

      if (this.product.szyba2 == "p2") {
        kolor = this.product.szyba2;
      }
      okleinaObj2.src = `/images/naswietla/${kolor}${rozmiar}.png`;
      okleinaObj2.onload = () => {
        this.okleinaimage2 = okleinaObj2;
      };
      okleinaObj4.src = `/images/naswietla/${tlo}`;
      // console.log(okleinaObj4.src)
      okleinaObj4.onload = () => {
        this.okleinaimage4 = okleinaObj4;
      };

      okleinaObj5.src = `/images/naswietla/${baza}.jpg`;
      okleinaObj5.onload = () => {
        this.okleinaimage5 = okleinaObj5;
      };
    },
  },
  created() {
    this.drawOscieznicaParts();
    this.drawOkleina();
    this.drawOkleina2();
  },
  computed: {
    ...mapState({
      product: "product",
      ledy: "ledy",
      selectedwidok: "selectedwidok",
    }),
    ...mapGetters({
      kolorc: "kolorc",
    }),
    leds() {
      let wzor = this.product.wzor;
      console.log();
      // return this.mixdanetab.find((el) => el.model == this.product.wzor) ? this.mixdanetab.find((el) => el.model == this.product.wzor).dane : {};
      return this.ledy.filter((el) => el.wzory.includes(this.product.wzor));
    },
  },
};
</script>

<style lang="css" scoped></style>
