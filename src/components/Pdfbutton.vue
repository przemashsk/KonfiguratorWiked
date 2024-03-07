<template>
  <div style="display: inline-block">
    <div style="display: flex">
      <form id="gk" action="https://wiked.pl/gdzie-kupic/" method="GET" target="_blank">
        <input type="hidden" name="konf" value="1">
        <!-- <span  class="" type="submit">Gdzie gupić</span> -->
        <span v-if="loading2" class="btn btn-success mr-3" disabled>Ładowanie...</span
        ><span @click="handlePDF2" class="btn btn-success mr-3" v-else>Zapisz PDF i znajdz najbliższy salon</span>
      </form>
      <div id="pdf">
        <span v-if="loading" class="btn btn-success" disabled>Ładowanie...</span>
        <!-- <span @click="handlePDF" v-else class="btn btn-success">Zapisz PDF</span> -->
      </div>
      <!-- <p v-if="loading" style="margin-left:10px;position:absolute">ładowanie...</p> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { EventBus } from "@/event-bus.js";
// import * as jsPDF from 'jspdf';
// import * as metropolisnormal from '@/Metropolis-normal.js';

export default {
  data() {
    return {
      loading: false,
      loading2: false,
    };
  },
  mounted() {
    let self = this;
    let logo = new Image();
    logo.src = "/images/tlo.png";
    logo.onload = function () {
      self.$store.state.logoobject = logo;
      // pdf.output('save','konfiguracja');
    };
  },
  computed: {
    ...mapGetters({
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
      activeSeria: "activeSeria",
      PriceAll: "PriceAll",
      KopniakCena: "KopniakCena",
      dymCena: "dymCena",
      EzaczepCena: "EzaczepCena",
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
  methods: {
    handlePDF() {
      let self = this;
      this.loading = true;
      EventBus.$emit("exportImages", "");
      setTimeout(function () {
        self.loading = false;
        self.tryMakePDF();
        //$( "#gk" ).submit();
      }, 8000);
    },
    handlePDF2() {
      let self = this;
      this.loading2 = true;
      EventBus.$emit("exportImages", "");
      setTimeout(function () {
        self.loading2 = false;
        self.tryMakePDF();
        $( "#gk" ).submit();
      }, 8000);
    },
    send() {      
        $( "#gk" ).submit();
    },
    test() {},
    makePDF() {
      let C = 310;
      let D = C + 200;
      let G = 470;
      let M = 40;
      let N = 142;
      let PW = 595;
      let PH = 842;
      let A = 0;
      let self = this;
      let pdf = new jsPDF("p", "pt");
      let data = new Date();
      let data2 = data.toLocaleDateString("pl", {
        hour: "numeric",
        minute: "numeric",
      });
      console.log(pdf.getFontList());
      pdf.setFont("Metropolis", "normal");
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(8);
      pdf.text(486, 70, data2);
      pdf.setDrawColor(209, 210, 212);
      let rozm = self.product.kodrozmiaru;
      let opcja=self.activeOpcja.bez;
      if (self.product.seria != "60") {
        opcja="";
      }
      // if(1>0){let opcja=self.activeOpcja.bez;}else{let opcja="";}
      //OPISY CECH
      pdf.text(N, G, self.activeSeria.bez + " (" + rozm + ") " + opcja);
      pdf.line(M, G + 7, 285, G + 7);

      pdf.text(N, G + 20, self.activeModel.bez);
      pdf.line(M, G + 7 + 20, 285, G + 7 + 20);

      pdf.text(N, G + 2 * 20, self.activeSzyba.bez);
      pdf.line(M, G + 7 + 2 * 20, 285, G + 7 + 2 * 20);
      
      if(self.product.typ != "D1"){
        pdf.text(N, G + 3 * 20, self.activeSzyba2.bez);
        pdf.line(M, G + 7 + 3 * 20, 285, G + 7 + 3 * 20);
        A=20;
      }
      
      pdf.text(N, G+A + 3 * 20, self.activeKierunek.bez);
      pdf.line(M, G+A + 7 + 3 * 20, 285, G+A + 7 + 3 * 20);

      pdf.text(N, G+A + 4 * 20, self.activeSotw.bez);
      pdf.line(M, G+A + 7 + 4 * 20, 285, G+A + 7 + 4 * 20);

      pdf.text(N, G+A + 5 * 20, self.activeKlamka.bez, { maxWidth: 150 });

      let zm = A;
      // if(self.activeKlamka.bez.length>37){
      //   zm=15
      // }
      pdf.text(N, G + 6 * 20 + zm, self.activeKlamkaKolor.bez);
      pdf.line(M, G + 7 + 5 * 20, 285, G + 7 + 5 * 20);
      let kolor = self.activeKolor.bez;
      if (self.product.wariant == "B" || self.product.wariant == "M") {
        kolor += " / " + self.activeKolor2.bez;
      }
      pdf.text(N, G + 7 * 20 + zm, kolor);
      pdf.line(M, G + 7 + 6 * 20, 285, G + 7 + 6 * 20);
      
      if(self.product.typ != "D1"){
      pdf.line(M, G + 7 + 7 * 20, 285, G + 7 + 7 * 20);
      }
      let kolor3 = self.activeKolor3.bez;      
      if(self.product.typ == "D1N08"){
        pdf.text(N, G + 8 * 20 + zm, kolor3);
      pdf.line(M, G + 7 + 7 * 20, 285, G + 7 + 7 * 20);
      }      

      let samozamykacz = "";

      if (self.SamozamykaczCena > 0) {
        samozamykacz += " " + self.activeSamozamykacz.bez;
      }

      if (self.activeSamozamykaczKolor) {
        samozamykacz += " " + self.activeSamozamykaczKolor.bez;
      }

      let automatyka = "";

      if (self.activeAutomatyka.artnr == "-") {
        automatyka = "";
      } else {
        automatyka = "System automatyki: " + self.activeAutomatyka.bez;
      }

      let ezaczep = "";

      if (self.activeEzaczep.artnr == "-") {
        ezaczep = "";
      } else {
        ezaczep = "Elektrozaczep:";
      }
      let count =0;
      if(self.product.typ == "D1N08"){
        count=1;
      }
      let akcesoria = samozamykacz;
      pdf.text(N, G + (8+count) * 20 + zm, akcesoria.toLowerCase(), { maxWidth: 300 });

      //KONIEC OPIS CECH

      //CENY-------------------OPIS----------------------------------------------------------------------------------------------------------------------------------------------------------
      if (self.PriceAll > self.BasicPrice) {
        pdf.setFont("Metropolis", "bold");
        pdf.setFontSize(9);
        pdf.setTextColor(143, 204, 37);

        pdf.text(C, G, "Cena bazowa: ");

        let zm2 = 0;
        let wysng = self.product.wysokoscng;
        let szernb1 = self.product.szerokoscnb1;
        let szernb2 = self.product.szerokoscnb2;

        if (self.CenaOkucia > 0) {
          zm2 += 20;
          let cenaokuciastring = self.CenaOkucia.toString();

          pdf.text(C, G + zm2, "Okucie: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.LustroCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Lustro weneckie: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.LustroCena2 > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Lustro weneckie naświetla: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.LustroCena3 > 0 && this.$store.state.product.szyba2 == 'g') {
          zm2 += 20;
          pdf.text(C, G + zm2, "Black lustro weneckie naświetla: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.LustroCena3 > 0 && this.$store.state.product.szyba2 == 'b') {
          zm2 += 20;
          pdf.text(C, G + zm2, "Black naświetla: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.CenaAutomatyka > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, automatyka + " ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.BikolorCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Bikolor: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.MixkolorCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Mixkolor: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.SamozamykaczCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Samozamykacz: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.EzaczepCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, ezaczep + " ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.KopniakCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Kopniak: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.dymCena > 0) {
          zm2 += 20;
          pdf.text(C, G + zm2, "Uszczelka samoopadająca: ");
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.CenaNaswietlaG > 0) {
          zm2 += 20;
          if(self.product.typ == "D1N08"){
            pdf.text(C, G + zm2, "Portal górny (" + wysng + "): ");
          }else{
            pdf.text(C, G + zm2, "Naświetle górne (" + wysng + "): ");
          }
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.CenaNaswietlaNB1 > 0) {
          zm2 += 20;
          if(self.product.typ == "D1N08"){
            pdf.text(C, G + zm2, "Portal lewy (" + szernb1 + "): ");
          }else{
            pdf.text(C, G + zm2, "Naświetle lewe (" + szernb1 + "): ");
          }
            pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        if (self.CenaNaswietlaNB2 > 0) {
          zm2 += 20;
          if(self.product.typ == "D1N08"){
            pdf.text(C, G + zm2, "Portal prawy (" + szernb2 + "): ");
          }else{
            pdf.text(C, G + zm2, "Naświetle prawe (" + szernb2 + "): ");
          }
          pdf.line(C, G - 13 + zm2, PW - M, G - 13 + zm2);
        }

        pdf.setFontSize(9);
        pdf.setFont("Metropolis", "bold");
        pdf.setTextColor(0, 0, 0);

        pdf.text(C, G + 20 + zm2, `Cena zestawu netto bez VAT: `);
        pdf.line(C, G + 7 + zm2, PW - M, G + 7 + zm2);
      } else {
        pdf.text(C, G, `Cena zestawu netto bez VAT: `);
      }

      /*--------------------------------------------------------------------------------------------- */

      if (self.PriceAll > self.BasicPrice) {
        pdf.setFont("Metropolis", "normal");
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(8);

        pdf.text(D, G, self.BasicPrice.toString() + " zł");
        let zm2 = 0;

        if (self.CenaOkucia > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.CenaOkucia.toString() + " zł");
        }

        if (self.LustroCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.LustroCena.toString() + " zł");
        }

        if (self.LustroCena2 > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.LustroCena2.toString() + " zł");
        }

        if (self.LustroCena3 > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.LustroCena3.toString() + " zł");
        }

        if (self.CenaAutomatyka > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.CenaAutomatyka.toString() + " zł");
        }

        if (self.BikolorCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.BikolorCena.toString() + " zł");
        }

        if (self.MixkolorCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.MixkolorCena.toString() + " zł");
        }

        if (self.SamozamykaczCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.SamozamykaczCena + " zł", {
            maxWidth: 250,
          });
        }

        if (self.EzaczepCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.EzaczepCena.toString() + " zł");
        }

        if (self.KopniakCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.KopniakCena.toString() + " zł");
        }

        if (self.dymCena > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.dymCena.toString() + " zł");
        }

        if (self.CenaNaswietlaG > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.CenaNaswietlaG.toString() + " zł");
        }

        if (self.CenaNaswietlaNB1 > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.CenaNaswietlaNB1.toString() + " zł");
        }

        if (self.CenaNaswietlaNB2 > 0) {
          zm2 += 20;
          pdf.text(D, G + zm2, self.CenaNaswietlaNB2.toString() + " zł");
        }

        pdf.setFont("Metropolis", "bold");
        pdf.text(D, G + 20 + zm2, self.PriceAll.toString() + " zł");
      } else {
        pdf.text(D, G, self.PriceAll.toString() + " zł");
      }

      /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

      //KONIEC CEN

      pdf.setFont("Metropolis", "bold");
      pdf.setFontSize(9);
      pdf.setTextColor(143, 204, 37);

      //NAGŁÓWKI CECH
      pdf.text(M, G, `Seria `);
      pdf.text(M, G + 20, `Wzór `);
      pdf.text(M, G + 2 * 20, `Przeszklenie `);
      if(self.product.typ != "D1"){
        pdf.text(M, G + 3 * 20, `Przeszklenie naświetla `);
        G=G+20}
      pdf.text(M, G + 3 * 20, `Kierunek otwierania `);
      pdf.text(M, G + 4 * 20, `Sposób otwierania `);
      pdf.text(M, G + 5 * 20, `Klamka / pochwyt `);
      zm=zm-A;
      pdf.text(M, G + 6 * 20 + zm, `Kolor okuć `);
      pdf.text(M, G + 7 * 20 + zm, `Kolor drzwi`);
      if(self.product.typ == "D1N08"){
        pdf.text(M, G + 8 * 20 + zm, `Kolor portali `);
      }
      // let count =0;
      // if(self.product.typ == "D1N08"){
      //   count=1;
      // }
      if (akcesoria.length > 1) {
        pdf.text(M, G + (8+count) * 20 + zm, `Akcesoria `);
        pdf.line(M, G + 7 + (7+count) * 20, 285, G + 7 + (7+count) * 20);
      }
      //KONIEC NAGŁÓWKI CECH

      // pdf.text(M,500+zm,`Podawane ceny są cenami netto. Należy doliczyć podatek VAT w obowiązującej wysokości.`,{maxWidth:400} );
      //pdf.text(M,520+zm,`Podane ceny są cenami sugerowanymi przez producenta i nie ustalają cen od sprzedaży w poszczególnych punktach dystrybucji.`,{maxWidth:350} );
      // pdf.text(M,660+zm,`Wizualizacje modeli przedstawione w konfiguratorze należy traktować jako poglądowe. Wzory, kolory i inne szczegóły mogą odbiegać od rzeczywistych. Należy brać pod uwagę fakt, że wyświetlacze urządzeń elektronicznych mogą zniekształcić rzeczywiste kolory.`,{maxWidth:350} );
      //pdf.text(M,590+zm,`Wizualizacje drzwi w konfiguratorze mają przybliżone proporcje drzwi o standardowym rozmiarze 90 (wymiary drzwi: wysokość 2100mm x szerokość 1083mm). Zmieniając rzeczywiste wymiary drzwi w konfiguratorze proporcje wizualizacji nie ulegają zmianie, natomiast proporcje drzwi i aplikacji rzeczywistych będą się różnić.`,{maxWidth:350} );
      // pdf.text(M,700+zm,`Publikacja nie stanowi oferty handlowej w rozumieniu art.66 paragraf 1 Kodeksu Cywilnego i ma charakter wyłącznie informacyjny. Producent zastrzega sobie prawo do pomyłek oraz zmian, bez podania wcześniejszej informacji. Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.`,{maxWidth:350} );
      //pdf.text(M,640+zm,`Producent zastrzega sobie prawo do zmian i ulepszeń produktów zawartych w niniejszym katalogu bez uprzedniego powiadomienia oraz zastrzega sobie prawo do błędów w prezentacji i wycenach modeli umieszczonych w konfiguratorze.`,{maxWidth:350} );
      //pdf.text(M,680+zm,`Publikacja nie stanowi oferty w rozumieniu art. 66 paragrafu 1 Kodeksu Cywilnego i ma charakter wyłacznie informacyjny.`,{maxWidth:350} );

      let imgsrc = self.exportImageObj;
      // console.log(imgsrc)
      let imgsrcinner = self.exportImageObjInner;

      let imagewidth = self.exportImageObj.width;
      let imageheight = self.exportImageObj.height;
      let targetheight = 288;
      let targetwidth = (targetheight / imageheight) * imagewidth;

      let iimagewidth = self.exportImageObjInner.width;
      let iimageheight = self.exportImageObjInner.height;
      let itargetheight = 288*(iimageheight/imageheight);
      let itargetwidth = (itargetheight / iimageheight) * iimagewidth;

      pdf.addImage(self.logoobject, "PNG", -5, 0, PW, PH); /*---TŁO--- */

      pdf.addImage(
        imgsrc,
        "JPEG",
        M,
        140,
        targetwidth,
        targetheight
      ); /*---ZEWNĄTRZ-- */
      pdf.addImage(
        imgsrcinner,
        "JPEG",
        C - 5,
        140+288-itargetheight,
        itargetwidth,
        itargetheight
      ); /*---wEWNĄTRZ---*/
      pdf.output("save", "konfigurator.pdf");

      //  pdf.output('dataurlnewwindow');
    },
    tryMakePDF() {
      try {
        this.makePDF();
      } catch (e) {
        console.log(e.message);
        this.$store.state.showmodal = true;
      }
    },
  },
};
</script>

<style>
#pdf:active {
  color: #8fcc25;
}

/* .loadingbutton{
  background-color:#444444 !important;
} */
</style>