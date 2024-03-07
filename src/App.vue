<template>
  <div id="app">
    <!-- Router -->
    <!-- <router-link to="/">Go to Home</router-link> -->
    <!-- <router-link to="/about">Go to About</router-link> -->
    <!-- <router-view></router-view> -->
    <div>
      <tabs style="background: #292929;z-index: 1;"></tabs>
    </div>

    <div v-if="activeTab == 'protect'" class="protect">
      <div style="display:flex;flex-direction:column;gap:51px">
        <div
          class="card"
          @click="
            product.protect = 'dom';
            handle('inspiracja');
          "
        >
          <div class="flex-1 text-center">
            <span>Do domu</span>
          </div>
          <img alt="" src="/images/konfigurator/step1/dom.webp" />
        </div>

        <div
          class="card"
          @click="
            product.protect = 'blok';
            product.seria = '60';
            handle('inspiracja');
          "
        >
          <div class="flex-1 text-center">
            <span>Do mieszkania</span>
          </div>
          <img alt="" src="/images/konfigurator/step1/mieszkanie.webp" />
        </div>
      </div>
    </div>

    <div v-if="activeTab == 'inspiracja'" class="protect">
      <div style="display:flex;flex-direction:column;gap:51px">
        <div
          class="card"
          @click="
            product.inspiracja = 'nie';
            // handle('Model');
            if (product.protect != 'blok') {
              // handle('plus');
              product.plus = 'nie';
              handle('Model');
            } else {
              product.plus = 'nie';
              handle('Model');
            }
            product.wzor = '01';
          "
        >
          <div class="flex-1 text-center">
            <span>Zaprojektuj <br />swoje drzwi</span>
          </div>
          <img alt="" v-if="product.protect == 'dom'" src="/images/konfigurator/step2/drzwi.webp" />
          <img alt="" v-else src="/images/konfigurator/step2/zaprojektuj drzwi Protect.webp" />
        </div>

        <!-- <div class="card" onclick="window.location.href='https://wiked.pl/inspiracje'"> -->
        <div
          class="card"
          @click="
            product.inspiracja = 'tak';
            product.inspiracjanr = product.protect == 'blok' ? 'P1' : 't1';
            handle('Inspiracje');
          "
        >
          <div class="flex-1 text-center">
            <span>Przejrzyj inspiracje</span>
          </div>
          <img alt="" v-if="product.protect == 'dom'" src="/images/konfigurator/step2/inpiracje.webp" />
          <img alt="" v-else src="/images/konfigurator/step2/przejrzyj inspiracje protect.webp" />
        </div>
      </div>
    </div>

    <div v-if="activeTab == 'plus'" class="protect">
      <div style="display:flex;flex-direction:column;gap:51px">
        <div
          class="card"
          @click="
            product.plus = 'nie';
            handle('Model');
            product.wzor = '01';
          "
        >
          <div class="flex-1 text-center">
            <span>Wszystkie</span>
          </div>
          <img alt="" v-if="product.protect == 'dom'" src="/images/konfigurator/step2/drzwi.webp" />
          <img alt="" v-else src="/images/konfigurator/step2/zaprojektuj drzwi Protect.webp" />
        </div>

        <!-- <div class="card" onclick="window.location.href='https://wiked.pl/inspiracje'"> -->
        <div
          class="card"
          style="position: relative;"
          @click="
            product.plus = 'tak';
            product.seria = '23';
            product.wzor = '01';
            product.kolor = '04';
            handle('Model');
          "
        >
          <div class="flex-1 text-center">
            <span>Od ręki</span>
          </div>
          <img alt="" v-if="product.protect == 'dom'" src="/images/konfigurator/step2/plus.webp" />
          <div>
            <img style="position: absolute;right: 15px;top:15px;width: 142px;height: 16px;" src="/images/konfigurator/step2/plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex" style="flex-direction: column;" v-show="activeTab != 'inspiracja' && activeTab != 'protect'" :class="activeTab == 'inspiracja' || activeTab == 'protect' || activeTab == 'plus' ? 'ups' : ''">
      <!-- <tabs style="background: #292929;z-index: 1;"></tabs> -->
      <div class="d-flex lewy" :class="activeTab == 'inspiracja' || activeTab == 'protect' ? 'ups' : ''">
        <div class="d-flex flex-1" v-if="activeTab != 'Podsumowanie'">
          <!-- <filtry id="filtry" v-if="activeTab == 'Model' && product.protect == 'dom'" onclick="$(this).attr('title','')"></filtry> -->
          <filtry v-show="product.plus != 'tak'" id="filtry" v-if="(activeTab == 'Model' && product.protect == 'dom') || product.inspiracja == 'tak'" onclick="$(this).attr('title','')"></filtry>
          <div class="filtryinspiracje" v-if="product.inspiracja === 'tak' && product.protect === 'dom' && activeTab === 'Inspiracje'">
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'wszystkie';
              "
              :class="product.filtryinspiracjeitem === 'wszystkie' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Wszystkie inspiracje
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'bestsellery';
              "
              :class="product.filtryinspiracjeitem === 'bestsellery' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Bestsellery
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'tradycjonalisty';
              "
              :class="product.filtryinspiracjeitem === 'tradycjonalisty' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Drzwi dla tradycjonalisty
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'indywidualisty';
              "
              :class="product.filtryinspiracjeitem === 'indywidualisty' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Drzwi dla indywidualisty
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'minimalisty';
              "
              :class="product.filtryinspiracjeitem === 'minimalisty' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Drzwi dla minimalisty
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'wizjonera';
              "
              :class="product.filtryinspiracjeitem === 'wizjonera' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Drzwi dla wizjonera
            </div>
            <div
              @click="
                handle('Inspiracje');
                product.filtryinspiracjeitem = 'kinomana';
              "
              :class="product.filtryinspiracjeitem === 'kinomana' ? 'active' : ''"
              class="filtryinspiracjeitem"
            >
              Drzwi dla kinomana
            </div>
          </div>

          <konfigurator style="flex-1"></konfigurator>
        </div>
        <div :class="activeTab == 'Podsumowanie' ? '' : 'ukryj'" class="podsumowanie" v-show="product.inspiracja == 'nie' || (product.inspiracja == 'tak' && product.inspiracjanr != '')" :style="activeTab != 'Podsumowanie' ? 'min-width: 555px;' : ''">
          <div :class="activeTab == 'Podsumowanie' ? 'last' : 'podsumowanie2'">
            <prezenter class="mt-auto desktop" v-if="activeTab == 'Podsumowanie'"></prezenter>
            <div class="awr">
              <switcher id="sw" class="ab"></switcher>
              <wizualizacja class="fitCenter nomobile"></wizualizacja>
            </div>
            <div>
              <div class="cena bg-success text-center text-light">
                <span v-if="product.plus == 'tak'">
                  <a class="text-light" href="https://wiked.pl/gdzie-kupic/" target="_blank">Zapytaj o cenę</a>
                </span>
                <span v-else
                  >Cena zestawu: <span class="bold">{{ parseInt(priceAll) }} zł</span></span
                >
              </div>
              <podsumowanie></podsumowanie>
              <div class="cena" hidden v-if="activeTab == 'Podsumowanie'">
                Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.
              </div>
              <pdf class="mt-3" v-if="activeTab == 'Podsumowanie'" />

              <!-- Modal -->
              <div onclick="document.querySelector('#myModall').style.display = 'none'" id="myModall" role="dialog" hidden>
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header bg-info">
                      <div class="bl">Informacja</div>
                      <div class="br" onclick="document.querySelector('#myModall').style.display = 'none'">
                        <i class="fa fa-times pointer m-0" data-dismiss="modal"></i>
                      </div>
                    </div>
                    <div v-if="activeTyp.artnr != 'D1N08'" class="modal-body b-none">Uwaga! Wymiar naświetla może wynosić od 20 do 80 cm, liczone co 1 cm. <br /><br />Wartości podane w konfiguratorze mają charakter przykładowy.</div>
                    <div v-if="activeTyp.artnr == 'D1N08'" class="modal-body b-none">
                      Portale dedykowane są wyłącznie do drzwi otwieranych do wewnątrz. Minimalna szerokość ściany, na którą montowana jest ościeżnica do drzwi z portalem wynosi 15 cm. Wymagany jest montaż licujący ościeżnicę ze ścianą wewnętrzną. W przypadku zamówienia portalu oraz drzwi w różnych
                      kolorach, adapter ościeżnicy zostanie wykonany w kolorze ościeżnicy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from "@/components/pdf.vue";
import Tabs from "@/components/Tabs.vue";
import Konfigurator from "@/components/Konfigurator.vue";
import filtry from "@/components/filtry.vue";
import Wizualizacja from "@/components/Wizualizacja.vue";
import Wizualizacja2 from "@/components/Wizualizacja2.vue";
import switcher from "@/components/Switch.vue";
import Prezenter from "@/components/Prezenter.vue";
import Podsumowanie from "@/components/Podsumowanie.vue";
import Modal from "@/components/Modal.vue";
import Navbuttons from "@/components/Navbuttons.vue";
import scroller from "@/components/Scroller.vue";

import Customimagebutton from "@/components/customimagebutton.vue";
// import $ from 'jquery'
// import Drzwi from '@/components/Drzwi.vue';

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import Drzwi from "./components/Drzwi.vue";
import { EventBus } from "@/event-bus.js";

export default {
  props: ["left", "top", "width", "height", "back", "turnable"],

  components: {
    Konfigurator,
    Tabs,
    Wizualizacja,
    Wizualizacja2,
    switcher,
    Prezenter,
    Podsumowanie,
    Modal,
    Navbuttons,
    pdf,
    filtry,
    Drzwi,
    scroller,
    Customimagebutton,
  },
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
    product: {
      deep: true,
      handler: function(val) {
        // jquery('div')[1].hide()
        // this.getBasicPrice();
        // this.getCenaOkucia();
        // if(this.$store.state.product.wariant=='S'){
        //   this.$store.state.product.kolor2 = this.$store.state.product.kolor;
        // }
      },
    },
  },
  mounted() {
    // let wzory=this.$store.state.wzor.dane
    // let wzorIndex = [Math.floor(Math.random() * wzory.length)]
    // console.log(wzory[wzorIndex].artnr)
    // this.$store.state.product.wzor=wzory[wzorIndex].artnr
    if (window.location.href.length > 36) {
    }
  },
  data() {
    return {};
  },
  methods: {
    refresh() {
      if (confirm("Kliknij OK aby zacząć od początku") == true) {
        window.location.reload();
      }
    },
    // next() {
    //   this.$store.dispatch("setPrevTab");
    //   this.showIn();
    // },
    // prev() {
    //   this.$store.dispatch("setNextTab");
    //   this.showIn();
    // },
    showIn() {
      this.show = false;
      let self = this;
      setTimeout(function() {
        self.show = true;
      }, 400);
    },
    handle(arg) {
      this.$store.dispatch("setActiveTab", arg);
    },
    performSwitch() {
      this.$store.state.selectedwidok == "Z" ? (this.$store.state.selectedwidok = "W") : (this.$store.state.selectedwidok = "Z");
    },
  },
  beforeMount() {
    // if (window.location.href.length < 37) {
    //   this.$store.state.product.kolor = "06";
    //   this.$store.state.product.klamkakolor = "10302";
    //   this.$store.state.product.inoxkolor = "10301";
    //   this.$store.state.product.kierunek = "Pw";
    // }
  },
  computed: {
    h() {
      let h = 1;
      if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
        h = document.documentElement.clientHeight * 0.4;
      } else {
        h = document.documentElement.clientWidth * 0.4;
      }
      return h;
    },
    w() {
      let h = 1;
      if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
        h = document.documentElement.clientHeight * 0.4;
      } else {
        h = document.documentElement.clientWidth * 0.4;
      }
      let w = (h / 248) * 122;
      return w;
    },
    heightc() {
      let HEIGHT = 2080;
      if (
        this.product.typ == "D1N04"
        // || this.product.typ == "D1N05"
        // || this.product.typ == "D1N06"
        // || this.product.typ == "D1N07"
      ) {
        return HEIGHT + this.product.wysokoscng;
      } else {
        return HEIGHT;
      }
    },
    lewe() {
      return ["D1N03", "D1N07"].indexOf(this.product.typ) >= 0 ? "prawe" : ["D1N05"].indexOf(this.product.typ) >= 0 ? "gorne" : "kolor";
    },
    prawe() {
      return ["D1N06", "D1N07"].indexOf(this.product.typ) >= 0 ? "gorne" : "kolor";
    },
    typ() {
      return this.product.typ == "D1" ? "kolor" : "wymiary";
    },
    widthtc() {
      let HEIGHT = 2080;
      let WIDTH = 1025;
      if (this.product.typ == "D1N01") {
        return WIDTH + this.product.szerokoscnb1;
      } else if (this.product.typ == "D1N01") {
        return WIDTH + this.product.szerokoscnb1;
      } else if (this.product.typ == "D1N02") {
        return WIDTH + this.product.szerokoscnb2;
      } else if (this.product.typ == "D1N03") {
        return WIDTH + this.product.szerokoscnb1 + this.product.szerokoscnb2;
      } else if (this.product.typ == "D1N04") {
        return WIDTH * (HEIGHT / (HEIGHT + this.product.wysokoscng));
      } else if (this.product.typ == "D1N05") {
        return (WIDTH + this.product.szerokoscnb1) * (HEIGHT / (HEIGHT + this.product.wysokoscng));
      } else if (this.product.typ == "D1N06") {
        return (WIDTH + this.product.szerokoscnb2) * (HEIGHT / (HEIGHT + this.product.wysokoscng));
      } else if (this.product.typ == "D1N07") {
        return (WIDTH + this.product.szerokoscnb1 + this.product.szerokoscnb2) * (HEIGHT / (HEIGHT + this.product.wysokoscng));
      } else if (this.product.typ == "D1N08") {
        return (WIDTH + this.product.szerokoscnb1 + this.product.szerokoscnb2) * (HEIGHT / (HEIGHT + this.product.wysokoscng));
      } else {
        return WIDTH;
      }

      // if (this.product.typ == "D1N06" ||  this.product.typ == "D1N07")
      // {
      //   // return widthtc=widthtc*0.9;
      // }
    },
    // test() {
    // wizcon()
    // return this.$store.state.ceny.count;
    // },
    ...mapState({
      wysokosci: "wysokosci",
      product: "product",
      product: "product",
      cenytablica: "cenytablica",
      cenyPochwytTablica: "cenyPochwytTablica",
      mixkolorlista: "mixkolorlista",
      activeTab: "activeTab",
      seria: "seria",
      elektrozaczep: "elektrozaczep",
      automatyka: "automatyka",
      wzor: "wzor",
      inoxstrona: "inoxstrona",
      kierunki: "kierunki",
    }),
    ...mapGetters({
      samkolorfilter: "samkolorfilter",
      samozamykaczFilter: "samozamykaczFilter",
      klamkakolorfilter: "klamkakolorfilter",
      klamkifilter2: "klamkifilter2",
      dlugosci: "dlugosci",
      pochwytyfilter: "pochwytyfilter",
      sposobotwfilter: "sposobotwfilter",
      kierunekfilter: "kierunekfilter",
      activeTyp2: "activeTyp2",
      showInox: "showInox",
      ramkakolorfilter2: "ramkakolorfilter2",
      szybyFilter: "szybyFilter",
      kolorFilter: "kolorFilter",
      kolor3typFilter: "kolor3typFilter",
      wariantFilter2: "wariantFilter2",
      wzorFilter: "wzorFilter",
      samozamykaczCena: "SamozamykaczCena",
      lustroCena: "LustroCena",
      lustroCena2: "LustroCena2",
      lustroCena3: "LustroCena3",
      //wizjerCena:'wizjerCena',
      ezaczepCena: "EzaczepCena",
      ezaczeprCena: "EzaczeprCena",
      kopniakCena: "KopniakCena",
      dymCena: "dymCena",
      KolorNas: "KolorNas",
      DEERSTONE: "DEERSTONE",
      activeKlamka: "activeKlamka",
      cenaKlamka: "CenaKlamka",
      priceAll: "PriceAll",
      basicPrice: "BasicPrice",
      cenaOkucia: "CenaOkucia",
      Kolor: "Kolor",
      CenaZasilacz: "CenaZasilacz",
      bikolorCena: "BikolorCena",
      CenaLamele: "CenaLamele",
      czylamele: "czylamele",
      mixkolorCena: "MixkolorCena",
      CenaNaswietlaG: "CenaNaswietlaG",
      CenaNaswietlaNB1: "CenaNaswietlaNB1",
      CenaNaswietlaNB2: "CenaNaswietlaNB2",
      wysokosc: "wysokosc",
      szerokosc: "szerokosc",
      szybyFilter: "szybyFilter",
      activeModel: "activeModel",
      activeTyp: "activeTyp",
    }),
    seriac() {
      if (this.product.seria == "21" || this.product.seria == "22") return "20";
      if (this.product.seria == "31" || this.product.seria == "32") return "30";
      return this.product.seria;
    },
  },
};
</script>

<style>
.konvajs-content {
  margin: 0 auto;
}

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

@media (orientation: portrait) {
  .desktop {
    display: none !important;
  }
}

@media (orientation: landscape) {
  #mobile {
    display: none;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

* {
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.columns {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.przycisk2 {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  color: #8fcc25;
  height: 34px;
  background: #4e4e4e;
  border: 2px solid #8fcc25;
  border-radius: 10px;
  padding: 0 15px;
}

.gtc3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr) !important;
  padding-bottom: 0 !important;
}

#mobile .decor,
#mobile .sky,
#mobile .ral {
  height: unset;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: unset;
  /* background: unset; */
  background-size: cover;
  color: black !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}

section {
  position: relative;
}

#seria,
#naswietle,
#kolor,
#kolor2,
#kolor3,
#przeszklenie,
#kierunek,
#ramka,
#sposob,
#okucia,
#dlugosc,
#pochwyt,
#pochwytkol,
#wymiary,
#lewe,
#prawe,
#gorne {
  scroll-margin-top: 46vh;
}</style
><style scoped>
.top {
  height: 50vh;
  position: sticky;
  top: 0;
  z-index: 1;
}

/* .botom {
    position: fixed;
    top: 325px;
    z-index: 1;
} */
#mobile .myrow {
  padding: 15px;
  grid-template-columns: repeat(2, 1fr);
}

#mobile .myrow .mycolumn {
  max-width: unset !important;
}

.mobilefilter {
  display: flex;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #4e4e4e;
  /* padding: 15px; */
  padding: 15px 15px 0 15px;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.mobilefilter div {
  position: relative;
}

.active:after {
  height: 2px;
  width: 100%;
  content: "";
  background: #8fcc25;
  position: absolute;
  bottom: -7px;
  left: 0;
}

#mobile header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  /* width: 360px; */
  /* height: 47px; */
  height: 6vh;
  border-bottom: 3px solid #8fcc25;
  background: #292929;

  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
  text-align: center;
}

.botom header {
  justify-content: center !important;
  height: 36px !important;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
}

#mobile button {
  /* width: 151px; */
  height: 4vh;
  background: #4e4e4e;
  border: 2px solid #8fcc25;
  border-radius: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vh;
  padding: 0 1vh;
  line-height: 16px;
  color: #8fcc25;
}

.top-section {
  justify-content: center;
  display: flex;
  padding: 15px;
  padding: 2vh;
  min-height: 40vh;
  /* gap: 15px; */
  background: whitesmoke;
  background: white;
  box-shadow: 1px 1px 5px black;
}

.mobiledet {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* max-height: 248px; */
  /* overflow: auto; */
}

.mobiledet2 {
  display: none;
  flex-direction: column;
  gap: 15px;
  max-height: 248px;
  overflow: auto;
}

.cenamobile p {
  margin-bottom: 0;
  line-height: 14px !important;
}

.cenamobile {
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  box-sizing: border-box;
  /* width: 182px; */
  background: #ffffff;
  border: 1px solid rgb(0 0 0 / 25%);
  /* box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 25%); */
  border-radius: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #4e4e4e;
}

@media screen and (orientation: landscape) {
  .last {
    display: flex;
    flex-direction: row !important;
    width: 100%;
    gap: 15px;
  }
}

.cena {
  padding: 11px 19px;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 25%);
  border-radius: 10px;
  margin-bottom: 15px;
  max-width: 453px;
  max-width: 506.25px;
  word-wrap: break-word;
}

/* div.cena:nth-child(3) {
  margin-bottom: 0 !important;
} */
.cena p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: #4e4e4e;
}

.protect {
  min-height: calc(100vh - 108px);
  display: grid;
  place-items: center;
}

.card {
  overflow: HIDDEN;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 731px; */
  /* width: 44vw; */
  width: 75vh;
  /* height: 287px; */
  justify-content: space-between;
  /* padding: 0 30px; */
  border-radius: 30px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
}

.card:hover {
  cursor: pointer;
  border: 1px solid #8fcc25;
  box-shadow: 2px 2px 5px 2px #8fcc25;
}

.card img {
  height: 31vh;
}

.card span {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6vmax;
  white-space: wrap;
  line-height: 2.5vmax;

  color: #4e4e4e;
}

@media screen and (max-width: 992px) {
  .card {
    width: 500px;
    height: 204px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* flex-direction: column; */
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* width: unset; */
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 0 0 0;
    border-radius: 20px;
    -webkit-box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 25%);
    box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 25%);
  }

  .card img {
    height: 100%;
    width: 50%;
    object-fit: cover;
    overflow: hidden;
    object-position: right;
  }
}

a:focus,
a:hover {
  color: unset;
  text-decoration: none;
}

.flex-1 {
  flex: 1;
}

.bg-success {
  background: #8fcc25 !important;
}

.lewy {
  justify-content: center;
  flex-direction: row;
  /* justify-content:space-between; */
}

#rotate {
  display: none;
}

@media screen and (orientation: portrait) {
  /* #rotate{
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: absolute;
    background: white;
    z-index: 999;
  }
  #rotate:after{
    content: 'Prosze obrócić urządzenie';
    font-size: 56px;
  }
  #rotate img{
    width: 80vw;
  } */
  .lewy {
    flex-direction: column-reverse;
    /* justify-content:space-between; */
  }
}

.ups {
  position: absolute;
  top: 0;
  z-index: -1;

  left: -100%;
}

.Podsumowanie {
  height: calc(100vh - 108px);
  overflow-y: auto;
  padding: 15px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.filtryinspiracje {
  /* position: absolute; */
  width: 188px;
  height: calc(100vh - 108px);

  background: #292929;
  border-right: 8px solid #8fcc25;
  display: flex;
  flex-direction: column;
  padding: 15px 9px;
  gap: 15px;
}

.filtryinspiracjeitem {
  cursor: pointer;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  color: #ffffff;
  position: relative;
}

.filtryinspiracjeitem.active :after,
.filtryinspiracjeitem:hover:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #8fcc25;
  height: 2px;
  width: 100%;

  color: red;
}

.bottom {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 999999;
  padding: 15px;
}

.klaudia {
  width: 200px;
  /* height: 210px; */
  /* position: absolute;
  bottom: 0;
  right: 0; */
  /* opacity: 0.75; */
  transition: all 0.5s ease-in-out;
}

.klaudia:hover {
  opacity: 0.75;
  cursor: pointer;
}

.dafid {
  max-height: 100%;
  overflow: auto;
}

.curent {
  background: white;
  height: 100px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  color: yellowgreen;
  align-items: center;
}
.awr{
  display:flex; flex-direction:column; gap:15px
}
.ab{
  gap: 20px;display: flex;justify-content: center;
}
.fitCenter{
  margin: 0 auto;
}
.bold{
  font-weight: bold;
}
.bl{
  display: block; float: left
}
.br{
  display: block; float: right
}
.pointer{
  cursor: pointer; 
}
.b-none{
  border: none
}
</style>
