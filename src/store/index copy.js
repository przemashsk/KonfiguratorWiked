import Vue from "vue";
import Vuex from "vuex";
import all from "./dane.js";
import klamki from "./klamki.json";
import cenymodule from "./cenymodule.js";
import wymiarymodule from "./wymiarymodule.js";
import sizecodedimensions from "./sizecodes.js";
Vue.config.devtools = true;
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    ceny: cenymodule,
    wymiary: wymiarymodule,
  },
  state: {
    showmodal: false,
    wizscale: 1,
    sizecodedimensions: sizecodedimensions,
    seria: {
      dane: [
        { artnr: "20", bez: "Premium" },
        // { artnr: "21", bez: "Premium Termo" },
        // { artnr: "22", bez: "Premium Aluminiowo - Kompozytowa" },
        { artnr: "30", bez: "Optimum" },
        // { artnr: "31", bez: "Optimum Termo" },
        // { artnr: "32", bez: "Optimum Aluminiowo - Kompozytowa" },
        { artnr: "41", bez: "Termo Prestige Lux" },
        { artnr: "60", bez: "Protect - drzwi wejściowe do mieszkań" },
        { artnr: "661", bez: "Alu Hybrid" },
      ],
    },
    pochwyty: {
      dane: [
        // { artnr: "", bez: "WSZYSTKIE" },
        { artnr: "ALFA", bez: "ALFA" },
        { artnr: "BETA", bez: "BETA" },
        { artnr: "GAMMA", bez: "GAMMA" },
        { artnr: "OMEGA", bez: "OMEGA" },
        { artnr: "SIGMA", bez: "SIGMA" },
        // { artnr: "TORO", bez: "TORO" },
        { artnr: "STRIPE", bez: "STRIPE" },
        { artnr: "SPACE", bez: "SPACE" },
        // { artnr: "SLIM", bez: "SLIM" },
        { artnr: "MODERN", bez: "MODERN" },
        { artnr: "DUO", bez: "DUO" },
        { artnr: "POCKET", bez: "POCKET" },
        // { artnr: "-", bez: "POZOSTAŁE" },
      ],
    },
    opcja: {
      dane: [
        { artnr: "rw", bez: "Rw" },
        { artnr: "rwrc3", bez: "Rw + RC3" },
        { artnr: "rwei30", bez: "Rw + EI30" },
        { artnr: "rwrc3ei30", bez: "Rw + RC3 + EI30" },
      ],
    },
    kodyrozmiaru: {
      dane: [
        { artnr: "75", bez: "75" },
        { artnr: "80", bez: "80" },
        { artnr: "85", bez: "85" },
        { artnr: "90", bez: "90" },
        { artnr: "100", bez: "100" },
      ],
    },
    tabs2: [
      // { bez: "Typ", bez2: "typ", available: false, shown: true },
      { bez: "Model", bez2: "Wzór", available: true, shown: true },
      { bez: "Seria", bez2: "Seria", available: true, shown: false },
      { bez: "Typ", bez2: "Typ", available: true, shown: false },
      // {bez:'Model2',bez2:'Dostawka',available:true,shown:false},
      { bez: "Kolor", bez2: "Kolor", available: true, shown: false },
      { bez: "Szyba", bez2: "Przeszklenie", available: true, shown: false },
      { bez: "Okucia", bez2: "Okucia", available: true, shown: false },
      { bez: "Klamka", bez2: "Klamka", available: true, shown: false },
      { bez: "Akcesoria", bez2: "Akcesoria", available: true, shown: false },
      // {bez:'Dostawka',bez2:'dostawkę',available:false,show:false,offset:0,hover:false},
      { bez: "Podsumowanie", bez2: "Podsumowanie", available: true, shown: false },
    ],
    mixkolorlista: ["FC","FL1", "FL1A", "FL2", "F1A", "F1B", "F1C", "F1D", "F2A", "F2B", "F4A", "F4B", "F4C", "F4D", "F4E", "F6A", "F6B", "F6C", "F6D", "F6E"],
    selectedwidok: "Z",
    activeTab: "Model",
    wzor: { dane: all.wzorytablica },
    wzor2: { dane: all.wzorytablica2 },
    // wzor2:{dane:all.wzorydodostawki},
    inoxlista: all.inoxlista,
    inoxkolor: {
      dane: [
        { artnr: "30", bez: "Black Lacobel" },
        { artnr: "10301", bez: "Inox" },
        { artnr: "0", bez: "Brak" },
        // { artnr: "0", bez: "Brak" },
        { artnr: "10304", bez: "Black" },
        { artnr: "1", bez: "Marmur Anatolian" },
        { artnr: "2", bez: "Marmur Czarny" },
        { artnr: "3", bez: "Drewniany" },
      ],
    },
    inoxkolor2: {
      dane: [
        { artnr: "1", bez: "Marmur Anatolian" },
        { artnr: "2", bez: "Marmur Czarny" },
        { artnr: "3", bez: "Drewniany" },
      ],
    },
    kopniakkolor: {
      dane: [
        { artnr: "10301", bez: "Inox" },
        { artnr: "10304", bez: "Black" },
      ],
    },
    inoxstrona: {
      dane: [
        { artnr: "0", bez: "Obustronnie" },
        { artnr: "1", bez: "Wewnątrz" },
        { artnr: "2", bez: "Zewnątrz" },
      ],
    },
    inoxstronap: {
      dane: [
        { artnr: "0", bez: "Obustronnie" },
        { artnr: "2", bez: "Zewnątrz" },
      ],
    },
    inoxstronaGF6: {
      dane: [
        { artnr: "2", bez: "Zewnątrz" },
      ],
    },
    inoxstronag: {
      dane: [{ artnr: "1", bez: "Wewnątrz" }],
    },
    inoxdwustr: { dane: [{ artnr: "0", bez: "Obustronnie" }] },
    koloryramek: all.koloryramek,
    wariant: {
      dane: [
        { artnr: "S", bez: "Standard" },
        { artnr: "B", bez: "Bikolor" },
        { artnr: "M", bez: "Mixkolor" },
        { artnr: "MB", bez: "Mixbikolor" },
      ],
    },
    kolortyp: {
      dane: [
        { artnr: "DEK", bez: "NATURAL DECOR" },
        { artnr: "SKY", bez: "CRYSTAL SKY COLOR" },
        { artnr: "RAL", bez: "HARMONY COLOR" },
      ],
    },
    kolor2typ: {
      dane: [
        { artnr: "DEK", bez: "NATURAL DECOR" },
        { artnr: "SKY", bez: "CRYSTAL SKY COLOR" },
        { artnr: "RAL", bez: "HARMONY COLOR" },
        { artnr: "ANO", bez: "ANODA" },
      ],
    },
    kolor: { dane: all.kolortablica },
    zakazanekolory: { dane: all.zakazanekolory },
    szyba: { dane: all.szybatablica },
    baza: { dane: all.bazaszyba },
    kolekcja: { dane: all.kolekcjatablica },
    przypisaniaszyb: all.przypisaniaszyb,
    szyba2: {
      dane: [
        
        { artnr: "28", bez: "Skip Black 3D" },
        { artnr: "29", bez: "Skip Black Lacobel" },
        { artnr: "08", bez: "Skip Lustro" },
        { artnr: "g", bez: "Black Lustro Weneckie" },
        { artnr: "b", bez: "Black" },
        { artnr: "p", bez: "Piaskowane według wzoru" },
        { artnr: "p2", bez: "Piaskowane według wzoru" },
        { artnr: "p3", bez: "Piaskowane według wzoru" },
        { artnr: "p37", bez: "Piaskowane według wzoru" },
        { artnr: "p39", bez: "Piaskowane według wzoru" },
        { artnr: "p25", bez: "Piaskowane według wzoru" },
        { artnr: "p26i", bez: "Piaskowane według wzoru" },
        { artnr: "c", bez: "Piaskowane w całości" },
        { artnr: "s", bez: "Standard (przezroczysta)" },
        { artnr: "m", bez: "Mleczne" },
        { artnr: "r", bez: "Reflex Brąz" },
        { artnr: "a", bez: "Reflex Grafit" },
        { artnr: "n", bez: "Pełne" },
        { artnr: "w", bez: "Lustro Weneckie" },
      ],
    },
    kierunek: {
      dane: [
        { artnr: "Lw", bez: "Lewe do wewnątrz" },
        { artnr: "Lz", bez: "Lewe na zewnątrz" },
        { artnr: "Pw", bez: "Prawe do wewnątrz" },
        { artnr: "Pz", bez: "Prawe na zewnątrz" },
      ],
    },
    sposobotw: {
      dane: [
        { artnr: "KK", bez: "Klamko-klamka" },
        { artnr: "KP", bez: "Klamko-pochwyt" },
        { artnr: "PP", bez: "Pochwyt-pochwyt" },
        { artnr: "KG", bez: "Klamko-gałka" },
      ],
    },
    klamka: { dane: all.klamkatablica },
    wzorydoklamki: all.wzorydoklamki,
    wzorydodostawki: all.wzorydodostawki,
    klamkakolor: {
      dane: [
        { artnr: "10301", bez: "INOX" },
        { artnr: "10302", bez: "Stare Złoto" },
        // { artnr: "10303", bez: "Tytan" },
        { artnr: "10304", bez: "Black" },
        { artnr: "10697", bez: "?" },
        { artnr: "ZywCDZlot", bez: "Czarny dąb ze złotą żywicą" },
        { artnr: "ZywOENieb", bez: "Orzech europejski z niebieską żywicą" },
        { artnr: "10698", bez: "Lacobel Black" },
        // { artnr: "10335", bez: "Złoty" },
      ],
    },
    koloryklamek: all.koloryklamek,

    activeKolorTyp: "DEK",
    activeKolor2Typ: "DEK",
    activeKolor3Typ: "DEK",
    activeKolor4Typ: "DEK",
    activeKolor5Typ: "DEK",
    activeKolor6Typ: "DEK",
    activeKolor7Typ: "RAL",
    // activeinoxKolor:'10301',
    samozamykacz: {
      dane: [
        { artnr: "-", bez: "Brak", cena: 0 },
        // {artnr:'LN',bez:'Listwowy nawierzchniowy',cena:662+60},
        // {artnr:'LC',bez:'Listwowy chowany',cena:756+60},
        { artnr: "AA", bez: "Samozamykacz nawierzchniowy z ramieniem PPOŻ", cena: 320 }, //263
        { artnr: "LN", bez: "Listwowy nawierzchniowy", cena: 1040 + 100 }, //ok
        { artnr: "LC", bez: "Listwowy chowany", cena: 1240 + 100 }, //ok
        { artnr: "R", bez: "Z ramieniem", cena: 380 + 100 }, //ok
        { artnr: "RB", bez: "Z ramieniem i blokadą", cena: 570 + 100 }, //ok
        { artnr: "W", bez: "Tylko wzmocnienie pod samozamykacz", cena: 100 }, //ok
      ],
    },
    kolorsam: {
      bez: "Kolor samozamykacza",
      dane: [
        { artnr: "srebrny", bez: "Srebrny" },
        { artnr: "braz", bez: "Brązowy" },
        { artnr: "czarny", bez: "Czarny" },
      ],
    },
    wizjer: {
      bez: "Wizjer",
      dane: [
        { artnr: "-", bez: "Brak" },
        { artnr: "S", bez: "Szerokokątny" },
        { artnr: "C", bez: "Cyfrowy" },
      ],
    },
    wizjerCena: {
      "-": { "20": 0, "30": 0, "41": 0 },
      S: { "20": 26, "30": 31, "41": 36 },
      C: { "20": 400, "30": 400, "41": 400 },
    },
    kopniak: {
      bez: "Kopniak",
      dane: [
        { artnr: "-", bez: "Brak", cena: 0 },
        { artnr: "1", bez: "Wewnątrz", cena: 100 }, //84
        { artnr: "2", bez: "Zewnątrz", cena: 100 }, //84
        { artnr: "3", bez: "Obustronnie", cena: 250 }, //168
      ],
    },
    elektrozaczep: {
      bez: "Elektrozaczep",
      dane: [
        { artnr: "N", bez: "Nie" },
        { artnr: "J", bez: "Tak" },
      ],
    },
    elektrozaczepr: {
      bez: "Elektrozaczep awersyjny ppoż",
      dane: [
        { artnr: "N", bez: "Nie" },
        { artnr: "J", bez: "Tak" },
      ],
    },
    dym: {
      bez: "dym",
      dane: [
        { artnr: "N", bez: "Nie" },
        { artnr: "J", bez: "Tak" },
      ],
    },
    wkladka: {
      bez: "Wkładka",
      dane: [
        { artnr: "INVEST", bez: "Wkładka Investlock" },
        { artnr: "KL_C", bez: "Wkładka klasy C wg oferty" },
        { artnr: "STD", bez: "Wkładka standard wg oferty" },
      ],
    },
    automatyka: {
      bez: "System automatycznego otwierania",
      dane: [
        { artnr: "-", bez: "Brak" },
        { artnr: "B", bez: "Biometryczny" },
        { artnr: "K", bez: "Kodowy" },
        { artnr: "Z", bez: "Zbliżeniowy" },
      ],
    },
    typ: {
      bez: "Wybierz produkt",
      dane: [
        { artnr: "D1", bez: "Drzwi 1-skrzydłowe", rodzaj: "brak" },
        // {artnr:'D1F01',bez:'Drzwi z dostawką po lewej'},
        // {artnr:'D1F02',bez:'Drzwi z dostawką po prawej',current:false},
        // {artnr:'D1F03',bez:'Drzwi z dostawkami bocznymi',current:false},
        { artnr: "D1N01", bez: "Drzwi z naświetlem bocznym po lewej", rodzaj: "NBL" },
        { artnr: "D1N02", bez: "Drzwi z naświetlem bocznym po prawej ", rodzaj: "NBP" },
        { artnr: "D1N03", bez: "Drzwi z naświetlami bocznymi", rodzaj: "NBNB" }, //   OK
        { artnr: "D1N04", bez: "Drzwi z naświetlem górnym", rodzaj: "NG" }, //  OK
        { artnr: "D1N05", bez: "Drzwi z naświetlem górnym i bocznym lewym", rodzaj: "NBLNG" },
        { artnr: "D1N06", bez: "Drzwi z naświetlem górnym i bocznym prawym", rodzaj: "NBPNG" },
        { artnr: "D1N07", bez: "Drzwi z naświetlem górnym i bocznymi", rodzaj: "NBNGNB" },
        { artnr: "D1N08", bez: "Drzwi z portalem", rodzaj: "NBNGNB" },
        // {artnr:'D2CL',bez:'Drzwi 2-skrzydłowe skrzydło czynne po lewej',current:false},
        // {artnr:'D2CP',bez:'Drzwi 2-skrzydłowe skrzydło czynne po prawej',current:false}
      ],
    },
    wysokosci: {
      dane: [
        { artnr: 200, bez: "200" },
        { artnr: 300, bez: "300" },
        { artnr: 400, bez: "400" },
        { artnr: 500, bez: "500" },
      ],
    },
    wysokoscip: {
      dane: [
        { artnr: 100, bez: "100" },
        { artnr: 150, bez: "150" },
        { artnr: 200, bez: "200" },
        { artnr: 250, bez: "250" },
        { artnr: 300, bez: "300" },
        { artnr: 350, bez: "350" },
        { artnr: 400, bez: "400" },
        { artnr: 450, bez: "450" },
        { artnr: 500, bez: "500" },
      ],
    },
    wysokoscipg: {
      dane: [
        { artnr: 100, bez: "100" },
        { artnr: 150, bez: "150" },
        { artnr: 200, bez: "200" },
        { artnr: 250, bez: "250" },
        { artnr: 300, bez: "300" },
        { artnr: 350, bez: "350" },
        { artnr: 400, bez: "400" },
        { artnr: 450, bez: "450" },
        { artnr: 500, bez: "500" },
      ],
    },
    lameleiloscdane: {
      dane: [
        { artnr: 1, bez: "1" },
        { artnr: 2, bez: "2" },
        { artnr: 3, bez: "3" },
        { artnr: 4, bez: "4" },
        { artnr: 5, bez: "5" },
        { artnr: 6, bez: "6" },
        { artnr: 7, bez: "7" },
        { artnr: 8, bez: "8" },
        { artnr: 9, bez: "9" },
        { artnr: 10, bez: "10" },
        { artnr: 11, bez: "11" },
        { artnr: 12, bez: "12" },
        { artnr: 13, bez: "13" },
      ],
    },
    product: {
      kolekcja: "n",
      lamele: "J",
      lameleilosc: 9,
      wzor: "G4",
      wzor2: "G4",
      wariant: "S",
      kolor1typ: "SKY",
      kolor2typ: "SKY",
      kolor3typ: "SKY",
      kolor4typ: "SKY",
      kolor5typ: "SKY",
      kolor6typ: "SKY",
      kolor7typ: "SKY",
      kolor: "C013", //--06
      kolor2: "C013",
      kolor3: "C013",
      kolor4: "C013",
      kolor5: "C013",
      kolor6: "C013",
      kolor7: "C013",
      pochwyt: "03",
      pochwyt2: "1",
      pochwyty: "",
      mixz: "03",
      mixw: "03",
      szyba: "30",
      baza: "06",
      szyba2: "g",
      // ramka: "",
      seria: "41",
      kierunek: "Pw",
      sposobotw: "KP",
      klamka: "P120p90",
      klamkakolor: "10304", //--10301
      inoxstrona: "",
      inoxkolor: "10304", //--10301
      kopniakkolor: "10301",
      samozamykacz: "-",
      samozamykacz2: "-",
      samozamykaczKolor: "-",
      wizjer: "-",
      kopniak: "-",
      elektrozaczep: "N",
      elektrozaczepr: "N",
      automatyka: "-",
      kodrozmiaru: "90",
      typ: "D1",
      wysokoscng: 200,
      szerokoscnb1: 200,
      szerokoscnb2: 200,
      szerokosccal: 1,
      opcja: "rw",
      dym: "N",
      dlugosci: "",
    },
    priceokucia: 0,
    basicprice: 0,

    backgrounds: [
      //  {url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.15,scaley:0.15},
      { url: "/images/backgrounds/4.jpg", x: 400, y: 149, scalex: 108 / (1025 / 4), scaley: 235 / (2080 / 4) },
      { url: "/images/backgrounds/5.jpg", x: 252, y: 38, scalex: 204 / (1025 / 4), scaley: 407 / (2080 / 4) },
      { url: "/images/backgrounds/6.jpg", x: 309, y: 154, scalex: 90 / (1025 / 4), scaley: 189 / (2080 / 4) },
      { url: "/images/backgrounds/7.jpg", x: 245, y: 64, scalex: 191 / (1025 / 4), scaley: 363 / (2080 / 4) },
      { url: "/images/backgrounds/8.jpg", x: 283, y: 43, scalex: 158 / (1025 / 4), scaley: 360 / (2080 / 4) },
      { url: "/images/backgrounds/9.jpg", x: 267, y: 49, scalex: 165 / (1025 / 4), scaley: 334 / (2080 / 4) },
    ],
    activebackground: { url: "/images/backgrounds/7.jpg", x: 245, y: 64, scalex: 191 / (1025 / 4), scaley: 363 / (2080 / 4) },
    exportImageObj: null,
    exportImageObjInner: null,
    custombackgroundimg: null,
  },
  mutations: {
    //   modell() {
    //     if(window.location.href.length>23){
    //       return this.product.wzor = window.location.href.slice(23-window.location.href.length);
    //     }
    // },
    setactiveinoxKolor(state, val) {
      state["activeinoxKolor"] = val;
    },
    setActiveWzor(state, val) {
      state["activeWzor"] = val;
    },
    setActiveWzor2(state, val) {
      state["activeWzor2"] = val;
    },
    setActiveTab(state, val) {
      state.activeTab = val;
      state.tabs2.find((el) => el.bez == val).shown = true;
    },
    setProductAttribute(state, payload) {
      state.product[payload.attr] = payload.val;
    },
    setActiveBackground(state, payload) {
      state.activebackground = payload;
    },
    setNextTab(state) {
      let num = state.tabs2.findIndex((el) => el.bez == state.activeTab);
      let tab = state.tabs2.filter((el, index) => index > num)[0].bez;
      state.activeTab = tab;
    },
    setPrevTab(state) {
      let num = state.tabs2.findIndex((el) => el.bez == state.activeTab);
      let tab = state.tabs2[num - 1].bez;
      state.activeTab = tab;
    },
    manipulateTab(state, payload) {
      state.tabs2.find((el) => el.bez == "Szyba").available = payload;
    },
  },
  actions: {
    setActiveWzor(context, val) {
      context.commit("setActiveWzor", val);
    },
    setActiveinoxKolor(context, val) {
      context.commit("activeinoxKolor", val);
    },
    setActiveWzor2(context, val) {
      context.commit("setActiveWzor2", val);
    },
    setProductAttribute(context, payload) {
      context.commit("setProductAttribute", payload);
    },
    setActiveTab(context, val) {
      context.commit("setActiveTab", val);
    },
    setActiveBackground(context, payload) {
      context.commit("setActiveBackground", payload);
    },
    setNextTab(context) {
      context.commit("setNextTab");
    },
    setPrevTab(context) {
      context.commit("setPrevTab");
    },
    manipulateTab(context, payload) {
      context.commit("manipulateTab", payload);
    },
    //  modell() {
    //   let model = '05';
    //   // if (rootState.product.seria == '31') {
    //     // model = window.location.href.slice(23-window.location.href.length)
    //   // };

    //   return this.model = '05';
    // },
  },
  getters: {
    kolorFilter: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor1typ);

      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "05").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "01")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "07")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "07")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "42") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "07")
        .filter((el) => el.artnr != "08");
      }
      return filtered;
    },
    kolorFilter7: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor7typ);
      return filtered
    },
    kolorFilter2: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor2typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "05").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      return filtered
    },
    kolorFilter3: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor3typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "05").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      return filtered
    },
    kolorFilter4: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor4typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "05").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      return filtered
    },
    kolorFilter5: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor5typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "05").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered.filter((el) => el.artnr != "01").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered.filter((el) => el.artnr != "07").filter((el) => el.artnr != "08");
      }
      return filtered
    },
    kolorFilter6: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor6typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
        filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.artnr == "02") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "01")
        .filter((el) => el.artnr != "05")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "03") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "01")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "04") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "05") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "01")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "06") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "12")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "07") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "08") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "10") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "11") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09")
          .filter((el) => el.artnr != "12");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "15") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10")
          .filter((el) => el.artnr != "07");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "16") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "17") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "09");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "18") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "29") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "07")
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "33A") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
          .filter((el) => el.artnr != "02")
          .filter((el) => el.artnr != "04")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "06")
          .filter((el) => el.artnr != "10");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "07")
        .filter((el) => el.artnr != "08");
      }
      if (state.product.szyba != "00" && getters.activeModel.artnr == "34A") {
        filtered = filtered
        .filter((el) => el.artnr != "15")
        .filter((el) => el.artnr != "16")
        .filter((el) => el.artnr != "17")
        .filter((el) => el.artnr != "18")
        .filter((el) => el.artnr != "07")
        .filter((el) => el.artnr != "08");
      }
      return filtered
    },

    kolorFilterp: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.activeKolorTyp);

      filtered = filtered.filter((el) => el.artnr != "12");

      return filtered;
    },
    wariantFilter: (state) => {
      return state.mixkolorlista.indexOf(state.product.wzor) == -1 ? state.wariant.dane.slice(0, 2) : state.wariant.dane.filter((el) => el.artnr != "B");
    },
    wariantFilter2: (state) => {
      if (state.seriac == "60") {
        return state.kolortyp.dane.filter((el) => el.artnr == "S");
      } else {
        return state.mixkolorlista.indexOf(state.product.wzor) == -1 ? state.wariant.dane.slice(0, 2) : state.wariant.dane.filter((el) => el.artnr != "B");
      }
    },
    kolor1typFilter: (state,getters) => {
      if(getters.activeModel.typ == "PCV" && state.product.szyba != "00"){
        return state.kolortyp.dane.filter((el) => el.artnr == "DEK");
      }else{
        // if(state.product.wzor == "51" || state.product.wzor == "52"){
        //   return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
        // }else{
          return state.kolortyp.dane;
        // }
      }
    },
    kolor3typFilter: (state,getters) => {
      if(state.product.wzor == "51" || state.product.wzor == "52"){
          return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
      }else{
        return state.kolortyp.dane
      }
    },
    kolor7typFilter: (state,getters) => {
        return state.kolor2typ.dane;
    },

    activeOpcja: (state) => {
      return state.opcja.dane.find((el) => el.artnr == state.product.opcja);
    },
    activeSeria: (state) => {
      return state.seria.dane.find((el) => el.artnr == state.product.seria);
    },
    activeModel: (state) => {
      return state.wzor.dane.find((el) => el.artnr == state.product.wzor);
    },
    activeModel2: (state) => {
      return state.wzor2.dane.find((el) => el.artnr == state.product.wzor2);
    },
    activeKolekcja: (state) => {
      return state.kolekcja.dane.find((el) => el.artnr == state.product.kolekcja);
    },
    activeKolor: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor);
    },
    activeinoxKolor: (state) => {
      return state.inoxkolor.dane.find((el) => el.artnr == state.product.inoxkolor);
    },
    activeKlamka: (state) => {
      return klamki.filter((el) => el.artnr == state.product.klamka)[0];
    },
    activeKlamkaKolor: (state) => {
      return state.klamkakolor.dane.find((el) => el.artnr == state.product.klamkakolor);
    },
    activeSotw: (state) => {
      return state.sposobotw.dane.find((el) => el.artnr == state.product.sposobotw);
    },
    activeSzyba: (state) => {
      return state.szyba.dane.find((el) => el.artnr == state.product.szyba);
    },
    activeSzyba2: (state) => {
      return state.szyba2.dane.find((el) => el.artnr == state.product.szyba2);
    },
    activeKierunek: (state) => {
      return state.kierunek.dane.find((el) => el.artnr == state.product.kierunek);
    },
    activeKolorTyp: (state) => {
      return state.product.kolor1typ;
    },
    activeKolor: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor);
    },
    activeKolor2: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor2);
    },
    activeKolor3: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor3);
    },
    activeKolor4: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor4);
    },
    activeKolor5: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor5);
    },
    activeKolor6: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor6);
    },
    pochwyt: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.pochwyt);
    },
    activeKolormixz: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.mixz);
    },
    activeKolormixw: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.mixw);
    },
    activeSamozamykacz: (state) => {
      return state.samozamykacz.dane.find((el) => el.artnr == state.product.samozamykacz);
    },
    activeSamozamykaczKolor: (state) => {
      return state.kolorsam.dane.find((el) => el.artnr == state.product.samozamykaczKolor);
    },
    activeAutomatyka: (state) => {
      return state.automatyka.dane.find((el) => el.artnr == state.product.automatyka);
    },
    activeEzaczep: (state) => {
      return state.elektrozaczep.dane.find((el) => el.artnr == state.product.elektrozaczep);
    },
    activeEzaczepr: (state) => {
      return state.elektrozaczepr.dane.find((el) => el.artnr == state.product.elektrozaczepr);
    },
    activeTyp: (state) => {
      if (state.product.seria != "20" && state.product.seria != "30") {
        return state.typ.dane.find((el) => el.artnr == state.product.typ);
      } else {
        return state.typ.dane.find((el) => el.artnr == "D1");
      }
    },
    activeTyp2: (state) => {
      if (state.product.seria == "60" && (state.product.opcja == "rw" || state.product.opcja == "rwrc3")) {
        return state.typ.dane.filter((el) => el.artnr != "D1N07" && el.artnr != "D1N06" && el.artnr != "D1N05" && el.artnr != "D1N04" && el.artnr != "D1N03" && el.artnr != "D1N02" && el.artnr != "D1N01");
      } else if (state.product.seria == "60" && state.product.opcja != "rw" && state.product.opcja != "rwrc3") {
        return state.typ.dane.filter((el) => el.artnr == "D1");
      } else if (state.product.seria != "20" && state.product.seria != "30" && state.product.seria != "22" && state.product.seria != "32") {
        return state.typ.dane.filter((el) => el.artnr != "D1N08");
      } else {
        return state.typ.dane.filter((el) => el.artnr == "D1");
      }
    },
    kolorc: (state) => {
      return state.selectedwidok == "W" && state.product.wariant == "B" ? state.product.kolor2 : state.product.kolor;
    },
    odpszyb: (state) => {
      return state.wzor.dane.find((el) => el.artnr == state.product.wzor).odpszyb;
    },
    odpszybkonf: (state) => {
      return state.wzor.dane.find((el) => el.artnr == state.product.wzor).odpszybkonf;
    },
    kierunekfilter: (state,getters) => {
      if (state.product.wzor == "GF6" || getters.activeModel.typ == "MG") {
        return state.kierunek.dane.filter((el) => el.artnr != "Pw" && el.artnr != "Lw");
      }
      if (state.product.typ == "D1N08") {
        return state.kierunek.dane.filter((el) => el.artnr != "Pz" && el.artnr != "Lz");
      } else {
        return state.kierunek.dane;
      }
    },
    czylamele: (state, getters) => {
      if (state.product.wzor=='01' && state.product.seria=='60' && state.product.kierunek.indexOf('w') >= 0 ) {
        return true;
      } else {
        return false;
      }
    },
    inoxpelne: (state, getters) => {
      if (typeof getters.activeModel.typ == "undefined") {
        return false;
      } else if (typeof getters.activeModel.typ == "GD") {
        state.product.inoxstrona == "1";
      } else if ((getters.activeModel.typ.toUpperCase() == "INOX" || getters.activeModel.typ.toUpperCase() == "GF") && state.selectedwidok == "Z" && state.product.inoxstrona == "1" && state.product.szyba == "00") {
        return true;
      } else if ((getters.activeModel.typ.toUpperCase() == "INOX" || getters.activeModel.typ.toUpperCase() == "GF") && state.selectedwidok == "W" && state.product.inoxstrona == "2" && state.product.szyba == "00") {
        return true;
      } else {
        return false;
      }
    },
    wzor2Filter2: (state, getters) => {
      if (typeof state.przypisaniaszyb[state.product.wzor2] != "undefined") {
        return state.wzor2.dane.filter((el) => state.przypisaniaszyb[state.product.wzor].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },
    filtr: (state, getters) => {
      if ((getters.CenaNaswietlaG > 0 && state.product.wysokoscng === 200) || (getters.CenaNaswietlaNB1 > 0 && state.product.szerokoscnb1 === 200) || (getters.CenaNaswietlaNB2 > 0 && state.product.szerokoscnb2 === 200)) {
        return state.szyba2.dane.filter((el) => el.artnr != "g");
      } else {
        return state.szyba2.dane;
      }
    },
    szybyFilter2: (state, getters) => {
      if (typeof state.przypisaniaszyb[state.product.wzor] != "undefined") {
        return getters.filtr.filter((el) => state.przypisaniaszyb[state.product.wzor].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },
    szybyFilter: (state, getters) => {
      if(state.product.wzor == "43"){
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      if(getters.activeModel.typ == "PCV" && state.product.seria=='661' ){
        // state.
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      if(getters.activeModel.typ == "PCV" && state.product.kolor1typ!='DEK'){
        // state.
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      // if(state.activeKolorTyp!='DEK'){
      //   alert('kURWAAAAAAAAaaAAAAAa!!!!!@#$%^&*(')
      // }
      if (
        (state.product.wzor == "02" && (state.product.kolor == "01" || state.product.kolor == "05")) ||
        (state.product.wzor == "04" && (state.product.kolor == "03" || state.product.kolor == "05")) ||
        (state.product.wzor == "05" && state.product.kolor == "01") ||
        (state.product.wzor == "06" && (state.product.kolor == "01" || state.product.kolor == "05" || state.product.kolor == "12")) ||
        (state.product.wzor == "07" && (state.product.kolor == "05" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "07" || state.product.kolor == "02")) ||
        (state.product.wzor == "08" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "05" || state.product.kolor == "10")) ||
        (state.product.wzor == "10" && (state.product.kolor == "05" || state.product.kolor == "07" || state.product.kolor == "08")) ||
        (state.product.wzor == "11" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "03" || state.product.kolor == "05" || state.product.kolor == "12" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (state.product.wzor == "15" && (state.product.kolor == "08" || state.product.kolor == "10" || state.product.kolor == "02")) ||
        (state.product.wzor == "16" && (state.product.kolor == "01" || state.product.kolor == "03" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (state.product.wzor == "17" && (state.product.kolor == "01" || state.product.kolor == "05" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (state.product.wzor == "18" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "05")) ||
        (state.product.wzor == "29" && (state.product.kolor == "02" || state.product.kolor == "03" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "10")) ||
        (state.product.wzor == "33A" && (state.product.kolor == "02" || state.product.kolor == "04" || state.product.kolor == "06" || state.product.kolor == "10"))
      ) {
        return state.szyba.dane.filter((el) => el.artnr == "00");
      } else if (state.product.seria == "60" && state.product.wzor == "42") {
        return state.szyba.dane.filter((el) => el.artnr == "00");
      } else if (typeof state.przypisaniaszyb[state.product.wzor] != "undefined") {
        return state.szyba.dane.filter((el) => state.przypisaniaszyb[state.product.wzor].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },
    sposobotwfilter: (state, getters) => {
      if(state.product.seria == '661'){
        // alert('Alu')
        return state.sposobotw.dane.filter((el) => el.artnr !== "KG" && el.artnr !== "PP");
      }
      if (state.product.wzor == "GF6" || getters.activeModel.typ == "MG") {
        return state.sposobotw.dane.filter((el) => el.artnr !== "KK" && el.artnr !== "KG");
      }
      if (state.product.wzor == "F9C") {
        return state.sposobotw.dane.filter((el) => el.artnr !== "KP" && el.artnr !== "PP");
      } else if (state.product.seria == "60" && ["rwrc3", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.sposobotw.dane.filter((el) => el.artnr == "KK");
      } else if (state.product.seria == "60" && ["rwrc3", "rwrc3ei30"].indexOf(state.product.opcja) >= -1) {
        return state.sposobotw.dane.filter((el) => el.artnr != "PP" && el.artnr != "KP");
      } else {
        return state.sposobotw.dane;
      }
    },
    seriaklamka: (state) => {
      let seria = state.product.seria;
      if (seria == "30" || seria == "21" || seria == "20") {
        return getters.klamkifilter2.filter((el) => el.artnr !== "P150p90s");
      } else {
        return getters.klamkifilter2;
      }
    },
    klamkifilter: (state, getters) => {
      if (getters.activeModel && getters.activeSotw) {
        return state.klamka.dane.filter((el) => state.wzorydoklamki[el.artnr].indexOf(state.product.wzor) >= 0).filter((el) => el.typ == state.product.sposobotw);
      } else {
        return [];
      }
    },
    dlugosci: (state) => {
      let seria = state.product.seria;
      if (state.product.seria == 661 && (state.product.sposobotw=='KP' || state.product.sposobotw=='PP')) {
        seria=41
      }
      if (state.product.seria == 60) {
        if (state.product.opcja == "rwrc3") {
          seria = "65";
        } else if (state.product.opcja == "rwei30") {
          seria = "70";
        } else if (state.product.opcja == "rwrc3ei30") {
          seria = "75";
        }
      }
      let grupa = '';
      if (seria < 60) {
        grupa = "DRZ";
      } else if (seria == '661') {
        grupa = "HYBR";
      } else {
        grupa = "DRZP";
      }
      console.log(grupa)
      let wzor = state.product.wzor;
      let sposobotw = state.product.sposobotw;
      let pochwyty = state.product.pochwyty;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }
      if (sposobotw == "KP"){
        const dlugosci= []
        let tabela=klamki.filter((el) => (el.PRODUKTTYP.indexOf(seria) > -1 || el.PRODUKTTYP.indexOf(grupa) > -1) && el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 && el.SO.indexOf(so) > -1 && el.bez.toUpperCase().indexOf(pochwyty) > -1 && (el.WZORY.indexOf(wzor) > -1 || el.WZORY.indexOf("-") > -1))
        for (let i = 0; i < tabela.length; i++) {

          dlugosci.push(parseInt(tabela[i].artnr.substring(1,4)))
        }
        if(dlugosci.length>0){
          
          return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
        }
      }
    },
    klamkifilter2: (state, getters) => {
      let seria = state.product.seria;
      
      if (state.product.seria == 661 && (state.product.sposobotw=='KP' || state.product.sposobotw=='PP')) {
        seria=41
      }
      if (state.product.seria == 60) {
        if (state.product.opcja == "rwrc3") {
          seria = "65";
        } else if (state.product.opcja == "rwei30") {
          seria = "70";
        } else if (state.product.opcja == "rwrc3ei30") {
          seria = "75";
        }
      }
      let grupa = '';
      if (state.product.seria == 661) {
        grupa="HYBR"
      }else if (seria != 60) {
        grupa = "DRZZ";
      } else {
        grupa = "DRZP";
      }
      
      let wzor = state.product.wzor;
      let sposobotw = state.product.sposobotw;
      let pochwyty = state.product.pochwyty;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }
      // console.log(grupa+" "+seria)
      let filtered = klamki.filter((el) => (el.PRODUKTTYP.indexOf(seria) > -1 || el.PRODUKTTYP.trim().split(',').indexOf(grupa) > 0) && el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 && el.SO.indexOf(so) > -1 && el.bez.toUpperCase().indexOf(pochwyty) > -1 && (el.WZORY.indexOf(wzor) > -1 || el.WZORY.indexOf("-") > -1));
      if(state.product.seria == 661){
        return filtered.filter((el) => (el.PRODUKTTYP.indexOf('DRZBA') > -1));
      }else{
        return filtered
      }
      // return klamki.filter((el) => ((el.PRODUKTTYP.indexOf(seria) > -1) && el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 && el.SO.indexOf(so) > -1 && el.bez.toUpperCase().indexOf(pochwyty) > -1 && (el.WZORY.indexOf(wzor) > -1 || el.WZORY.indexOf("-") > -1)) );
    },
    klamkakolorfilte: (state, getters) => {
      let seria = state.product.seria;
      if (state.product.seria == 60) {
        if (state.product.opcja == "rwrc3") {
          seria = "65";
        } else if (state.product.opcja == "rwei30") {
          seria = "70";
        } else if (state.product.opcja == "rwrc3ei30") {
          seria = "75";
        }
      }
      let grupa = '';
      if (seria < 60) {
        grupa = "DRZ";
      } else {
        grupa = "DRZP";
      }
      let klamka = state.product.klamka;
      let kolory = [];
      kolory = klamki.filter((el) => el.artnr==klamka);
      // console.log(kolory)
      
        return state.klamkakolor.dane.filter((el) => kolory[0].KOLORY_KLAMEK.indexOf(el.artnr) >= 0);
      
      
    },
    klamkakolorfilter: (state, getters) => {
      let seria = state.product.seria;
      if (seria == "60") {
        return getters.klamkakolorfilte.filter((el) => el.artnr !== "10303");
      } else {
        return getters.klamkakolorfilte;
      }
    },
    kolorFilterDabBielony: (state, getters) => {
      if (state.product.seria) {
        return state.kolor.dane.filter((el) => state.kolorFilter[state.product.seria].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },
    seriafilter: (state, getters) => {
      let seria = state.product.seria;
      if (seria == "20" || seria == "30") {
        return state.typ.dane.find((el) => el.artnr == "D1");
      } else {
        return [];
      }
    },
    wzorFilter: (state, getters) => {
      let wzory = state.wzor.dane
      if(getters.activeKolekcja.artnr != "all"){
        wzory = wzory.filter((el) => el.typ == getters.activeKolekcja.artnr)
      }
      

      // console.log(['21', '31', '41', '661'].indexOf(state.product.seria))
      if(['21', '31', '41', '661'].indexOf(state.product.seria) == -1){
        wzory=wzory.filter( (el) =>el.artnr != "51" && el.artnr != "52")
      }

      if(['41'].indexOf(state.product.seria) == -1){
        wzory=wzory.filter( (el) =>el.artnr != "GF6" && el.typ != "MG")
      }
      if (state.product.seria === "661") {
        return wzory.filter( (el) =>
        el.artnr != "02" && 
        el.artnr != "03" && 
        el.artnr != "04" && 
        el.artnr != "05" && 
        el.artnr != "06" && 
        el.artnr != "07" && 
        el.artnr != "08" && 
        el.artnr != "09" && 
        el.artnr != "9A" && 
        el.artnr != "9B" && 
        el.artnr != "29" && 
        el.artnr != "29A" && 
        el.artnr != "34" && 
        el.artnr != "34A" && 
        el.artnr != "34B" &&
        el.artnr != "42" &&
        el.artnr != "50" &&
        el.artnr != "52" &&
        el.artnr != "GF4" &&
        el.artnr != "GF6" &&
        el.artnr != "GF7" &&
        el.artnr != "GL1" &&
        el.artnr != "GL1A" &&
        el.artnr != "G4" && 
        el.artnr.substring(0,2) != "F1" && 
        el.artnr.substring(0,2) != "F2" && 
        el.artnr.substring(0,2) != "F4" && 
        el.artnr.substring(0,2) != "F6" &&
        el.artnr != "F9B"
        )
      }
      if (state.product.seria != "60") {
        if (state.product.seria != "41") {
          return getters.activeKolekcja.artnr != "all" ? wzory.filter((el) => el.typ == getters.activeKolekcja.artnr) : wzory.filter((el) => el.artnr);
        } else {
          return getters.activeKolekcja.artnr != "all"
            ? wzory.filter((el) => el.typ == getters.activeKolekcja.artnr)
            : wzory
                .filter((el) => el.artnr != "04")
                .filter((el) => el.artnr != "08")
                .filter((el) => el.artnr != "15")
                .filter((el) => el.artnr != "16")
                .filter((el) => el.artnr != "17");
        }
      } else {
        return wzory.filter(
          (el) =>
            el.typ != "GD" &&
            el.typ != "GF" &&
            el.typ != "GL" &&
            el.typ != "FL" &&
            el.typ != "FI" &&
            el.artnr != "9A" &&
            el.artnr != "9B" &&
            el.artnr != "12A" &&
            el.artnr != "12B" &&
            el.artnr != "12C" &&
            el.artnr != "19A" &&
            el.artnr != "19B" &&
            el.artnr != "22A" &&
            el.artnr != "22B" &&
            el.artnr != "25A" &&
            el.artnr != "25B" &&
            el.artnr != "25C" &&
            el.artnr != "26A" &&
            el.artnr != "26B" &&
            el.artnr != "26H" &&
            el.artnr != "29" &&
            el.artnr != "29A" &&
            el.artnr != "31A" &&
            el.artnr != "33A" &&
            el.artnr != "34A" &&
            el.artnr != "34B" &&
            el.artnr != "37A" &&
            el.artnr != "38A" &&
            el.artnr != "39A" &&
            el.artnr != "39B" &&
            el.artnr != "48" &&
            el.artnr != "50" &&
            el.artnr != "47A" &&
            el.artnr != "47" &&
            el.artnr != "30B" &&
            el.artnr != "30A" &&
            el.artnr != "26J" &&
            el.artnr != "26K"
        );
      }
    },
    showInox: (state, getters) => {
      if (getters.activeModel) {
        return state.inoxlista.indexOf(state.product.wzor) >= 0 ? true : false;
      } else {
        return false;
      }
    },
    ramkakolorfilter: (state, getters) => {
      if (getters.activeModel.artnr) {
        return state.inoxkolor.dane.filter((el) => state.koloryramek[getters.activeModel.artnr].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },

    ramkakolorfilter2: (state, getters) => {
      if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.inoxkolor.dane.filter((el) => el.artnr == "10301");
      } else {
        return state.inoxkolor.dane.filter((el) => state.koloryramek[getters.activeModel.artnr].indexOf(el.artnr) >= 0);
      }
    },
    stronaramkifilter: (state) => {
      return state.product.szyba != "00" ? state.inoxstrona.dane.slice(0, 1) : state.inoxstrona.dane;
    },
    samozamykaczFilter: (state,getters) => {
      if (getters.activeModel.typ == "MG") {
        return state.samozamykacz.dane.filter((el) => el.artnr == "LC");
      }
      if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.samozamykacz.dane.filter((el) => el.artnr == "AA");
      } else if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) <= -1) {
        return state.samozamykacz.dane.filter((el) => el.artnr != "W" && el.artnr != "LC");
      } else if (state.product.seria != "31" && state.product.seria != "41") {
        return state.samozamykacz.dane.filter((el) => el.artnr != "LC" && el.artnr != "AA");
      } else {
        return state.samozamykacz.dane.filter((el) => el.artnr != "AA");
      }
    },
    samozamykaczFilter2: (state) => {
      if (state.product.szerokoscnb1 === 200) {
        return state.szyba2.dane.filter((el) => el.artnr != "g");
      } else {
        return state.szyba2.dane;
      }
    },
    KOPNIAKFilter: (state,getters) => {
      if (getters.activeModel.typ == "MG") {
        return state.kopniak.dane.filter((el) => el.artnr != "2" && el.artnr != "3");
      }
      if (state.product.seria === "60") {
        return state.kopniak.dane.filter((el) => el.artnr != "1");
      } else {
        return state.kopniak.dane;
      }
    },
    KOPNIAKkolorFilter: (state) => {
      if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.kopniakkolor.dane.filter((el) => el.artnr != "10304");
      } else {
        return state.kopniakkolor.dane;
      }
    },
    samkolorfilter: (state) => {
      if (state.product.samozamykacz == "LC" || state.product.samozamykacz == "LN") {
        return state.kolorsam.dane.slice(0, 1);
      } else if (state.product.samozamykacz == "AA") {
        return state.kolorsam.dane; //.filter(el => el.artnr != "braz");
      } else {
        return state.kolorsam.dane;
      }
    },
    seriac: (state,) => {
      if (state.product.seria == "21" || state.product.seria == "22") {
        return "20";
      } else if (state.product.seria == "31" || state.product.seria == "32") {
        return "30";
      } else {
        return state.product.seria;
      }
    },
    tabsFilter: (state, getters) => {
      if (state.product.seria == 60 && getters.activeModel.typ != "INOX" && getters.activeModel.typ != "INOX") {
        return state.tabs2.filter((el) => el.available == true).filter((el) => el.bez != "Szyba");
      } else {
        return state.tabs2.filter((el) => el.available == true);
      }
    },
  },
});
