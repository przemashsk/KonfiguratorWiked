import Vue from "vue";
import Vuex from "vuex";
import all from "./dane.js";
import klamki from "./JSON/klamki.json";
import SAMOZAMYKACZE from "./JSON/SAMOZAMYKACZ.json";
import wzorseria from "./JSON/wzor seria.json";
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
    zakazane: [
      { model: "03", zakazaneKolory: ["01", "08", "13", "14", "15", "16", "18"] },
      { model: "05", zakazaneKolory: ["01", "08", "15", "16", "17", "18"] },
      { model: "06", zakazaneKolory: ["01", "05", "07", "08", "12", "15", "16", "17", "18"] },
      { model: "08", zakazaneKolory: ["01", "02", "03", "05", "07", "08", "10", "15", "16", "17", "18"] },
      { model: "09", zakazaneKolory: ["13", "15", "16"] },
      { model: "29A", zakazaneKolory: ["02", "03", "08", "10", "13", "15", "16", "18"] },
      { model: "34", zakazaneKolory: ["07", "08", "15", "16", "18"] },
      { model: "42", zakazaneKolory: ["07", "08", "15", "16", "18"] },
    ],
    dostepne_okucia: [],
    tabsfilter: [],
    showmodal: false,
    wizscale: 1,
    sizecodedimensions: sizecodedimensions,
    seria: {
      dane: [
        { artnr: "661", bez: "Alu Hybrid", link: "https://wiked.pl/technologia/linia-alu-hybrid/", promo: "https://wiked.pl/promo-1-pln/" },
        { artnr: "80", bez: "IRON - ościeżnica pod portal", link: "https://wiked.pl/iron/" },
        { artnr: "81", bez: "IRON - ościeżnica symetryczna", link: "https://wiked.pl/iron/" },
        { artnr: "82", bez: "IRON - ościeżnica regulowana", link: "https://wiked.pl/iron/" },
        { artnr: "83", bez: "IRON - ościeżnica kątowa", link: "https://wiked.pl/iron/" },
        { artnr: "60", bez: "Protect - drzwi wejściowe do mieszkań", link: "https://wiked.pl/technologia/linia-protect/" },
        { artnr: "41", bez: "Termo Prestige Lux", link: "https://wiked.pl/linia-termo-prestige-lux/", promo: "https://wiked.pl/promo-1-pln/" },
        { artnr: "32", bez: "Optimum Aluminiowo - Kompozytowa", link: "https://wiked.pl/linia-optimum-aluminiowo-kompozytowa/" },
        { artnr: "31", bez: "Optimum Termo", link: "https://wiked.pl/linia-optimum-termo/", promo: "https://wiked.pl/promo-1-pln/" },
        { artnr: "30", bez: "Optimum", link: "https://wiked.pl/linia-optimum/" },
        { artnr: "23", bez: "Premium Plus", link: "https://wiked.pl/premium-plus/" },
        { artnr: "22", bez: "Premium Aluminiowo - Kompozytowa", link: "https://wiked.pl/premium-aluminiowo-kompozytowa/" },
        { artnr: "21", bez: "Premium Termo", link: "https://wiked.pl/linia-premium-termo/", promo: "https://wiked.pl/promo-1-pln/" },
        { artnr: "20", bez: "Premium", link: "https://wiked.pl/linia-premium/" },
      ],
    },
    klasaBezpieczenstwa: {
      klasa: 6811,
      wlasciwosc: 1060,
      dane: [
        { artnr: "RC2", bez: "Klasa bezpieczeństwa RC2" },
        { artnr: "RC3", bez: "Klasa bezpieczeństwa RC3", cena: 220 },
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
        { artnr: "TORO", bez: "TORO" },
        { artnr: "STRIPE", bez: "STRIPE" },
        { artnr: "SPACE DECOR", bez: "SPACE DECOR" },
        { artnr: "SPACE RAL", bez: "SPACE RAL" },
        // { artnr: "SPACE DEERSTONE", bez: "SPACE DEERSTONE" },
        { artnr: "SPACE LACOBEL", bez: "SPACE LACOBEL" },
        { artnr: "SLIM SPACE LACOBEL", bez: "SLIM SPACE LACOBEL" },
        { artnr: "SLIM SPACE ŻYWICA", bez: "SLIM SPACE 2" },
        // { artnr: "SLIM", bez: "SLIM" },
        // { artnr: "MODERN", bez: "MODERN" },
        { artnr: "DUO", bez: "DUO" },
        { artnr: "POCKET", bez: "POCKET" },
        // { artnr: "-", bez: "KLAMKI" },
        // { artnr: "-", bez: "POZOSTAŁE" },
      ],
    },
    protekty: {
      dane: [
        { artnr: "protect", bez: "Protect" },
        { artnr: "iron", bez: "Iron" },
      ],
    },
    opcja: {
      dane: [
        { artnr: "rw", bez: "Rw", seria: "60" },
        { artnr: "rwrc3", bez: "Rw + RC3", seria: "65" },
        { artnr: "rwei30", bez: "Rw + EI30", seria: "70" },
        { artnr: "rwrc3ei30", bez: "Rw + RC3 + EI30", seria: "75" },
      ],
    },
    automatyczneZasuwnice: {
      dane: [
        { artnr: "-", bez: "Brak", serie: "-", cena: 0 },
        { artnr: "A", bez: "Automatic", serie: "41", cena: 2290, opis: "W skład zestawu wchodzą zamek automatyczny z napędem elektrycznym, odpowiednie okablowanie. Dostępne tylko dla linii Termo Prestige Lux, nie wymaga stosowania elektrozaczepów, w standardzie zasuwnica automatyczna." },
        {
          artnr: "E",
          bez: "Elektromotoryczna",
          serie: "41,661",
          cena: 2840,
          opis: "W skład zestawu wchodzą zamek elektromotoryczny z napędem elektrycznym, odpowiednie okablowanie. Dostępne tylko dla linii Termo Prestige Lux i Alu Hybrid, nie wymaga stosowania elektrozaczepów, w standardzie zasuwnica elektromotoryczna.",
        },
      ],
    },
    zasilacze: {
      dane: [
        { artnr: "-", bez: "Brak", cena: 0 },
        {
          artnr: "12V",
          bez: "12V",
          cena: 150 /*  */,
          opis: "Dedykowany dla rozwiązań z zamkiem Automatic dla linii Termo Prestige Lux (brak możliwość zastosowania przy wybraniu podświetlenia LED tj. podświetlane pochwyty, podświetlony próg lub intarsje LED w doświetlu)",
          // Montowany w puszkę elektryczną fi min.70 mm.
        },
        { artnr: "24V", bez: "24V", cena: 190, opis: "Niezbędny dla zastosowaniu elektrozaczepu lub pochwytów z przyciskiem, podświetleniem lub czytnikiem linii papilarnych oraz dla wszystkich podświetleń LED" },
        // Montowany w podwójną puszkę kieszeniową (w ofercie WIKĘD)
      ],
    },
    promocja: false,
    opcjepochwytu: {
      dane: [
        { artnr: "-", bez: "Brak" },
        { artnr: "x", bez: "Przycisk" },
        { artnr: "s", bez: "Czytnik linii papilarnych" },
      ],
    },
    rozety: {
      dane: [
        { artnr: "SlimSoloX", bez: "Rozeta dolna do klamki PrimeSolo" },
        { artnr: "RozPiersc", bez: "Rozeta pierścieniowa", cena: 210 },
        // { artnr: "RozPiersc", bez: "Rozeta pierścieniowa", cena: 380 },
        { artnr: "LavaX", bez: "Rozeta dolna do klamki Lava" },
      ],
    },
    // rozety: {
    //   dane: [
    //     { artnr: "STD", bez: "Standard" },
    //     { artnr: "Piersc", bez: "Pieścieniowa" },
    //   ],
    // },
    protect: {
      dane: [
        { artnr: "blok", bez: "tak" },
        { artnr: "dom", bez: "nie" },
      ],
    },
    kierunki: {
      dane: [
        { artnr: "z", bez: "Na Zewnątrz" },
        { artnr: "w", bez: "Do Wewnątrz" },
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
      { bez: "plus", bez2: "Oferta", available: false, shown: true },
      { bez: "protect", bez2: "Szukasz drzwi ?", available: false, shown: true },
      { bez: "inspiracja", bez2: "Wybierz opcje", available: false, shown: false },
      { bez: "Inspiracje", bez2: "Inspiracje", available: true, shown: true },
      { bez: "Model", bez2: "Wzór", available: true, shown: true },
      { bez: "Seria", bez2: "Technologia", available: true, shown: false },
      { bez: "Naswietle", bez2: "Naświetle", available: true, shown: false },
      { bez: "Portal", bez2: "Portal", available: true, shown: false },
      // { bez: "Typ", bez2: "Typ", available: true, shown: false },
      // {bez:'Model2',bez2:'Dostawka',available:true,shown:false},
      { bez: "Kolor", bez2: "Kolor", available: true, shown: false },
      { bez: "Szyba", bez2: "Przeszklenie", available: true, shown: false },
      { bez: "Rama", bez2: "Ramka", available: true, shown: false },
      { bez: "Okucia", bez2: "Okucia", available: true, shown: false },
      // { bez: "Klamka", bez2: "Klamka", available: true, shown: false },
      { bez: "Akcesoria", bez2: "Akcesoria", available: true, shown: false },
      // {bez:'Dostawka',bez2:'dostawkę',available:false,show:false,offset:0,hover:false},
      { bez: "Podsumowanie", bez2: "Podsumowanie", available: true, shown: false },
    ],
    mixkolorlista: ["FC", "FL1", "FL1A", "FL2", "F1A", "F1B", "F1C", "F1D", "F2A", "F2B", "F4A", "F4B", "F4C", "F4D", "F4E", "F6A", "F6B", "F6C", "F6D", "F6E"],
    selectedwidok: "W",
    activeTab: "protect",
    wzor: { dane: all.wzorytablica },
    wzorp: { dane: all.wzorytablicap },
    wzorplus: { dane: all.wzorytablicaplus },
    inspiracje: { dane: all.inspiracje },
    inspiracjetablica: { dane: all.inspiracjetablica },
    // wzor2:{dane:all.wzorydodostawki},
    inoxlista: all.inoxlista,
    inoxkolor: {
      dane: [
        { artnr: "30", bez: "Black Lacobel" },
        { artnr: "10301", bez: "Inox" },
        { artnr: "0", bez: "Brak" },
        // { artnr: "0", bez: "Brak" },
        { artnr: "10304", bez: "Black" },
        { artnr: "10335", bez: "Gold" },
        { artnr: "1", bez: "Marmur Anatolian", wycofany: true },
        { artnr: "2", bez: "Marmur Czarny", wycofany: true },
        { artnr: "3", bez: "Drewniany", wycofany: true },
      ],
    },
    inoxkolor2: {
      dane: [
        { artnr: "1", bez: "Marmur Anatolian" },
        { artnr: "2", bez: "Marmur Czarny" },
        { artnr: "3", bez: "Drewniany" },
      ],
    },
    pochwytdlugosci: {
      dane: [
        { artnr: 20, bez: "20 cm" },
        { artnr: 45, bez: "45 cm" },
        { artnr: 50, bez: "50 cm" },
        { artnr: 60, bez: "60 cm" },
        { artnr: 90, bez: "90 cm" },
        { artnr: 120, bez: "120 cm" },
        { artnr: 150, bez: "150 cm" },
        { artnr: 180, bez: "180 cm" },
        { artnr: 250, bez: "2x50 cm" },
      ],
    },
    led: {
      dane: [
        { artnr: "-", bez: "Nie" },
        { artnr: "true", bez: "Tak" },
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
      dane: [{ artnr: "2", bez: "Zewnątrz" }],
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
        { artnr: "DEK", bez: "NATURAL DECOR", klasa: "decor", opis: "Paleta ze standardowymi laminatami. Naturalne kolory oklein o strukturze drewna oraz matu." },
        { artnr: "SKY", bez: "CRYSTAL SKY", klasa: "sky", opis: "Kolory mieniące się w słońcu. Malowanie drzwi o strukturze kryształków, które doda blasku każdemu domowi." },
        { artnr: "RAL", bez: "HARMONY COLOR", klasa: "ral", opis: "Szeroka gama kolorów RAL. Malowanie drzwi o strukturze skórki pomarańczy w dowolnym kolorze." },
        { artnr: "TOP", bez: "Top Trends Color 2023", klasa: "top", opis: "Najmodniejsze kolory sezonu. Paleta oparta na najnowszych trendach w dziedzinie mody i designu." },
      ],
    },
    kolor2typ: {
      dane: [
        { artnr: "DEK", bez: "NATURAL DECOR", klasa: "decor", opis: "Paleta ze standardowymi laminatami. Naturalne kolory oklein o strukturze drewna oraz matu." },
        { artnr: "SKY", bez: "CRYSTAL SKY", klasa: "sky", opis: "Kolory mieniące się w słońcu. Malowanie drzwi o strukturze kryształków, które doda blasku każdemu domowi." },
        { artnr: "RAL", bez: "HARMONY COLOR", klasa: "ral", opis: "Szeroka gama kolorów RAL. Malowanie drzwi o strukturze skórki pomarańczy w dowolnym kolorze." },
        { artnr: "TOP", bez: "Top Trends Color 2023", klasa: "top", opis: "Najmodniejsze kolory sezonu. Paleta oparta na najnowszych trendach w dziedzinie mody i designu." },
        { artnr: "ANO", bez: "ANODA", klasa: "ano", opis: "Odkryj głębię wzoru. Subtelność kolorów podkreślona dekoracyjną powłoką blachy anodowanej." },
      ],
    },
    // kolor2typ: {
    //   dane: [
    //     { artnr: "DEK", bez: "NATURAL DECOR" },
    //     { artnr: "SKY", bez: "CRYSTAL SKY COLOR" },
    //     { artnr: "RAL", bez: "HARMONY COLOR" },
    //     { artnr: "ANO", bez: "ANODA" },
    //   ],
    // },
    kolor: { dane: all.kolortablica },
    zakazanekolory: { dane: all.zakazanekolory },
    szyba: { dane: all.szybatablica },
    baza: { dane: all.bazaszyba },
    kolekcja: { dane: all.kolekcjatablica },
    przypisaniaszyb: all.przypisaniaszyb,
    szyba2: {
      dane: [
        { artnr: "s", bez: "Standard (przezroczysta)" },
        { artnr: "28", bez: "Skip Black 3D", cena: 770 },
        { artnr: "29", bez: "Skip Black Lacobel", cena: 770 },
        { artnr: "08", bez: "Skip Lustro", cena: 770 },
        { artnr: "p", bez: "Piaskowane według wzoru" },
        { artnr: "p2", bez: "Piaskowane według wzoru" },
        { artnr: "p3", bez: "Piaskowane według wzoru" },
        { artnr: "p37", bez: "Piaskowane według wzoru" },
        { artnr: "p39", bez: "Piaskowane według wzoru" },
        { artnr: "p25", bez: "Piaskowane według wzoru" },
        { artnr: "p26i", bez: "Piaskowane według wzoru" },
        {
          artnr: "o4piaskPWzL",
          bez: "Szyba Lacobel z aplikacjami LED i lustrem od wewnątrz",
          cena: 0,
          // wzory: ["12C", "22B", "25C", "26J", "26K", "26H", "26F", "26G", "26I", "26C", "26D", "26E", "26", "30B", "31A", "37", "38", "39", "39A", "40", "40A", "41", "41A", "41B", "42", "44", "44A", "44B", "44C", "45", "FE", "FD", "FC", "FB"],
          wzory: ["12C", "22B", "25C", "26J", "26K", "26H", "26F", "26G", "26I", "26C", "26D", "26E", "26", "30B", "31A", "37", "38", "39", "39A", "40", "40A", "41", "41A", "41B", "42", "44", "44A", "44B", "44C", "45"],
        },
        { artnr: "c", bez: "Piaskowane w całości" },
        // { artnr: "bl", bez: "Black", cena: 500 },
        { artnr: "bl", bez: "Black", cena: 830, cena2: 970 },
        { artnr: "b", bez: "Glass Black", cena: 830, cena2: 970 },
        { artnr: "g", bez: "Glass Lustro Weneckie", cena: 830, cena2: 980 },
        { artnr: "w", bez: "Lustro Weneckie", cena: 270 },
        { artnr: "a", bez: "Reflex Grafit", cena: 110 },
        { artnr: "r", bez: "Reflex Brąz" },
        { artnr: "m", bez: "Mleczne" },
        { artnr: "n", bez: "Pełne" },
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
        // { artnr: "GP", bez: "Gałko-pochwyt" },
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
        { artnr: "10335", bez: "Złoty" },
      ],
    },
    koloryklamek: all.koloryklamek,
    dostepneOkucia: [],
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
        { artnr: "AA", bez: "Samozamykacz nawierzchniowy z ramieniem PPOŻ", cena: 400 }, //263
        { artnr: "LN", bez: "Listwowy nawierzchniowy", cena: 1100 + 100 }, //ok
        { artnr: "LC", bez: "Listwowy chowany", cena: 1320 + 100 }, //ok
        { artnr: "R", bez: "Z ramieniem", cena: 400 + 100 }, //ok
        // { artnr: "RB", bez: "Z ramieniem i blokadą", cena: 570 + 100 }, //ok
        { artnr: "W", bez: "Tylko wzmocnienie pod samozamykacz", cena: 110, opis: "Zalecane, gdy zdecydujesz się na późniejszy montaż samozamykacza" }, //ok
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
    kopniak: {
      bez: "Kopniak",
      dane: [
        { artnr: "-", bez: "Brak", cena: 0 },
        { artnr: "1", bez: "Wewnątrz", cena: 120 }, //84
        { artnr: "2", bez: "Zewnątrz", cena: 120 }, //84
        { artnr: "3", bez: "Obustronnie", cena: 240 }, //168
      ],
    },
    elektrozaczepOpcje: {
      dane: [
        // { artnr: "K", bez: "z kontaktronem", cena: 280, opis: "Zapewnia wyższą estetykę (brak montażu w ościeżnicy) oraz prostszy sposób połączenia z centralą." },
        { artnr: "DN", bez: "z funkcją rolki/ dzień-noc", cena: 280, opis: "Napiecie znamionowe: 8-12V Wymagany samozamykacz w przypadku korzystania z funkcji rolki/dzień-noc" },
        { artnr: "PDN", bez: "z pamięcią z funkcją/ dzień-noc", cena: 300, opis: "Urządzenie dedykowane dla inteligentnych systemów Wymagany samozamykacz w przypadku korzystania z finkcji rolki/dzień-noc" },
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
    progled: {
      bez: "progled",
      dane: [
        { artnr: false, bez: "Nie" },
        { artnr: true, bez: "Tak" },
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
        // { artnr: "B", bez: "Biometryczny" },
        // { artnr: "K", bez: "Kodowy" },
        // { artnr: "Z", bez: "Zbliżeniowy" },
        { artnr: "M", bez: "Cytnik Multi Smart", cena: 3140 },
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
    kat: {
      dane: [
        { artnr: 45, bez: "45°" },
        { artnr: 90, bez: "90°" },
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
      plus: "nie",
      klasaBezpieczenstwa: "RC2",
      protekty: "protect",
      szukaj: "",
      kierunki: "z",
      protect: "",
      podkolekcja: "",
      kolekcja: "n",
      lamele: "N",
      lameleilosc: 9,
      wzor: "01",
      wzor2: "01",
      wariant: "S",
      kolor1typ: "SKY",
      kolor2typ: "SKY",
      kolor3typ: "SKY",
      kolor4typ: "SKY",
      kolor5typ: "SKY",
      kolor6typ: "SKY",
      kolor7typ: "SKY",

      activeKolorTyp: "DEK",
      activeKolor2Typ: "DEK",
      activeKolor3Typ: "DEK",
      activeKolor4Typ: "DEK",
      activeKolor5Typ: "DEK",
      activeKolor6Typ: "DEK",
      activeKolor7Typ: "RAL",
      kolor: "C013", //--06
      kolor2: "C013",
      kolor3: "C013",
      kolor4: "C013",
      kolor5: "C013",
      kolor6: "C013",
      kolor7: "C013",
      pochwyt: "03",
      pochwyt2: "1",
      pochwyty: "BETA",
      mixz: "03",
      mixw: "03",
      szyba: "00",
      baza: "06",
      szyba2: "g",
      // ramka: "",
      seria: "41",
      kierunek: "Pz",
      sposobotw: "KP",
      klamka: "P120p90",
      klamkaWew: "SlimSolo",
      klamkakolor: "10304", //--10301
      rozeta: "SlimSoloX",
      inoxstrona: "3",
      inoxkolor: "10304", //--10301
      kopniakkolor: "10301",
      samozamykacz: "-",
      samozamykacz2: "-",
      samozamykaczKolor: "-",
      wizjer: "-",
      kopniak: "-",
      elektrozaczep: "N",
      elektrozaczepopcja: "K",
      elektrozaczepr: "N",
      automatyka: "-",
      kodrozmiaru: "90",
      typ: "D1",
      wysokoscng: 400,
      szerokoscnb1: 400,
      szerokoscnb2: 400,
      szerokosccal: 1,
      opcja: "rw",
      dym: "N",
      dlugosci: "120",
      kat: 90,
      led: "-",
      opcjepochwytu: "-",
      inspiracja: "",
      filtryinspiracjeitem: "tradycjonalisty",
      inspiracjanr: "",
      progled: false,
      smart: false,
      automatycznaZasuwnica: "-",
      zasilacz: "-",
    },
    ledy: [
      // {wzory:['12C'],ilosc:7,gora:200,odstep:267.5},
      {
        wzory: ["44", "44A", "44B", "44C"],
        ilosc: 7,
        gora: 200,
        odstep: 267.5,
      },
      {
        wzory: ["42"],
        ilosc: 7,
        gora: 185,
        odstep: 274,
      },
      {
        wzory: ["39", "39A"],
        ilosc: 5,
        gora: 176,
        odstep: 423,
      },
      {
        wzory: ["22B", "31A"],
        ilosc: 5,
        gora: 530,
        odstep: 261,
      },
      {
        wzory: ["26J"],
        ilosc: 5,
        gora: 213,
        odstep: 412,
      },
      {
        wzory: ["26K"],
        ilosc: 4,
        gora: 420,
        odstep: 405,
      },
      {
        wzory: ["26I"],
        ilosc: 3,
        gora: 528,
        odstep: 515,
      },
      {
        wzory: ["26E"],
        ilosc: 8,
        gora: 270,
        odstep: 80,
        odstep2: 337,
      },
      {
        wzory: ["45"],
        ilosc: 4,
        gora: 345,
        odstep: 92,
        odstep3: 1183,
      },
      { wzory: ["40A", "41", "41A", "41B"], ilosc: 5, gora: 260, odstep: 400 },
      { wzory: ["26", "26C", "26D", "26G", "26F", "26H", "25C", "40"], ilosc: 5, gora: 250, odstep: 396 },
      { wzory: ["30B"], ilosc: 7, gora: 268, odstep: 254 },
      {
        wzory: ["FB"],
        ilosc: 6,
        gora: 250,
        odstep: 316,
      },
      { wzory: ["38", "37"], ilosc: 7, gora: 268, odstep: 264 },
      {
        wzory: ["12C"],
        ilosc: 7,
        gora: 180,
        odstep: 270,
      },
      {
        wzory: ["FC"],
        ilosc: 7,
        gora: 205,
        odstep: 272,
      },
      // ['FE','FD','FC','FB']
    ],
    priceokucia: 0,
    basicprice: 0,

    backgrounds: [
      //  {url:'/images/backgrounds/1.jpg',x:330,y:312,scalex:0.15,scaley:0.15},
      // { url: "/images/backgrounds/1.jpg", x: 83 * 0.87, y: 149 * 0.87, scalex: 149 * 0.87 / (1025 / 4), scaley: 306 * 0.87 / (2080 / 4) },
      { url: "/images/backgrounds/1.jpg", width: 321, x: 456 * 0.87, y: 149 * 0.87, scalex: (152 * 0.87) / (1025 / 4), scaley: (304 * 0.87) / (2080 / 4), dom: true },
      { url: "/images/backgrounds/4.jpg", x: 400, y: 149, scalex: 108 / (1025 / 4), scaley: 235 / (2080 / 4) },
      { url: "/images/backgrounds/5.jpg", x: 252, y: 38, scalex: 204 / (1025 / 4), scaley: 407 / (2080 / 4) },
      { url: "/images/backgrounds/6.jpg", x: 309, y: 154, scalex: 90 / (1025 / 4), scaley: 189 / (2080 / 4) },
      { url: "/images/backgrounds/7.jpg", x: 245, y: 64, scalex: 191 / (1025 / 4), scaley: 363 / (2080 / 4) },
      { url: "/images/backgrounds/8.jpg", x: 283, y: 43, scalex: 158 / (1025 / 4), scaley: 360 / (2080 / 4) },
      { url: "/images/backgrounds/9.jpg", x: 267, y: 49, scalex: 165 / (1025 / 4), scaley: 334 / (2080 / 4) },
    ],
    // activebackground: { url: "/images/backgrounds/5.jpg", x: 252, y: 38, scalex: 204 / (1025 / 4), scaley: 407 / (2080 / 4) },
    // activebackground: { url: "/images/backgrounds/1.jpg", x: 83 * 0.87, y: 149 * 0.87, scalex: 149 * 0.87 / (1025 / 4), scaley: 306 * 0.87 / (2080 / 4) },
    // activebackground: { url: "/images/backgrounds/1.jpg", x: 158 * 0.87, y: 8 * 0.87, scalex: 149 * 0.87 / (1025 / 4), scaley: 306 * 0.87 / (2080 / 4) },
    activebackground: { url: "/images/backgrounds/1.jpg", width: 123, x: 83 * 0.87, y: 149 * 0.87, scalex: (287 * 0.87) / (1025 / 4), scaley: (584 * 0.87) / (2080 / 4) },
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
      // console.log(payload)
      state.product[payload.attr] = payload.val;
      // state.product.seria = 23;
    },
    setActiveBackground(state, payload) {
      // console.log(payload)
      state.activebackground = payload;
    },
    setNextTab(state) {
      // console.log('Cofnij')
      if (state.activeTab == "protect") {
        state.activeTab = "inspiracja";
        return;
      }
      if (state.activeTab == "inspiracja") {
        state.activeTab = "Model";
        return;
      }
      let num = state.tabsfilter.findIndex((el) => el.bez == state.activeTab);
      let tab = state.tabsfilter.filter((el, index) => index > num)[0].bez;
      state.activeTab = tab;
    },
    setPrevTab(state) {
      // console.log('Cofnij')
      if (state.activeTab == "inspiracja") {
        state.activeTab = "protect";
        return;
      }
      // if(state.activeTab=='Model'){
      //   state.activeTab='inspiracja'
      //   return
      // }
      let num = state.tabsfilter.findIndex((el) => el.bez == state.activeTab);
      // console.log(state.tabsfilter.lenght)
      if (num == 0) {
        if (confirm("Kliknij OK aby zacząć konfiguracje od początku.") == true) {
          window.location.reload();
        }
        return;
      }
      let tab = state.tabsfilter[num - 1].bez;
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
    tabsFilter(context, val) {
      context.commit("tabsFilter", val);
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
    automatyczneZasuwniceFilter: (state, getters) => {
      let seria = state.product.seria;
      let zasuwnice = state.automatyczneZasuwnice.dane;
      let opcjepochwytu = state.product.opcjepochwytu;
      let elektrozaczep = state.product.elektrozaczep;
      let sposobotw = state.product.sposobotw;

      if (["KK", "KG"].indexOf(sposobotw) > -1) {
        zasuwnice = zasuwnice.filter((el) => el.artnr == "-");
      }
      if (["KP", "PP"].indexOf(sposobotw) > -1 && opcjepochwytu == "x") {
        if (elektrozaczep == "J") {
          zasuwnice = zasuwnice.filter((el) => el.artnr == "-");
        } else {
          zasuwnice = zasuwnice.filter((el) => el.artnr != "-");
        }
      }

      zasuwnice = zasuwnice.filter(
        (el) =>
          el.serie
            .trim()
            .split(",")
            .indexOf(seria) > -1 || el.serie.indexOf("-") > -1
      );

      return zasuwnice;
      // }
      // let filtered = state.automatyka.dane.filter((el) => el.typ == state.product.kolor1typ);
      // return state.progled.dane;
    },
    rozetyFilter: (state, getters) => {
      const seria = parseInt(state.product.seria);
      var rozety = state.rozety.dane;
      const sposobotw = state.product.sposobotw;
      const klamkaWew = state.product.klamkaWew;
      // console.log(klamkaWew);

      if (klamkaWew == "Lava" && sposobotw == "KP") {
        // console.log("Bez solo");
        rozety = rozety.filter((el) => el.artnr != "SlimSoloX");
      }
      if (![41, 661].includes(seria)) {
        // console.log(seria);
        // console.log(![41, 661].includes(seria));
        // console.log("Bez pier");
        rozety = rozety.filter((el) => el.artnr != "RozPiersc");
      }
      // console.log(rozety);
      return rozety;
    },
    zasilaczeFilter: (state, getters) => {
      let seria = state.product.seria;
      let progled = state.product.progled;
      let szyba2 = state.product.szyba2;
      let led = state.product.led;
      let sposobotw = state.product.sposobotw;
      let automatycznaZasuwnica = state.product.automatycznaZasuwnica;
      let typ = state.product.typ;
      let zasilacze = state.zasilacze.dane;
      let opcjepochwytu = state.product.opcjepochwytu;
      let elektrozaczep = state.product.elektrozaczep;
      if (automatycznaZasuwnica == "E" || progled || (typ.indexOf("N") > 0 && szyba2 == "o4piaskPWzL") || (["KP", "PP"].includes(sposobotw) && led != "-")) {
        zasilacze = zasilacze.filter((el) => el.artnr == "24V");
        state.product.zasilacz = "24V";
      } else if (automatycznaZasuwnica == "A" || (["KP", "PP"].includes(sposobotw) && opcjepochwytu != "-")) {
        zasilacze = zasilacze.filter((el) => el.artnr == "12V");
        state.product.zasilacz = "12V";
      }

      return zasilacze;
    },
    progfilter: (state, getters) => {
      if (["F1A", "F1B", "F1C", "F1D", "F2A", "F2B", "F4A", "F4B", "F4C", "F4D", "F4E", "F6A", "F6B", "F6C", "F6D", "F4E", "F9B", "FC", "G4"].indexOf(state.product.wzor) > -1) {
        return state.progled.dane.filter((el) => el.artnr == false);
      }
      // let filtered = state.automatyka.dane.filter((el) => el.typ == state.product.kolor1typ);
      return state.progled.dane;
    },
    automatykafilter: (state, getters) => {
      if (state.product.klamka.indexOf("45") > -1) {
        return state.automatyka.dane.filter((el) => el.artnr == "-");
      }
      // let filtered = state.automatyka.dane.filter((el) => el.typ == state.product.kolor1typ);
      return state.automatyka.dane;
    },
    elektrozaczepOpcjefilter: (state, getters) => {
      return state.elektrozaczepOpcje.dane;
    },
    elektrozaczepfilter: (state, getters) => {
      var dane = state.elektrozaczep.dane;
      if (state.product.automatycznaZasuwnica != "-") {
        dane = dane.filter((el) => el.artnr != "J");
      }
      // if (state.product.automatyka != "-") {
      //   return state.elektrozaczep.dane.filter((el) => el.artnr == "N");
      // }
      // if (state.product.opcjepochwytu == "x" && state.product.automatycznaZasuwnica == "-") {
      //   return state.elektrozaczep.dane.filter((el) => el.artnr == "J");
      // }
      // let filtered = state.elektrozaczep.dane.filter((el) => el.typ == state.product.kolor1typ);
      return dane;
    },
    kolorFilter: (state, getters) => {
      const seria = parseInt(state.product.seria);
      if (seria == 23) {
        return state.kolor.dane.filter((el) => el.typ == "DEK" && ["03", "04", "06", "07", "14"].includes(el.artnr));
      }

      let wzor = state.product.wzor;
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor1typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolorTyp);
      if (getters.activeModel.typ == "FI") {
        filtered = state.kolor.dane.filter((el) => el.typ == "DEK");
      }
      let zakazaneKolory = state.zakazane.find((el) => el.model == wzor);
      // console.log(state.zakazane);
      // console.log(zakazaneKolory);
      let kolor = state.product.kolor;
      let szyba = state.product.szyba;
      let k = state.kolor.dane.find((el) => el.artnr == kolor).bez;
      // console.log("kolor: " + kolor);
      // console.log("wzor: " + wzor);
      // console.log("szyba: " + szyba);
      if (szyba != "00" && zakazaneKolory) {
        filtered = filtered.filter((el) => !zakazaneKolory.zakazaneKolory.includes(el.artnr));
      }

      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }

      if (state.product.seria != "41" && state.product.seria != "31" && state.product.seria != "21") {
        filtered = filtered.filter((el) => el.artnr != "12");
      }

      if (state.product.szyba != "00" && getters.activeModel.typ == "PCV") {
        filtered = filtered
          .filter((el) => el.artnr != "17")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "13");
      }

      return filtered;
    },
    kolorFilter7: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor7typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor7Typ);
      return filtered;
    },
    kolorFilter2: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor2typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor2Typ);
      if (getters.activeModel.typ == "FI") {
        filtered = state.kolor.dane.filter((el) => el.typ == "DEK");
      }
      if (state.product.szyba != "00" && getters.activeModel.typ == "PCV") {
        filtered = filtered.filter((el) => el.artnr != "17").filter((el) => el.artnr != "05");
      }
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
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
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
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "13");
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
      return filtered;
    },
    kolorFilter3: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor3typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor3Typ);
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
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
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
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "13");
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
      return filtered;
    },
    kolorFilter4: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor4typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor7Typ);
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
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
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
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "13");
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
      return filtered;
    },
    kolorFilter5: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor5typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor5Typ);
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
          .filter((el) => el.artnr != "01")
          .filter((el) => el.artnr != "05")
          .filter((el) => el.artnr != "08");
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
          .filter((el) => el.artnr != "08")
          .filter((el) => el.artnr != "03")
          .filter((el) => el.artnr != "13");
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
      return filtered;
    },
    kolorFilter6: (state, getters) => {
      // let filtered = state.kolor.dane.filter((el) => el.typ == state.product.kolor6typ);
      let filtered = state.kolor.dane.filter((el) => el.typ == state.product.activeKolor6Typ);
      if ((getters.activeModel.typ == "PCV" && state.product.szyba != "00") || getters.activeModel.artnr == "29") {
        filtered = filtered.filter((el) => el.artnr != "14");
      }
      // console.log(state.product.seria)
      // if (state.product.seria.indexOf("1") == -1 || (getters.activeModel.typ == "PCV" && state.product.szyba != "00")) {
      //   filtered = filtered.filter((el) => el.artnr != "11").filter((el) => el.artnr != "13");
      // }

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
      return filtered;
    },

    kolorFilterp: (state, getters) => {
      let filtered = state.kolor.dane.filter((el) => el.typ == state.activeKolorTyp);

      filtered = filtered.filter((el) => el.artnr != "12");

      return filtered;
    },
    wariantFilter: (state) => {
      return state.mixkolorlista.indexOf(state.product.wzor) == -1 ? state.wariant.dane.slice(0, 2) : state.wariant.dane.filter((el) => el.artnr != "B");
    },
    kolekcjaOpis: (state) => {
      // console.log(kolekcja.dane)
      return state.mixkolorlista.indexOf(state.product.wzor) == -1 ? state.wariant.dane.slice(0, 2) : state.wariant.dane.filter((el) => el.artnr != "B");
    },
    wariantFilter2: (state) => {
      // if (state.seriac == "60" || state.product.plus=='tak') {
      if (state.seriac == "60") {
        return state.kolortyp.dane.filter((el) => el.artnr == "S");
      } else {
        return state.mixkolorlista.indexOf(state.product.wzor) == -1 ? state.wariant.dane.slice(0, 2) : state.wariant.dane.filter((el) => el.artnr != "B");
      }
    },
    kolor1typFilter: (state, getters) => {
      const seria = parseInt(state.product.seria);
      const wzor = state.product.wzor;
      const typ = getters.activeModel.typ;
      if (seria == 23) {
        return state.kolortyp.dane.filter((el) => el.artnr == "DEK");
      }
      if (typ == "SL") {
        state.product.activeKolorTyp = state.product.kolor1typ;
        state.product.activeKolor2Typ = state.product.kolor2typ;
        state.product.activeKolor5Typ = state.product.kolor5typ;
        state.product.activeKolor6Typ = state.product.kolor6typ;
        return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
      }
      if ((typ == "PCV" && state.product.szyba != "00") || state.product.seria == "22" || state.product.seria == "32") {
        return state.kolortyp.dane.filter((el) => el.artnr == "DEK");
      } else {
        // if (state.product.wzor == "51" || (typ == "3D" && state.product.wariant == "S")) {
        if (typ == "3D" || (typ == "3D" && state.product.wariant == "S")) {
          return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
        } else {
          return state.kolortyp.dane;
        }
      }
    },
    kolor3typFilter: (state, getters) => {
      const typ = getters.activeModel.typ;
      const szyba = state.product.szyba;
      if (typ == "PCV" && szyba != "-") {
        return state.kolortyp.dane.filter((el) => el.artnr == "DEK");
      }
      if (typ == "SL") {
        state.product.activeKolor3Typ = "RAL";
        return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
      }
      if (typ == "3D") {
        return state.kolortyp.dane.filter((el) => el.artnr != "DEK");
      } else {
        return state.kolortyp.dane;
      }
    },
    kolor7typFilter: (state, getters) => {
      return state.kolor2typ.dane;
    },

    activeOpcja: (state) => {
      return state.opcja.dane.find((el) => el.artnr == state.product.opcja);
    },
    activeSeria: (state) => {
      return state.seria.dane.find((el) => el.artnr == state.product.seria);
    },
    activeModel: (state) => {
      // console.log(state.product.wzor);
      return state.wzor.dane.find((el) => el.artnr == state.product.wzor);
    },
    // activeModel2: (state) => {
    //   return state.wzor2.dane.find((el) => el.artnr == state.product.wzor2);
    // },
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
      return klamki.filter((el) => el.artnr == state.product.klamka)[0] || klamki[0];
    },
    activeKlamkaWew: (state) => {
      return klamki.filter((el) => el.artnr == state.product.klamkaWew)[0] || klamki[0];
    },
    activeKlamkaKolor: (state) => {
      return state.klamkakolor.dane.find((el) => el.artnr == state.product.klamkakolor) || { bez: "błąd" };
    },
    activeSotw: (state) => {
      return state.sposobotw.dane.find((el) => el.artnr == state.product.sposobotw);
    },
    activeSzyba: (state) => {
      return state.szyba.dane.find((el) => el.artnr == state.product.szyba);
    },
    activeSzybaBaza: (state) => {
      return state.szyba.dane.find((el) => el.artnr == state.product.baza);
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
    activeKolor7: (state) => {
      return state.kolor.dane.find((el) => el.artnr == state.product.kolor7);
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
      return SAMOZAMYKACZE.find((el) => el.artnr == state.product.samozamykacz);
      // return state.samozamykacz.dane.find((el) => el.artnr == state.product.samozamykacz);
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
      const seria = state.product.seria;
      if ([60, 80, 81, 82, 83].includes(parseInt(seria))) {
        return state.typ.dane.filter((el) => ["D1", "D1N08"].includes(el.artnr));
      }
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
    kierunkifilter: (state, getters) => {
      if (state.product.wzor == "GF6" || getters.activeModel.typ == "MG") {
        return state.kierunki.dane.filter((el) => el.artnr != "w");
      } else {
        return state.kierunki.dane;
      }
    },
    kierunekfilter: (state, getters) => {
      if (state.product.wzor == "GF6" || getters.activeModel.typ == "MG") {
        return state.kierunek.dane.filter((el) => el.artnr != "Pw" && el.artnr != "Lw");
      }
      if (state.product.typ == "D1N08") {
        return state.kierunek.dane.filter((el) => el.artnr != "Pz" && el.artnr != "Lz");
      } else {
        return state.kierunek.dane;
      }
    },
    seria: (state) => {
      return parseInt(state.product.seria);
    },
    czylamele: (state, getters) => {
      // console.log(seria);
      const seria = parseInt(state.product.seria);
      if (state.product.wzor == "01" && [60, 80, 81, 82, 83].includes(seria) && state.product.kierunek.indexOf("w") >= 0) {
        return true;
      } else {
        return false;
      }
    },
    protect: (state) => {
      const seria = parseInt(state.product.seria);
      return [60].includes(seria) && state.product.protect == "blok";
    },
    iron: (state) => {
      const seria = parseInt(state.product.seria);
      return [80, 81, 82, 83].includes(seria) && state.product.protect == "blok";
    },
    termo: (state) => {
      const seria = parseInt(state.product.seria);
      return [21, 31, 41, 661].includes(seria) && state.product.protect == "dom";
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
        return state.szyba2.dane.filter((el) => el.artnr != "g" && el.artnr != "b");
      } else {
        return state.szyba2.dane;
      }
    },
    szybyFilter2: (state, getters) => {
      let wzor = state.product.wzor;
      let typ = state.product.typ;
      let wzory = state.szyba2.dane.filter((el) => el.artnr == "o4piaskPWzL")[0].wzory;
      let filtrowane = [];
      // console.log(wzory);
      if (typeof state.przypisaniaszyb[wzor] != "undefined") {
        if (wzory.includes(wzor) && ["D1N01", "D1N02", "D1N03"].includes(typ)) {
          filtrowane = getters.filtr.filter((el) => state.przypisaniaszyb[wzor].indexOf(el.artnr) >= 0 || el.artnr == "o4piaskPWzL");
        } else {
          filtrowane = getters.filtr.filter((el) => state.przypisaniaszyb[wzor].indexOf(el.artnr) >= 0);
        }

        // console.log(state.szyba2.dane.filter((el)=> el.artnr=='o4piaskPWzL')[0].wzory)
        return filtrowane;
      } else {
        return [];
      }
    },
    szybyFilter: (state, getters) => {
      let wzor = state.product.wzor;
      if (state.product.plus == "tak" && ["12", "42"].includes(wzor)) {
        return state.szyba.dane.filter((el) => el.artnr == "33");
      }
      if (wzor == "43") {
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      if (getters.activeModel.typ == "PCV" && state.product.seria == "661") {
        // state.
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      if (getters.activeModel.typ == "PCV" && (state.product.kolor1typ != "DEK" || ["17", "05"].indexOf(state.product.kolor) > -1)) {
        // state.
        return state.szyba.dane.filter((el) => el.artnr == "00");
      }
      // if(state.activeKolorTyp!='DEK'){
      //   alert('kURWAAAAAAAAaaAAAAAa!!!!!@#$%^&*(')
      // }
      if (
        (wzor == "02" && (state.product.kolor == "01" || state.product.kolor == "05")) ||
        (wzor == "04" && (state.product.kolor == "03" || state.product.kolor == "05")) ||
        (wzor == "05" && state.product.kolor == "01") ||
        (wzor == "09" && state.product.kolor == "15") ||
        (wzor == "9A" && state.product.kolor == "15") ||
        (wzor == "9B" && state.product.kolor == "15") ||
        (wzor == "06" && (state.product.kolor == "01" || state.product.kolor == "05" || state.product.kolor == "12")) ||
        (wzor == "07" && (state.product.kolor == "05" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "07" || state.product.kolor == "02")) ||
        (wzor == "08" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "05" || state.product.kolor == "10")) ||
        (wzor == "10" && (state.product.kolor == "05" || state.product.kolor == "07" || state.product.kolor == "08")) ||
        (wzor == "11" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "03" || state.product.kolor == "05" || state.product.kolor == "12" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (wzor == "15" && (state.product.kolor == "08" || state.product.kolor == "10" || state.product.kolor == "02")) ||
        (wzor == "16" && (state.product.kolor == "01" || state.product.kolor == "03" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (wzor == "17" && (state.product.kolor == "01" || state.product.kolor == "05" || state.product.kolor == "08" || state.product.kolor == "09")) ||
        (wzor == "18" && (state.product.kolor == "01" || state.product.kolor == "02" || state.product.kolor == "05")) ||
        (wzor == "29" && (state.product.kolor == "02" || state.product.kolor == "03" || state.product.kolor == "07" || state.product.kolor == "08" || state.product.kolor == "10")) ||
        (wzor == "33A" && (state.product.kolor == "02" || state.product.kolor == "04" || state.product.kolor == "06" || state.product.kolor == "10"))
      ) {
        // console.log('Pcv')
        return state.szyba.dane.filter((el) => el.artnr == "00");
      } else if (state.product.seria == "60" && wzor == "42") {
        return state.szyba.dane.filter((el) => el.artnr == "00");
      } else if (typeof state.przypisaniaszyb[wzor] != "undefined") {
        // console.log(state.szyba.dane.filter((el) => state.przypisaniaszyb[wzor].indexOf(el.artnr) >= 0));
        return state.szyba.dane.filter((el) => state.przypisaniaszyb[wzor].indexOf(el.artnr) >= 0);
      } else {
        return [];
      }
    },
    sposobotwfilter: (state, getters) => {
      const seria = parseInt(state.product.seria);
      if (seria == 23) {
        return state.sposobotw.dane.filter((el) => el.artnr == "KK");
      }
      let wzor = state.product.wzor;
      let dostepne_okucia = klamki.filter(
        (el) =>
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1) &&
          el.PRODUKTTYP.indexOf(seria) > -1
      );
      let sposobyZew = dostepne_okucia.filter((klamka) => klamka.SO.includes("Z") && klamka.artnr != "BrakMozliwosci");
      let uniquesposobyZew = [...new Set(sposobyZew.map((entry) => entry.TYP))];
      // console.log(uniquesposobyZew);

      let sposobyWew = dostepne_okucia.filter((klamka) => klamka.SO.includes("W") && klamka.artnr != "BrakMozliwosci");
      let uniquesposobyWew = [...new Set(sposobyWew.map((entry) => entry.TYP))];
      // console.log(uniquesposobyWew);

      // console.log(state.sposobotw.dane.filter((el) => uniquesposobyWew.includes(el.artnr.substr(0, 1)) && uniquesposobyZew.includes(el.artnr.substr(1, 1))));
      return state.sposobotw.dane.filter((el) => uniquesposobyWew.includes(el.artnr.substr(0, 1)) && uniquesposobyZew.includes(el.artnr.substr(1, 1)));
      // console.log(dostepne_okucia)

      // console.log(getters.klamkifilter2);
      if (getters.klamkifilter2.lenght == 0) {
        return state.sposobotw.dane.filter((el) => el.artnr == "KK");
      }
      const opcja = parseInt(state.product.opcja);
      if ([60, 80, 81, 82, 83].includes(seria)) {
        if (seria == 60 && ["rwrc3", "rwrc3ei30"].includes(state.product.opcja)) {
          return state.sposobotw.dane.filter((el) => el.artnr == "KK");
        } else {
          return state.sposobotw.dane.filter((el) => ["KK", "KG"].includes(el.artnr));
        }
      }
      if (state.product.seria == "661") {
        console.log;
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
    // seriaklamka: (state) => {
    //   let seria = state.product.seria;
    //   if (seria == "30" || seria == "21" || seria == "20") {
    //     return getters.klamkifilter2.filter((el) => el.artnr !== "P150p90s");
    //   } else {
    //     return getters.klamkifilter2;
    //   }
    // },
    // klamkifilter: (state, getters) => {
    //   if (getters.activeModel && getters.activeSotw) {
    //     return state.klamka.dane.filter((el) => state.wzorydoklamki[el.artnr].indexOf(state.product.wzor) >= 0).filter((el) => el.typ == state.product.sposobotw);
    //   } else {
    //     return [];
    //   }
    // },
    dlugosci: (state, getters) => {
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
      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugosci = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );

      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");
      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        let tabela = filtered.filter((el) => el.GRUPA == pochwyty);
        // console.log(getters.klamkifilter2)
        for (let i = 0; i < tabela.length; i++) {
          dlugosci.push(parseInt(tabela[i].dlugosc));
        }
        if (dlugosci.length > 0) {
          // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
          let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
          //  console.log(szukane)
          return state.pochwytdlugosci.dane.filter((el) => szukane.indexOf(el.artnr) > -1) || [];
        }
      }
    },
    kat: (state, getters) => {
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

      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugoscip = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");
      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        let tabela = filtered.filter((el) => el.GRUPA == pochwyty && el.dlugosc == dlugoscip);
        for (let i = 0; i < tabela.length; i++) {
          dlugosci.push(parseInt(tabela[i].kat));
        }
        if (dlugosci.length > 0) {
          // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
          let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
          //  console.log(szukane)
          return state.kat.dane.filter((el) => szukane.indexOf(el.artnr) > -1);
        } else {
          // return
          return [{ artnr: 0, bez: "brak" }];
        }
      }
    },
    opcjepochwytu: (state, getters) => {
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

      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugoscip = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");

      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        let tabela = filtered.filter((el) => el.GRUPA == pochwyty && el.dlugosc == dlugoscip && el.kat == kat);
        for (let i = 0; i < tabela.length; i++) {
          dlugosci.push(tabela[i].opcjepochwytu);
        }
        // console.log(dlugosci)
        if (dlugosci.length > 0) {
          // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
          let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
          //  console.log(szukane)
          return state.opcjepochwytu.dane.filter((el) => szukane.indexOf(el.artnr) > -1);
        } else {
          return state.opcjepochwytu.dane;
        }
      }
    },
    rozety: (state, getters) => {
      let sposobotw = state.product.sposobotw;
      if (sposobotw == "PP") {
        return state.rozety.dane.filter((el) => el.artnr == "STD");
      } else {
        return state.rozety.dane;
      }
    },
    led: (state, getters) => {
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

      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugoscip = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");

      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        let tabela = filtered.filter((el) => el.GRUPA == pochwyty && el.dlugosc == dlugoscip && el.kat == kat && el.opcjepochwytu == opcjepochwytu);
        for (let i = 0; i < tabela.length; i++) {
          dlugosci.push(tabela[i].led);
        }
        // console.log(dlugosci)
        if (dlugosci.length > 0) {
          // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
          let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
          //  console.log(szukane)
          return state.led.dane.filter((el) => szukane.indexOf(el.artnr) > -1);
        } else {
          return state.led.dane;
        }
      }
    },

    klamkifilter2: (state, getters) => {
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
      seria = seria.toString();
      // console.log(seria)

      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let klamkakolor = state.product.klamkakolor;
      // console.log(klamkakolor);
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugoscip = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG" || sposobotw == "GP") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          el.PRODUKTTYP.split(",").includes(seria) &&
          el.KOLORY_KLAMEK.split(",").includes(klamkakolor) &&
          (el.WZORY.trim()
            .split(",")
            .includes(wzor) ||
            // .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      let dostepne_okucia = klamki.filter(
        (el) =>
          (el.WZORY.trim()
            .split(",")
            .includes(wzor) ||
            el.WZORY.indexOf("-") > -1) &&
          el.PRODUKTTYP.split(",").includes(seria) &&
          el.KOLORY_KLAMEK.split(",").includes(klamkakolor)
        // el.PRODUKTTYP.indexOf(seria) > -1
      );
      if (klamkakolor.length > 5) {
        klamkakolor = "10304";
      }
      state.dostepne_okucia = dostepne_okucia.filter((el) => el.SO == "W" && el.TYP == "K" && el.KOLORY_KLAMEK.includes(klamkakolor));

      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");
      // filtered=filtered.filter((el) => el.PRODUKTTYP.indexOf(seria.toString())> -1 && el.KOLORY_KLAMEK.indexOf(klamkakolor)>-1)
      // filtered = filtered.filter(
      //   (el) =>
      //     el.PRODUKTTYP.trim()
      //       .split(",")
      //       .indexOf(seria) > -1 && el.KOLORY_KLAMEK.indexOf(klamkakolor) > -1
      // );
      // console.log(filtered)
      if (klamkakolor == "10304") {
        filtered.filter((el) => el.artnr != "Prestige");
      }
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        // console.table(filtered);
        // console.log(pochwyty);
        // console.log(klamkakolor);
        filtered = filtered.filter((el) => el.GRUPA == pochwyty);
        // console.table(filtered);
        filtered = filtered.filter((el) => el.dlugosc == dlugoscip);
        // console.table(filtered);
        filtered = filtered.filter((el) => el.kat == kat);
        // console.table(filtered);
        filtered = filtered.filter((el) => el.opcjepochwytu == opcjepochwytu);
        // console.table(filtered);
        filtered = filtered.filter((el) => el.led == led);
        // console.table(filtered);
      }
      // console.table(filtered);
      return filtered.length > 0 ? filtered : [{ artnr: "-", bez: "Brak" }];
    },

    pochwytyfilter: (state) => {
      let seria = state.product.seria;
      if (state.product.seria == 60) {
        if (state.product.opcja == "rwrc3") {
          stand;
          seria = "65";
        } else if (state.product.opcja == "rwei30") {
          seria = "70";
        } else if (state.product.opcja == "rwrc3ei30") {
          seria = "75";
        }
      }
      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugosci = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG" || sposobotw == "GP") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");

      // console.log(filtered)
      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP" || sposobotw == "GP") {
        const dlugosci = [];
        // let tabela=klamki.filter((el) => (el.PRODUKTTYP.indexOf(seria) > -1 || el.PRODUKTTYP.indexOf(grupa) > -1) && el.TYP.indexOf(sposobotw.substring(1, 2)) > -1  && el.SO.indexOf(so) > -1 && el.bez.toUpperCase().indexOf(pochwyty) > -1 && (el.WZORY.indexOf(wzor) > -1 || el.WZORY.indexOf("-") > -1))
        let tabela = filtered;
        for (let i = 0; i < tabela.length; i++) {
          // console.log(tabela[i])
          dlugosci.push(tabela[i].GRUPA);
        }
        if (dlugosci.length > 0) {
          // console.log(dlugosci)

          // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
          let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
          return state.pochwyty.dane.filter((el) => szukane.indexOf(el.artnr) > -1);
        }
      }
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

      let sposobotw = state.product.sposobotw;
      let wzor = state.product.wzor;
      let pochwyty = state.product.pochwyty;
      let opcjepochwytu = state.product.opcjepochwytu;
      let led = state.product.led;
      let dlugoscip = state.product.dlugosci;
      let kat = state.product.kat;
      let so = "Z,W";
      if (sposobotw == "KP" || sposobotw == "KG") {
        so = "Z";
      }

      let filtered = klamki.filter(
        (el) =>
          el.TYP.indexOf(sposobotw.substring(1, 2)) > -1 &&
          el.SO.indexOf(so) > -1 &&
          (el.WZORY.trim()
            .split(",")
            .indexOf(wzor) > -1 ||
            el.WZORY.indexOf("-") > -1)
      );
      filtered = filtered.filter((el) => el.ZABLOKOWANE.indexOf(wzor) == -1 || el.ZABLOKOWANE == "-");
      filtered = filtered.filter((el) => el.PRODUKTTYP.indexOf(seria) > -1);
      if (sposobotw == "KP" || sposobotw == "PP") {
        const dlugosci = [];
        filtered = filtered.filter((el) => el.GRUPA == pochwyty && el.dlugosc == dlugoscip && el.kat == kat && el.opcjepochwytu == opcjepochwytu && el.led == led);
      }
      const dlugosci = [];
      // let tabela=klamki.filter((el) => (el.PRODUKTTYP.indexOf(seria) > -1 || el.PRODUKTTYP.indexOf(grupa) > -1) && el.TYP.indexOf(sposobotw.substring(1, 2)) > -1  && el.SO.indexOf(so) > -1 && el.bez.toUpperCase().indexOf(pochwyty) > -1 && (el.WZORY.indexOf(wzor) > -1 || el.WZORY.indexOf("-") > -1))
      let tabela = filtered;
      let kolorki = [];
      for (let i = 0; i < tabela.length; i++) {
        kolorki = tabela[i].KOLORY_KLAMEK.trim().split(",");
        for (let i = 0; i < kolorki.length; i++) {
          dlugosci.push(kolorki[i]);
        }
      }
      // console.log(dlugosci)
      if (dlugosci.length > 0) {
        // console.log(dlugosci)

        // return dlugosci.filter((x, i, a) => a.indexOf(x) == i)
        let szukane = dlugosci.filter((x, i, a) => a.indexOf(x) == i);
        return state.klamkakolor.dane.filter((el) => szukane.indexOf(el.artnr) > -1);
      } else {
        return state.klamkakolor.dane;
      }
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
    seriafilterNowy: (state, getters) => {
      var seria = state.product.seria;
      const wzor = state.product.wzor;
      let serie = [];
      if (state.product.protect == "blok") {
        serie = state.seria.dane.filter((el) => [60, 65, 70, 75, 80, 81, 82, 83].includes(parseInt(el.artnr)));
      } else if (state.product.plus == "tak") {
        serie = state.seria.dane.filter((el) => [23].includes(parseInt(el.artnr)));
      } else {
        serie = state.seria.dane.filter((el) => ![23, 60, 65, 70, 75, 80, 81, 82, 83].includes(parseInt(el.artnr)));
      }
      const serieDoWzoru = wzorseria
        .filter((el) => el.ArtNr == wzor)[0]
        .Produkttyp.trim()
        .split(",");

      if (state.product.seria == 60) {
        if (state.product.opcja == "rwrc3") {
          seria = "65";
        } else if (state.product.opcja == "rwei30") {
          seria = "70";
        } else if (state.product.opcja == "rwrc3ei30") {
          seria = "75";
        }
      }

      // let serieDoKlamkiTablica = getters.activeKlamka.PRODUKTTYP
      let filtered = serie.filter((el) => serieDoWzoru.indexOf(el.artnr) >= 0);
      // let klamkaDoSerii=filtered.filter((el)=>serieDoKlamkiTablica.indexOf(el.artnr) >= 0)
      if (state.product.kolor == "12") {
        console.log("Dąb bielony");
        filtered = filtered.filter((el) => el.artnr != 20 && el.artnr != "30");
      }
      let typ = state.product.typ;
      if (["D1"].indexOf(typ) > -1) {
        return filtered;
      } else {
        return filtered.filter((el) => ["20", "22", "30", "32"].indexOf(el.artnr) == -1);
      }
    },
    seriafilter: (state, getters) => {
      let seria = state.product.seria;
      if (state.product.protect == "blok") {
        state.product.seria = "60";
        state.product.wzor = "01";
        state.product.kolor = "13";
        state.product.kolor7 = "14";
        state.product.kierunki = "w";
        state.product.kierunek = "Lw";
        // state.product.klamka='Verdana'
        state.product.sposobotw = "KK";
        return state.seria.dane.filter((el) => el.artnr == "60");
      } else {
        return state.seria.dane.filter((el) => el.artnr != "60");
      }
      // if (seria == "20" || seria == "30") {
      //   return state.typ.dane.find((el) => el.artnr == "D1");
      // } else {
      //   return [];
      // }
    },
    wzorFilter: (state, getters) => {
      if (state.product.plus == "tak") {
        return state.wzor.dane.filter((el) => ["01", "26C", "12", "42"].includes(el.artnr));
      }
      // console.log(wzorseria.filter((el)=>el.ArtNr=='GF6'))
      let wzoryfilter = [];
      if (state.product.protect == "blok") {
        wzoryfilter = wzorseria.filter((el) => el.Produkttyp.indexOf("60") > -1 || el.Produkttyp.indexOf("65") > -1 || el.Produkttyp.indexOf("70") > -1 || el.Produkttyp.indexOf("75") > -1);
      } else {
        wzoryfilter = wzorseria.filter(
          (el) =>
            el.Produkttyp.indexOf("20") > -1 || el.Produkttyp.indexOf("21") > -1 || el.Produkttyp.indexOf("22") > -1 || el.Produkttyp.indexOf("30") > -1 || el.Produkttyp.indexOf("31") > -1 || el.Produkttyp.indexOf("32") > -1 || el.Produkttyp.indexOf("41") > -1 || el.Produkttyp.indexOf("661") > -1
        );
      }
      // console.log(wzoryfilter.filter((el)=>el.ArtNr=='GF6'))
      let wzoryfiltertablica = [];

      for (let i = 0; i < wzoryfilter.length; i++) {
        wzoryfiltertablica.push(wzoryfilter[i].ArtNr);
      }
      // console.log(wzoryfiltertablica)

      let wzory = state.wzor.dane.filter((el) => wzoryfiltertablica.indexOf(el.artnr) > -1);
      if (state.product.protect == "blok") {
        // console.log(state.wzor.dane)
        // return state.wzor.dane
        // return state.wzor.dane.filter((el)=>wzoryfiltertablica.indexOf(el.artnr)>-1)
        wzory = state.wzor.dane.filter((el) => wzoryfiltertablica.indexOf(el.artnr) > -1);
        function sortResults(prop, asc) {
          wzory.sort(function(a, b) {
            if (asc) {
              return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
            } else {
              return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
            }
          });
          // renderResults();
        }
        sortResults("artnr", false);
        return wzory;
      }

      if (state.product.szukaj.length > 0) {
        return wzory;
      }

      let podkolekcja = state.product.podkolekcja;
      if (getters.activeKolekcja.artnr == "PCV" && podkolekcja != "") {
        if (podkolekcja == "fale") {
          return wzory.filter((el) => el.fale == true);
        } else if (podkolekcja == "luki") {
          return wzory.filter((el) => el.luki == true);
        } else if (podkolekcja == "ramkipoziome") {
          return wzory.filter((el) => el.ramkipoziome == true);
        } else if (podkolekcja == "przeszklenia") {
          return wzory.filter((el) => el.przeszklenia == true);
        } else if (podkolekcja == "ramkipionowe") {
          return wzory.filter((el) => el.ramkipionowe == true);
        } else if (podkolekcja == "bezprzeszklen") {
          return wzory.filter((el) => el.bezprzeszklen == true);
        } else if (podkolekcja == "bezramek") {
          return wzory.filter((el) => el.bezramek == true);
        }
      }
      if (getters.activeKolekcja.artnr == "n") {
        return wzory.filter((el) => el.nowosc == true);
      } else if (getters.activeKolekcja.artnr == "t") {
        return wzory.filter((el) => el.wyborklientow == true);
      } else {
        if (getters.activeKolekcja.artnr == "PCV") {
          return wzory.filter((el) => ["PCV", "INOX"].indexOf(el.typ) > 0);
        } else {
          return wzory.filter((el) => el.typ == getters.activeKolekcja.artnr);
        }
      }
    },
    showInox: (state, getters) => {
      if (getters.activeModel) {
        return state.inoxlista.indexOf(state.product.wzor) >= 0 ? true : false;
      } else {
        return false;
      }
    },
    kolekcjafilter: (state, getters) => {
      if (state.product.seria == "60") {
        return state.kolekcja.dane.filter((el) => el.artnr != "GD" && el.artnr != "GF" && el.artnr != "GL" && el.artnr != "FI" && el.artnr != "n");
      } else {
        return state.kolekcja.dane;
      }
    },
    ramkakolorfilter: (state, getters) => {
      if (getters.activeModel.artnr) {
        return state.inoxkolor.dane.filter((el) => state.koloryramek[getters.activeModel.artnr].indexOf(el.artnr) >= 0 && el.wycofany != true);
      } else {
        return [];
      }
    },

    ramkakolorfilter2: (state, getters) => {
      if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.inoxkolor.dane.filter((el) => el.artnr == "10301");
      } else {
        return state.inoxkolor.dane.filter((el) => state.koloryramek[getters.activeModel.artnr].indexOf(el.artnr) >= 0 && el.wycofany != true);
      }
    },
    stronaramkifilter: (state) => {
      return state.product.szyba != "00" ? state.inoxstrona.dane.slice(0, 1) : state.inoxstrona.dane;
    },
    samozamykaczFilter: (state, getters) => {
      let seria = String(state.product.seria);
      let filteredd = SAMOZAMYKACZE.filter((el) =>
        el.SERIA.trim()
          .split(",")
          .includes(seria)
      );
      // console.log(filteredd)
      return filteredd;
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
    KOPNIAKFilter: (state, getters) => {
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
      if (state.product.seria == "60" && ["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) >= 0) {
        return state.kolorsam.dane.filter((el) => el.artnr != "czarny");
      } else if (state.product.samozamykacz == "LC" || state.product.samozamykacz == "LN") {
        return state.kolorsam.dane.slice(0, 1);
      } else if (state.product.samozamykacz == "AA") {
        return state.kolorsam.dane.filter((el) => el.artnr != "czarny");
      } else {
        return state.kolorsam.dane;
      }
    },
    seriac: (state) => {
      const seria = parseInt(state.product.seria);
      if (state.product.seria == "60") {
        if (["rw", "rwrc3"].indexOf(state.product.opcja) > -1) {
          return "60";
        } else if (["rwei30", "rwrc3ei30"].indexOf(state.product.opcja) > -1) {
          return "70";
        }
      }

      // if(['rw','rwrc3'].indexOf(state.product.opcja)>0)
      if ([20, 21, 23].includes(seria)) {
        return "20";
      } else if (state.product.seria == "31" || state.product.seria == "32") {
        return "30";
      } else {
        return state.product.seria;
      }
    },
    tabsFilter: (state, getters) => {
      const seria = parseInt(state.product.seria);
      let tabs = state.tabs2;
      if (state.activeTab == "protect") {
        return tabs.filter((el) => el.bez == "protect");
      } else if (state.activeTab == "plus") {
        return tabs.filter((el) => el.bez == "plus");
      } else if (state.activeTab == "inspiracja") {
        return state.tabs2.filter((el) => el.bez == "inspiracja");
      } else {
        tabs = tabs.filter((el) => el.available == true);
      }

      if (![21, 31, 41, 661].includes(parseInt(seria))) {
        tabs = tabs.filter((el) => el.bez != "Naswietle");
      }
      if ([23].includes(parseInt(seria))) {
        tabs = tabs.filter((el) => el.bez != "Akcesoria");
      }
      if (![60, 80].includes(seria)) {
        tabs = tabs.filter((el) => el.bez != "Portal");
      }
      if (seria == 60) {
        tabs = tabs.filter((el) => el.bez != "Szyba");
      }
      if (state.product.inspiracja != "tak") {
        tabs = tabs.filter((el) => el.bez != "Inspiracje");
      } else {
        tabs = tabs.filter((el) => el.bez != "Model");
      }
      if ((seria == 60) & !["rw", "rwrc3"].includes(state.product.opcja)) {
        tabs = tabs.filter((el) => el.bez != "Portal");
      }
      if (state.koloryramek[getters.activeModel.artnr][0] == 0) {
        tabs = tabs.filter((el) => el.bez != "Rama");
      }
      state.tabsfilter = tabs;
      return tabs;
    },
  },
});
