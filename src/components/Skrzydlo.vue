<template>
  <v-group :config="{ x: left, y: top }">
    <v-image id="okleina" :config="{ y: -top / 4, width: width, height: height - 3, image: okleinaimage, crop: { width: width * 3, height: height * 3, x: 500, y: 10 } }"></v-image>
    <v-image
      id="mixokleina"
      v-if="mixbool && this.product.wzor != 'FL1' && this.product.wzor != 'FL1A' && this.product.wzor != 'FL2'"
      :config="{
        y: -3,
        width: mixcCorrectWidth,
        height: height - 3,
        x: mixcCorrectX - 6,
        image: okleinaimage2,
        crop: { width: mixc.width * 3, height: height * 3, x: 500, y: 10 },
      }"
    ></v-image>
    <v-group v-if="this.product.lamele == 'J' && this.product.wzor == '01' && this.product.kierunek.indexOf('w') >= 0 && selectedwidok == 'Z'">
      <v-image
        v-for="i in this.product.lameleilosc"
        :key="i + 'l'"
        id="lamele"
        :config="{
          y: -3,
          width: 41 / 4,
          height: height - 5,
          x: 15 / 4 + (56 * (i - 1)) / 4,
          image: lameleimage,
          crop: { width: (41 / 4) * 3, height: height * 3, x: 500 + 100 * Math.random() * 13, y: 10 },
        }"
      ></v-image>
      <v-rect
        id="Obramówka"
        v-for="i in this.product.lameleilosc"
        :key="i"
        :config="{
          y: -3,
          width: 41 / 4,
          height: height - 5,
          x: 15 / 4 + (56 * (i - 1)) / 4,
          stroke: '#222',
          strokeWidth: 0.75,
        }"
      ></v-rect>
    </v-group>
    <v-group v-if="this.product.wzor == '3D3'">
      <v-image
        id="3D3"
        v-for="i in 13"
        :key="i"
        :config="{
          image: lameleimage,
          x: 100 / 4,
          width: 600 / 4,
          height: 8 / 4,
          y: 100 / 4 + (147.5 * (i - 1)) / 4,
          stroke: '#222',
          strokeWidth: 0.25,
          crop: { width: (600 / 4) * 3, height: (8 / 4) * 3, x: 0, y: 100 },
        }"
      ></v-image>
    </v-group>
    <v-group v-if="this.product.wzor == '3D4'">
      <v-image
        id="3D4"
        v-for="i in 7"
        :key="i"
        :config="{
          image: lameleimage,
          x: 68 / 4 + (78 * (i - 1)) / 4,
          width: 8 / 4,
          height: 1880 / 4,
          y: 49 / 4,
          stroke: '#222',
          strokeWidth: 0.25,
          crop: { width: (8 / 4) * 3, height: (1880 / 4) * 3, x: 0, y: 100 },
        }"
      ></v-image>
    </v-group>
    <v-group v-if="this.product.wzor == '3D2'">
      <v-image
        id="3D2"
        v-for="i in 9"
        :key="i"
        :config="{
          x: 72 / 4 + (45 * (i - 1)) / 4,
          width: 8 / 4,
          height: 1920 / 4 - (45 * (i - 1)) / 4,
          y: 49 / 4 + (45 * (i - 1)) / 4,
          stroke: '#222',
          strokeWidth: 0.25,
          image: lameleimage,
        }"
      ></v-image>
      <v-image
        id="3D22"
        v-for="i in 9"
        :key="'3D2' + i"
        :config="{
          x: 72 / 4 + (45 * (i - 1)) / 4,
          width: width - 156 / 4 - (45 * (i - 1)) / 4,
          height: 8 / 4,
          y: 49 / 4 + (45 * (i - 1)) / 4,
          stroke: '#222',
          strokeWidth: 0.25,
          image: lameleimage,
        }"
      ></v-image>
    </v-group>
    <v-image id="szyba2" :config="{ y: -3, width: width, height: height - 3, image: szybaimage2 }"></v-image>
    <v-image id="szyba" :config="{ y: -3, width: width, height: height - 3, image: szybaimage }"></v-image>
    <v-image
      id="tloczenie"
      :config="{ y: -3, width: width, height: height - 3, image: tloczenieimage }"
      v-if="(this.selectedwidok != 'Z' && (this.activeModel.typ == 'GD' || this.activeModel.typ == 't' || this.activeModel.typ == 'n')) || (this.activeModel.typ != 'GD' && !['12A', '12B', '12C', '3D3', '3D4', '3D2', '3D1'].includes(this.product.wzor))"
    ></v-image>

    <v-image id="tloczenie" :config="{ y: -3, width: width, height: height - 3, image: tloczenieimage }" v-if="this.product.wzor == '12A' || this.product.wzor == '12B' || this.product.wzor == '12C'"></v-image>
    <!-- <v-image id="szyba" :config="{x:97,y:50,width:150/4,height:1560/4,image:szybaimage,crop:{width:((width)-2*grubosc)*4,height:(height-2*grubosc)*4,x:(s+grubosc-width)*4,y:500}}"></v-image> -->
    <!-- <v-image id="grafika" :config="{image:okleinaimage4,x:grubosc,y:grubosc, width:width-2*grubosc,height:height-2*grubosc,crop:{width:(width-2*grubosc)*4,height:(height-2*grubosc)*4,x:(s+grubosc-width)*4,y:500} }"></v-image> -->
    <v-image id="3d" :config="{ y: -top / 4, width: width, height: height - 3, image: tloczenieimage3d }" v-if="this.activeModel.typ == 'MG' || this.product.wzor == '51'"></v-image>

    <v-group v-if="this.product.wzor == '3D1'">
      <v-group v-for="linia in this.linie" :key="linia.linia">
        <v-image
          :config="{
            x: (56 + (linia.linia - 1) * 29.7) / 4,
            width: 8 / 4,
            height: linia.h1 / 4,
            y: linia.gora / 4,
            stroke: '#222',
            strokeWidth: 0.25,
            image: lameleimage,
          }"
        ></v-image>
        <v-image
          :config="{
            x: (56 + (linia.linia - 1) * 29.7) / 4,
            width: 8 / 4,
            height: linia.h2 / 4,
            y: (linia.gora + linia.h1 + linia.o1) / 4,
            stroke: '#222',
            strokeWidth: 0.25,
            image: lameleimage,
          }"
        ></v-image>
        <v-image
          v-if="linia.h3"
          :config="{
            x: (56 + (linia.linia - 1) * 29.7) / 4,
            width: 8 / 4,
            height: linia.h3 / 4,
            y: (linia.gora + linia.h1 + linia.o1 + linia.h2 + linia.o2) / 4,
            stroke: '#222',
            strokeWidth: 0.25,
            image: lameleimage,
          }"
        ></v-image>
        <v-image
          v-if="linia.h4"
          :config="{
            x: (56 + (linia.linia - 1) * 29.7) / 4,
            width: 8 / 4,
            height: linia.h4 / 4,
            y: (linia.gora + linia.h1 + linia.o1 + linia.h2 + linia.o2 + linia.h3 + linia.o3) / 4,
            stroke: '#222',
            strokeWidth: 0.25,
            image: lameleimage,
          }"
        ></v-image>
      </v-group>
    </v-group>
    <v-image v-if="(this.selectedwidok == 'Z' && this.product.kopniak == '2') || (this.selectedwidok == 'W' && this.product.kopniak == '1') || this.product.kopniak == '3'" id="tloczeniee" :config="{ y: -6, width: width, height: height, image: tloczenieimagee }"></v-image>
    <v-image v-if="this.selectedwidok == 'Z' && this.product.automatyka != '-'" id="automatyka" :config="{ width: width, height: height, image: automatykaImage }"></v-image>
    <v-image id="klamka" :config="{ y: korektay / 4, width: width, height: height, image: klamkaimage }"></v-image>
    <v-image id="rozeta górna" :config="{ y: 0 / 4, width: width, height: height, image: rozetaimage }" v-if="this.product.seria != '41'"></v-image>
    <!-- <v-image id="rozeta dolna" :config="{ y: 0 / 4, width: width, height: height, image: rozetaimagedol }" v-if="(this.product.sposobotw != 'KK' && this.product.sposobotw != 'KG' && this.product.sposobotw == 'KP' && this.selectedwidok == 'Z') || this.product.sposobotw == 'PP'"></v-image> -->
    <v-image id="rozeta dolna" :config="{ y: 0 / 4, width: width, height: height, image: rozetaimagedol }" v-if="(this.product.sposobotw == 'KP' && (this.product.klamkaWew == 'Lava' || this.selectedwidok == 'Z')) || this.product.sposobotw == 'PP'"></v-image>
    <v-image id="zawiasy" :config="{ x: -8, y: 0 / 4, width: width, height: height, image: zawiasyimage }"></v-image>
    <!-- <v-image id="klamka2" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage2 }"></v-image> -->
    <v-image id="klamka3" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage3 }"></v-image>
    <v-image id="klamka4" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage4 }"></v-image>
    <v-image v-if="this.product.progled && this.selectedwidok == 'Z'" id="prog_led" :config="{ y: 0 / 4, width: width, height: height, image: prog_led }"></v-image>
    <!-- <v-image v-if="(this.product.klamka!='P120o90')" id="klamka" :config="{width:width,height:height,image:klamkaimage}"></v-image> -->
    <v-rect :config="{ width: width, height: height - 3, stroke: '#222', strokeWidth: 0.5, x: 0, y: -top / 4 }"></v-rect>
    <!-- <v-rect v-if="this.product.kierunek.indexOf('z') >= 0 && selectedwidok!='W' || this.product.kierunek.indexOf('w') >= 0 && selectedwidok!='Z' && this.turnable=='false'"     
      :config="{width: width,height: height-3,stroke: '#222',strokeWidth: .5,x: 0,y: -top/4,}"></v-rect> -->
    <!-- <v-image
      v-if="this.product.seria == '661' && this.product.sposobotw != 'KK' && selectedwidok == 'Z'"
      id="okleina" :config="{width: 31,height: 100,x: width - 30,y: height / 2 - 50,width: 8,height: 42,x: width - 23,y: height / 2 - 19,image: okleinaimage,crop: { width: 8 * 3, height: 42 * 3, x: 1100 + 22, y: 630 + 58 },
      }"
    ></v-image> -->
    <!-- <v-image v-if="(this.product.seria == '661' || this.product.wzor == 'GF6' || this.activeModel.typ == 'MG') && selectedwidok == 'Z'" id="Pierścień" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage5 }"></v-image> -->
    <v-image v-if="this.product.sposobotw != 'KK' && this.product.sposobotw != 'KG' && selectedwidok == 'Z'" id="Pierścień" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage5 }"></v-image>
    <v-rect id="Obramówka" :config="{ width: width, height: height + 3, opacity: 0.17, fill: '#fff', x: 0, y: -top / 4, strokeWidth: 0.75, stroke: 'black' }"></v-rect>
  </v-group>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["left", "top", "width", "height", "back", "turnable"],
  data() {
    return {
      korektay: 0,
      okleinaimage: null,
      okleinaimage2: null,
      lameleimage: null,
      klamkaimage: null,
      rozetaimage: null,
      rozetaimagedol: null,
      zawiasyimage: null,
      klamkaimage2: null,
      klamkaimage3: null,
      klamkaimage4: null,
      prog_led: null,
      klamkaimage5: null,
      szybaimage: null,
      szybaimage2: null,
      tloczenieimage: null,
      tloczenieimage3d: null,
      tloczenieimage2: null,
      tloczenieimagee: null,
      automatykaImage: null,
      tloczenieimagee2: null,
      mixdanetab: [
        // { model: "FL1", dane: { x: (this.width - 38) / 2, width: 50, correctx: 2, cropwidth: 102, correctwidth: 2, yy: 760 } },
        // { model: "FL1A", dane: { x: (this.width - 38) / 2, width: 50, correctx: 2, cropwidth: 102, correctwidth: 2, yy: 760 } },
        // { model: "FL2", dane: { x: (this.width - 38) / 2, width: 50, correctx: 2, cropwidth: 102, correctwidth: 2, yy: 760 } },
        { model: "FB", dane: { x: 6, width: 154, correctx: 0, cropwidth: 100, correctwidth: 6 } },
        // { model: "FC", dane: { x: 6, width: 144, correctx: 0, cropwidth: 100, correctwidth: 6 } },
        { model: "FC", dane: { x: 152, width: 83, correctx: 5, cropwidth: 100, correctwidth: 3 } },
        { model: "F1A", dane: { x: 166, width: 69, correctx: 8, cropwidth: 100, correctwidth: 0 } },
        { model: "F1B", dane: { x: 144, width: 44, correctx: 5, cropwidth: 100, correctwidth: 0 } },
        { model: "F1C", dane: { x: 100, width: 40, correctx: 5, cropwidth: 100, correctwidth: 0 } },
        { model: "F1D", dane: { x: 52, width: 42, correctx: 5, cropwidth: 100, correctwidth: 0 } },
        { model: "F2A", dane: { x: 165, width: 68, correctx: 6, cropwidth: 100, correctwidth: 0 } },
        { model: "F2B", dane: { x: 164.5, width: 70, correctx: 8, cropwidth: 100, correctwidth: 0 } },
        // { model: "F2B", dane: { x: 163, width: 72, correctx: 6, cropwidth: 100, correctwidth: 0 } },
        { model: "F4A", dane: { x: 111, width: 16, correctx: 4, cropwidth: 20, correctwidth: 0 } },
        { model: "F4B", dane: { x: 162, width: 15, correctx: 6, cropwidth: 19, correctwidth: 0 } },
        { model: "F4C", dane: { x: 52, width: 15, correctx: 2, cropwidth: 20, correctwidth: 0 } },
        { model: "F4D", dane: { x: 162, width: 15, correctx: 5, cropwidth: 20, correctwidth: 0 } },
        { model: "F4E", dane: { x: 162, width: 15, correctx: 5, cropwidth: 20, correctwidth: 0 } },
        { model: "F6A", dane: { x: 102, width: 35, correctx: 4, cropwidth: 100, correctwidth: 0 } },
        { model: "F6B", dane: { x: 151, width: 37, correctx: 7, cropwidth: 100, correctwidth: 0 } },
        { model: "F6C", dane: { x: 54, width: 35, correctx: 0, cropwidth: 100, correctwidth: 0 } },
        { model: "F6D", dane: { x: 151, width: 37, correctx: 7, cropwidth: 100, correctwidth: 0 } },
        { model: "F6E", dane: { x: 151, width: 35, correctx: 7, cropwidth: 100, correctwidth: 0 } },
      ],
    };
  },
  watch: {
    "product.wariant": function() {
      this.drawOkleina();
    },
    "product.kolor": function() {
      this.drawOkleina();
      this.drawTloczenie();
      this.drawKlamka();
    },
    "product.kolor2": function() {
      this.drawMix();
      this.drawOkleina();
    },
    "product.kolor5": function() {
      this.drawOkleina();
    },
    "product.kolor6": function() {
      this.drawMix();
      this.drawOkleina();
    },
    "product.kolor7": function() {
      this.drawTloczenie();
      this.drawMix();
    },
    "product.mixz": function() {
      this.drawMix();
      //   this.drawOkleina();
    },
    "product.lamele": function() {
      this.drawMix();
    },
    "product.mixw": function() {
      this.drawMix();
    },
    "product.klamka": function() {
      this.drawKlamka();
    },
    "product.klamkaWew": function() {
      this.drawKlamka();
    },
    "product.protect": function() {
      this.drawKlamka();
    },
    "product.kopniak": function() {
      this.drawTloczeniee();
      // this.drawAutomatyka();
    },
    "product.automatyka": function() {
      this.drawAutomatyka();
    },
    "product.kopniakkolor": function() {
      this.drawTloczeniee();
    },
    "product.szyba": function() {
      this.drawOkleina();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawTloczenie();
      this.drawKlamka();
    },
    "product.baza": function() {
      this.drawSzyba2();
      this.drawSzyba();
      this.drawTloczenie();
    },
    "product.selectedwidok": function() {
      this.drawTloczenie();
      this.drawTloczeniee();
      this.drawAutomatyka();
      this.drawKlamka();
    },
    "product.kolekcja": function() {
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawKlamka();
      this.drawOkleina();
    },
    "product.inspiracjanr": function() {
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawKlamka();
      this.drawOkleina();
    },
    "product.inspiracja": function() {
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawKlamka();
      this.drawOkleina();
      this.drawProg();
    },
    "product.wzor": function() {
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawKlamka();
      this.drawOkleina();
      this.drawProg();
    },
    "product.seria": function() {
      this.drawKlamka();
      this.drawProg();
    },
    "product.kierunek": function() {
      this.drawKlamka();
    },
    "product.inoxkolor": function() {
      this.drawTloczenie();
      this.drawTloczeniee();
    },
    "product.klamkakolor": function() {
      this.drawKlamka();
    },
    "product.pochwyt": function() {
      this.drawKlamka();
    },
    "product.pochwyt2": function() {
      this.drawKlamka();
    },
    "product.sposobotw": function() {
      this.drawTloczenie();
      this.drawKlamka();
    },
    "product.rozeta": function() {
      this.drawKlamka();
    },
    "product.progled": function() {
      this.drawProg();
    },
    "product.inoxstrona": function() {
      this.drawTloczeniee();
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
    },
    selectedwidok: function() {
      // this.korektay();
      this.drawMix();
      this.drawTloczenie();
      this.drawOkleina();
      this.drawKlamka();
      this.drawSzyba();
    },
  },
  methods: {
    // korektay: function(){
    //   return 100
    // },
    drawOkleina: function() {
      // const folder = this.activeKolorTyp;
      var folder = this.product.kolor1typ;

      // imageObj.src = `/images/okleiny/${folder}/${kolor}.jpg`;
      // this.selectedwidok = "W"
      // this.selectedwidok = "Z"
      const imageObj = new Image();
      let kolor = "";
      if (this.turnable == false) {
        kolor = this.product.kolor;
      } else {
        if (this.product.wariant == "MB" || this.product.wariant == "B") {
          if (this.selectedwidok == "W") {
            kolor = this.product.kolor2;
            folder = this.product.kolor2typ;
          }
          if (this.selectedwidok == "Z") {
            kolor = this.product.kolor;
          }
        } else {
          kolor = this.kolorc;
        }
      }
      let ext = "jpg";
      // folder = "xDEK";
      if (["DEK", "SKY"].includes(folder)) {
        ext = "WEBP";
      }
      // if (folder == "TOP" || 1 > 0) {
      // folder = "TOP";
      // ext = "webp";
      // kolor = "dab-bielony 25";
      // kolor = "ALPINE LAKE 25";
      // }

      // imageObj.src = `/images/okleiny/${folder}/${kolor}.jpg`;
      imageObj.src = `/images/okleiny/${folder}/${kolor}.${ext}`;
      // console.log(imageObj.src);
      imageObj.onload = () => {
        this.okleinaimage = imageObj;
      };
    },
    drawMix: function() {
      var folder = this.product.kolor7typ;

      let ext = "jpg";
      // folder = "xDEK";
      if (["DEK", "SKY"].includes(folder)) {
        ext = "WEBP";
      }
      const imageObj = new Image();
      const lameleObj = new Image();
      if (this.product.wariant == "MB") {
        if (this.selectedwidok == "W") {
          imageObj.src = `/images/okleiny/${folder}/${this.product.mixw}.${ext}`;
        }
        if (this.selectedwidok == "Z") {
          imageObj.src = `/images/okleiny/${folder}/${this.product.mixz}.${ext}`;
        }
      } else {
        imageObj.src = `/images/okleiny/${folder}/${this.product.mixz}.${ext}`;
      }

      imageObj.onload = () => {
        this.okleinaimage2 = imageObj;
      };
      // lameleObj.src = `/images/okleiny/${this.product.kolor7}.jpg`;
      lameleObj.src = `/images/okleiny/${folder}/${this.product.kolor7}.${ext}`;
      // console.log(lameleObj.src);
      lameleObj.onload = () => {
        this.lameleimage = lameleObj;
      };
    },
    drawProg: function() {
      const imageObj = new Image();
      imageObj.src = "/images/led/Podświetlenie progu.png";
      // imageObj.src = "/images/led/7039.jpg";
      imageObj.onload = () => {
        // console.log(imageObj.src);
        this.prog_led = imageObj;
      };
    },
    drawKlamka: function() {
      this.product.wzor == "3D2" && this.selectedwidok == "Z" && this.product.klamka.indexOf(120) > -1 ? (this.korektay = 240) : (this.korektay = 0);

      const imageObj = new Image();
      const zawiasyObj = new Image();
      const rozetaObj = new Image();
      const rozetaObjDol = new Image();
      const imageObj2 = new Image();
      const imageObj3 = new Image();
      const imageObj4 = new Image();
      const imageObj5 = new Image();

      let folder = "klamkibezrozet";
      let folder2 = "";
      // let rozeta = "solo";
      let rozeta = "slimsolo";
      let rozeta2 = "SlimSolo";
      // if ((this.selectedwidok == "Z" && this.product.sposobotw == "KP") || this.product.sposobotw == "PP") {
      //   if (this.product.wzor == "GF6" || this.activeModel.typ == "MG") {
      //     rozeta2 = "/RozPiersc_";
      //   }else{
      rozeta2 = this.product.rozeta;
      //   }
      // }
      let kolorek = this.product.pochwyt2;
      let klama = this.klamkac;
      let kolorOkuc = this.product.klamkakolor;
      // if (this.product.rozeta == "Piersc") {
      //   rozeta2 = "RozPiersc";
      // }

      let rozetakol = kolorOkuc;
      if (this.product.seria == "41" || this.product.seria == "661" || this.product.wzor == "GF6") {
        folder = "klamkibezrozet";
        folder2 = "41/";
      }
      // if (this.product.wzor == "GF6" || this.activeModel.typ == "MG") {
      // if (this.selectedwidok == "Z" && this.product.sposobotw == "KP" && this.product.rozeta != "STD") {
      // rozeta2 = "RozPiersc";
      // }
      if (this.selectedwidok == "Z" && this.product.sposobotw == "KP" && this.product.seria == "661") {
        rozeta2 = "RozPiersc";
      }

      if (this.product.klamka.indexOf("x") >= 0 && this.selectedwidok == "Z") {
        imageObj.src = "/images/" + folder + "/" + this.klamkac.substring(0, this.klamkac.length - 1) + "_" + this.product.klamkakolor + ".png";
      } else {
        imageObj.src = "/images/" + folder + "/" + this.klamkac + "_" + this.product.klamkakolor + ".png";
        // imageObj5.src = "/images/" + folder +  "/" +rozeta + this.product.klamkakolor + ".png";Przemek 2023-0512
        imageObj5.src = "/images/tloczenia/01.webp";
        if (this.product.sposobotw == "PP" && this.selectedwidok == "W") {
          imageObj5.src = "/images/" + folder + "/solo_" + this.product.klamkakolor + ".png";
        }
      }
      // console.log(imageObj.src);

      imageObj2.src = "/images/tloczenia/01.webp";
      imageObj3.src = "/images/tloczenia/01.webp";
      imageObj4.src = "/images/tloczenia/01.webp";
      // imageObj5.src = "/images/tloczenia/01.webp";

      if (this.product.klamka.indexOf("SS") >= 0 || this.product.klamka.indexOf("SD") >= 0 || this.product.klamka.indexOf("SR") >= 0 || (this.product.klamka.indexOf("SL") >= 0 && this.product.klamka.indexOf("Pock") == -1 && this.product.klamka != "PockSLT20")) {
        if ((this.selectedwidok == "Z" && this.product.sposobotw == "KP") || this.product.sposobotw == "PP") {
          imageObj.src = "/images/tloczenia/01.webp";

          imageObj2.src = `/images/SPACE/` + folder2 + this.product.klamkakolor + `.png`;
          // console.log()
          imageObj3.src = `/images/SPACE/` + this.klamkac.substring(2, 4) + this.klamkac.substring(8, 10) + `.png`;
          if (this.product.klamka.indexOf("SL") >= 0) {
            kolorek = 0;
          }
          imageObj4.src = `/images/SPACE/` + this.klamkac.substring(0, 4) + `_` + kolorek + `.png`;

          // console.log(imageObj4.src);
        }
      }

      imageObj.onload = () => {
        // console.log(imageObj.src);
        this.klamkaimage = imageObj;
      };

      if (this.product.sposobotw == "PP") {
        rozeta2 = "SlimSoloX";
      }
      if (this.product.sposobotw == "KP") {
        rozeta = this.product.klamkaWew;
      }
      if (this.product.sposobotw == "KK" || this.product.sposobotw == "KG") {
        rozeta = this.product.klamka;
      }
      if (this.product.sposobotw == "KP" && this.product.klamkaWew == "Lava") {
        if (this.product.rozeta == "RozPiersc" && this.selectedwidok == "Z") {
          rozeta2 = "RozPiersc"; /*this.product.rozeta;*/
        } else {
          rozeta2 = this.product.klamkaWew + "X";
        }
      }

      if (this.product.seria != "661" && ((this.product.kierunek.indexOf("z") >= 0 && this.selectedwidok != "W") || (this.product.kierunek.indexOf("w") >= 0 && this.selectedwidok != "Z"))) {
        zawiasyObj.src = `/images/zawiasy/3_` + kolorOkuc + `.webp`;
      } else {
        zawiasyObj.src = `/images/zawiasy/brak.webp`;
      }

      // console.log(zawiasyObj.src);
      zawiasyObj.onload = () => {
        this.zawiasyimage = zawiasyObj;
      };
      if (["10698", "ZywCDZlot", "ZywOENieb"].indexOf(kolorOkuc) > -1) {
        rozetakol = "10304";
      }
      if (this.product.seria == "661" || this.product.seria == "41") {
        rozetaObj.src = `/images/zawiasy/brak.webp`;
      } else {
        // rozetaObj.src = `/images/rozety/` + rozeta + `_` + kolorOkuc + `.png`;
        rozetaObj.src = `/images/rozety/` + rozeta + `_` + rozetakol + `.png`;
      }
      // console.log(rozetaObj.src);
      rozetaObjDol.src = `/images/rozety dol/` + rozeta2 + `_` + rozetakol + `.png`;
      // console.log(rozetaObjDol.src);
      rozetaObj.onload = () => {
        this.rozetaimage = rozetaObj;
      };
      rozetaObjDol.onload = () => {
        this.rozetaimagedol = rozetaObjDol;
      };
      imageObj2.onload = () => {
        this.klamkaimage2 = imageObj2;
      };
      imageObj3.onload = () => {
        this.klamkaimage3 = imageObj3;
      };
      imageObj4.onload = () => {
        this.klamkaimage4 = imageObj4;
      };
      imageObj5.onload = () => {
        this.klamkaimage5 = imageObj5;
      };
    },
    // baza
    drawSzyba2() {
      this.szybaimage2 = null;
      const imageObj = new Image();
      // imageObj.src = '/images/naswietla/nn.jpg';
      //   if (this.product.szyba == "00") {
      //     imageObj.src = "/images/szyby/01_00.png";
      //   } else {
      if (this.product.wzor == "47A" || this.product.wzor == "47" || this.product.wzor == "48" || this.product.wzor == "50") {
        imageObj.src = "/images/baza/" + this.product.wzor + "_" + this.product.baza + ".png";
        // console.log(imageObj.src)
      } else {
        imageObj.src = "/images/szyby/01_00.png";
      }
      //   }
      imageObj.onload = () => {
        this.szybaimage2 = imageObj;
      };
    },

    drawSzyba() {
      this.szybaimage = null;
      const imageObj = new Image();

      let tyl = "";
      if (this.selectedwidok == "W" && this.activeModel.typ == "GL") {
        var slowo = this.product.wzor;
        //   alert(slowo);
        var litera = slowo.slice(slowo.length - 1, slowo.length);
        //   alert(litera)
        if (litera == "A" || litera == "C") {
          imageObj.src = "/images/szyby/" + "GLA" + "_" + this.szybac + "_wew.png";
        } else {
          imageObj.src = "/images/szyby/" + "GL" + "_" + this.szybac + "_wew.png";
        }
        // alert(imageObj.src);
      } else {
        // imageObj.src = '/images/naswietla/nn.jpg';
        if (this.product.szyba == "00") {
          imageObj.src = "/images/szyby/01_00.png";
        } else {
          // if (this.product.wzor == "47Aa" || this.product.wzor == "47"){
          //     imageObj.src = "/images/szyby/" + this.odpszyb + "_" + this.product.baza + this.szybac + ".png";
          // }else{
          if (this.selectedwidok == "W" && this.product.wzor == "G4") {
            tyl = "tyl/";
          }
          imageObj.src = "/images/szyby/" + tyl + this.odpszyb + "_" + this.szybac + ".png";
          // }
        }
      }
      // console.log(imageObj.src);
      imageObj.onload = () => {
        this.szybaimage = imageObj;
      };
    },

    drawTloczenie: function() {
      const wzor = this.product.wzor;
      this.tloczenieimage = null;
      const imageObj = new Image();
      this.tloczenieimage3d = null;
      const imageObj3d = new Image();
      let file = this.product.wzor;
      if (wzor.substring(0, 2) == "RL") {
        file = wzor.substring(0, 3);
      }

      //   if (this.product.wzor == 'GL2' || this.product.wzor == 'GL2A' || this.product.wzor == 'GL3' || this.product.wzor == 'GL3A') {
      //     file = "GL5";

      //   console.log(file);
      //   }
      // if ((this.product.wzor == "FL1" || this.product.wzor == "FL2") && this.product.inoxstrona == "2" && this.selectedwidok == "W" && this.product.szyba != "00") {
      //   file += "_WEW";
      // }
      // if ((this.product.wzor == "FL1" || this.product.wzor == "FL2") && this.product.inoxstrona == "2" && this.selectedwidok == "W" && this.product.szyba == "00") {
      //   file = "01";
      // }
      if (this.activeModel.typ == "GL" && this.selectedwidok == "W") {
        file = "wew/" + file;
      }

      if (this.product.inoxkolor == "10304") {
        if (this.product.wzor.substring(0, 2) == "RL") {
          if((this.selectedwidok == "Z" && this.product.kolor.length == 2)||(this.selectedwidok == "W" && this.product.kolor2.length == 2)){
            file += "_black";
          }
        }
      }
      if (this.product.inoxkolor == "1") {
        file += "_1";
      }
      if (this.product.inoxkolor == "2") {
        file += "_2";
      }
      if (this.product.inoxkolor == "3") {
        file += "_3";
      }

      if (typeof this.tloczeniepcv != "undefined") {
        if (this.tloczeniepcv == true) {
          file = this.product.wzor + "_00";
          if (this.product.inoxkolor == "10304") {
            // file += "_black";
          }
        }
      }

      if (this.inoxpelne == true) {
        file = this.product.wzor + "_PELNE";
      }

      imageObj.src = "/images/tloczenia/" + file + ".png";
      if (this.product.wzor == "51") {
        imageObj3d.src = "/images/" + this.product.wzor + "/" + this.product.wzor + "_" + this.product.kolor7 + ".png";
        // console.log(imageObj3d.src);
        imageObj3d.onload = () => {
          this.tloczenieimage3d = imageObj3d;
        };
      }
      if (this.activeModel.typ == "MG") {
        imageObj3d.src = "/images/MYGLASS/" + this.product.wzor + ".png";
        // console.log(imageObj3d.src);
        imageObj3d.onload = () => {
          this.tloczenieimage3d = imageObj3d;
        };
      }
      // imageObj3d.src = "/images/51/" + this.product.wzor + "_06.png";
      // console.log(imageObj.src);
      imageObj.onload = () => {
        // console.log(imageObj.src);
        this.tloczenieimage = imageObj;
      };

      // console.log(imageObj.src);
    },

    drawAutomatyka: function() {
      this.automatykaImage = null;
      const automatykaObj = new Image();

      automatykaObj.src = "/images/automatyka/" + this.product.automatyka + ".webp";
      automatykaObj.onload = () => {
        this.automatykaImage = automatykaObj;
      };
    },
    drawTloczeniee: function() {
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

      imageObj.src = "/images/tloczenia/kopniak" + this.product.kopniakkolor + ".png";
      imageObj.onload = () => {
        this.tloczenieimagee = imageObj;
      };
    },
  },
  computed: {
    ...mapState({
      product: "product",
      kolekcja: "kolekcja",
      selectedwidok: "selectedwidok",
      kierunek: "product.kierunek",
      mixkolorlista: "mixkolorlista",
    }),
    ...mapGetters({
      kolekcja: "kolekcja",
      odpszyb: "odpszyb",
      inoxpelne: "inoxpelne",
      activeModel: "activeModel",
      activeKolorTyp: "activeKolorTyp",
      activeKlamka: "activeKlamka",
      activeSotw: "activeSotw",
      kolorc: "kolorc",
    }),
    linie() {
      return [
        { linia: 1, gora: 460, h1: 599.58, o1: 744.36, h2: 161.06 },
        { linia: 2, gora: 460 - 20.33, h1: 49.89, o1: 58.33, h2: 466.69, o2: 739.61, h3: 180.84 },
        { linia: 3, gora: 460 - 40.66, h1: 55.87, o1: 96.99, h2: 463.15, o2: 681.22, h3: 193.98 },
        { linia: 4, gora: 460 - 61, h1: 63.1, o1: 138.44, h2: 508.46, o2: 586.39, h3: 194.36 },
        { linia: 5, gora: 460 - 81.33, h1: 71.5, o1: 183.76, h2: 585.12, o2: 450.21, h3: 203.24 },
        { linia: 6, gora: 460 - 101.66, h1: 81.04, o1: 234.71, h2: 564.21, o2: 383.67, h3: 237.01 },
        { linia: 7, gora: 460 - 113.94, h1: 83.64, o1: 294.65, h2: 514.07, o2: 368.01, h3: 241.91 },
        { linia: 8, gora: 460 - 117.25, h1: 74.46, o1: 375.91, h2: 426.39, o2: 393.92, h3: 226.87 },
        { linia: 9, gora: 460 - 117.25, h1: 54.56, o1: 424.62, h2: 322.84, o2: 479.17, h3: 210.8 },
        { linia: 10, gora: 460 - 117.25, h1: 72.83, o1: 432.6, h2: 251.87, o2: 525.1, h3: 211.48 },
        { linia: 11, gora: 460 - 133.05, h1: 102.96, o1: 428.7, h2: 202.56, o2: 531, h3: 235.27 },
        { linia: 12, gora: 460 - 150.84, h1: 148.76, o1: 411.38, h2: 166.59, o2: 511.86, h3: 269.59 },
        { linia: 13, gora: 460 - 162.06, h1: 175.61, o1: 403.05, h2: 140.69, o2: 481.35, h3: 305.39 },
        { linia: 14, gora: 460 - 145.85, h1: 129.05, o1: 436.76, h2: 126.99, o2: 435.4, h3: 343.65 },
        { linia: 15, gora: 460 - 168.4, h1: 114.69, o1: 473.54, h2: 122.99, o2: 373.6, h3: 386.09 },
        { linia: 16, gora: 460 - 215.99, h1: 155.66, o1: 476.52, h2: 124.91, o2: 294.02, h3: 436.31 },
        { linia: 17, gora: 460 - 269.63, h1: 221.29, o1: 457.23, h2: 132.89, o2: 229.55, h3: 463.06 },
        { linia: 18, gora: 460 - 322.9, h1: 278.85, o1: 439.96, h2: 148.94, o2: 216.97, h3: 448.75 },
        { linia: 19, gora: 460 - 346.11, h1: 299.39, o1: 442.89, h2: 154.22, o2: 218.43, h3: 426.8 },
        { linia: 20, gora: 460 - 355.14, h1: 298.35, o1: 295.71, h2: 9.14, o2: 170.1, h3: 141.66, o3: 230.44, h4: 396.92 },
        { linia: 21, gora: 460 - 354.21, h1: 277.69, o1: 303.03, h2: 36.76, o2: 176.78, h3: 128.37, o3: 242.25, h4: 373.62 },
        { linia: 22, gora: 460 - 341.94, h1: 227.28, o1: 328.76, h2: 41.2, o2: 200.71, h3: 118.17, o3: 258.2, h4: 358.27 },
        { linia: 23, gora: 460 - 324.1, h1: 165.43, o1: 360.37, h2: 35.57, o2: 229.96, h3: 110.02, o3: 278.21, h4: 347.79 },
        { linia: 24, gora: 460 - 303.78, h1: 163.29, o1: 336.26, h2: 41.25, o2: 237.31, h3: 103.33, o3: 302.33, h4: 336.77 },
        { linia: 25, gora: 460 - 280.64, h1: 160.89, o1: 313.87, h2: 52.78, o2: 230.8, h3: 97.77, o3: 330.66, h4: 325.13 },
        { linia: 26, gora: 460 - 254.26, h1: 158.15, o1: 288.57, h2: 50.89, o2: 234.4, h3: 93.15, o3: 363.37, h4: 312.77 },
        { linia: 27, gora: 460 - 224, h1: 154.91, o1: 228.58, h2: 89.2, o2: 224.91, h3: 89.35, o3: 400.75, h4: 299.57 },
        { linia: 28, gora: 460 - 188.92, h1: 150.92, o1: 149.85, h2: 155.72, o2: 198.39, h3: 86.35, o3: 443.2, h4: 285.38 },
        { linia: 29, gora: 460 - 147.5, h1: 145.69, o1: 66, h2: 222.24, o2: 167.7, h3: 84.21, o3: 491.27, h4: 270.02 },
      ];
    },
    mixc() {
      return this.mixdanetab.find((el) => el.model == this.product.wzor) ? this.mixdanetab.find((el) => el.model == this.product.wzor).dane : {};
    },
    mixcCorrectX() {
      return this.back == true ? this.mixc.x + this.mixc.correctx : this.mixc.x;
    },
    mixcCorrectY() {
      return this.back == true ? this.mixc.y + this.mixc.correcty : this.mixc.y;
    },
    mixcCorrectWidth() {
      return this.back == true ? this.mixc.width + this.mixc.correctwidth : this.mixc.width;
    },
    mixbool() {
      if (this.product.wzor) {
        return this.mixkolorlista.indexOf(this.product.wzor) >= 0 && (this.product.wariant == "M" || this.product.wariant == "MB") ? true : false;
      } else {
        return false;
      }
    },
    szybac() {
      if (typeof this.product.szyba != "undefined") {
      }
      if (typeof this.product.szyba != "undefined") {
        if (this.product.szyba == "19") {
          return this.product.szyba.replace("19", "06");
        } else {
          return this.product.szyba;
        }
      }
    },
    klamkac() {
      if (this.selectedwidok == "W" && this.activeSotw.artnr == "KG") {
        // alert('3');
        return this.product.klamka.slice(0, -1);
      } else if (this.selectedwidok == "W" && this.product.sposobotw == "KP") {
        // console.log("this.product.klamka");
        // alert('2');

        return this.product.klamkaWew;
        if (this.product.seria == 661 || this.product.rozeta == "Piersc") {
          return "Lava";
        } else {
          return "SlimSolo";
        }
      } else {
        // alert('1');
        return this.product.klamka;
      }
    },
    tloczeniepcv() {
      return this.activeModel.typ == "PCV" && this.product.szyba == "00" ? true : false;
    },
  },
  created() {
    this.drawOkleina();
    this.drawKlamka();
    this.drawSzyba();
    this.drawSzyba2();
    this.drawMix();
    this.drawTloczenie();
    this.drawTloczeniee();
    this.drawAutomatyka();
  },
};
</script>

<style lang="css" scoped></style>
