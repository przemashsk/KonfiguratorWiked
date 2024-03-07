<template>
<div>
    <transition-group name="test" tag="div" v-show="activeTab != 'Podsumowanie'" class="p-5 q o">
        <div :key="'seria'" id="Seria" class="" v-show="activeTab == 'Seria'">
            <div>
                <p class="scrollerheading">Seria</p>
                <scroller :scrollerdata="seria.dane" :attr="'seria'" :folder="'serie'" :col="'5'"></scroller>
            </div>
            <div onclick="document.getElementById('info').style.display='none'" id="info" v-if="['60'].indexOf(product.seria) >= 0" class="alert alert-success" role="alert">
                <b>Drzwi wejściowe do mieszkań</b> z linii PROTECT.<br />
                Zapewnią ciszę, uchronią przed włamaniem i pożarem. <br />
                Wybierz jedną z 4 opcji.
            </div>
            <!-- <div onclick="document.getElementById('info').style.display='none'"  id="info" v-if="['60'].indexOf(product.seria) >= 0" class="alert alert-success" role="alert">
          Drzwi Protect zapewniają wysoką ochronę na różnorodne czynniki zewnętrzne. Specjalistyczna konstrukcja drzwi oraz wysokie wymagania techniczno-prawne zakładają brak możliwości stosowania przeszkleń w tej linii drzwi.
        </div> -->

            <div v-if="['60'].indexOf(product.seria) >= 0">
                <p class="scrollerheading">Opcja</p>
                <scroller :scrollerdata="opcja.dane" :attr="'opcja'" :folder="'opcje'" :col="'4'"></scroller>
            </div>

        </div>

        <div id="Typ" :key="'at'" class="" v-show="activeTab == 'Typ'">
            <div v-if="['20', '30', '22', '32'].indexOf(product.seria) >= 0">
                <p id="typ" class="scrollerheading">Typ</p>
                <scroller :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheiten'" :col="'5'" :ext="'png'"></scroller>
            </div>

            <div v-if="['60'].indexOf(product.seria) >= 0">
                <p id="typ" class="scrollerheading">Typ</p>
                <scroller :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheitenp'" :col="'5'" :ext="'png'"></scroller>
            </div>

            <div v-if="['21', '31', '41', '661'].indexOf(product.seria) >= 0">
                <p id="typ" class="scrollerheading">Typ</p>
                <scroller :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheiten'" :col="'5'" :ext="'png'"></scroller>
            </div>

            <div v-if="['D1N01', 'D1F01', 'D1N03', 'D1N05', 'D1N07'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">Szerokość naświetla lewego<i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></p>
                <scroller :scrollerdata="wysokosci.dane" :attr="'szerokoscnb1'" :noimage="true" :col="'5'"></scroller>
            </div>

            <div v-if="['D1N02', 'D1N03', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">Szerokość naświetla prawego<i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></p>
                <scroller :scrollerdata="wysokosci.dane" :attr="'szerokoscnb2'" :noimage="true" :col="'5'"></scroller>
            </div>

            <div v-if="['D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">Wysokość naświetla górnego<i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i></p>
                <scroller :scrollerdata="wysokosci.dane" :attr="'wysokoscng'" :noimage="true" :col="'5'"></scroller>
            </div>

            <div v-if="['D1N08'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">
                    Szerokość portalu lewego
                    <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
                </p>
                <div class="slidecontainer"></div>
                <scroller :scrollerdata="wysokoscip.dane" :noimage="true" :col="'5'" :attr="'szerokoscnb1'"></scroller>
            </div>

            <div v-if="['D1N08'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">
                    Szerokość portalu prawego
                    <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
                </p>
                <scroller :scrollerdata="wysokoscip.dane" :attr="'szerokoscnb2'" :noimage="true" :col="'5'"></scroller>
            </div>

            <div v-if="['D1N08'].indexOf(product.typ) >= 0">
                <p class="scrollerheading">
                    Wysokość portalu górnego
                    <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
                </p>
                <scroller :scrollerdata="wysokoscipg.dane" :attr="'wysokoscng'" :noimage="true" :col="'5'"></scroller>
            </div>
        </div>

        <div id="Model" :key="'a'" class="" v-show="activeTab == 'Model'">
            <div v-if="$store.state.product.seria != '60'">
                <p :key="'b'" class="scrollerheading">Kolekcja</p>
                <scroller :key="'c'" :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" :col="'5'"></scroller>
            </div>
            <p :key="'d'" class="scrollerheading">Wzór</p>
            <scroller v-if="$store.state.product.seria != '60'" :key="'e'" :attr="'wzor'" :folder="'wzory'" :scrollerdata="wzorFilter" :col="'5'"></scroller>
            <scroller v-if="$store.state.product.seria == '60'" :key="'e'" :attr="'wzor'" :folder="'wzoryprotect'" :scrollerdata="wzorFilter" :col="'5'"></scroller>
        </div>

        <div id="Kolor" :key="'l'" class="" v-if="activeTab == 'Kolor'">
            <p class="scrollerheading">Wariant koloru:</p>
            <scroller :attr="'wariant'" :noimage="true" :scrollerdata="wariantFilter2" :col="'5'"></scroller>

            <div id="drzwi" v-if="product.wariant == 'S'">
                <p class="scrollerheading">Kolor</p>
                <scroller :attr="'kolor1typ'" :noimage="true" :scrollerdata="kolor3typFilter" :col="'4'"></scroller>
                <scroller :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'"></scroller>
            </div>

            <!-- golebica -->
            <div class="termo" v-if="product.wzor == '51' || product.wzor == '52'">
                <p class="scrollerheading">Kolor dodatkowy</p>
                <scroller :attr="'kolor7typ'" :noimage="true" :scrollerdata="kolor7typFilter" :col="'4'"></scroller>
                <scroller :attr="'kolor7'" :folder="'okleiny'" :scrollerdata="kolorFilter7" :col="'5'"></scroller>
            </div>

            <div id="drzwi" v-if="product.wariant == 'B' || product.wariant == 'MB'">
                <!-- oscieznica -->
                <div class="termo" v-if="product.seria.indexOf('0') >= 0">
                    <p class="scrollerheading">Kolor ościeżnicy</p>
                    <scroller :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'"></scroller>
                    <scroller :attr="'kolor6'" :folder="'okleiny'" :scrollerdata="kolorFilter6" :col="'5'"></scroller>
                </div>

                <!-- oscieznica termo-->
                <div class="termo" v-if="product.seria.indexOf('0') == -1">
                    <p class="scrollerheading">Kolor ościeżnicy zewnętrzny</p>
                    <scroller :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'"></scroller>
                    <scroller :attr="'kolor6'" :folder="'okleiny'" :scrollerdata="kolorFilter6" :col="'5'"></scroller>
                    <p class="scrollerheading">Kolor ościeżnicy wewnętrzny</p>
                    <scroller :attr="'kolor5typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'"></scroller>
                    <scroller :attr="'kolor5'" :folder="'okleiny'" :scrollerdata="kolorFilter5" :col="'5'"></scroller>
                </div>
                <!-- skrzydło-->
                <div>
                    <div v-if="this.activeModel.typ != 'MG'">
                        <p class="scrollerheading">Kolor skrzydła zewnętrzny</p>
                        <scroller :attr="'kolor1typ'" :noimage="true" :scrollerdata="kolor3typFilter" :col="'4'"></scroller>
                        <scroller :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'"></scroller>
                    </div>
                    <p class="scrollerheading">Kolor skrzydła wewnętrzny</p>
                    <scroller :attr="'kolor2typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'"></scroller>
                    <scroller :attr="'kolor2'" :folder="'okleiny'" :scrollerdata="kolorFilter2" :col="'5'"></scroller>
                </div>
            </div>

            <!-- <p class="scrollerheading">Typ koloru:</p> -->

            <!-- oscieznica -->

            <!-- <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1">Kolor ościeżnicy zewnętrzny</p>
        <scroller key="fghjklkb" :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1"></scroller>
        <scroller :attr="'kolor6'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" :folder="'okleiny'" :scrollerdata="kolorFilter6" :col="'5'"></scroller>

        <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1">Kolor ościeżnicy</p>
        <scroller key="fghjklkb" :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolortypFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1"></scroller>
        <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1">Kolor ościeżnicy wewnętrzny</p>
        <scroller key="kbejn" :attr="'kolor5typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1"></scroller>
        <scroller :attr="'kolor6'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1" :folder="'okleiny'" :scrollerdata="kolorFilter6" :col="'5'"></scroller>
        <scroller :attr="'kolor5'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" :folder="'okleiny'" :scrollerdata="kolorFilter5" :col="'5'"></scroller> -->

            <!-- skrzydlo -->

            <!-- <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB')">Kolor zewnętrzny</p> -->
            <div v-if="product.wariant == 'M'">
                <p class="scrollerheading" v-if="product.wariant == 'M'">Kolor główny</p>
                <scroller :attr="'kolor1typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'"></scroller>
                <scroller :attr="'kolor'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'"></scroller>
                <p :key="'2'" style="font-weight: bold" v-if="product.wariant == 'M'">Kolor dodatkowy</p>
                <scroller :key="'3'" :attr="'mixz'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" v-if="product.wariant == 'M'"></scroller>
            </div>
            <!-- <p class="scrollerheading" v-if="product.wariant == 'M'">Kolor główny</p>
        <p class="scrollerheading" v-if="product.wariant == 'S'">Kolor</p> -->

            <!-- bikolor -->
            <!-- <transition-group id="kol" :key="'asdf'" name="test" tag="div">
          <p :key="'1'" style="font-weight: bold" v-if="product.wariant == 'B' || product.wariant == 'MB'">Kolor wewnętrzny</p>
          <p :key="'2'" style="font-weight: bold" v-if="product.wariant == 'M'">Kolor dodatkowy</p>
          <scroller :key="'3'" :attr="'mixz'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" v-if="product.wariant == 'M'"></scroller>

          <scroller key="fghjk" :attr="'kolor2typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="product.wariant == 'B' || product.wariant == 'MB'"></scroller>
          <scroller :key="'3'" :attr="'kolor2'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'" v-if="product.wariant == 'B' || product.wariant == 'MB'"></scroller>
        </transition-group> -->

            <!-- mixbikolor -->
            <p class="scrollerheading" v-if="product.wariant == 'MB'">Kolor dodatkowy zewnętrzny</p>
            <scroller :attr="'mixz'" v-if="product.wariant == 'MB'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'"></scroller>
            <p class="scrollerheading" v-if="product.wariant == 'MB'">Kolor dodatkowy wewnętrzny</p>
            <scroller :attr="'mixw'" v-if="product.wariant == 'MB'" :folder="'okleiny'" :scrollerdata="kolorFilter" :col="'5'"></scroller>

            <!-- portal -->
            <transition-group id="kol" :key="'asdfff'" name="test" tag="div" v-if="product.seria == '60' && product.typ != 'D1'">
                <p :key="'1'" style="font-weight: bold">Kolor portalu</p>
                <scroller :key="'4'" :attr="'kolor3'" :folder="'okleiny'" :scrollerdata="kolorFilterp" :col="'5'" v-if="product.seria == '60'"></scroller>
            </transition-group>
        </div>

        <div id="Szyba" :key="'o'" class="" v-show="activeTab == 'Szyba'">
            <p class="scrollerheading" v-if="$store.state.product.seria != '60'">
                <span class="scrollerheading" v-if="$store.state.product.seria != '60' && ($store.state.product.wzor == '47A' || $store.state.product.wzor == '47' || $store.state.product.wzor == '48' || $store.state.product.wzor == '50') && $store.state.product.szyba != '16' && $store.state.product.szyba != '25'">Aplikacja:</span>
                <span class="scrollerheading" v-else>Przeszklenie:</span>
            </p>
            <scroller :attr="'szyba'" :folder="'Przeszklenia'" :scrollerdata="szybyFilter" :col="'5'" v-if="$store.state.product.seria != '60'"></scroller>
            <!-- baza -->
            <p class="scrollerheading" v-if="($store.state.product.wzor == '47A' || $store.state.product.wzor == '47' || $store.state.product.wzor == '48' || $store.state.product.wzor == '50') && $store.state.product.szyba != '16' && $store.state.product.szyba != '25'">Baza:</p>
            <scroller :attr="'baza'" :folder="'baza'" :scrollerdata="baza.dane" :col="'5'" v-if="($store.state.product.wzor == '47A' || $store.state.product.wzor == '47' || $store.state.product.wzor == '48' || $store.state.product.wzor == '50') && $store.state.product.szyba != '16' && $store.state.product.szyba != '25'"></scroller>

            <transition-group :key="'asdfgs'" name="test" tag="div">
                <div :key="'hj'" v-if="['D1N01', 'D1N02', 'D1N03', 'D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
                    <!-- <p id="pn" class="scrollerheading">Przeszklenie naświetli:</p> -->
                    <scroller v-if="1 > 0 != 'g'" :attr="'szyba2'" :folder="'naswietla'" :scrollerdata="szybyFilter2" :col="'5'" label></scroller>
                </div>
            </transition-group>

            <transition-group :key="'asdfg'" name="test" tag="div">
                <p id="si pn" :key="'ffh'" class="scrollerheading" v-if="this.activeModel.typ == 'GF'">
                    Strona Aplikacji
                </p>
                <p id="si pn" :key="'ff'" class="scrollerheading" v-else v-show="product.szyba == '00' && showInox && this.activeModel.typ != 'GD' && this.activeModel.typ != 'GF' && this.activeModel.typ != 'GL'">
                    Strona ramki
                </p>
                
                <!-- <scroller :key="'h'" :attr="'inoxstrona'" :col="'5'" :scrollerdata="inoxstrona.dane" :noimage="true" v-show="this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX'" v-if="product.szyba == '00'  && product.seria!='60'"></scroller> -->
                <scroller :key="'h'" :attr="'inoxstrona'" :col="'5'" :scrollerdata="inoxstrona.dane" :noimage="true" v-show="showInox" v-if="product.szyba == '00' && product.seria != '60' && this.activeModel.typ != 'FL' && this.activeModel.typ != 'GF'"></scroller>
                <scroller :key="'h2'" :attr="'inoxstrona'" :col="'5'" :scrollerdata="inoxstrona.dane.filter((el) => el.artnr == '2')" :noimage="true" v-if="product.wzor == 'GF6'"></scroller>
                <scroller :key="'h2'" :attr="'inoxstrona'" :col="'5'" :scrollerdata="inoxstrona.dane.filter((el) => el.artnr != '1')" :noimage="true" v-show="this.activeModel.typ == 'FI' || this.activeModel.typ == 'GF' || showInox || this.activeModel.typ == 'INOX'" v-if="product.wzor != 'GF6' && product.szyba == '00' && (product.seria == '60' || this.activeModel.typ == 'FL' || this.activeModel.typ == 'GF')"></scroller>
                <!-- <scroller :key="'h3'" :attr="'inoxstrona'" :col="'5'" :scrollerdata="inoxdwustr.dane" :noimage="true" v-show="showInox && this.activeModel.typ != 'GD'" v-if="(product.szyba != '00')"></scroller> -->
                <p :key="'ii'" class="scrollerheading" v-show="this.activeModel.typ != 'GF' && this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')">
                    Kolor ramki
                </p>
                <p :key="'ih'" class="scrollerheading" v-show="this.activeModel.typ == 'GF'">
                    Aplikacja
                </p>
                <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter2" :folder="'koloryakc'" :col="'5'" v-show="this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')"></scroller>
                <!-- <p  :key="'ii'" class="scrollerheading"> Kolor ramki</p>
        <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'"  :col="'5'"></scroller> -->
            </transition-group>
        </div>

        <div id="Okucia" :key="'p'" class="" v-show="activeTab == 'Okucia'">
            <p class="scrollerheading">Kierunek otwierania:</p>
            <scroller :attr="'kierunek'" :scrollerdata="kierunekfilter" :folder="'kotw'" :col="'5'" :turnable="false"></scroller>

            <p id="so" class="scrollerheading">Sposób otwierania:</p>
            <scroller :attr="'sposobotw'" :scrollerdata="sposobotwfilter" :folder="'sposobyotw'" :col="'5'"></scroller>       

        </div>

        <div id="klamka" :key="'akck'" class="" v-show="activeTab == 'Klamka'">
          <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'">
                <p id="kl" class="scrollerheading"><span>Rodzaj</span></p>
                <scroller :attr="'pochwyty'" :noimage="true" :scrollerdata="pochwyty.dane" :folder="'Klamki'" :col="'5'"></scroller>
            </div>  

          <p id="kl" class="scrollerheading"><span v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'">Pochwyt</span><span v-else>Klamka</span></p>
            <scroller :attr="'klamka'" :scrollerdata="klamkifilter2" :folder="'Klamki'" :col="'5'"></scroller>

            
          <p class="scrollerheading">Kolor:</p>
          <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" :col="'5'"></scroller>
          <p class="scrollerheading" v-if="product.klamka.indexOf('SD') > 0 || product.klamka.indexOf('SR') > 0 || product.klamka.indexOf('SS') > 0">Kolor dodatkowy:</p>
          <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SR') > 0" :folder="'okleiny'" :scrollerdata="kolor.dane.filter((el) => el.typ == 'RAL')" :col="'5'"></scroller>
          <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SD') > 0" :folder="'okleiny'" :scrollerdata="kolor.dane.filter((el) => el.typ == 'DEK')" :col="'5'"></scroller>
          <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SS') > 0" :folder="'koloryakc'" :scrollerdata="inoxkolor2.dane" :col="'5'"></scroller>
        </div>

        <div id="samozamykacz" :key="'akc'" class="" v-show="activeTab == 'Akcesoria'">
            <p class="scrollerheading">Samozamykacz</p>
            <scroller :scrollerdata="samozamykaczFilter" :attr="'samozamykacz'" :folder="'samozamykacz'" :col="'5'"></scroller>
            <transition-group :key="'asdff'" name="test" tag="div" v-if="product.samozamykacz != '-' && product.samozamykacz != 'W'">
                <p :key="'a'" class="scrollerheading" v-if="product.samozamykacz != '-'">Kolor samozamykacza</p>
                <scroller :key="'b'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" v-if="product.samozamykacz != '-'" :attr="'samozamykaczKolor'" :col="'5'"></scroller>
            </transition-group>

            <!-- <p class="scrollerheading " >Wizjer</p> -->
            <!-- <scroller :scrollerdata="wizjer.dane" :attr="'wizjer'" :folder="'wizjer'" :col="'5'"></scroller> -->
            <div v-if="czylamele">
                <p class="scrollerheading" :noimage="true">Lamele</p>
                <scroller :scrollerdata="elektrozaczep.dane" :attr="'lamele'" :noimage="true" :col="'5'"></scroller>
                <div v-if="this.product.lamele == 'J'">
                    <p class="scrollerheading" :noimage="true">Ilość</p>
                    <scroller :scrollerdata="lameleiloscdane.dane" :attr="'lameleilosc'" :noimage="true" :col="'5'"></scroller>
                    <p class="scrollerheading">Kolor</p>
                    <scroller :attr="'kolor7'" :folder="'okleiny'" :scrollerdata="kolorFilter7" :col="'5'"></scroller>
                </div>
            </div>
            <div v-if="$store.state.product.seria != '60'">
                <p class="scrollerheading" :noimage="true">Elektrozaczep</p>
                <scroller :scrollerdata="elektrozaczep.dane" :attr="'elektrozaczep'" :noimage="true" :col="'5'"></scroller>
            </div>
            <!-- <div v-if="activeOpcja.artnr != 'rwrc3ei30'"> -->
            <div v-if="$store.state.product.opcja == 'rwei30' && $store.state.product.seria == '60'">
                <p class="scrollerheading" :noimage="true">Elektrozaczep awersyjny</p>
                <scroller :scrollerdata="elektrozaczepr.dane" :attr="'elektrozaczepr'" :noimage="true" :col="'5'"></scroller>
            </div>

            <!-- <div v-if="activeModel.typ != 'GD' && activeModel.typ != 'GL' && activeModel.typ != 'GF'">
                <p class="scrollerheading" v-if="activeModel.typ != 'FI'">Kopniak</p>
                <scroller :scrollerdata="KOPNIAKFilter" :attr="'kopniak'" :folder="'kopniak'" :noimage="true" :col="'5'" v-if="activeModel.typ != 'FI'"></scroller>
                <div v-if="this.product.kopniak != '-'">
                    <p class="scrollerheading" v-if="activeModel.typ != 'FI'">Kolor kopniaka</p>
                    <scroller :key="'k1'" :attr="'kopniakkolor'" :scrollerdata="KOPNIAKkolorFilter" :folder="'koloryakc'" :col="'5'"></scroller>
                </div>
            </div> -->
            <div v-if="this.product.sposobotw != 'KK'">
                <p class="scrollerheading" v-if="$store.state.product.seria == '41'">System automatyki</p>
                <scroller :scrollerdata="automatyka.dane" :attr="'automatyka'" :folder="'automatyka'" :col="'5'" v-if="$store.state.product.seria == '41'"></scroller>
            </div>
            <div v-if="$store.state.product.seria == '60' && ($store.state.product.opcja == 'rwei30' || $store.state.product.opcja == 'rwrc3ei30')">
                <p class="scrollerheading">Opcja przeciwdymowa</p>
                <scroller :scrollerdata="dym.dane" :attr="'dym'" :noimage="true" :folder="'automatyka'" :col="'5'"></scroller>
            </div>
        </div>
    </transition-group>

    <div id="Podsumowanie" :key="'r'" class="nomobile" v-show="activeTab == 'Podsumowanie'" style="max-width: min-content;margin-left: auto;margin-right: auto;min-width: 440px;">
        <div id="pod" style="padding: 0 0 75px 0">
            <!-- <customimagebutton></customimagebutton>
      <myselect style="margin-right:1em"></myselect> -->
        </div>
        <prezenter></prezenter>

        <div id="opcje2" style="display: none;justify-content: center;justify-content: center;display: flex;position: relative;bottom: 104px;margin-bottom: -87px;background: whitesmoke;width: fit-content;margin-left: auto;margin-right: auto;border-radius: 10px;-webkit-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);-moz-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);">
            <div id="opcje" style="display: inline-flex;width: 110px;height: 110px;padding: 10px;" class="myoption" v-bind:key="index + 'a'" v-for="(elem, index) in backgrounds" @click="setActiveBackground(elem)">
                <!--Tło {{index+1}} --><img onclick="document.getElementById('opcje2').style.display = 'none'" class="img-fluid" :src="elem.url" />
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Scroller from "@/components/Scroller.vue";
import Prezenter from "@/components/Prezenter.vue";
import Myselect from "@/components/Myselect.vue";
import Customimagebutton from "@/components/customimagebutton.vue";

import {
    mapState
} from "vuex";
import {
    mapGetters
} from "vuex";

export default {
    props: ["left", "top", "width", "height", "back", "turnable"],
    components: {
        Scroller,
        Prezenter,
        Myselect,
        Customimagebutton
    },
    watch: {
        "product.pochwyty": function () {
            this.$store.state.product.dlugosci = dlugosci[0];
        },
        "product.seria": function () {
            this.$store.state.product.szerokoscnb1 = 300;
            this.$store.state.product.szerokoscnb2 = 300;
            this.$store.state.product.wysokoscng = 300;
            this.$store.state.product.typ = "D1";
            this.$store.state.product.szyba = this.szybyFilter[0].artnr;
            if (this.product.seria == "60") {
              this.$store.state.product.sposobotw = "KK";
            }
            this.$store.state.product.wariant = "S";
            this.$store.state.product.opcja = this.opcja.dane[0].artnr;
            this.$store.state.product.typ = this.activeTyp2[0].artnr;
            this.$store.state.product.samozamykacz = this.samozamykaczFilter[0].artnr;
            if (this.klamkifilter2.length > 0) {
              // this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            }
            // this.$store.state.product.kolor = this.kolorFilter[0].artnr;
            // this.$store.state.product.kolor2 = this.kolorFilter[0].artnr;
            this.$store.state.product.kolor3 = this.kolorFilter[0].artnr;
            this.$store.state.product.kolor4 = this.kolorFilter[0].artnr;
            this.$store.state.product.kolor5 = this.kolorFilter[0].artnr;
            this.$store.state.product.kolor6 = this.kolorFilter[0].artnr;
            this.$store.state.product.elektrozaczepr = "N";
            if (this.product.seria == "41") {
              this.$store.state.product.wzor = "01";
            }
            if (this.product.sposobotw == "KK") {
              this.$store.state.product.automatyka = "-";
            }
        },
        "product.opcja": function () {
            this.$store.state.product.sposobotw = "KK";
            this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            if (this.$store.state.product.seria == "60" && (this.$store.state.product.opcja == "rwei30" || this.$store.state.product.opcja == "rwrc3ei30")) {
              this.$store.state.product.inoxkolor = this.$store.getters.ramkakolorfilter[0].artnr;
            }
            this.$store.state.product.samozamykacz = this.samozamykaczFilter[0].artnr;
            this.$store.state.product.sposobotw = "KK";
            if (this.$store.state.product.opcja != "rw" && this.$store.state.product.seria == "60") {
              this.$store.state.product.klamka = "VerdanaZ";
            } else {
              this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            }
        },
        "product.wariant": function () {
            this.$store.state.product.kolor = this.kolorFilter[0].artnr;
            if (this.$store.state.product.wariant == "S") {
              this.$store.state.product.kolor1typ = this.kolor3typFilter[0].artnr;
              this.$store.state.product.kolor2typ = "DEK";
              this.$store.state.product.kolor5typ = "DEK";
              this.$store.state.product.kolor6typ = "DEK";
              this.$store.state.product.kolor2 = this.$store.state.product.kolor;
              this.$store.state.product.kolor6 = this.$store.state.product.kolor;
              this.$store.state.product.kolor5 = this.$store.state.product.kolor;
              this.$store.state.product.mixz = this.$store.state.product.kolor;
              this.$store.state.product.mixw = this.$store.state.product.kolor;
            }
        },
        "product.typ": function () {
            this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
            this.$store.state.product.szerokoscnb1 = 300;
            this.$store.state.product.szerokoscnb2 = 300;
            this.$store.state.product.wysokoscng = 300;
        },

        "product.szerokoscnb1": function () {
            this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
        },
        "product.szerokoscnb2": function () {
            this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
        },
        "product.wysokoscng": function () {
            this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
        },
        "product.szyba": function () {
            if (this.activeModel.typ == "PCV" && this.$store.state.product.szyba != "00") {
              this.$store.state.product.kolor = this.kolorFilter[0].artnr;
              this.$store.state.product.kolor2 = this.kolorFilter[0].artnr;
              this.$store.state.product.kolor3 = this.kolorFilter[0].artnr;
              this.$store.state.product.kolor4 = this.kolorFilter[0].artnr;
            }
            if (this.activeModel.typ == "GD") {
            } else if (this.product.wzor == "GF6") {
              this.$store.state.product.inoxstrona = this.inoxstrona.dane[2].artnr;
            } else {
              this.$store.state.product.inoxstrona = this.inoxstrona.dane[0].artnr;
            }

            if (this.product.seria == "60") {
              this.$store.state.product.szyba = this.szybyFilter[0].artnr;
              this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
            }
        },
        "product.wzor": function () {
          if (this.product.wzor == "G1A") {
            this.$store.state.product.kolor1typ = "SKY";
            this.$store.state.product.kolor = "6021";
            this.$store.state.product.klamka = "Pock180";
            this.$store.state.product.klamkakolor = "10304";
          }
          if (this.product.wzor == "01") {
            this.$store.state.product.kolor1typ = "RAL";
            this.$store.state.product.kolor = "6021";
            this.$store.state.product.klamka = "Pock180";
            this.$store.state.product.klamkakolor = "10304";
          }
          if (this.product.wzor == "FC") {
            this.$store.state.product.wariant = "M";
            this.$store.state.product.kolor1typ = "DEK";
            this.$store.state.product.kolor = "18";
            this.$store.state.product.kolor2typ = "DEK";
            this.$store.state.product.kolor2 = "15";
            this.$store.state.product.klamka = "Pock180";
            this.$store.state.product.klamkakolor = "10304";
          }
          if (this.product.wzor == "FD") {
            this.$store.state.product.kolor1typ = "DEK";
            this.$store.state.product.kolor = "18";
            this.$store.state.product.klamka = "Pock45";
            this.$store.state.product.klamkakolor = "10301";
          }
          if (this.product.wzor == "FE") {
            this.$store.state.product.seria = "20";
            this.$store.state.product.kolor1typ = "DEK";
            this.$store.state.product.kolor = "18";
            this.$store.state.product.sposobotw = "KK";
            this.$store.state.product.klamka = "Tahoma";
            this.$store.state.product.klamkakolor = "10304";
          }
          if (this.product.wzor == "30") {
            this.$store.state.product.kolor1typ = "SKY";
            this.$store.state.product.kolor = "C010";
            this.$store.state.product.klamka = "P090SS90BL";
            this.$store.state.product.klamkakolor = "1";
            this.$store.state.product.szyba = "10";
            this.$store.state.product.inoxkolor = "1";
          }
          if (this.product.wzor == "FB") {
            this.$store.state.product.kolor1typ = "DEK";
            this.$store.state.product.kolor = "15";
            this.$store.state.product.klamka = "P180p";
            this.$store.state.product.klamkakolor = "10304";
            this.$store.state.product.szyba = "10";
            this.$store.state.product.inoxkolor = "10301";
          }
          if (this.product.wzor == "GF7") {
            this.$store.state.product.kolor1typ = "SKY";
            this.$store.state.product.kolor = "C006";
            this.$store.state.product.klamka = "Pock45BLps";
            this.$store.state.product.klamkakolor = "10304";
            this.$store.state.product.szyba = "99";
            this.$store.state.product.inoxkolor = "30";
          }
          if (this.product.wzor == "GF6") {
            this.$store.state.product.kolor1typ = "SKY";
            this.$store.state.product.kolor = "C006";
            this.$store.state.product.klamka = "Pock45BLps";
            this.$store.state.product.klamkakolor = "10304";
            this.$store.state.product.szyba = "99";
            this.$store.state.product.inoxkolor = "30";
          }
          if (this.product.wzor == "48") {
            this.$store.state.product.seria = "20";
            this.$store.state.product.kolor1typ = "SKY";
            this.$store.state.product.kolor = "C006";
            this.$store.state.product.klamka = "P180p";
            this.$store.state.product.klamkakolor = "10304";
            this.$store.state.product.szyba = "10";
            this.$store.state.product.inoxkolor = "10304";
          }
            // this.$store.state.product.szyba2 = this.szybyFilter2[0].artnr;
            // this.$store.state.product.samozamykacz = this.samozamykaczFilter[0].artnr;
            // this.$store.state.product.kolor1typ = this.kolor3typFilter[0].artnr;
            // this.$store.state.product.sposobotw = this.sposobotwfilter[0].artnr;
            // this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            // this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            // this.$store.state.product.szyba = this.szybyFilter[0].artnr;
            // this.$store.state.product.kolor = this.kolorFilter[0].artnr;

            // this.$store.state.product.kopniak = this.kopniak.dane[0].artnr;
            // this.$store.state.product.inoxkolor = this.$store.getters.ramkakolorfilter[0].artnr;
            // this.$store.state.product.wariant = "S";
            // if (this.product.wzor == "GF6") {
            //   this.$store.state.product.inoxstrona = this.inoxstrona.dane[2].artnr;
            // } else {
            //   this.$store.state.product.inoxstrona = this.inoxstrona.dane[0].artnr;
            // }
        },

        "product.sposobotw": function () {
            this.$store.state.product.pochwyty = "";
            // this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            // this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            if (this.product.sposobotw == "KK") {
              this.$store.state.product.automatyka = "-";
            }
        },
        "product.kolor1typ": function () {
            // this.$store.state.product.kolor = this.kolorFilter[0].artnr;
            if (this.$store.state.product.wariant == "S") {
              this.$store.state.product.kolor2typ = this.$store.state.product.kolor1typ;
              this.$store.state.product.kolor5typ = this.$store.state.product.kolor1typ;
              this.$store.state.product.kolor6typ = this.$store.state.product.kolor1typ;
              this.$store.state.product.kolor2 = this.$store.state.product.kolor;
              this.$store.state.product.kolor6 = this.$store.state.product.kolor;
              this.$store.state.product.kolor5 = this.$store.state.product.kolor;
              this.$store.state.product.mixz = this.$store.state.product.kolor;
              this.$store.state.product.mixw = this.$store.state.product.kolor;
            }
        },
        "product.kolor2typ": function () {
            this.$store.state.product.kolor2 = this.kolorFilter2[0].artnr;
        },
        "product.kolor3typ": function () {
            this.$store.state.product.kolor3 = this.kolorFilter3[0].artnr;
        },
        "product.kolor4typ": function () {
            this.$store.state.product.kolor4 = this.kolorFilter4[0].artnr;
        },
        "product.kolor5typ": function () {
            this.$store.state.product.kolor5 = this.kolorFilter5[0].artnr;
        },
        "product.kolor6typ": function () {
            this.$store.state.product.kolor6 = this.kolorFilter6[0].artnr;
        },
        "product.kolor7typ": function () {
            this.$store.state.product.kolor7 = this.kolorFilter7[0].artnr;
        },
        "product.kolor": function () {
            if (this.$store.state.product.wariant == "S") {
              this.$store.state.product.kolor2 = this.$store.state.product.kolor;
              this.$store.state.product.kolor6 = this.$store.state.product.kolor;
              this.$store.state.product.kolor5 = this.$store.state.product.kolor;
              this.$store.state.product.mixz = this.$store.state.product.kolor;
              this.$store.state.product.mixw = this.$store.state.product.kolor;
            }
        },
        "product.kolor6": function () {
            if (this.$store.state.product.seria.indexOf("0") != -1) {
              this.$store.state.product.kolor5typ = this.$store.state.product.kolor6typ;
              this.$store.state.product.kolor5 = this.$store.state.product.kolor6;
            }
        },
        "product.samozamykacz": function (val) {
            this.$store.state.product.samozamykaczKolor = this.samkolorfilter[0].artnr;
            if (val == "-") {
              this.$store.state.product.samozamykaczKolor = "";
            }
        },
        "product.pochwyty": function () {
            if (this.klamkifilter2.length > 0) {
              this.$store.state.product.klamka = this.klamkifilter2[0].artnr;
            }
        },
        "product.klamka": function () {
            // if (this.$store.state.product.klamka.indexOf("SD") > 0) {
            //   this.$store.state.product.pochwyt2 = "06";
            // }
            // if (this.$store.state.product.klamka.indexOf("SR") > 0) {
            //   this.$store.state.product.pochwyt2 = "1003";
            // }
            // if (this.$store.state.product.klamka.indexOf("SS") > 0) {
            //   this.$store.state.product.pochwyt2 = "1";
            // }
            // if (this.activeModel.typ == "GD") {
            //   this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            // } else if (this.activeModel.typ == "INOX" || this.activeModel.typ == "FI") {
            //   this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            //   if (this.product.wzor == "44" || this.product.wzor == "44B") {
            //     this.$store.state.product.klamkakolor = this.$store.state.product.inoxkolor;
            //   }
            // } else if (this.activeModel.typ === "PCV") {
            //   this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            // }
            // if (this.$store.state.product.klamka.match(/x/)) {
            //   this.$store.state.product.elektrozaczep = "J";
            // } else {
            //   this.$store.state.product.elektrozaczep = "N";
            // }
            // if (this.product.wzor == "42" || this.product.wzor == "43A" || this.product.wzor == "43B" || this.product.wzor == "43C") {
            //   this.$store.state.product.klamkakolor = "10301";
            // } else if (this.product.wzor == "44B" && this.product.klamka == "Manitoba") {
            //   this.$store.state.product.klamkakolor = "10304";
            // } else if (this.product.klamka != "Manitoba") {
            //   this.$store.state.product.klamkakolor = this.klamkakolorfilter[0].artnr;
            // }
        },
        "product.inoxstrona": function (newval, val) {
            if (newval == "0" || newval == "") {
              return;
            } else {
              if (this.activeModel.typ != "FL") {
                this.$store.state.product.szyba = "00";
              }
            }
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
            wzorytablica2: "wzorytablica2",
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
        }),
        ...mapGetters({
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
            // klamkifilter: "klamkifilter",
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
            // ramkakolorfilter3: "ramkakolorfilter3",
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
            // szerokoscnb1: "szerokoscnb1",
            wysokosc: "wysokosc",
            activeinoxKolor: "activeinoxKolor",
            activeTyp: "activeTyp",
            activeModel: "activeModel",
            activeModel2: "activeModel2",
            activeTyp2: "activeTyp2",
        }),
    },
};
</script>

<style scoped>
/* #opcje2 {
    justify-content: center;
    display: flex;
    position: relative;
    bottom: 104px;
    margin-bottom: -87px;
    background: whitesmoke;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.75);
    box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.75);
} */
i.fa.fa-refresh:hover {
    transform: rotate(180deg);
    transition-duration: 1s;
}

/* .myoption {
    display: inline-flex;
    width: 110px;
    padding: 10px;
} */

em#dymek {
    position: relative;
    top: -17px;
    left: -10px;
    margin-bottom: -45px;
    display: none;
}

em#dymek2 {
    position: relative;
    top: -17px;
    left: -10px;
    margin-bottom: -45px;
    display: none;
}

em#dymek3 {
    position: relative;
    top: -17px;
    left: -10px;
    margin-bottom: -45px;
    display: none;
}

.dym {
    font-weight: normal;
    left: 19px;
    top: -14px;
    border-radius: 5px;
    padding: 10px;
    color: rgb(119, 119, 119);
    background-color: rgb(239, 239, 239);
    display: block;
    position: relative;
    line-height: 1.2;
    font-size: 12px;
}

.test-enter {
    opacity: 0;
    transition: 1s;
}

.test-enter-to {
    opacity: 1;
    transition: 1s;
}

.test-leave-to {
    opacity: 0;
    transition: 0s;
}

.scrollerheading {
    font-weight: bold;
    display: flex;
}
</style>
