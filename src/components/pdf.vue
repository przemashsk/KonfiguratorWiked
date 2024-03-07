<template>
  <div>
    <!-- <div style="display: inline-block"> -->
      <div :class="column" style="display: flex">
         <form id="gk" action="https://wiked.pl/gdzie-kupic/" method="GET" target="_blank">
          <input type="hidden" name="konf" value="1" />
          <!-- <span v-if="loading2" class="btn btn-success mr-3" disabled>Ładowanie...</span>
          <span @click="handlePDF2" class="btn btn-success mr-3" v-else>Zapisz PDF i znajdz najbliższy salon</span> -->
          <!-- <span @click="toggleShow" class="btn btn-success mr-3">Pokaż PDF</span> -->
          <span @click="konf" :class="przycisk" class="mr-3">Zapisz PDF i znajdz najbliższy salon</span>
        </form>
        <div id="pdf">
          <!-- <span v-if="loading" class="przycisk" disabled>Ładowanie...</span> -->
          <span @click="generateReport()" :class="przycisk">Zapisz PDF</span>
        </div>
        <!-- <p v-if="loading" style="margin-left:10px;position:absolute">ładowanie...</p> -->
      </div>
    <!-- </div> -->
    <!-- <button style="z-index: 9999999;position: absolute;bottom:0;left:200px" @click="toggleShow">
      Pokaż
    </button> -->
    <!-- 
    <button style="z-index: 9999999;position: absolute;left:80px" @click="generateReport()">
      Generuj
    </button> -->
    <vue-html2pdf :show-layout="show" :float-layout="true" :enable-download="true" :preview-modal="false" :paginate-elements-by-height="1400" filename="konfigurator" :pdf-quality="1" :manual-pagination="false" pdf-format="a4" pdf-orientation="portrait" pdf-content-width="800px" ref="html2Pdf">
      <!-- @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"  -->
      <section slot="pdf-content" class="pdf" @click="toggleShow">
        <header>
          <img class="logo-top" src="/images/LOGO75.png" alt="" />
          <div class="text-right">
            <span><strong>Wizualizacja</strong> drzwi zewnętrznych</span><br>
          <span id="data"></span>
          </div>
        </header>
        <main>
          <div class="grid">
            <span>Widok zewnętrzny</span>
            <span>Widok wewnętrzny</span>
          </div>
          <div class="grid" style="flex:1;">
                <img style="max-height:360px" v-if="exportImageObj" :src="imgsrc" alt="" />
                <img style="max-height:360px" v-if="exportImageObjInner" :src="imgsrc2" alt="" />
          </div>
        </main>
        <section>
          <div class="op mb-3">
              Opis konfiguracji
            </div>
            <Podsumowanie pdf/>
            <div class="konfiguracja" hidden>
              <div class="opis">
                <p id="seriap"><span>Seria:</span> {{ activeSeria.bez }}</p>
                <p id="seriap" v-show="this.activeSeria.artnr == '60'"><span>Opcja:</span> {{ activeOpcja.bez }}</p>
                <p id="typp"><span>Typ:</span> {{ activeTyp.bez }}</p>
                <p id="wzorp"><span>Wzór:</span> {{ activeModel.bez }}</p>
                <p id="kolorp"><span>Kolor:</span> {{ activeKolor.bez }}</p>
                <p v-if="activeTyp.artnr == 'D1N08'" id="kolorp"><span>Kolor portali:</span> {{ activeKolor3.bez }}</p>
                <p v-if="activeSzyba.bez != 'Brak'" id="szybap"><span>Przeszklenie:</span> {{ activeSzyba.bez }}</p>
                <p v-if="this.$store.state.product.typ != 'D1'" id="szybap"><span>Przeszklenie naświetla:</span> {{ activeSzyba2.bez }}</p>
                <p id="kierunekp"><span>Kierunek otwierania:</span> {{ activeKierunek.bez }}</p>
                <p id="klamkap"><span>Okucia:</span> {{ activeKlamka.bez }}</p>
                <p id="klamkakolorp"><span>Kolor okuć:</span> {{ activeKlamkaKolor.bez }}</p>
                <p v-show="this.activeinoxKolor.bez != 'Brak' && (this.activeModel.typ == 'FI' || this.activeModel.typ == 'INOX')" id="inoxkolor"><span>Kolor ramki:</span> {{ activeinoxKolor.bez }}</p>
                <p id="samozamykaczp" v-if="product.samozamykacz != '-'"><span>Samozamykacz:</span> {{ activeSamozamykacz.bez }}</p>
              </div>              
            </div>
        </section>
        <footer>
          <img class="stopa" src="/images/stopka2.png" alt="" />
        </footer>
      </section>
    </vue-html2pdf>
  </div>
</template>
<script>
import VueHtml2pdf from "vue-html2pdf";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { EventBus } from "@/event-bus.js";

import Podsumowanie from "@/components/Podsumowanie.vue";

export default {
  props: {
    // width:Number,
    // height:Number,
    column: { type: String, default: 'column' },
    przycisk: { type: String, default: 'przycisk' },
  },
  mounted() {
    window.vue = this;
  },
  data: () => ({
    show: false,
    ok: 20,
  }),
  computed: {
    exportImageObj() {
      return this.exportImageObj;
    },
    exportImageObjInner() {
      return this.exportImageObjInner;
    },
    imgsrc() {
      return this.exportImageObj.src;
    },
    imgsrc2() {
      return this.exportImageObjInner.src;
    },
    ...mapGetters({
      activeinoxKolor: "activeinoxKolor",
      Kolor: "Kolor",
      activeTyp: "activeTyp",
      activeModel: "activeModel",
      activeOpcja: "activeOpcja",
      activeSzyba: "activeSzyba",
      activeSzyba2: "activeSzyba2",
      activeSotw: "activeSotw",
      activeKolor: "activeKolor",
      activeKolor2: "activeKolor2",
      activeKolor3: "activeKolor3",
      activeKlamka: "activeKlamka",
      activeKlamkaKolor: "activeKlamkaKolor",
      activeKierunek: "activeKierunek",
      activeSamozamykacz: "activeSamozamykacz",
      activeSamozamykaczKolor: "activeSamozamykaczKolor",
      activeAutomatyka: "activeAutomatyka",
      activeEzaczep: "activeEzaczep",
      czylamele: "czylamele",
      CenaLamele: "CenaLamele",
      activeSeria: "activeSeria",
      cenaKlamka: "CenaKlamka",
      priceAll: "PriceAll",
      basicPrice: "BasicPrice",
      basicPrice: "BasicPrice",
      cenaOkucia: "CenaOkucia",
      KopniakCena: "KopniakCena",
      dymCena: "dymCena",
      EzaczepCena: "EzaczepCena",
      EzaczeprCena: "EzaczeprCena",
      DEERSTONE: "DEERSTONE",
      SamozamykaczCena: "SamozamykaczCena",
      LustroCena: "LustroCena",
      LustroCena2: "LustroCena2",
      LustroCena3: "LustroCena3",
      WizjerCena: "WizjerCena",
      BasicPrice: "BasicPrice",
      CenaOkucia: "CenaOkucia",
      BikolorCena: "BikolorCena",
      MixkolorCena: "MixkolorCena",
      CenaAutomatyka: "CenaAutomatyka",
      CenaNaswietlaG: "CenaNaswietlaG",
      CenaNaswietlaNB1: "CenaNaswietlaNB1",
      CenaNaswietlaNB2: "CenaNaswietlaNB2",
    }),
    ...mapState({
      exportImageObj: "exportImageObj",
      exportImageObjInner: "exportImageObjInner",
      logoobject: "logoobject",
      product: "product",
    }),
  },
  watch: {
    exportImageObj(n, o) {
      this.ok += 1;
    },
    exportImageObjInner(n, o) {
      this.ok += 1;
    },
    ok(n, o) {
      // console.log(n)
      if (n == 2) {
        this.$refs.html2Pdf.generatePdf();
      }
    },
  },
  methods: {
    generateReport() {
      let data = new Date();
      let data2 = data.toLocaleDateString("pl", {
        // day: "2-digit",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        // minute: "numeric",
        minute: "2-digit",
      });
      $('#data').html(data2)
      this.ok = 0;
      this.expfoty();
      
    },
    toggleShow() {
      this.ok = 20;

      this.show = !this.show;
      if (this.show) {
        this.expfoty();
      }
    },
    konf() {
      this.ok = 0;

    //   this.show = !this.show;
    //   if (this.show) {
        this.expfoty();
        this.send();
    //   }
    
    },
    expfoty() {
      EventBus.$emit("exportImages", "");
    },
    send() {      
        $( "#gk" ).submit();
    },
  },

  components: {
    VueHtml2pdf,Podsumowanie
  },
};
</script>
<style scoped>
.stopa{
  width: 100%;
}
.pdf{
  /* position: absolute; */
  width: 800px;
  height: 1122px;
  max-height: 1122px;
  background: white;
  padding: 30px 30px 26px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
main{
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  gap: 15px;
}
footer {
    margin-top: auto;
}
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
  width: 100%;
  grid-auto-rows: auto;
}
section{
  /* flex: 1; */
}
.konfiguracja{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
}
.op{
  color: yellowgreen;
  border-bottom: 2px solid lightgray;
}
</style>
