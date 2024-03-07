<template>
  <div >
    <div id="Model" :key="'a'" class="" v-show="activeTab == 'Model'">
      <!-- <filtr class="p-3" :key="'c'" :attr="'kolekcja'" :folder="'kolekcje'" :scrollerdata="kolekcja.dane" :col="'5'"></filtr> -->
      <filtr class="p-3" :key="'c'" :attr="'kolekcja'" :folder="'kolekcje'" :scrollerdata="kolekcjafilter" :col="'5'"></filtr>
    </div>
  </div>
</template>

<script>
import Scroller from "@/components/Scroller.vue";
import filtr from "@/components/filtr.vue";
import Prezenter from "@/components/Prezenter.vue";
import Myselect from "@/components/Myselect.vue";
import Navbuttons from "@/components/Navbuttons.vue";
import Customimagebutton from "@/components/customimagebutton.vue";

import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["left", "top", "width", "height", "back", "turnable"],
  components: { Scroller, Prezenter, Myselect, Navbuttons, Customimagebutton, filtr },
  watch: {
    "product.wzor": function() {
      // this.$store.state.product.wariant = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].wariant ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].wariant : "S";
      // this.$store.state.product.sposobotw = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].sposobotw ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].sposobotw : this.sposobotwfilter[0].artnr;
      // this.$store.state.product.seria = this.$store.state.product.sposobotw == "KP" ? "41" : "31";
      // this.$store.state.product.klamka = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].klamka ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].klamka : this.klamkifilter2[0].artnr;
      // this.$store.state.product.pochwyty = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].pochwyty ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].pochwyty : "";
      // this.$store.state.product.klamkakolor = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].klamkakolor
      //   ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].klamkakolor
      //   : (this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr);
      // this.$store.state.product.kolor = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor : "04";
      // this.$store.state.product.pochwyt2 = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].pochwyt2 ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].pochwyt2 : "04";
      // this.$store.state.product.kolor2 = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor2 ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor2 : "04";
      // this.$store.state.product.kolor5 = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor5 ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor5 : "04";
      // this.$store.state.product.kolor6 = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor6 ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor6 : "04";
      // this.$store.state.product.kolor7 = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor7 ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor7 : "04";
      // this.$store.state.product.mixz = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].mixz ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].mixz : this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].kolor7;
      // this.$store.state.product.szyba = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].szyba ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].szyba : this.szybyFilter[0].artnr;
      // this.$store.state.product.baza = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].baza ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].baza : "10";
      // this.$store.state.product.inoxstrona = this.product.wzor == "GF6" ? this.inoxstrona.dane[2].artnr : (this.$store.state.product.inoxstrona = this.inoxstrona.dane[0].artnr);
      // this.$store.state.product.inoxkolor = this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].inoxkolor ? this.wzor.dane.filter((el) => el.artnr == this.$store.state.product.wzor)[0].inoxkolor : this.$store.getters.ramkakolorfilter[0].artnr;
    },
    // "product.pochwyty": function() {},
    "product.seria": function() {},
    "product.opcja": function() {},
    "product.wariant": function() {},
    "product.typ": function() {},
    "product.szerokoscnb1": function() {},
    "product.szerokoscnb2": function() {},
    "product.wysokoscng": function() {},
    "product.szyba": function() {},
    "product.sposobotw": function() {},
    "product.kolor1typ": function() {},
    "product.kolor2typ": function() {},
    "product.kolor3typ": function() {},
    "product.kolor4typ": function() {},
    "product.kolor5typ": function() {},
    "product.kolor6typ": function() {},
    "product.kolor7typ": function() {},
    "product.kolor": function() {
      let kolor = this.$store.state.product.kolor;
      if (kolor.length == 2) {
        this.$store.state.product.kolor1typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.$store.state.product.kolor1typ = "SKY";
        } else {
          this.$store.state.product.kolor1typ = "RAL";
        }
      }
    },
    "product.kolor6": function() {},
    "product.samozamykacz": function(val) {},
    "product.pochwyty": function() {},
    "product.klamka": function() {},
    "product.inoxstrona": function(newval, val) {},
    // "product.szyba": function () {
    //   if (this.$store.state.product.szyba != "00") {
    //     this.$store.state.product.inoxstrona ="3";
    //   }
    // },
    "product.pochwyty": function() {
      // this.$store.state.product.dlugosci = '50';
    },
  },
  data() {
    return {
      elems: [1, 2, 3, 4],
      showoptions: false,
    };
  },
  mounted() {},
  methods: {
    setActiveBackground(elem) {
      this.$store.commit("setActiveBackground", elem);
      this.$store.state.activebackground = elem;
    },
  },
  computed: {
    ...mapState({
      backgrounds: "backgrounds",
      product: "product",
      wzor: "wzor",
      wzor2: "wzor2",
      kolor: "kolor",
      szyba: "szyba",
      wzorytablica: "wzorytablica",
      szyba2: "szyba2",
      activeTab: "activeTab",
      kolekcja: "kolekcja",
      kierunek: "kierunek",
      sposobotw: "sposobotw",
      klamka: "klamka",
      klamkakolor: "klamkakolor",
      inoxkolor: "inoxkolor",
      inoxkolor2: "inoxkolor2",
      kopniakkolor: "kopniakkolor",
      inoxstrona: "inoxstrona",
      baza: "baza",
      inoxdwustr: "inoxdwustr",
      inoxlista: "inoxlista",
      seria: "seria",
      samozamykacz: "samozamykacz",
      wizjer: "wizjer",
      kopniak: "kopniak",
      elektrozaczep: "elektrozaczep",
      elektrozaczepr: "elektrozaczepr",
      automatyka: "automatyka",
      wariant: "wariant",
      activeKolorTyp: "activeKolorTyp",
      typ: "typ",
      typy: "typy",
      filtr: "filtr",
      szerokoscnb1: "szerokoscnb1",
      kodyrozmiaru: "kodyrozmiaru",
      wysokosci: "wysokosci",
      wysokoscip: "wysokoscip",
      wysokoscipg: "wysokoscipg",
      lameleiloscdane: "lameleiloscdane",
      opcja: "opcja",
      dym: "dym",
      pochwyty: "pochwyty",
      pochwytyfilter: "pochwytyfilter",
    }),
    ...mapGetters({
      kolekcjafilter: "kolekcjafilter",
      sposobotwfilter: "sposobotwfilter",
      wariantFilter: "wariantFilter",
      wariantFilter2: "wariantFilter2",
      activeKolorTyp: "activeKolorTyp",
      kolor1typFilter: "kolor1typFilter",
      kolor3typFilter: "kolor3typFilter",
      kolor7typFilter: "kolor7typFilter",
      kierunekfilter: "kierunekfilter",
      inoxpelne: "inoxpelne",
      czylamele: "czylamele",
      kolorFilter: "kolorFilter",
      kolorFilter2: "kolorFilter2",
      kolorFilter3: "kolorFilter3",
      kolorFilter4: "kolorFilter4",
      kolorFilter5: "kolorFilter5",
      kolorFilter6: "kolorFilter6",
      kolorFilter7: "kolorFilter7",
      kolorFilterp: "kolorFilterp",
      szybyFilter: "szybyFilter",
      szybyFilter2: "szybyFilter2",
      klamkifilter: "klamkifilter",
      klamkifilter2: "klamkifilter2",
      dlugosci: "dlugosci",
      //  szyba:'szyba',
      //  szyba2:'szyba2',
      wzorFilter: "wzorFilter",
      activeSotw: "activeSotw",
      activeKlamka: "activeKlamka",
      showInox: "showInox",
      ramkakolorfilter: "ramkakolorfilter",
      ramkakolorfilter2: "ramkakolorfilter2",
      ramkakolorfilter3: "ramkakolorfilter3",
      klamkakolorfilter: "klamkakolorfilter",
      wzor2Filter2: "wzor2Filter2",
      seriafilter: "seriafilter",
      //  inoxstronaf:'inoxstrona',
      samozamykaczFilter: "samozamykaczFilter",
      samozamykaczFilter2: "samozamykaczFilter2",
      KOPNIAKFilter: "KOPNIAKFilter",
      KOPNIAKkolorFilter: "KOPNIAKkolorFilter",
      filtr: "filtr",
      kolekcjafilter: "kolekcjafilter",
      samkolorfilter: "samkolorfilter",
      //  cena:'cena',
      szerokosc: "szerokosc",
      szerokoscnb1: "szerokoscnb1",
      wysokosc: "wysokosc",
      activeinoxKolor: "activeinoxKolor",
      activeTyp: "activeTyp",
      activeModel: "activeModel",
      activeModel2: "activeModel2",
      activeTyp2: "activeTyp2",
      pochwytyfilter: "pochwytyfilter",
    }),
  },
};
</script>

<style scoped></style>
