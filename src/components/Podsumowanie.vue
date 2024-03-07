<template>
  <div>
    <div class="mb-4" :class="pdf ? pdf : 'lista'">
      <div class="item">
        <b>Wzór:</b>
        <span title="Kliknij aby zmienić wzór" @click="handle('Model')"><i class="bi bi-vector-pen text-success mx-2"></i>{{ activeModel.bez }}</span>
        /
        <span title="Kliknij aby zmienić technologie" @click="handle('Seria')"
          ><i class="bi bi-vector-pen text-success mr-2"></i>{{ activeSeria.bez }}
          <span v-if="product.seria == '60'"
            ><b>{{ activeOpcja.bez }} </b></span
          >
        </span>
        <span v-if="product.plus!='tak'" class="text-success bold">{{ basicPrice }} zł</span>
      </div>

      <div class="item" v-if="iron">
        <b>Klasa Bezpieczenstwa: </b>
        <span> {{ product.klasaBezpieczenstwa }} </span>
      </div>

      <div class="item"><b>Rozmiar drzwi: </b>90 {{ this.kierunekfilter.filter((el) => el.artnr == product.kierunek)[0].bez }}</div>

      <!-- <div class="item">{{ kominikat }}</div> -->
      <div class="item">
        <b>Kolor:</b>
        <span title="Kliknij aby zmienić Kolor" @click="handle('Kolor')">
          <i class="bi bi-vector-pen text-success mx-2"></i>
          <strong v-show="product.wariant == 'B' || product.wariant == 'MB'">Skrzydło </strong>{{ activeKolor.bez }}
          <span v-if="['M', 'MB'].indexOf(product.wariant) > -1">/ {{ activeKolormixz.bez }} </span>
          <span v-if="activeKolor.bez != activeKolor2.bez && (product.wariant == 'B' || product.wariant == 'MB')">/ {{ activeKolor2.bez }} </span>
          <span v-show="product.wariant == 'B' || product.wariant == 'MB'">
            <strong><br />Ościeżnica </strong>{{ activeKolor6.bez }}
            <span v-if="activeKolor6.bez != activeKolor5.bez && (product.wariant == 'B' || product.wariant == 'MB') && termo">/ {{ activeKolor5.bez }} </span>
            <!-- <span v-if="product.wariant == 'M'">/ {{ activeKolormixz.bez }} </span>             -->
          </span>
          <!-- <span v-if="['51', '52', '3D1', '3D2', '3D3', '3D4'].includes(product.wzor)"
            ><br /><b>Kolor dodatkowy: </b>{{ activeKolor7.bez }}
            <span v-show="Anoda > 0" class="text-success bold" title="Dopłata za Anodę"> + {{ Anoda }} zł</span>
          </span> -->
        </span>
        <!-- <span v-show="Kolor + MixkolorCena + BikolorCena > 0" class="text-success bold">{{ Kolor + MixkolorCena + BikolorCena + KolorNas }} zł</span> -->
        <span v-show="Kolor > 0" class="text-success bold" title="Dopłata za malowanie Drzwi"> {{ Kolor }} zł</span>
        <span v-show="KolorNas > 0" class="text-success bold" title="Dopłata za malowanie naświetli"> + {{ KolorNas }} zł</span>
        <span v-show="MixkolorCena > 0" class="text-success bold" title="Dopłata za MixKolor"> + {{ MixkolorCena }} zł</span>
        <span v-show="BikolorCena > 0" class="text-success bold" title="Dopłata za Bikolor"> + {{ BikolorCena }} zł</span>
        <!-- <span v-show="Kolor+MixkolorCena+BikolorCena>0" class="text-success bold">{{Kolor}} zł</span>
            <span v-show="Kolor+MixkolorCena+BikolorCena>0" class="text-success bold">{{MixkolorCena}} zł</span>
            <span v-show="Kolor+MixkolorCena+BikolorCena>0" class="text-success bold">{{BikolorCena}} zł</span>
            <span v-show="Kolor+MixkolorCena+BikolorCena>0" class="text-success bold">{{KolorNas}} zł</span> -->
      </div>

      <div class="item" v-if="['51', '52', '3D1', '3D2', '3D3', '3D4'].includes(product.wzor)">
        <b>Kolor dodatkowy: </b>
        <span title="Kliknij aby zmienić Kolor dodatkowy" @click="handle('Kolor')"> <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeKolor7.bez }}</span>
        <span v-show="Anoda > 0" class="text-success bold" title="Dopłata za Kolor dodatkowy"> {{ Anoda }} zł</span>
      </div>

      <div class="item" v-show="activeSzyba.artnr != '00'">
        <b>Przeszklenie: </b>
        <span title="Kliknij aby zmienić Przeszklenie" @click="handle('Szyba')">
          <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeSzyba.bez }}
          <span v-if="['50', '48', '47'].indexOf(product.wzor) > -1"><b>Baza:</b> {{ activeSzybaBaza.bez }} </span>
        </span>
        <span v-if="LustroCena > 0" class="text-success bold">{{ LustroCena }} zł</span>
        <!-- <span v-else class="text-success bold">w standardzie</span> -->
        <span v-show="product.plus!='tak'" v-else class="bold">(w cenie)</span>
      </div>

      <div class="item" v-if="activeTyp.artnr != 'D1' && activeTyp.artnr != 'D1N08'">
        <b>Przeszklenie naświetli: </b>
        <span title="Kliknij aby zmienić Przeszklenie" @click="handle('Szyba')"> <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeSzyba2.bez }} </span>
        <span v-if="LustroCena2 > 0" class="text-success bold">{{ LustroCena2 }} zł</span>
        <span v-else-if="LustroCena3 > 0" class="text-success bold">{{ LustroCena3 }} zł</span>
        <span v-else-if="LedCena3 > 0" class="text-success bold">{{ LedCena3 }} zł</span>
        <!-- <span v-else class="text-success bold">w standardzie</span> -->
        <span v-else class="bold">(w cenie)</span>
      </div>

      <div class="item" v-if="activeTyp.artnr != 'D1' && activeTyp.artnr != 'D1N08'">
        <b>Naświetla: </b
        ><span title="Kliknij aby zmienić Naświetle" @click="handle('Naswietle')"
          ><i class="bi bi-vector-pen text-success mx-2"></i>
          <span v-if="CenaNaswietlaNB1 > 0">
            Lewe ({{ product.szerokoscnb1 }}) <span class="text-success bold">{{ CenaNaswietlaNB1 }} zł</span></span
          >
          <span v-if="CenaNaswietlaNB2 > 0">
            Prawe ({{ product.szerokoscnb2 }}) <span class="text-success bold">{{ CenaNaswietlaNB2 }} zł</span></span
          >
          <span v-if="CenaNaswietlaG > 0">
            Górne ({{ product.wysokoscng }}) <span class="text-success bold">{{ CenaNaswietlaG }} zł</span></span
          >
        </span>
      </div>
      <div class="item" v-if="activeTyp.artnr == 'D1N08'">
        <b>Portal: </b
        ><span title="Kliknij aby zmienić Naświetle" @click="handle('Portal')"
          ><i class="bi bi-vector-pen text-success mx-2"></i>
          <span v-if="CenaNaswietlaNB1 > 0">
            Lewy ({{ product.szerokoscnb1 }}) <span class="text-success bold">{{ CenaNaswietlaNB1 }} zł</span></span
          >
          <span v-if="CenaNaswietlaNB2 > 0">
            Prawy ({{ product.szerokoscnb2 }}) <span class="text-success bold">{{ CenaNaswietlaNB2 }} zł</span></span
          >
          <span v-if="CenaNaswietlaG > 0">
            Górny ({{ product.wysokoscng }}) <span class="text-success bold">{{ CenaNaswietlaG }} zł</span></span
          >
        </span>
      </div>

      <div class="item">
        <b>Okucia:</b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Okucia')">
          <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeKlamka.bez }} <b>{{ activeKlamkaKolor.bez }}</b>
        </span>
        <span v-if="CenaOkucia > 0" class="text-success bold" :title="promocja == true ? 'Cena promocyjna' : ''"> {{ CenaOkucia }} zł</span>
        <span v-show="product.plus!='tak'" v-else class="bold"> (w cenie)</span>
        <span v-if="promocja"> (<span class="text-success bold">Cena promocyjna!!!</span>)</span>
        <!-- <i class="bi bi-info-circle ml-2 text-info" v-if="product.klamka.indexOf('x') >= 0 && product.seria != '661'" title="Cena zawiera zasilacz"></i> -->
        <i class="bi bi-info-circle ml-2 text-info" v-if="product.klamka.indexOf('x') >= 0 && product.seria == '661'" title="Cena zawiera zasuwnice Elektromotoryczna oraz Przycisk zwalniający napięcie w pochwycie"></i>
        <i v-show="product.plus!='tak'" class="bi bi-info-circle ml-2 text-info" v-if="activeKlamkaKolor.artnr == '10304'" title="Cena zawiera dopłatę za czarną wkładkę"></i>
      </div>
      <div class="item" v-if="product.sposobotw == 'KP'">
        <b>Klamka wewnątrz:</b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Okucia')">
          <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeKlamkaWew.bez }} <b>{{ activeKlamkaKolor.bez }}</b>
        </span>
        <span v-if="CenaKlamkaWew > 0" class="text-success bold"> {{ CenaKlamkaWew }} zł</span>
        <span v-else class="bold"> (w cenie)</span>
      </div>

      <div class="item" v-if="Rozeta > 0">
        <b>Szyld pierścieniowy: </b>
        <span title="Kliknij aby zmienić Szyld" @click="handle('Okucia')">
          <i class="bi bi-vector-pen text-success"></i><span class="text-success bold" title="Cena zawiera Szyld pierścieniowy oraz wkładkę klady D"> {{ Rozeta }} zł</span>
        </span>
      </div>

      <div class="item" v-if="CenaProgLed > 0">
        <b>Podświetlenie progu: </b>
        <span title="Kliknij aby zmienić Podświetlenie progu" @click="handle('Akcesoria')"
          >Led <i class="bi bi-vector-pen text-success"></i><span class="text-success bold" title=""> {{ CenaProgLed }} zł</span>
          <span v-if="promocja"> (<span class="text-success bold">Cena promocyjna!!!</span>)</span>
        </span>
      </div>

      <div class="item" v-if="CenaZasilacz > 0 || product.automatycznaZasuwnica == 'E'">
        <b>Zasilacz: </b>
        <span title="Kliknij aby zmienić Zasilacz" @click="handle('Akcesoria')"
          >{{ product.zasilacz }} <i class="bi bi-vector-pen text-success"></i>
          <span v-if="CenaZasilacz > 0" class="text-success bold" title=""> {{ CenaZasilacz }} zł</span>
          <span v-else class="bold"> (w cenie)</span>
        </span>
      </div>

      <div class="item" v-if="CenaSmart > 0">
        <b>Sterownik: </b>
        <span title="Kliknij aby zmienić sterownik" @click="handle('Akcesoria')"
          >Wikęd SMART <i class="bi bi-vector-pen text-success"></i><span class="text-success bold" title=""> {{ CenaSmart }} zł</span>
          <span v-if="promocja"> (<span class="text-success bold">Cena promocyjna!!!</span>)</span>
        </span>
      </div>

      <div class="item" v-if="EzaczepCena > 0">
        <b>Elektrozaczep: </b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Akcesoria')">
          <span v-if="product.seria == '41' && product.elektrozaczepopcja != 'K'">3 szt. </span>
          <span v-else>1 szt. </span>
          <!-- <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeKlamka.bez }} <b>{{ activeKlamkaKolor.bez }}</b>  -->
        </span>
        <span class="text-success bold"> {{ EzaczepCena }} zł</span>
      </div>

      <div class="item" v-if="CenaAutomatycznaZasuwnica > 0">
        <b>Automatyczna zasuwnica: </b>
        <span title="Kliknij aby zmienić Zasuwnicę" @click="handle('Akcesoria')">
          <span>{{ automatyczneZasuwnice.dane.find((el) => el.artnr == product.automatycznaZasuwnica).bez }}</span>
        </span>
        <span class="text-success bold"> {{ CenaAutomatycznaZasuwnica }} zł</span>
      </div>
      <div class="item" v-if="CenaAutomatyka > 0">
        <b>Inteligentne technologie: </b>
        <span title="Kliknij aby zmienić Zasuwnicę" @click="handle('Akcesoria')">
          <!-- <pre>{{ automatyka.dane }}</pre> -->
          <span>{{ automatyka.dane.find((el) => el.artnr == product.automatyka).bez }}</span>
        </span>
        <span class="text-success bold"> {{ CenaAutomatyka }} zł</span>
      </div>

      <div class="item" v-if="EzaczeprCena > 0">
        <b>Elektrozaczep awersyjny: </b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Akcesoria')"> </span>
        <span class="text-success bold"> {{ EzaczeprCena }} zł</span>
      </div>

      <div class="item" v-if="czylamele && product.lamele == 'J'">
        <b>Lamele: </b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Okucia')"> <i class="bi bi-vector-pen text-success mx-2"></i>{{ product.lameleilosc }} <b>szt.</b> </span>
        <span v-show="CenaLamele > 0" class="text-success bold"> {{ CenaLamele }} zł</span>
      </div>

      <div class="item" v-if="dymCena > 0">
        <b>Opcja przeciwdymowa: </b>
        <span title="Kliknij aby zmienić Okucia" @click="handle('Akcesoria')">
          Tak
        </span>
        <span class="text-success bold"> {{ dymCena }} zł</span>
      </div>

      <div class="item" v-if="product.samozamykacz != '-'">
        <b>Samozamykacz: </b>
        <span title="Kliknij aby zmienić Akcesoria" @click="handle('Akcesoria')">
          <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeSamozamykacz.bez }} <b>{{ product.samozamykaczKolor }}</b>
        </span>
        <span v-if="samozamykaczCena > 0" class="text-success bold"> {{ samozamykaczCena }} zł</span>
        <span v-else class="bold">(w cenie)</span>
      </div>

      <div class="item" v-if="this.activeinoxKolor.bez != 'Brak' && (this.activeModel.typ == 'FI' || this.activeModel.typ == 'INOX')">
        <b>Ramka: </b>
        <span title="Kliknij aby zmienić Ramkę" @click="handle('Rama')"> <i class="bi bi-vector-pen text-success mx-2"></i>{{ activeinoxKolor.bez }} </span>
        <span v-show="DEERSTONE > 0" class="text-success bold"> {{ DEERSTONE }} zł</span>
      </div>

      <div v-if="pdf">
        <span v-if="product.plus!='tak'" class="text-success bold"> <b>Wartość zestawu: </b>{{ PriceAll }} zł</span>
        <span v-else class="text-success bold">O cenę zapytaj w najbliższym <a href="https://wiked.pl/gdzie-kupic/">salonie</a></span>
      </div>
    </div>
    <div class="lista cenki" v-if="!pdf">
      Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.
    </div>
    <div :class="cenamobile ? 'cenamobile' : 'cena'" hidden>
      <!-- <p id="wzorp" @click="handle('Model')">
            <a href="#wzor" class="d-flex">
                <span>Wzór:</span> {{ activeModel.bez }}
            </a>
        </p> -->
      <!-- <p id="seriap" @click="handle('Seria')">
            <a href="#seria" class="d-flex">
                <span>Technologia:</span> {{ activeSeria.bez }}
            </a>
        </p> -->
      <p id="seriap" @click="handle('Seria')" v-show="this.activeSeria.artnr == '60'"><span>Opcja:</span> {{ activeOpcja.bez }}</p>
      <p id="typp" @click="handle('Seria')">
        <a href="#naswietle" class="d-flex"> <span>Typ:</span> {{ activeTyp.bez }} </a>
      </p>

      <p id="kolorp" @click="handle('Kolor')"><span>Kolor:</span> {{ activeKolor.bez }}</p>
      <p v-if="activeTyp.artnr == 'D1N08'" id="kolorp" @click="handle('Kolor3')"><span>Kolor portali:</span> {{ activeKolor3.bez }}</p>
      <p v-if="activeSzyba.bez != 'Brak'" id="szybap" @click="handle('Szyba')"><span>Przeszklenie:</span> {{ activeSzyba.bez }}</p>
      <p v-if="this.$store.state.product.typ != 'D1'" id="szybap" @click="handle('Szyba')"><span>Przeszklenie naświetla:</span> {{ activeSzyba2.bez }}</p>
      <p id="kierunekp" @click="handle('Okucia')"><span>Kierunek otwierania:</span> {{ activeKierunek.bez }}</p>
      <p id="klamkap" @click="handle('Okucia')"><span>Okucia:</span> {{ activeKlamka.bez }}</p>
      <p id="klamkakolorp" @click="handle('Okucia')"><span>Kolor okuć:</span> {{ activeKlamkaKolor.bez }}</p>
      <p v-show="this.activeinoxKolor.bez != 'Brak' && (this.activeModel.typ == 'FI' || this.activeModel.typ == 'INOX')" id="inoxkolor" @click="handle('Szyba')"><span>Kolor ramki:</span> {{ activeinoxKolor.bez }}</p>
      <p id="samozamykaczp" @click="handle('Akcesoria')" v-if="product.samozamykacz != '-'"><span>Samozamykacz:</span> {{ activeSamozamykacz.bez }}</p>
      <p id="samozamykaczp" @click="handle('Akcesoria')" v-if="czylamele"><span>Lamele:</span> {{ product.lameleilosc }} szt.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { EventBus } from "@/event-bus.js";

// import klamki from "../sql/klakmi.json";
export default {
  data() {
    return {};
  },
  props: {
    cenamobile: {
      type: Boolean,
      default: false,
    },
    pdf: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handle(arg) {
      this.$store.dispatch("setActiveTab", arg);
    },
    reset(elem) {
      //   console.log(elem);
      this.fadeIn(elem); // + "p");
    },
    fadeIn(elem) {
      let self = this;
      if (document.getElementById(elem) == null) {
        return;
      }

      document.getElementById(elem).style.transition = "0s";
      document.getElementById(elem).style.opacity = 0;
      setTimeout(function() {
        document.getElementById(elem).style.transition = "0.3s";
      }, 200);

      setTimeout(function() {
        document.getElementById(elem).style.opacity = 1;
      }, 400);
    },
  },
  mounted() {
    EventBus.$on("scroller", (payload) => {
      this.reset(payload);
    });
  },
  computed: {
    ...mapState({
      kominikat: "kominikat",
      product: "product",
      automatyczneZasuwnice: "automatyczneZasuwnice",
      automatyka: "automatyka",
      promocja: "promocja",
    }),
    ...mapGetters({
      termo: "termo",
      iron: "iron",
      protect: "protect",
      kierunekfilter: "kierunekfilter",
      czylamele: "czylamele",
      activeTyp: "activeTyp",
      activeModel: "activeModel",
      activeKolormixz: "activeKolormixz",
      activeKolor: "activeKolor",
      activeKolor2: "activeKolor2",
      activeKolor3: "activeKolor3",
      activeKolor5: "activeKolor5",
      activeKolor6: "activeKolor6",
      activeKolor7: "activeKolor7",
      activeinoxKolor: "activeinoxKolor",
      activeSzyba: "activeSzyba",
      activeSzybaBaza: "activeSzybaBaza",
      activeSzyba2: "activeSzyba2",
      activeSotw: "activeSotw",
      activeKlamka: "activeKlamka",
      activeKlamkaWew: "activeKlamkaWew",
      activeKlamkaKolor: "activeKlamkaKolor",
      activeKierunek: "activeKierunek",
      activeSamozamykacz: "activeSamozamykacz",
      activeSeria: "activeSeria",
      activeOpcja: "activeOpcja",

      PriceAll: "PriceAll",
      basicPrice: "BasicPrice",
      Kolor: "Kolor",
      Kolor2: "Kolor2",
      LustroCena: "LustroCena",
      LustroCena2: "LustroCena2",
      LustroCena3: "LustroCena3",
      LedCena3: "LedCena3",
      CenaOkucia: "CenaOkucia",
      Anoda: "Anoda",
      CenaZasilacz: "CenaZasilacz",
      Rozeta: "Rozeta",
      CenaProgLed: "CenaProgLed",
      CenaSmart: "CenaSmart",
      CenaKlamkaWew: "CenaKlamkaWew",
      MixkolorCena: "MixkolorCena",
      BikolorCena: "BikolorCena",
      KolorNas: "KolorNas",
      DEERSTONE: "DEERSTONE",
      CenaNaswietlaNB1: "CenaNaswietlaNB1",
      CenaNaswietlaNB2: "CenaNaswietlaNB2",
      CenaNaswietlaG: "CenaNaswietlaG",
      samozamykaczCena: "SamozamykaczCena",
      dymCena: "dymCena",
      EzaczepCena: "EzaczepCena",
      EzaczeprCena: "EzaczeprCena",
      CenaLamele: "CenaLamele",
      CenaAutomatycznaZasuwnica: "CenaAutomatycznaZasuwnica",
      CenaAutomatyka: "CenaAutomatyka",
    }),
  },
};
</script>

<style scoped>
i {
  display: none;
}
.lista i {
  display: unset;
}
.lista {
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  /* padding: 8px 10px; */
  padding: 10px 15px;
  box-sizing: border-box;
  /* width: 182px; */
  background: #ffffff;
  /* border: 1px solid rgb(0 0 0 / 25%); */
  box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 25%);
  border-radius: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  /* font-size: 10px; */
  flex-wrap: wrap;
  line-height: 12px;
  color: #4e4e4e;

  max-width: 506.25px;
}
.cenki {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #4e4e4e;
}

.item {
  /* display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px; 
     */
  line-height: 22px;
}

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

a {
  color: unset !important;
}

.d-flex {
  flex-direction: row;
  gap: 5px;
}

p {
  line-height: 14px;
  transition: 0.3s;
  margin-bottom: 5px;
  cursor: pointer;
}

p:hover {
  opacity: 0.6 !important;
}

p span {
  font-weight: bold;
}

.bold {
  font-weight: bold;
}

.text-success {
  color: #8fcc25 !important;
}

.item > span:hover {
  cursor: pointer;
  color: lightblue;
}
.item > span.bold:hover {
  cursor: default;
  color: unset;
}
.item {
  padding-bottom: 5px;
  /* border-bottom:1px solid lightgray ; */
}
.item:last-child {
  border: none;
}
/* .item b,
.item span { */
/* white-space: nowrap; */
/* } */
</style>
