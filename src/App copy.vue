<template>
  <div id="app">
    <!-- <tabs class="sticky-top"> -->
    <div v-if="product.inspiracja == ''">
      <tabs style="background: #292929;z-index: 1;"></tabs>
    </div>    

    <div v-if="product.protect == ''" class="protect">
      <div style="display:flex;flex-direction:column;gap:51px">
        <div class="card" @click="product.protect = 'dom'">
          <div class="flex-1 text-center">
            <span>Do domu</span>
          </div>
          <img src="/images/konfigurator/step1/dom.png" />
        </div>

        <div class="card" @click="product.protect = 'blok'">
          <div class="flex-1 text-center">
            <span>Do mieszkania</span>
          </div>
          <img src="/images/konfigurator/step1/mieszkanie.png" />
        </div>
      </div>
    </div>

    <div v-if="product.inspiracja == '' && product.protect != ''" class="protect">
      <div style="display:flex;flex-direction:column;gap:51px">
        <div class="card" @click="product.inspiracja = 'tak'">
          <div class="flex-1 text-center">
            <span>Zaprojektuj <br>swoje drzwi</span>
          </div>
          <img src="/images/konfigurator/step2/drzwi.png" />
        </div>

        <div class="card" @click="product.inspiracja = 'nie'">
          <div class="flex-1 text-center">
            <span>Przejrzyj inpirację</span>
          </div>
          <img src="/images/konfigurator/step2/inpiracje.png" />
        </div>
      </div>
    </div>

    <div class="d-flex desktop" style="flex-direction: column;" v-if="product.inspiracja != ''">
      <tabs style="background: #292929;z-index: 1;"></tabs>
      <div class="d-flex" style="flex-direction: row;">
        <filtry v-if="activeTab == 'Model'"></filtry>
        <konfigurator style="flex-1"></konfigurator>
        <!-- <div v-show="product.inspiracja != ''" v-if="activeTab != 'Inspiracje'" style="min-width: 471px;"> -->
        <div v-show="product.inspiracja != ''" style="min-width: 471px;">
          <div style="height: calc(100vh - 108px);overflow-y: auto;padding:15px;gap:15px;display: flex;flex-direction: column;" :class="activeTab == 'Podsumowanie' ? 'last' : ''">
            <!-- <podsumowanie></podsumowanie> -->
            <div style="display:flex;flex-direction:column;gap:15px">
              <switcher id="sw" style="gap: 20px;display: flex;justify-content: center;" class="ab"></switcher>
              <wizualizacja class="fitCenter nomobile" style="z-index: 10;"></wizualizacja>
            </div>
            <!-- <div class="mobile">
          
          <wizualizacja  class="fitCenter" style="z-index: 10; margin-top: 20px"></wizualizacja>
        </div> -->

            <div>
              <div class="cena bg-success text-center text-light">
                Cena zestawu: <span style="font-weight: bold">{{ parseInt(priceAll) }} zł</span>
              </div>
              <div class="cena" hidden>
                <p style="" v-if="priceAll == basicPrice">
                  Cena zestawu: <span style="font-weight: bold">{{ parseInt(priceAll) }} zł</span>
                </p>
                <p style="" v-if="priceAll != basicPrice">
                  Cena bazowa: <span style="font-weight: bold">{{ parseInt(basicPrice) }} zł</span>
                </p>
                <p v-if="Kolor > 0" style="">
                  Dopłata za malowanie: <span style="font-weight: bold">{{ parseInt(Kolor) }} zł</span>
                </p>
                <p v-if="KolorNas > 0" style="">
                  Dopłata za malowanie naświetla: <span style="font-weight: bold">{{ parseInt(KolorNas) }} zł</span>
                </p>
                <p v-if="cenaOkucia > 0" style="">
                  Cena okuć: <span style="font-weight: bold">{{ parseInt(cenaOkucia) }} zł</span>
                </p>
                <p v-if="lustroCena > 0" style="">
                  Przeszklenie Lustro weneckie: <span style="font-weight: bold">{{ parseInt(lustroCena) }} zł</span>
                </p>
                <p v-if="lustroCena2 > 0" style="">
                  Przeszklenie Lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena2) }} zł</span>
                </p>
                <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'g'" style="">
                  Przeszklenie Black lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
                </p>
                <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'a'" style="">
                  Przeszklenie Reflex Grafit naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
                </p>
                <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'b'" style="">
                  Przeszklenie Black naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
                </p>
                <p v-if="samozamykaczCena > 0" style="">
                  Samozamykacz: <span style="font-weight: bold">{{ parseInt(samozamykaczCena) }} zł</span>
                </p>

                <!-- <p v-if="wizjerCena>0" style="font-size:14px">Wizjer: <span style="font-weight:bold">{{parseInt(wizjerCena)}} zł</span></p> -->
                <p v-if="ezaczepCena > 0" style="">
                  Elektrozaczep: <span v-if="$store.state.product.seria == 41">(x3)</span>:<span style="font-weight: bold">{{ parseInt(ezaczepCena) }} zł</span>
                </p>
                <p v-if="ezaczeprCena > 0" style="">
                  Elektrozaczep awersyjny: <span style="font-weight: bold">{{ parseInt(ezaczeprCena) }} zł</span>
                </p>
                <p v-if="kopniakCena > 0" style="">
                  Kopniak: <span style="font-weight: bold">{{ parseInt(kopniakCena) }} zł</span>
                </p>
                <p v-if="DEERSTONE > 0" style="">
                  Ramka ze spieku: <span style="font-weight: bold">{{ parseInt(DEERSTONE) }} zł</span>
                </p>
                <p v-if="dymCena > 0" style="">
                  Opcja przeciwdymowa: <span style="font-weight: bold">{{ parseInt(dymCena) }} zł</span>
                </p>
                <p v-if="mixkolorCena > 0 && product.wariant == 'M'" style="">
                  Mixkolor: <b>{{ mixkolorCena }} zł </b>
                </p>
                <p v-if="mixkolorCena > 0 && product.wariant == 'MB'" style="">
                  MixBiKolor: <b>{{ mixkolorCena }} zł </b>
                </p>
                <p v-if="product.wariant == 'B' && bikolorCena > 0" style="">
                  Bikolor: <span style="font-weight: bold">{{ bikolorCena }} zł</span>
                </p>
                <p v-if="product.automatyka == 'B'" style="">System biometryczny: <span style="font-weight: bold">3960 zł</span></p>
                <p v-if="product.automatyka == 'K'" style="">System kodowy: <span style="font-weight: bold">3630 zł</span></p>
                <p v-if="product.automatyka == 'Z'" style="">System zbliżeniowy: <span style="font-weight: bold">3630 zł</span></p>
                <p v-if="czylamele" style="">
                  Lamele: <span style="font-weight: bold">{{ CenaLamele }} zł</span>
                </p>

                <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                  Portal górny: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
                </p>
                <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                  Portal lewy: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
                </p>
                <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                  Portal prawy: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
                </p>

                <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                  Naświetle górne: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
                </p>
                <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                  Naświetle lewe: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
                </p>
                <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                  Naświetle prawe: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
                </p>
                <!-- <p style="padding-top: 16px;border-top: 1px solid lightgray;margin-top: 15px;">
                    Ceny podane w konfiguratorze są cenami sugerowanymi i nie
                    są wiążącymi w punktach dystrybucji. Podane ceny są cenami
                    netto, do których należy doliczyć 8% VAT lub 23% VAT.</p> -->
              </div>
              <!-- <podsumowanie v-if="activeTab == 'Podsumowanie'"></podsumowanie> -->
              <podsumowanie></podsumowanie>
              <div class="cena" hidden v-if="activeTab == 'Podsumowanie'">
                Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.
              </div>
              <pdf v-if="activeTab == 'Podsumowanie'" />

              <!-- Modal -->
              <div onclick="document.querySelector('#myModall').style.display = 'none'" id="myModall" role="dialog" hidden>
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header bg-info">
                      <div style="display: block; float: left">Informacja</div>
                      <div style="display: block; float: right" onclick="document.querySelector('#myModall').style.display = 'none'">
                        <i class="fa fa-times" data-dismiss="modal" style="cursor: pointer; margin: 0"></i>
                      </div>
                    </div>
                    <div v-if="activeTyp.artnr != 'D1N08'" class="modal-body" style="border: none">Uwaga! Wymiar naświetla może wynosić od 20 do 80 cm, liczone co 1 cm. <br /><br />Wartości podane w konfiguratorze mają charakter przykładowy.</div>
                    <div v-if="activeTyp.artnr == 'D1N08'" class="modal-body" style="border: none">
                      Portale dedykowane są wyłącznie do drzwi otwieranych do wewnątrz. Minimalna szerokość ściany, na którą montowana jest ościeżnica do drzwi z portalem wynosi 15 cm. Wymagany jest montaż licujący ościeżnicę ze ścianą wewnętrzną. W przypadku zamówienia portalu oraz drzwi w różnych
                      kolorach, adapter ościeżnicy zostanie wykonany w kolorze ościeżnicy.
                    </div>
                    <!-- <DIV>Ceny podane w konfiguratorze są cenami sugerowanymi i nie są wiążącymi w punktach dystrybucji. Podane ceny są cenami netto, do których należy doliczyć 8% VAT lub 23% VAT.</DIV> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- <navbuttons></navbuttons> -->
          </div>
        </div>
      </div>
    </div>
    <div id="mobile" v-if="product.inspiracja != ''">
      <div class="top">
        <header>
          <button @click="performSwitch">
            <span v-if="this.$store.state.selectedwidok == 'Z'">Widok zewnętrzny</span>
            <span v-else>Widok wewnętrzny</span>
          </button>
          <button><a href="#podsumowanie">Podsumowanie</a></button>
        </header>
        <div class="top-section">
          <div class="mobilewiz" :class="'A' + widthtc">
            <!-- <v-stage :config="{ width: 203*.8, height: 248, draggable: false, zoombool: true }"> -->
            <!-- <v-stage :config="{ width: 122, height: 248, draggable: false, zoombool: true }"> -->
            <v-stage :config="{ width: w * (widthtc / 1025), height: h, draggable: false, zoombool: true }">
              <!-- <v-stage :config="{width:widthtc,height:heightc,draggable:false}"> -->
              <!-- <drzwi :mobile="2.1"></drzwi> -->
              <drzwi :mobile="256.25 / w"></drzwi>
              <!-- <drzwi :mobile="520/248"></drzwi> -->
            </v-stage>
          </div>
          <div class="mobiledet2">
            <div class="cenamobile">
              <p style="" v-if="priceAll == basicPrice">
                Cena zestawu: <span style="font-weight: bold">{{ parseInt(priceAll) }} zł</span>
              </p>
              <p style="" v-if="priceAll != basicPrice">
                Cena bazowa: <span style="font-weight: bold">{{ parseInt(basicPrice) }} zł</span>
              </p>
              <p v-if="Kolor > 0" style="">
                Dopłata za malowanie: <span style="font-weight: bold">{{ parseInt(Kolor) }} zł</span>
              </p>
              <p v-if="KolorNas > 0" style="">
                Dopłata za malowanie naświetla: <span style="font-weight: bold">{{ parseInt(KolorNas) }} zł</span>
              </p>
              <p v-if="cenaOkucia > 0" style="">
                Cena okuć: <span style="font-weight: bold">{{ parseInt(cenaOkucia) }} zł</span>
              </p>
              <p v-if="lustroCena > 0" style="">
                Przeszklenie Lustro weneckie: <span style="font-weight: bold">{{ parseInt(lustroCena) }} zł</span>
              </p>
              <p v-if="lustroCena2 > 0" style="">
                Przeszklenie Lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena2) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'g'" style="">
                Przeszklenie Black lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'a'" style="">
                Przeszklenie Reflex Grafit naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'b'" style="">
                Przeszklenie Black naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="samozamykaczCena > 0" style="">
                Samozamykacz: <span style="font-weight: bold">{{ parseInt(samozamykaczCena) }} zł</span>
              </p>

              <p v-if="ezaczepCena > 0" style="">
                Elektrozaczep: <span v-if="$store.state.product.seria == 41">(x3)</span>:<span style="font-weight: bold">{{ parseInt(ezaczepCena) }} zł</span>
              </p>
              <p v-if="ezaczeprCena > 0" style="">
                Elektrozaczep awersyjny: <span style="font-weight: bold">{{ parseInt(ezaczeprCena) }} zł</span>
              </p>
              <p v-if="kopniakCena > 0" style="">
                Kopniak: <span style="font-weight: bold">{{ parseInt(kopniakCena) }} zł</span>
              </p>
              <p v-if="DEERSTONE > 0" style="">
                Ramka ze spieku: <span style="font-weight: bold">{{ parseInt(DEERSTONE) }} zł</span>
              </p>
              <p v-if="dymCena > 0" style="">
                Opcja przeciwdymowa: <span style="font-weight: bold">{{ parseInt(dymCena) }} zł</span>
              </p>
              <p v-if="mixkolorCena > 0 && product.wariant == 'M'" style="">
                Mixkolor: <b>{{ mixkolorCena }} zł </b>
              </p>
              <p v-if="mixkolorCena > 0 && product.wariant == 'MB'" style="">
                MixBiKolor: <b>{{ mixkolorCena }} zł </b>
              </p>
              <p v-if="product.wariant == 'B' && bikolorCena > 0" style="">
                Bikolor: <span style="font-weight: bold">{{ bikolorCena }} zł</span>
              </p>
              <p v-if="product.automatyka == 'B'" style="">System biometryczny: <span style="font-weight: bold">3960 zł</span></p>
              <p v-if="product.automatyka == 'K'" style="">System kodowy: <span style="font-weight: bold">3630 zł</span></p>
              <p v-if="product.automatyka == 'Z'" style="">System zbliżeniowy: <span style="font-weight: bold">3630 zł</span></p>
              <p v-if="czylamele" style="">
                Lamele: <span style="font-weight: bold">{{ CenaLamele }} zł</span>
              </p>

              <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal górny: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal lewy: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal prawy: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
              </p>

              <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle górne: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle lewe: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle prawe: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
              </p>
              <!-- <p style="padding-top: 16px;border-top: 1px solid lightgray;margin-top: 15px;">
                    Ceny podane w konfiguratorze są cenami sugerowanymi i nie
                    są wiążącymi w punktach dystrybucji. Podane ceny są cenami
                    netto, do których należy doliczyć 8% VAT lub 23% VAT.</p> -->
            </div>
            <podsumowanie cenamobile></podsumowanie>
          </div>
        </div>
      </div>
      <div class="botom">
        <section id="wzor">
          <header>Wzór</header>
          <!-- <filtry ></filtry> -->
          <div class="mobilefilter">
            <div :class="{ active: product.kolekcja == 'n' }" @click="product.kolekcja = 'n'">
              <span>Nowość</span>
            </div>
            <div :class="{ active: product.kolekcja == 't' }" @click="product.kolekcja = 't'">
              <span>Bestsellery</span>
            </div>
            <div :class="{ active: product.kolekcja == 'INOX' }" @click="product.kolekcja = 'INOX'">
              <span>Inox</span>
            </div>
            <div :class="{ active: product.kolekcja == 'FI' }" @click="product.kolekcja = 'FI'">
              <img style="height:9px" src="images/konfigurator/kolekcje/FI.png" alt="" />
            </div>
            <div :class="{ active: product.kolekcja == 'PCV' }" @click="product.kolekcja = 'PCV'">
              <img style="height:11px" src="images/konfigurator/kolekcje/PCV.png" alt="" />
            </div>
            <div :class="{ active: product.kolekcja == 'GD' }" @click="product.kolekcja = 'GD'">
              <img style="height:9px" src="images/konfigurator/kolekcje/glass design.png" alt="" />
            </div>
            <div :class="{ active: product.kolekcja == 'GL' }" @click="product.kolekcja = 'GL'">
              <img style="height:8px" src="images/konfigurator/kolekcje/glass loft.png" alt="" />
            </div>
            <div :class="{ active: product.kolekcja == 'GF' }" @click="product.kolekcja = 'GF'">
              <img style="height:8px" src="images/konfigurator/kolekcje/glass front.png" alt="" />
            </div>
          </div>

          <a href="#seria">
            <scroller class="mb-0" v-if="$store.state.product.seria != '60'" :key="'e'" :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter"></scroller>
          </a>
        </section>

        <!-- #Technologia -->
        <section>
          <div id="seria"></div>
          <header>Technologia</header>
          <a href="#naswietle">
            <scroller class="mb-0" :scrollerdata="seria.dane" :attr="'seria'" :folder="'serie'" :col="'5'"></scroller>
          </a>
        </section>

        <!-- #Technologia -->
        <section>
          <div id="naswietle"></div>
          <header>Naświetle</header>
          <a :href="'#' + typ">
            <scroller class="mb-0" :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheiten'" :ext="'png'"></scroller>
          </a>
        </section>

        <section id="wymiary">
          <div v-if="['D1N01', 'D1F01', 'D1N03', 'D1N05', 'D1N07'].indexOf(product.typ) >= 0">
            <header id="lewe">Szerokość naświetla lewego<i hidden onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></header>
            <a :href="'#' + lewe">
              <scroller class="mb-0" :scrollerdata="wysokosci.dane" :attr="'szerokoscnb1'" :noimage="true" label></scroller>
            </a>
          </div>

          <div v-if="['D1N02', 'D1N03', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
            <header id="prawe">Szerokość naświetla prawego<i hidden onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></header>
            <a :href="'#' + prawe">
              <scroller class="mb-0" :scrollerdata="wysokosci.dane" :attr="'szerokoscnb2'" :noimage="true" label></scroller>
            </a>
          </div>

          <div v-if="['D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
            <header id="gorne">Wysokość naświetla górnego<i hidden onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></header>
            <a href="#kolor">
              <scroller class="mb-0" :scrollerdata="wysokosci.dane" :attr="'wysokoscng'" :noimage="true" label></scroller>
            </a>
          </div>
        </section>

        <!-- #Kolorystyka -->
        <section>
          <header id="kolor">Kolorystyka</header>
          <a href="#kolor2">
            <scroller class="mb-0" :attr="'wariant'" :folder="'wariant'" :scrollerdata="wariantFilter2" :col="'5'" kol1></scroller>
          </a>
        </section>

        <!-- #Kolorystyka -->
        <section>
          <header id="kolor2">Kolor</header>
          <!-- <a href="#kolor3"> -->
          <scroller class="mb-0 gtc3" :attr="'kolor1typ'" :noimage="true" :scrollerdata="kolor3typFilter" label></scroller>
          <!-- </a> -->
          <a href="#przeszklenie">
            <scroller class="m-0" id="kolor3" :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter"></scroller>
          </a>
        </section>

        <!-- #Przeszklenie -->
        <section>
          <header id="przeszklenie">Przeszklenie</header>
          <a href="#ramka">
            <scroller class="mb-0" :attr="'szyba'" :folder="'Przeszklenia'" :scrollerdata="szybyFilter"></scroller>
          </a>
        </section>

        <!-- #Kolor ramki -->
        <section>
          <header id="ramka">Kolor ramki</header>
          <a href="#kierunek">
            <scroller class="mb-0" :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter2" :folder="'koloryakc'"></scroller>
          </a>
        </section>

        <!-- #Kierunek otwierania -->
        <section>
          <header id="kierunek">Kierunek otwierania</header>
          <a href="#srtona">
            <scroller class="mb-0" :attr="'kierunki'" :scrollerdata="kierunki.dane" :noimage="true" label></scroller>
          </a>
        </section>
        <section>
          <header id="kierunek">Strona drzwi</header>
          <a href="#sposob">
            <scroller class="mb-0" :attr="'kierunek'" :scrollerdata="kierunekfilter.filter((el) => el.artnr.indexOf(product.kierunki) >= 0)" :folder="'kotw'"></scroller>
          </a>
        </section>

        <!-- #Sposób otwierania -->
        <section>
          <header id="sposob">Sposób otwierania</header>
          <a href="#okucia">
            <scroller class="mb-0" :attr="'sposobotw'" :scrollerdata="sposobotwfilter" :folder="'sposobyotw'"></scroller>
          </a>
        </section>

        <!-- #Okucia -->
        <section>
          <header id="okucia">Okucia</header>
          <a href="#dlugosc">
            <scroller class="mb-0" :attr="'pochwyty'" :scrollerdata="pochwytyfilter" :folder="'Klamki/nowe'"></scroller>
          </a>
        </section>

        <!-- #dlugosc -->
        <section>
          <header id="dlugosc">Dlugosc pochwytu</header>
          <a href="#pochwyt">
            <scroller class="mb-0" :attr="'dlugosci'" :noimage="true" :scrollerdata="dlugosci" label></scroller>
          </a>
        </section>

        <!-- #pochwyt -->
        <section>
          <header id="pochwyt">Pochwyt</header>
          <a href="#pochwytkol">
            <scroller class="mb-0" :attr="'klamka'" :scrollerdata="klamkifilter2" :folder="'Klamki'"></scroller>
          </a>
        </section>

        <!-- #pochwytkol -->
        <section>
          <header id="pochwytkol">kolor pochwytu</header>
          <!-- <a href="#"> -->
          <scroller class="mb-0" :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'"></scroller>
          <!-- </a> -->
          <p class="scrollerheading" v-if="product.klamka.indexOf('SD') > 0 || product.klamka.indexOf('SR') > 0 || product.klamka.indexOf('SS') > 0">Kolor dodatkowy:</p>
          <!-- <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SR') > 0" :folder="'okleiny'" kol5 :scrollerdata="kolor.dane.filter((el) => el.typ == 'RAL')"></scroller>
          <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SD') > 0" :folder="'okleiny'" kol5 :scrollerdata="kolor.dane.filter((el) => el.typ == 'DEK')"></scroller> -->
          <!-- <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SS') > 0" :folder="'koloryakc'" :scrollerdata="inoxkolor2.dane"></scroller> -->
        </section>

        <!-- #samozamykacz -->
        <section>
          <header id="samozamykacz">Samozamykacz</header>
          <!-- <a href="#"> -->
          <scroller class="mb-0" :scrollerdata="samozamykaczFilter" :attr="'samozamykacz'" :folder="'samozamykacz'"></scroller>
          <!-- </a> -->
        </section>

        <!-- #samozamykaczkol -->
        <section v-if="product.samozamykacz != '-' && product.samozamykacz != 'W'">
          <header id="samozamykaczkol">Kolor Samozamykacza</header>
          <!-- <a href="#"> -->
          <scroller class="mb-0" :key="'b'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" :attr="'samozamykaczKolor'" kol5></scroller>
          <!-- </a> -->
        </section>

        <!-- #elektrozaczep -->
        <section>
          <header id="elektrozaczep">Elektrozaczep</header>
          <!-- <a href="#"> -->
          <scroller class="mb-0" :scrollerdata="elektrozaczep.dane" :attr="'elektrozaczep'" :noimage="true" label></scroller>
          <!-- </a> -->
        </section>

        <!-- #automatyka -->
        <section v-show="product.seria == '41' && this.product.sposobotw != 'KK'">
          <header id="automatyka">System automatyki</header>
          <!-- <a href="#"> -->
          <scroller class="mb-0" :scrollerdata="automatyka.dane" :attr="'automatyka'" :folder="'automatyka'"></scroller>
          <!-- </a> -->
        </section>

        <section>
          <header id="podsumowanie">Podsumowanie</header>
          <div class="mobiledet">
            <div class="cenamobile">
              <p style="" v-if="priceAll == basicPrice">
                Cena zestawu: <span style="font-weight: bold">{{ parseInt(priceAll) }} zł</span>
              </p>
              <p style="" v-if="priceAll != basicPrice">
                Cena bazowa: <span style="font-weight: bold">{{ parseInt(basicPrice) }} zł</span>
              </p>
              <p v-if="Kolor > 0" style="">
                Dopłata za malowanie: <span style="font-weight: bold">{{ parseInt(Kolor) }} zł</span>
              </p>
              <p v-if="KolorNas > 0" style="">
                Dopłata za malowanie naświetla: <span style="font-weight: bold">{{ parseInt(KolorNas) }} zł</span>
              </p>
              <p v-if="cenaOkucia > 0" style="">
                Cena okuć: <span style="font-weight: bold">{{ parseInt(cenaOkucia) }} zł</span>
              </p>
              <p v-if="lustroCena > 0" style="">
                Przeszklenie Lustro weneckie: <span style="font-weight: bold">{{ parseInt(lustroCena) }} zł</span>
              </p>
              <p v-if="lustroCena2 > 0" style="">
                Przeszklenie Lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena2) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'g'" style="">
                Przeszklenie Black lustro weneckie naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'a'" style="">
                Przeszklenie Reflex Grafit naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="lustroCena3 > 0 && this.$store.state.product.szyba2 == 'b'" style="">
                Przeszklenie Black naświetla: <span style="font-weight: bold">{{ parseInt(lustroCena3) }} zł</span>
              </p>
              <p v-if="samozamykaczCena > 0" style="">
                Samozamykacz: <span style="font-weight: bold">{{ parseInt(samozamykaczCena) }} zł</span>
              </p>

              <p v-if="ezaczepCena > 0" style="">
                Elektrozaczep: <span v-if="$store.state.product.seria == 41">(x3)</span>:<span style="font-weight: bold">{{ parseInt(ezaczepCena) }} zł</span>
              </p>
              <p v-if="ezaczeprCena > 0" style="">
                Elektrozaczep awersyjny: <span style="font-weight: bold">{{ parseInt(ezaczeprCena) }} zł</span>
              </p>
              <p v-if="kopniakCena > 0" style="">
                Kopniak: <span style="font-weight: bold">{{ parseInt(kopniakCena) }} zł</span>
              </p>
              <p v-if="DEERSTONE > 0" style="">
                Ramka ze spieku: <span style="font-weight: bold">{{ parseInt(DEERSTONE) }} zł</span>
              </p>
              <p v-if="dymCena > 0" style="">
                Opcja przeciwdymowa: <span style="font-weight: bold">{{ parseInt(dymCena) }} zł</span>
              </p>
              <p v-if="mixkolorCena > 0 && product.wariant == 'M'" style="">
                Mixkolor: <b>{{ mixkolorCena }} zł </b>
              </p>
              <p v-if="mixkolorCena > 0 && product.wariant == 'MB'" style="">
                MixBiKolor: <b>{{ mixkolorCena }} zł </b>
              </p>
              <p v-if="product.wariant == 'B' && bikolorCena > 0" style="">
                Bikolor: <span style="font-weight: bold">{{ bikolorCena }} zł</span>
              </p>
              <p v-if="product.automatyka == 'B'" style="">System biometryczny: <span style="font-weight: bold">3960 zł</span></p>
              <p v-if="product.automatyka == 'K'" style="">System kodowy: <span style="font-weight: bold">3630 zł</span></p>
              <p v-if="product.automatyka == 'Z'" style="">System zbliżeniowy: <span style="font-weight: bold">3630 zł</span></p>
              <p v-if="czylamele" style="">
                Lamele: <span style="font-weight: bold">{{ CenaLamele }} zł</span>
              </p>

              <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal górny: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal lewy: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr == 'D1N08'" style="margin-left: 2px;">
                Portal prawy: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
              </p>

              <p v-if="CenaNaswietlaG > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle górne: <span style="font-weight: bold">{{ CenaNaswietlaG }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB1 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle lewe: <span style="font-weight: bold">{{ CenaNaswietlaNB1 }} zł</span>
              </p>
              <p v-if="CenaNaswietlaNB2 > 0 && activeTyp.artnr != 'D1N08'" style="margin-left: 2px;">
                Naświetle prawe: <span style="font-weight: bold">{{ CenaNaswietlaNB2 }} zł</span>
              </p>
              <!-- <p style="padding-top: 16px;border-top: 1px solid lightgray;margin-top: 15px;">
                    Ceny podane w konfiguratorze są cenami sugerowanymi i nie
                    są wiążącymi w punktach dystrybucji. Podane ceny są cenami
                    netto, do których należy doliczyć 8% VAT lub 23% VAT.</p> -->
            </div>
            <podsumowanie cenamobile></podsumowanie>
          </div>
        </section>

        <!-- #podsumowanie -->
        <section>
          <!-- <customimagebutton></customimagebutton> -->
          <!-- <prezenter :mobile="256.25/122*(widthtc/1025)*(heightc/2080)"></prezenter> -->
          <pdf column="columns pt-0" przycisk="przycisk2" />
        </section>
        <!-- <div class="columns" style="display: flex">
          <form id="gk" action="https://wiked.pl/gdzie-kupic/" method="GET" target="_blank">
            <input type="hidden" name="konf" value="1" />
            <span @click="konf" class="przycisk2">Zapisz PDF i znajdz najbliższy salon</span>
          </form>
          <span @click="generateReport()" class="przycisk2">Zapisz PDF</span>
        </div> -->
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
    if (window.location.href.length > 36) {
    }
  },
  data() {
    return {};
  },
  methods: {
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
#mobile {
  /* width: 360px; */
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
}
</style>
<style scoped>
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
.mobilewiz {
  /* flex: 1; */

  /* background: #8fcc25; */
  /* padding: 15px; */
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
.last {
  display: flex;
  flex-direction: row !important;
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
  font-size: 32px;
  line-height: 44px;

  color: #4e4e4e;
}
@media screen and (max-width: 992px) {
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: unset;
    height: 101px;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
  }
  .card img {
    height: 54px;
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
.bg-success{background: #8fcc25 !important;}
</style>
