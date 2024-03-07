<template>
  <v-group :config="{ x: left, y: top }">
    <v-image id="okleina" :config="{ y: -top / 4, width: width, height: height - 3, image: okleinaimage, crop: { width: width * 3, height: height * 3, x: 500, y: 10 } }"></v-image>
    <v-image id="mixokleina" v-if="mixbool && this.product.wzor != 'FL1' && this.product.wzor != 'FL1A' && this.product.wzor != 'FL2'" :config="{y: -3,width: mixcCorrectWidth,height: height - 3,x: mixcCorrectX - 6,image: okleinaimage2,crop: {y: 991,width: mixc.cropwidth * 1.5,height: height - mixc.yy * 2,},}"></v-image>
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
    <v-image id="szyba2" :config="{ y: -3, width: width, height: height - 3, image: szybaimage2 }"></v-image>
    <v-image id="szyba" :config="{ y: -3, width: width, height: height - 3, image: szybaimage }"></v-image>
    <v-image
      id="tloczenie"
      :config="{ y: -3, width: width, height: height - 3, image: tloczenieimage }"
      v-if="(this.selectedwidok != 'Z' && (this.activeModel.typ == 'GD' || this.activeModel.typ == 't' || this.activeModel.typ == 'n')) || (this.activeModel.typ != 'GD' && this.product.wzor != '12A' && this.product.wzor != '12B' && this.product.wzor != '12C')"
    ></v-image>

    <v-image id="tloczenie" :config="{ y: -3, width: width, height: height - 3, image: tloczenieimage }" v-if="this.product.wzor == '12A' || this.product.wzor == '12B' || this.product.wzor == '12C'"></v-image>
    <!-- <v-image id="szyba" :config="{x:97,y:50,width:150/4,height:1560/4,image:szybaimage,crop:{width:((width)-2*grubosc)*4,height:(height-2*grubosc)*4,x:(s+grubosc-width)*4,y:500}}"></v-image> -->
    <!-- <v-image id="grafika" :config="{image:okleinaimage4,x:grubosc,y:grubosc, width:width-2*grubosc,height:height-2*grubosc,crop:{width:(width-2*grubosc)*4,height:(height-2*grubosc)*4,x:(s+grubosc-width)*4,y:500} }"></v-image> -->
    <v-image id="3d" :config="{ y: -top / 4, width: width, height: height - 3, image: tloczenieimage3d }" v-if="this.selectedwidok == 'Z' && (this.activeModel.typ == 'MG' || this.product.wzor == '51' || this.product.wzor == '52')"></v-image>
    <v-image v-if="(this.selectedwidok == 'Z' && this.product.kopniak == '2') || (this.selectedwidok == 'W' && this.product.kopniak == '1') || this.product.kopniak == '3'" id="tloczeniee" :config="{ y: -6, width: width, height: height, image: tloczenieimagee }"></v-image>
    <v-image v-if="this.selectedwidok == 'Z' && this.product.automatyka != '-'" id="automatyka" :config="{ width: width, height: height, image: automatykaImage }"></v-image>
    <v-image id="klamka" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage }"></v-image>
    <v-image id="rozeta górna" :config="{ y: 0 / 4, width: width, height: height, image: rozetaimage }" v-if="this.product.seria != '41'"></v-image>
    <v-image id="rozeta dolna" :config="{ y: 0 / 4, width: width, height: height, image: rozetaimagedol }" v-if="(this.product.sposobotw != 'KK' && this.product.sposobotw != 'KG' && this.product.sposobotw == 'KP' && this.selectedwidok == 'Z') || this.product.sposobotw == 'PP'"></v-image>
    <v-image id="zawiasy" :config="{ x: -8, y: 0 / 4, width: width, height: height, image: zawiasyimage }"></v-image>
    <!-- <v-image id="klamka2" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage2 }"></v-image> -->
    <v-image id="klamka3" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage3 }"></v-image>
    <v-image id="klamka4" :config="{ y: 0 / 4, width: width, height: height, image: klamkaimage4 }"></v-image>
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
        { model: "FC", dane: { x: 6, width: 144, correctx: 0, cropwidth: 100, correctwidth: 6 } },
        { model: "F1A", dane: { x: 166, width: 69, correctx: 8, cropwidth: 100, correctwidth: 0 } },
        { model: "F1B", dane: { x: 144, width: 44, correctx: 5, cropwidth: 100, correctwidth: 0 } },
        { model: "F1C", dane: { x: 98, width: 42, correctx: 5, cropwidth: 100, correctwidth: 0 } },
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
    "product.wzor": function() {
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
      this.drawKlamka();
      this.drawOkleina();
    },
    "product.seria": function() {
      this.drawKlamka();
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
    "product.inoxstrona": function() {
      this.drawTloczeniee();
      this.drawTloczenie();
      this.drawSzyba2();
      this.drawSzyba();
    },
    selectedwidok: function() {
      this.drawMix();
      this.drawTloczenie();
      this.drawOkleina();
      this.drawKlamka();
      this.drawSzyba();
    },
  },
  methods: {
    drawOkleina: function() {
      const imageObj = new Image();
      let kolor = "";
      if (this.turnable == false) {
        kolor = this.product.kolor;
      } else {
        if (this.product.wariant == "MB") {
          if (this.selectedwidok == "W") {
            kolor = this.product.kolor2;
          }
          if (this.selectedwidok == "Z") {
            kolor = this.product.kolor;
          }
        } else {
          kolor = this.kolorc;
        }
      }

      imageObj.src = `/images/okleiny/${kolor}.jpg`;
      imageObj.onload = () => {
        this.okleinaimage = imageObj;
      };
    },
    drawMix: function() {
      const imageObj = new Image();
      const lameleObj = new Image();
      if (this.product.wariant == "MB") {
        if (this.selectedwidok == "W") {
          imageObj.src = `/images/okleiny/${this.product.mixw}.jpg`;
        }
        if (this.selectedwidok == "Z") {
          imageObj.src = `/images/okleiny/${this.product.mixz}.jpg`;
        }
      } else {
        imageObj.src = `/images/okleiny/${this.product.mixz}.jpg`;
      }

      imageObj.onload = () => {
        this.okleinaimage2 = imageObj;
      };
      lameleObj.src = `/images/okleiny/${this.product.kolor7}.jpg`;
      lameleObj.onload = () => {
        this.lameleimage = lameleObj;
      };
    },
    drawKlamka: function() {
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
      let rozeta2 = "brak";
      // if ((this.selectedwidok == "Z" && this.product.sposobotw == "KP") || this.product.sposobotw == "PP") {
      //   if (this.product.wzor == "GF6" || this.activeModel.typ == "MG") {
      //     rozeta2 = "/RozPiersc_";
      //   }else{
      rozeta2 = "SlimSolo2";
      //   }
      // }
      let kolorek = this.product.pochwyt2;
      let klama = this.klamkac;
      let kolorOkuc = this.product.klamkakolor;

      let rozetakol = kolorOkuc;
      if (this.product.seria == "41" || this.product.seria == "661" || this.product.wzor == "GF6") {
        folder = "klamkibezrozet";
        folder2 = "41/";
      }
      // if (this.product.wzor == "GF6" || this.activeModel.typ == "MG") {
      //   rozeta = "/RozPiersc_";
      // }

      if (this.product.klamka.indexOf("x") >= 0) {
        imageObj.src = "/images/" + folder + "/" + this.klamkac.substring(0, this.klamkac.length - 1) + "_" + this.product.klamkakolor + ".png";
      } else {
        imageObj.src = "/images/" + folder + "/" + this.klamkac + "_" + this.product.klamkakolor + ".png";
        imageObj5.src = "/images/" + folder + "/" + rozeta + this.product.klamkakolor + ".png";
        if (this.product.sposobotw == "PP" && this.selectedwidok == "W") {
          imageObj5.src = "/images/" + folder + "/solo_" + this.product.klamkakolor + ".png";
        }
        // console.log(imageObj5.src)
      }
      // console.log(imageObj.src)

      imageObj2.src = "/images/tloczenia/01.png";
      imageObj3.src = "/images/tloczenia/01.png";
      imageObj4.src = "/images/tloczenia/01.png";
      // imageObj5.src = "/images/tloczenia/01.png";

      if (this.product.klamka.indexOf("SS") >= 0 || this.product.klamka.indexOf("SD") >= 0 || this.product.klamka.indexOf("SR") >= 0 || (this.product.klamka.indexOf("SL") >= 0 && this.product.klamka != "PockSLT20")) {
        if ((this.selectedwidok == "Z" && this.product.sposobotw == "KP") || this.product.sposobotw == "PP") {
          imageObj.src = "/images/tloczenia/01.png";

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

      if (this.product.sposobotw != "KP" && this.product.sposobotw != "PP") {
        rozeta = this.product.klamka;
      }

      if (this.product.seria != "661" && ((this.product.kierunek.indexOf("z") >= 0 && this.selectedwidok != "W") || (this.product.kierunek.indexOf("w") >= 0 && this.selectedwidok != "Z"))) {
        zawiasyObj.src = `/images/zawiasy/3_` + kolorOkuc + `.png`;
      } else {
        zawiasyObj.src = `/images/zawiasy/brak.png`;
      }

      // console.log(zawiasyObj.src);
      zawiasyObj.onload = () => {
        this.zawiasyimage = zawiasyObj;
      };
      if (this.product.seria == "661" || this.product.seria == "41") {
        rozetaObj.src = `/images/zawiasy/brak.png`;
      } else {
        rozetaObj.src = `/images/rozety/` + rozeta + `_` + kolorOkuc + `.png`;
      }
      if (kolorOkuc == "10335") {
        rozetakol = "10304";
      }
      rozetaObjDol.src = `/images/rozety/` + rozeta2 + `_` + rozetakol + `.png`;
      // console.log(rozetaObj.src);
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
      // console.log(imageObj.src)
      imageObj.onload = () => {
        this.szybaimage = imageObj;
      };
    },

    drawTloczenie: function() {
      this.tloczenieimage = null;
      const imageObj = new Image();
      this.tloczenieimage3d = null;
      const imageObj3d = new Image();
      let file = this.product.wzor;

      //   if (this.product.wzor == 'GL2' || this.product.wzor == 'GL2A' || this.product.wzor == 'GL3' || this.product.wzor == 'GL3A') {
      //     file = "GL5";

      //   console.log(file);
      //   }
      if ((this.product.wzor == "FL1" || this.product.wzor == "FL2") && this.product.inoxstrona == "2" && this.selectedwidok == "W" && this.product.szyba != "00") {
        file += "_WEW";
      }
      if ((this.product.wzor == "FL1" || this.product.wzor == "FL2") && this.product.inoxstrona == "2" && this.selectedwidok == "W" && this.product.szyba == "00") {
        file = "01";
      }
      if (this.activeModel.typ == "GL" && this.selectedwidok == "W") {
        file = "wew/" + file;
      }
      if (this.product.inoxkolor == "10304") {
        file += "_black";
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
            file += "_black";
          }
        }
      }

      if (this.inoxpelne == true) {
        file = this.product.wzor + "_PELNE";
      }

      imageObj.src = "/images/tloczenia/" + file + ".png";
      if (this.product.wzor == "51" || this.product.wzor == "52") {
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
        this.tloczenieimage = imageObj;
        //  console.log(imageObj.src);
      };

      // console.log(imageObj.src);
    },

    drawAutomatyka: function() {
      this.automatykaImage = null;
      const imageObj = new Image();

      let file = "";

      //  if (this.product.inoxkolor=='10304'){
      //  file = '_black';
      //  } else if (this.product.inoxkolor=='10301'){
      //  file = '';
      //  }

      //    if(typeof(this.tloczeniepcv) !='undefined'){
      //    if (this.tloczeniepcv==true){
      file = this.product.automatyka;
      //    }
      //  }

      //    if(this.inoxpelne==true){
      //      file = this.product.wzor+'_PELNE';
      //    }

      // imageObj.src = '/images/tloczenia/kopniak'+this.product.kopniakkolor+'.png';
      imageObj.src = "/images/automatyka/" + file + ".png";
      imageObj.onload = () => {
        this.automatykaImage = imageObj;
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
      activeKlamka: "activeKlamka",
      activeSotw: "activeSotw",
      kolorc: "kolorc",
    }),
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
        if (this.product.seria == 661) {
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
