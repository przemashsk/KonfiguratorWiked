<template>
<div style="display:inline-block">
  <div style="display:flex;">
<button type="button" class="btn btn-success" @click="handlePDF" :class="{loadingbutton:loading}"><span v-if="loading">Ładowanie...</span><span v-else>Zapisz PDF</span> </button>
<!-- <p v-if="loading" style="margin-left:10px;position:absolute">ładowanie...</p> -->
</div>

</div>

</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import {EventBus} from '@/event-bus.js';
// import * as jsPDF from 'jspdf';
// import * as metropolisnormal from '@/Metropolis-normal.js';




export default {
data(){
  return {
    loading:false

    

  }
},
mounted(){
  let self = this;
  let logo = new Image();
        logo.src='/images/tlo.png';
        logo.onload = function(){
          self.$store.state.logoobject = logo ;
          // pdf.output('save','konfiguracja');

        }
},
computed:{
  ...mapGetters({
    activeModel:'activeModel',
    activeSzyba:'activeSzyba',
    activeSotw:'activeSotw',
    activeKolor:'activeKolor',
    activeKolor2:'activeKolor2',
    activeKolor3:'activeKolor3',
    activeKlamka:'activeKlamka',
    activeKlamkaKolor:'activeKlamkaKolor',
    activeKierunek:'activeKierunek',
    activeSamozamykacz:'activeSamozamykacz',
    activeSamozamykaczKolor:'activeSamozamykaczKolor',
    activeAutomatyka:'activeAutomatyka',
    activeEzaczep:'activeEzaczep',
    activeSeria:'activeSeria',
    PriceAll:'PriceAll',
    KopniakCena:'KopniakCena',
    EzaczepCena:'EzaczepCena',
    SamozamykaczCena:'SamozamykaczCena',
    LustroCena:'LustroCena',
    WizjerCena:'WizjerCena',
    BasicPrice:'BasicPrice',
    CenaOkucia:'CenaOkucia',
    BikolorCena:'BikolorCena',
    MixkolorCena:'MixkolorCena',
    CenaAutomatyka:'CenaAutomatyka',
    CenaNaswietlaG:'CenaNaswietlaG',
    CenaNaswietlaNB1:'CenaNaswietlaNB1',
    CenaNaswietlaNB2:'CenaNaswietlaNB2',
    
  }),
  ...mapState({
    exportImageObj:'exportImageObj',
    exportImageObjInner:'exportImageObjInner',
    logoobject:'logoobject',
    product:'product'



  })
},
methods:{
  handlePDF(){
    let self = this;
    this.loading = true;
    EventBus.$emit('exportImages', '');
    setTimeout(function(){
      self.loading = false;
      self.tryMakePDF();
    },5000);
  },
  test(){
  },
  makePDF(){
    let C = 310;
    let D = C+200;
    let G = 470;
    let M = 40;
    let N = 140;
    let PW = 595;
    let PH = 842;
    let self = this;
    let pdf = new jsPDF('p','pt');
    let data =new Date();
    let data2 = data.toLocaleDateString("pl",{hour:'numeric',minute:'numeric'});
    console.log(pdf.getFontList());
    pdf.setFont("Metropolis","normal");
    pdf.setFontSize(9);
    // pdf.text(200,800,'WIKED Sp. z o.o. Sp. k.');
    // pdf.text(200,810,'84-242 Luzino, ul. Wielki Las 19');
    // pdf.text(370,800,'tel.(58) 678 01 77');
    // pdf.text(370,810,'tel.(58) 738 66 61');
    pdf.setFillColor(143, 204, 37);
    // pdf.rect(399,95,151,20,'F');
    // pdf.rect(399,425,151,20,'F');
    pdf.setFont("Metropolis","bold");
    pdf.setFontSize(11);
    pdf.setTextColor(250,250,250);
    // pdf.text(420,108,'Widok z zewnątrz');
    // pdf.text(420,439,'Widok z wewnątrz');
    pdf.setTextColor(0,0,0);
    pdf.setFontSize(8);
    pdf.setFont("helvetica","normal");
    pdf.text(486,70, data2);
    pdf.setFont("Metropolis","normal");
    pdf.setFontSize(8);

    //OPISY CECH
    pdf.text(N,G, self.activeSeria.bez);
    pdf.text(N,G+20, self.activeModel.bez);
    pdf.text(N,G+2*20, self.activeSzyba.bez);
    pdf.text(N,G+3*20, self.activeKierunek.bez);
    pdf.text(N,G+4*20, self.activeSotw.bez);
    pdf.text(N,G+5*20, self.activeKlamka.bez,{maxWidth:250});
    let zm = 0;  
    if(self.activeKlamka.bez.length>37){
      zm=15
    }
    pdf.text(N,G+6*20+zm, self.activeKlamkaKolor.bez);
    let kolor =  self.activeKolor.bez;
    if(self.product.wariant == 'B' || self.product.wariant == 'M'){
      kolor += ' / '+self.activeKolor2.bez;
    }
    let kolor3 =  self.activeKolor3.bez;
    
    pdf.text(N,G+7*20+zm, kolor);
    if(1>0){
      pdf.text(N,G+8*20+zm, kolor3);
    }


    let samozamykacz = '';

    if(self.SamozamykaczCena >  0){
      samozamykacz += "Samozamykacz"+' '+self.activeSamozamykacz.bez;
    }

     if(self.activeSamozamykaczKolor){
      samozamykacz += ' '+self.activeSamozamykaczKolor.bez;
    }

    let automatyka = '';

    if(self.activeAutomatyka.artnr == '-'){
      automatyka = '';
    }else {
      automatyka = "System automatyki: "+self.activeAutomatyka.bez;
    }

    let ezaczep = '';

     if(self.activeEzaczep.artnr == '-'){
      ezaczep = '';
    }else {
      ezaczep = "Elektrozaczep:";
    }



    //+self.activeSamozamykaczKolor.bez
    //+  + self.activeAutomatyka.bez + self.activeEzaczep.bez
    let akcesoria = samozamykacz;
    pdf.text(N,G+8*20+zm, akcesoria.toLowerCase(), {maxWidth:250});

    //KONIEC OPIS CECH

    //CENY-------------------OPIS----------------------------------------------------------------------------------------------------------------------------------------------------------
    if(self.PriceAll > self.BasicPrice){

    pdf.setFont("Metropolis","bold");
    pdf.setFontSize(9);
    pdf.setTextColor(143, 204, 37);

     pdf.text(C,G,'Cena bazowa: ');
       let zm2 = 0;  
     if(self.CenaOkucia > 0){
       zm2 += 20;
       let cenaokuciastring = self.CenaOkucia.toString(); 
       
     pdf.text(C,G+zm2,'Okucie: ');
     //pdf.text(M,370,'Okucie '+self.activeKlamka.bez+' '+self.activeKlamkaKolor.bez+''+self.CenaOkucia+' zł');

     }
     if(self.LustroCena > 0){
       zm2 += 20;
     pdf.text(C,G+zm2,'Lustro weneckie: ');
     }
    
     if(self.CenaAutomatyka > 0){
       zm2 += 20;
     pdf.text(C,G+zm2,automatyka+' ');
     }

     if(self.BikolorCena > 0 ){
       zm2 += 20;
     pdf.text(C,G+zm2,'Bikolor: ');
     }

        if(self.MixkolorCena > 0 ){
       zm2 += 20;
     pdf.text(C,G+zm2,'Mixkolor: ');
     }


     if(self.SamozamykaczCena > 0){
       zm2 += 20;
     pdf.text(C,G+zm2,'Samozamykacz: ');
     }
  
     if(self.EzaczepCena>0){
       zm2 += 20;
       pdf.text(C,G+zm2,ezaczep+' ')
     };

    if(self.KopniakCena>0){
       zm2 += 20;
       pdf.text(C,G+zm2,'Kopniak: ')
     };

     if(self.CenaNaswietlaG>0){
       zm2 += 20;
       pdf.text(C,G+zm2,'Naświetle górne: ')
     };

     if(self.CenaNaswietlaNB1>0){
       zm2 += 20;
       pdf.text(C,G+zm2,'Naświetle lewe: ')
     };
           
     if(self.CenaNaswietlaNB2>0){
       zm2 += 20;
       pdf.text(C,G+zm2,'Naświetle prawe: ')
     };
     // pdf.line(C,G+10+zm2,480,480+zm2);

      pdf.setFontSize(9);
      pdf.setFont("Metropolis","bold");
      pdf.text(C,G+20+zm2,`Cena netto bez VAT: `); 
      // pdf.text(D,G+20+zm2,self.PriceAll.toString()+ ' zł'); 

    }

/*--------------------------------------------------------------------------------------------- */

   
    if(self.PriceAll > self.BasicPrice){

    pdf.setFont("Metropolis","normal");
    pdf.setTextColor(0,0,0);
    pdf.setFontSize(8);

     pdf.text(D,G,self.BasicPrice.toString()+' zł');
       let zm2 = 0;  
     if(self.CenaOkucia > 0){
       zm2 += 20;
       let cenaokuciastring = self.CenaOkucia.toString(); 
       
     pdf.text(D,G+zm2,cenaokuciastring+' zł');
     //pdf.text(M,370,'Okucie '+self.activeKlamka.bez+' '+self.activeKlamkaKolor.bez+''+self.CenaOkucia+' zł');

     }
     if(self.LustroCena > 0){
       zm2 += 20;
     pdf.text(D,G+zm2,self.LustroCena.toString()+' zł');
     }
    
     if(self.CenaAutomatyka > 0){
       zm2 += 20;
     pdf.text(D,G+zm2,self.CenaAutomatyka.toString()+' zł');
     }

     if(self.BikolorCena > 0 ){
       zm2 += 20;
     pdf.text(D,G+zm2,self.BikolorCena.toString()+' zł');
     }

        if(self.MixkolorCena > 0 ){
       zm2 += 20;
     pdf.text(D,G+zm2,self.MixkolorCena.toString()+' zł');
     }


     if(self.SamozamykaczCena > 0){
       zm2 += 20;
     pdf.text(D,G+zm2,self.SamozamykaczCena+' zł',{maxWidth:250} );
     }
  
     if(self.EzaczepCena>0){
       zm2 += 20;
       pdf.text(D,G+zm2,self.EzaczepCena.toString()+' zł')
     };

    if(self.KopniakCena>0){
       zm2 += 20;
       pdf.text(D,G+zm2,self.KopniakCena.toString()+' zł')
     };

     if(self.CenaNaswietlaG>0){
       zm2 += 20;
       pdf.text(D,G+zm2,self.CenaNaswietlaG.toString()+' zł')
     };

     if(self.CenaNaswietlaNB1>0){
       zm2 += 20;
       pdf.text(D,G+zm2,self.CenaNaswietlaG.toString()+' zł')
     };

     if(self.CenaNaswietlaNB2>0){
       zm2 += 20;
       pdf.text(D,G+zm2,self.CenaNaswietlaG.toString()+' zł')
     };
      // pdf.line(D,G+10+zm2,480,480+zm2);
    /*<p v-if="CenaNaswietlaG>0" style="font-size:14px" >Naświetle górne: <span style="font-weight:bold">{{CenaNaswietlaG}} zł</span> </p>
          <p v-if="CenaNaswietlaNB1>0" style="font-size:14px" >Naświetle boczne lewe : <span style="font-weight:bold">{{CenaNaswietlaNB1}} zł</span> </p>
          <p v-if="CenaNaswietlaNB2>0" style="font-size:14px" >Naświetle boczne prawe: <span style="font-weight:bold">{{CenaNaswietlaNB2}} zł</span> </p>*/
      // pdf.setFontSize();
      pdf.setFont("Metropolis","bold");
      // pdf.text(D,G+20+zm2,`Cena netto bez VAT: `); 
      pdf.text(D,G+20+zm2,self.PriceAll.toString()+ ' zł'); 

    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    //KONIEC CEN

    pdf.setFont("Metropolis","bold");
    // pdf.setFontSize(14);
    // pdf.text(M,100, 'Wybrane cechy produktu');
    // pdf.setFontSize(15);
    // pdf.text(425,50, 'Wizualizacja');
    // pdf.setFont("Metropolis","normal");
    // pdf.text(352,70, 'drzwi zewnętrznych');
    pdf.setFontSize(9);
    pdf.setTextColor(143, 204, 37);

     //NAGŁÓWKI CECH
     pdf.text(M,G,`Seria `);
     pdf.text(M,G+20,`Wzór `);
     pdf.text(M,G+2*20,`Szyba `);
     pdf.text(M,G+3*20,`Kierunek otwierania `);
     pdf.text(M,G+4*20,`Sposób otwierania `);
     pdf.text(M,G+5*20,`Klamka / pochwyt `);
     pdf.text(M,G+6*20+zm,`Kolor okuć `);
      pdf.text(M,G+7*20+zm,`Kolor `);
      if(akcesoria.length > 1){
      pdf.text(M,G+8*20+zm,`Akcesoria `);
      }
    //KONIEC NAGŁÓWKI CEN
    
    pdf.setTextColor(1, 1, 1);
    pdf.setFont("Metropolis","normal");
    pdf.setFontSize(8);
   // pdf.text(M,500+zm,`Podawane ceny są cenami netto. Należy doliczyć podatek VAT w obowiązującej wysokości.`,{maxWidth:400} );
    //pdf.text(M,520+zm,`Podane ceny są cenami sugerowanymi przez producenta i nie ustalają cen od sprzedaży w poszczególnych punktach dystrybucji.`,{maxWidth:350} );
    // pdf.text(M,660+zm,`Wizualizacje modeli przedstawione w konfiguratorze należy traktować jako poglądowe. Wzory, kolory i inne szczegóły mogą odbiegać od rzeczywistych. Należy brać pod uwagę fakt, że wyświetlacze urządzeń elektronicznych mogą zniekształcić rzeczywiste kolory.`,{maxWidth:350} );
    //pdf.text(M,590+zm,`Wizualizacje drzwi w konfiguratorze mają przybliżone proporcje drzwi o standardowym rozmiarze 90 (wymiary drzwi: wysokość 2100mm x szerokość 1083mm). Zmieniając rzeczywiste wymiary drzwi w konfiguratorze proporcje wizualizacji nie ulegają zmianie, natomiast proporcje drzwi i aplikacji rzeczywistych będą się różnić.`,{maxWidth:350} );
    // pdf.text(M,700+zm,`Publikacja nie stanowi oferty handlowej w rozumieniu art.66 paragraf 1 Kodeksu Cywilnego i ma charakter wyłącznie informacyjny. Producent zastrzega sobie prawo do pomyłek oraz zmian, bez podania wcześniejszej informacji. Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.`,{maxWidth:350} );
    //pdf.text(M,640+zm,`Producent zastrzega sobie prawo do zmian i ulepszeń produktów zawartych w niniejszym katalogu bez uprzedniego powiadomienia oraz zastrzega sobie prawo do błędów w prezentacji i wycenach modeli umieszczonych w konfiguratorze.`,{maxWidth:350} );
    //pdf.text(M,680+zm,`Publikacja nie stanowi oferty w rozumieniu art. 66 paragrafu 1 Kodeksu Cywilnego i ma charakter wyłacznie informacyjny.`,{maxWidth:350} );

     pdf.setFillColor(143,204,37);
     pdf.setDrawColor(143,204,37);
     pdf.setLineWidth(2);

     

    //  pdf.line(M,107,50,107);
    //  pdf.line(170,790,170,810);
    //  pdf.line(350,790,350,810);


       let imgsrc = self.exportImageObj;
       let imgsrcinner = self.exportImageObjInner;

       let imagewidth = self.exportImageObj.width;
       let imageheight = self.exportImageObj.height;
       let targetheight = 288;
       let targetwidth = targetheight/imageheight*imagewidth;

       pdf.setFillColor(143,204,37);
       pdf.setDrawColor(143,204,37);
       pdf.setLineWidth(2);

       pdf.addImage(self.logoobject, 'PNG', -5, 0, PW, PH);

       pdf.addImage(imgsrc, 'JPEG', M, 135, targetwidth, targetheight);
       pdf.addImage(imgsrcinner, 'JPEG', C-5, 135, targetwidth, targetheight);
       pdf.output('save','konfigurator.pdf');

      //  pdf.output('dataurlnewwindow');


  },
  tryMakePDF(){
    try{
    this.makePDF();
    }catch(e){
      console.log(e.message);
      this.$store.state.showmodal = true;
    }
  }


}

}
</script>

<style>

.loadingbutton{
  background-color:#444444 !important;
}

</style>