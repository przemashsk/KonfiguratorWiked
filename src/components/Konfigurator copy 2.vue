<template>
  <div class="konfigurator">

    <!-- <div class="bottom">
      <img  v-show="product.inspiracja == 'tak'" src="images\konfigurator\buttons\zmien.png" class="klaudia" @click="handle('Inspiracje')" v-if="activeTab != 'Inspiracje'"/>
      <img src="images\konfigurator\buttons\zobacz.png" class="klaudia lewy" @click="handle('Podsumowanie')" />
    </div> -->
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" hidden>
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 80vmin;">
        <div class="modal-content">
          <button style="position: absolute;right: 7px;top: 0px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <img class="img img-fluid" src="images\konfigurator\duo\30, grafika powiększająca się.jpg" />
          <a
            class="btn btn-success"
            target="_blank"
            href="https://wiked.pl/gdzie-kupic/"
            style="background: rgb(149, 193, 31);
                  color: rgb(255, 255, 255);
                  border-radius: 8px;
                  position: absolute;
                  right: 8px;
                  top: 240px;
                  top: 28%;
                  outline: none;
                  border: none;
                  font-size: 15px;
                  font-size: .75em;
                  font-weight: 700;
                  font-family: Open Sans;
                  text-align: center;
                  width: 315px;
                  width: 42%;
                  "
            >W celu indywidualnej konfiguracji skontaktuj się z salonem sprzedaży</a
          >
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal25" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 133vmin;">
        <div class="modal-content">
          <button style="position: absolute;right: 7px;top: 0px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <img class="img img-fluid" src="images\konfigurator\duo\25.jpg" />
          <a
            class="btn btn-success"
            target="_blank"
            href="https://wiked.pl/gdzie-kupic/"
            style="    background: rgb(149, 193, 31);
    color: rgb(255, 255, 255);
    border-radius: 8px;
    position: absolute;
    right: 23px;
    top: 350px;
    outline: none;
    border: none;
    font-size: 15px;
    font-weight: 700;
    font-family: Open Sans;
    text-align: center;
    width: 307px;"
            >W celu indywidualnej konfiguracji skontaktuj się z salonem sprzedaży</a
          >
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal41" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 80vmin;">
        <div class="modal-content">
          <button style="position: absolute;right: 7px;top: 0px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <img class="img img-fluid" src="images\konfigurator\duo\41.jpg" />
          <a
            class="btn btn-success"
            target="_blank"
            href="https://wiked.pl/gdzie-kupic/"
            style="background: rgb(149, 193, 31);
                  color: rgb(255, 255, 255);
                  border-radius: 8px;
                  position: absolute;
                  right: 8px;
                  top: 240px;
                  outline: none;
                  border: none;
                  font-size: 15px;
                  font-weight: 700;
                  font-family: Open Sans;
                  text-align: center;
                  width: 315px;"
            >W celu indywidualnej konfiguracji skontaktuj się z salonem sprzedaży</a
          >
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal4122" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 80vmin;">
        <div class="modal-content">
          <button style="position: absolute;right: 7px;top: 0px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <img class="img img-fluid" src="images\konfigurator\duo\41.22.jpg" />
          <a
            class="btn btn-success"
            target="_blank"
            href="https://wiked.pl/gdzie-kupic/"
            style="background: rgb(149, 193, 31);
    color: rgb(255, 255, 255);
    border-radius: 8px;
    position: absolute;
    right: 8px;
    top: 382px;
    outline: none;
    border: none;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Open Sans';
    text-align: center;
    width: 322px;"
            >W celu indywidualnej konfiguracji skontaktuj się z salonem sprzedaży</a
          >
        </div>
      </div>
    </div>
    <transition-group name="test" tag="div" v-show="activeTab != 'Podsumowanie'" class="p-4 q o dafid">
      <div id="Inspiracja" :key="'sasa'" class="" v-show="activeTab == 'Inspiracje'" v-if="product.protect == 'blok'">
        <div class="wiersz2 mb-3">
          <div class="item" :class="product.inspiracjanr == 'P6' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/nowe/1.png" alt="" @click="product.inspiracjanr = 'P6'" /></div>
          <div class="item" :class="product.inspiracjanr == 'P5' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 43a.jpg" alt="" @click="product.inspiracjanr = 'P5'" /></div>
          <!-- <div class="item" :class="product.inspiracjanr == 'P2' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 1 (3).jpg" alt="" @click="product.inspiracjanr = 'P2'" /></div> -->
        </div>
        <div class="grid grid2 mb-3">
          <div class="item" :class="product.inspiracjanr == 'P1' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 1 (2).jpg" alt="" @click="product.inspiracjanr = 'P1'" /></div>
          <div class="item" :class="product.inspiracjanr == 'P2' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 1 (3).jpg" alt="" @click="product.inspiracjanr = 'P2'" /></div>
        </div>
        <div class="grid gridcustom2">
          <div class="item" :class="product.inspiracjanr == 'P4' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 43.jpg" alt="" @click="product.inspiracjanr = 'P4'" /></div>
          <div class="item" :class="product.inspiracjanr == 'P3' ? 'active' : ''"><img src="images/konfigurator/konf ins/PROTECTy inspiracje/Protect 1 z lamelami.jpg" alt="" @click="product.inspiracjanr = 'P3'" /></div>
        </div>
      </div>
      <div id="Inspiracja" :key="'sasa'" class="" v-show="activeTab == 'Inspiracje'" v-else>
        <div class="galeria2">
          <!-- bestsellery -->
          <div id="bestsellery" class="galeria" v-show="product.filtryinspiracjeitem == 'wszystkie' || product.filtryinspiracjeitem == 'bestsellery'">
            <div class="wiersz211">
              <div class="item" :class="product.inspiracjanr == 'b1' ? 'active' : ''"><img src="images\konfigurator\bestsellery\1.jpg" @click="product.inspiracjanr = 'b1'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b2' ? 'active' : ''"><img src="images\konfigurator\bestsellery\2.jpg" @click="product.inspiracjanr = 'b2'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b3' ? 'active' : ''"><img src="images\konfigurator\bestsellery\3.jpg" @click="product.inspiracjanr = 'b3'" /></div>              
            </div>
            
            <div class="wiersz11">
              <div class="item" :class="product.inspiracjanr == 'b4' ? 'active' : ''"><img src="images\konfigurator\bestsellery\4.jpg" @click="product.inspiracjanr = 'b4'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b5' ? 'active' : ''"><img src="images\konfigurator\bestsellery\5.jpg" @click="product.inspiracjanr = 'b5'" style="object-position: left;" /></div>              
            </div>
            
            <div class="wiersz111">
              <div class="item" :class="product.inspiracjanr == 'b6' ? 'active' : ''"><img src="images\konfigurator\bestsellery\6.jpg" @click="product.inspiracjanr = 'b6'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b7' ? 'active' : ''"><img src="images\konfigurator\bestsellery\7.jpg" @click="product.inspiracjanr = 'b7'" style="object-position: left;" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b8' ? 'active' : ''"><img src="images\konfigurator\bestsellery\8.jpg" @click="product.inspiracjanr = 'b8'" style="object-position: left;" /></div>              
            </div>
            
            <div class="wiersz324">
              <div class="item" :class="product.inspiracjanr == 'b9' ? 'active' : ''"><img src="images\konfigurator\bestsellery\9.jpg" @click="product.inspiracjanr = 'b9'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b10' ? 'active' : ''"><img src="images\konfigurator\bestsellery\10.jpg" @click="product.inspiracjanr = 'b10'" /></div>              
              <div class="item" :class="product.inspiracjanr == 'b11' ? 'active' : ''"><img src="images\konfigurator\bestsellery\11.jpg" @click="product.inspiracjanr = 'b11'" /></div>              
            </div>

          </div>
          <!-- tradycjonalisty -->
          <div id="tradycjonalisty" class="galeria" v-show="product.filtryinspiracjeitem == 'wszystkie' || product.filtryinspiracjeitem == 'tradycjonalisty'">
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 't1' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\50.jpg" @click="product.inspiracjanr = 't1'" /></div>
              <div class="item" :class="product.inspiracjanr == 't2' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\FI14.jpg" @click="product.inspiracjanr = 't2'" /></div>
            </div>
            <div class="grid grid2">
              <div class="item" :class="product.inspiracjanr == 't3' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\32.jpg" alt="" @click="product.inspiracjanr = 't3'" /></div>
              <div class="item" :class="product.inspiracjanr == 't4' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\GD01a(2).jpg" alt="" @click="product.inspiracjanr = 't4'" /></div>
            </div>
            <div class="wiersz3">
              <div class="item" :class="product.inspiracjanr == 't5' ? 'active' : ''"><img style="object-position: right;" src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\30(3).jpg" alt="" @click="product.inspiracjanr = 't5'" /></div>
              <div class="item" :class="product.inspiracjanr == 't6' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\12c(2).jpg" alt="" @click="product.inspiracjanr = 't6'" /></div>
              <!-- <div class="item" :class="product.inspiracjanr == '14' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\26 (6).jpg" alt="" @click="product.inspiracjanr = '14'" /></div> -->
            </div>
            <div class="grid pb-0">
              <div class="item" :class="product.inspiracjanr == 't7' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\12 (4).jpg" alt="" @click="product.inspiracjanr = 't7'" /></div>
              <div class="item" :class="product.inspiracjanr == 't8' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\8.jpg" alt="" @click="product.inspiracjanr = 't8'" /></div>
              <div class="item" :class="product.inspiracjanr == 't9' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla tradycjonalisty\26 (6).jpg" alt="" @click="product.inspiracjanr = 't9'" /></div>
            </div>
          </div>

          <!-- indywidualisty -->
          <div id="indywidualisty" class="galeria" v-show="product.filtryinspiracjeitem == 'wszystkie' || product.filtryinspiracjeitem == 'indywidualisty'">
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'i1' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\1.jpg" @click="product.inspiracjanr = 'i1'" /></div>
              <div class="item disabled" data-toggle="modal" data-target="#exampleModal"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\30.jpg" /></div>
            </div>
            <div class="wiersz">
              <div class="item" :class="product.inspiracjanr == 'i3' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\51.jpg" @click="product.inspiracjanr = 'i3'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i4' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\GL02.jpg" @click="product.inspiracjanr = 'i4'" /></div>
            </div>
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'i5' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\52.jpg" @click="product.inspiracjanr = 'i5'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i6' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\48 (2).jpg" @click="product.inspiracjanr = 'i6'" /></div>
            </div>
            <div class="wiersz">
              <div class="item" :class="product.inspiracjanr == 'i7' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\GF07.jpg" @click="product.inspiracjanr = 'i7'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i8' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\GL03B.jpg" @click="product.inspiracjanr = 'i8'" /></div>
            </div>

            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'i9' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\48 2.jpg" @click="product.inspiracjanr = 'i9'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i10' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\GD04.jpg" @click="product.inspiracjanr = 'i10'" /></div>
            </div>

            <div class="grid grid2">
              <div class="item" :class="product.inspiracjanr == 'i11' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\26d (5).jpg" alt="" @click="product.inspiracjanr = 'i11'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i12' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\47.jpg" alt="" @click="product.inspiracjanr = 'i12'" /></div>
            </div>

            <div class="wiersz">
              <div class="item disabled" data-toggle="modal" data-target="#exampleModal41"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\41.jpg" /></div>
              <div class="item" :class="product.inspiracjanr == 'i14' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\39a.jpg" @click="product.inspiracjanr = 'i14'" /></div>
            </div>

            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'i15' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\26j.jpg" @click="product.inspiracjanr = 'i15'" /></div>
              <div class="item" :class="product.inspiracjanr == 'i16' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla indywidualisty\48.jpg" @click="product.inspiracjanr = 'i16'" /></div>
            </div>
          </div>

          <!-- minimalisty -->
          <div id="minimalisty" style="order: 1;" class="galeria" v-show="product.filtryinspiracjeitem == 'wszystkie' || product.filtryinspiracjeitem == 'minimalisty'">
            <div class="wiersz">
              <div class="item" :class="product.inspiracjanr == 'm1' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\42.jpg" @click="product.inspiracjanr = 'm1'" /></div>
              <div class="item" :class="product.inspiracjanr == 'm2' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\FI12.jpg" @click="product.inspiracjanr = 'm2'" /></div>
            </div>
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'm3' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\30 (2).jpg" @click="product.inspiracjanr = 'm3'" /></div>
              <div class="item" :class="product.inspiracjanr == 'm4' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\1.jpg" @click="product.inspiracjanr = 'm4'" /></div>
            </div>
            <div class="wiersz3">
              <div class="item" :class="product.inspiracjanr == 'm5' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\FI02a.jpg" @click="product.inspiracjanr = 'm5'" /></div>
              <div class="item disabled" data-toggle="modal" data-target="#exampleModal25"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\25.jpg" /></div>
            </div>
            <div class="wiersz4">
              <div class="item" :class="product.inspiracjanr == 'm7' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\14.jpg" @click="product.inspiracjanr = 'm7'" /></div>
              <div class="item" :class="product.inspiracjanr == 'm8' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\GD02A.jpg" @click="product.inspiracjanr = 'm8'" /></div>
            </div>
            <div class="wiersz3">
              <div class="item" :class="product.inspiracjanr == 'm9' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\Dla minimalisty\GL01.jpg" @click="product.inspiracjanr = 'm9'" /></div>
            </div>
          </div>

          <!-- wizjonera -->
          <div id="wizjonera" class="galeria" v-show="product.filtryinspiracjeitem == 'wszystkie' || product.filtryinspiracjeitem == 'wizjonera'">
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'w1' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\FI01D.jpg" @click="product.inspiracjanr = 'w1'" /></div>
              <div class="item disabled" data-toggle="modal" data-target="#exampleModal4122"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\41.jpg" /></div>
            </div>
            <div class="wiersz">
              <div class="item" :class="product.inspiracjanr == 'w3' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\FI11.jpg" @click="product.inspiracjanr = 'w3'" /></div>
              <div class="item" :class="product.inspiracjanr == 'w4' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\1 wzór.jpg" @click="product.inspiracjanr = 'w4'" /></div>
            </div>
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'w5' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\GF04.jpg" @click="product.inspiracjanr = 'w5'" /></div>
              <div class="item" :class="product.inspiracjanr == 'w6' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla wizjonera\FI14.jpg" @click="product.inspiracjanr = 'w6'" /></div>
            </div>
          </div>

          <!-- kinomana -->
          <div id="kinomana" class="galeria" v-show="product.filtryinspiracjeitem == 'kinomana'">
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'k1' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla kinomana\13 sherlock holmes.jpg" @click="product.inspiracjanr = 'k1'" title='Inspirowane serialem "Sherlock Holmes"' /></div>
              <div class="item" :class="product.inspiracjanr == 'k2' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla kinomana\9 białe potwory i spółka.jpg" @click="product.inspiracjanr = 'k2'" title='Inspirowane filmem "Potwory i spółka"' /></div>
            </div>
            <div class="wiersz">
              <div class="item" :class="product.inspiracjanr == 'k3' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla kinomana\28 białe alicja w krainie czarów.jpg" @click="product.inspiracjanr = 'k3'" title='Inspirowane filmem "Alicja w Krainie Czarów"' /></div>
              <div class="item" :class="product.inspiracjanr == 'k4' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla kinomana\1 4005 friends od wewnątrz zielone 6005.jpg" @click="product.inspiracjanr = 'k4'" title='Inspirowane serialem "Friends"' /></div>
            </div>
            <div class="wiersz2">
              <div class="item" :class="product.inspiracjanr == 'k5' ? 'active' : ''"><img src="images\konfigurator\konf ins\dodatkowe Inspirację ADAM\dla kinomana\14 cobalt blue notting hill.jpg" @click="product.inspiracjanr = 'k5'" title='Inspirowane filmem "Notting Hill"' /></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <scroller :key="'xe'" :attr="'inspiracja'" :folder="'inspiracje'" :scrollerdata="inspiracje.dane"></scroller> -->
      <div id="Model" :key="'a'" class="" v-show="activeTab == 'Model'">
        <div class="asd" v-if="product.kolekcja == 'PCV'" title="Szeroki wybór modeli w kolekcji klasycznej sprawia, że każdy znajdzie coś dla swojego domu.">
          <img src="images\konfigurator\kolekcje\PCV.png" />
          <!-- <span style="font-size:24px">Przeszklenia drzwi idealnie zlicowane z powierzchnią skrzydła</span> -->
          <span style="font-size:24px">Klasycznie nie znaczy nudno. </span>
        </div>

        <div class="asd" v-if="product.kolekcja == 'GD'" title="Przeszklenie w Glass Design wyróżnia się zlicowaniem z płaszczyzną skrzydła drzwiowego, dając unikatowy efekt.">
          <img class="gd" src="images\konfigurator\kolekcje\glass design.png" />
          <!-- <span style="font-size:24px">Przeszklenia drzwi idealnie zlicowane z powierzchnią skrzydła</span> -->
          <span style="font-size:24px">Perfekcyjnie zlicowana szyba. </span>
        </div>

        <div class="asd" v-if="product.kolekcja == 'GL'" title="Drzwi Glass Loft posiadają przeszklenie z pięknym, czarnym wzornictwem, dzięki któremu zobaczysz więcej.">
          <img src="images\konfigurator\kolekcje\glass loft.png" />
          <span style="font-size:24px">Zjawiskowe tafle szkła. </span>
        </div>

        <div class="asd" v-if="product.kolekcja == 'GF'" title="Kolekcja Glass Front nie zawiera pakietu szybowego, natomiast zachwyca taflami szkła aplikowanymi bezpośrednio na skrzydło drzwiowe.">
          <img src="images\konfigurator\kolekcje\glass front.png" />
          <span style="font-size:24px">Drzwi, które cenią Twoją prywatność. </span>
        </div>

        <div class="asd" v-if="product.kolekcja == 'FI'" title="Future Inox to kolekcja drzwi inspirowana przyszłością wykonana w całości z aluminium.">
          <img src="images\konfigurator\kolekcje\FI.png" />
          <span style="font-size:24px">Subtelne i zlicowane ozdobne ramki. </span>
        </div>
        <!-- <div class="d-flex justify-content-between asd">Znajdź wzór<input type="text" placeholder="Wyszukaj..." class="form-control col-3" id="search" onkeyup="search"></div> -->
        <!-- <div class="d-flex justify-content-between asd">Znajdź wzór<input data-v-7fb3bbdd="" type="text" placeholder="Wyszukaj..." id="search" onkeyup="search" class="form-control col-3" style="
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid;
    border-radius: 0;
"></div> -->
        <!-- <div v-if="product.seria != '60'">
          <p :key="'b'" class="scrollerheading">Kolekcja</p>
          <scroller :key="'c'" :attr="'kolekcja'" :noimage="true" :scrollerdata="kolekcja.dane" ></scroller>
        </div> -->
        <!-- <p :key="'d'" class="scrollerheading">Wzór</p> -->
        <!-- <scroller :key="'e'" :attr="'wzor'" :folder="product.protect=='dom'?'wzory':'wzoryprotect'" :scrollerdata="wzorFilter" kol4 :handler="'Seria'"></scroller> -->
        <scroller id="wzory" :key="'e'" :attr="'wzor'" :folder="product.protect == 'dom' ? 'wzory' : 'wzoryprotect'" :scrollerdata="wzorFilter" kol4></scroller>
        <!-- <scroller v-if="product.seria == '60'" :key="'e'" :attr="'wzor'" :folder="'wzoryprotect'" :scrollerdata="wzorFilter" kol4></scroller> -->
      </div>

      <div :key="'seria'" id="Seria" class="" v-show="activeTab == 'Seria'">
        <div v-if="product.seria != '60'">
          <!-- <p class="scrollerheading">Seria</p> -->
          <!-- <scroller :scrollerdata="seriafilter" :attr="'seria'" :folder="'serie'" kol3></scroller> -->
          <!-- <scroller class="mb-0" :scrollerdata="seriafilterNowy.filter((el) => el.artnr != '60')" :attr="'seria'" :folder="'serie'" kol3 :handler="(product.seria=='22' || product.seria=='32')?'Kolor':'Naswietle'"></scroller> -->
          <scroller class="mb-0" :scrollerdata="seriafilterNowy.filter((el) => el.artnr != '60')" :attr="'seria'" :folder="'serie'" kol2></scroller>
          <!-- <a target="_blank" href="https://wiked.pl/technologia/" class="btn btn-info mt-3 pull-right">Dowiedz się więcej</a> -->
        </div>
        <!-- <div onclick="document.getElementById('info').style.display='none'" id="info" v-if="['60'].indexOf(product.seria) >= 0" class="alert alert-success" role="alert">
          <b>Drzwi wejściowe do mieszkań</b> z linii PROTECT.<br />
          Zapewnią ciszę, uchronią przed włamaniem i pożarem. <br />
          Wybierz jedną z 4 opcji.
        </div> -->

        <div v-if="product.seria == '60'">
          <!-- <p class="scrollerheading">Opcja</p> -->
          <scroller :scrollerdata="opcja.dane" :attr="'opcja'" :folder="'opcje'" kol2 class="mb-0"></scroller>
        </div>
        <!-- <p class="scrollerheading">Kod rozmiaru</p>
        <scroller :scrollerdata="kodyrozmiaru.dane" :attr="'kodrozmiaru'" :folder="'kodyrozmiaru'"  :ext="'png'"></scroller> -->
        <!-- {{ szerokosc+product.szerokoscnb1+product.szerokoscnb2 }}x{{wysokosc+product.wysokoscng}} -->
      </div>

      <div :key="'Portal'" id="Portal" class="" v-if="activeTab == 'Portal'">
        <!-- <div v-if="[60].indexOf(product.seria) >= 0"> -->
        <scroller :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheitenp'" :ext="'png'" kol5 label></scroller>
        <!-- </div> -->
        <div v-if="['D1N08'].indexOf(product.typ) >= 0" class="my-5">
          <p class="scrollerheading">
            Szerokość portalu lewego
            <!-- <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i> -->
          </p>
          <div class="slidecontainer"></div>
          <scroller :scrollerdata="wysokoscip.dane" :noimage="true" :attr="'szerokoscnb1'" label></scroller>
        </div>

        <div v-if="['D1N08'].indexOf(product.typ) >= 0" class="mb-5">
          <p class="scrollerheading">
            Szerokość portalu prawego
            <!-- <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i> -->
          </p>
          <scroller :scrollerdata="wysokoscip.dane" :attr="'szerokoscnb2'" :noimage="true" label></scroller>
        </div>

        <div v-if="['D1N08'].indexOf(product.typ) >= 0">
          <p class="scrollerheading">
            Wysokość portalu górnego
            <!-- <i onclick="document.querySelector('#myModall').style.display = 'block'" class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i> -->
          </p>
          <scroller :scrollerdata="wysokoscipg.dane" :attr="'wysokoscng'" :noimage="true" label></scroller>
        </div>
      </div>
      <div :key="'Naswietle'" id="Naswietle" class="mb-5" v-show="activeTab == 'Naswietle'">
        <div>
          <scroller :scrollerdata="activeTyp2" :attr="'typ'" :folder="'Einheiten'" :ext="'png'" kol5></scroller>
        </div>

        <div v-if="['D1N01', 'D1F01', 'D1N03', 'D1N05', 'D1N07'].indexOf(product.typ) >= 0">
          <p class="scrollerheading">
            Szerokość naświetla lewego<i title="Uwaga! Wymiar naświetla może wynosić od 20 do 80 cm, liczone co 1 cm. Wartości podane w konfiguratorze mają charakter przykładowy." class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
          </p>
          <scroller label :scrollerdata="['b','g'].indexOf(this.product.szyba2)>-1?wysokosci.dane.filter((el)=>el.artnr!=200):wysokosci.dane" :attr="'szerokoscnb1'" :noimage="true"></scroller>
        </div>

        <div v-if="['D1N02', 'D1N03', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
          <p class="scrollerheading">
            Szerokość naświetla prawego<i title="Uwaga! Wymiar naświetla może wynosić od 20 do 80 cm, liczone co 1 cm. Wartości podane w konfiguratorze mają charakter przykładowy." class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
          </p>
          <scroller label :scrollerdata="['b','g'].indexOf(this.product.szyba2)>-1?wysokosci.dane.filter((el)=>el.artnr!=200):wysokosci.dane" :attr="'szerokoscnb2'" :noimage="true"></scroller>
        </div>

        <div v-if="['D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
          <p class="scrollerheading">
            Wysokość naświetla górnego<i title="Uwaga! Wymiar naświetla może wynosić od 20 do 80 cm, liczone co 1 cm. Wartości podane w konfiguratorze mają charakter przykładowy." class="fa fa-question-circle" style="cursor: pointer;color: #8fcc25;font-size: 21px;margin-left: 10px;"></i>
          </p>
          <scroller class="mb-3" label :scrollerdata="['b','g'].indexOf(this.product.szyba2)>-1?wysokosci.dane.filter((el)=>el.artnr!=200):wysokosci.dane" :attr="'wysokoscng'" :noimage="true"></scroller>
        </div>
      </div>

      <div id="Kolor" :key="'l'" class="" v-if="activeTab == 'Kolor'">
        <p class="scrollerheading">Kolorystyka</p>
        <scroller :attr="'wariant'" :folder="'wariant'" :scrollerdata="wariantFilter2" kol1></scroller>

        <div id="drzwi" v-if="product.wariant == 'S'">
          <p class="scrollerheading">Kolor</p>          
          <scroller v-if="activeModel.typ != 'FI'" :attr="'kolor1typ'" :noimage="true" :scrollerdata="kolor1typFilter" kol3></scroller>
          <scroller :attr="'kolor'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter" class="mb-3"></scroller>
          <h3 class="card p-3 rounded shadow" v-if="activeKolorTyp=='RAL'">W naszej palecie Harmony Color znajdziesz więcej kolorów. Zapytaj o dostępność w wybranym Salonie Partnerskim.</h3>
        </div>

        <!-- golebica -->
        <div class="termo" v-if="product.wzor == '51' || product.wzor == '52'">
          <p class="scrollerheading">Kolor dodatkowy</p>
          <scroller :attr="'kolor7typ'" :noimage="true" :scrollerdata="kolor7typFilter" kol3></scroller>
          <scroller :attr="'kolor7'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter7"></scroller>
        </div>

        <div id="drzwi" v-if="product.wariant == 'B' || product.wariant == 'MB'">
          <!-- oscieznica -->
          <div class="termo" v-if="product.seria.indexOf('1') == -1">
            <p class="scrollerheading">Kolor ościeżnicy</p>
            <scroller :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" kol3></scroller>
            <scroller :attr="'kolor6'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter6"></scroller>
          </div>

          <!-- oscieznica termo-->
          <div class="termo" v-else>
            <p class="scrollerheading">Kolor ościeżnicy zewnętrzny</p>
            <scroller :attr="'kolor6typ'" v-if="activeModel.typ != 'FI'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" kol3></scroller>
            <scroller :attr="'kolor6'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter6"></scroller>
            <p class="scrollerheading">Kolor ościeżnicy wewnętrzny</p>
            <scroller :attr="'kolor5typ'" v-if="activeModel.typ != 'FI'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" kol3></scroller>
            <scroller :attr="'kolor5'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter5"></scroller>
          </div>
          <!-- skrzydło-->
          <div>
            <div v-if="this.activeModel.typ != 'MG'">
              <p class="scrollerheading">Kolor skrzydła zewnętrzny</p>
              <scroller :attr="'kolor1typ'" v-if="activeModel.typ != 'FI'" :noimage="true" :scrollerdata="kolor3typFilter" :col="'4'" kol3></scroller>
              <scroller :attr="'kolor'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"></scroller>
            </div>
            <p class="scrollerheading">Kolor skrzydła wewnętrzny</p>
            <scroller :attr="'kolor2typ'" v-if="activeModel.typ != 'FI'" :noimage="true" :scrollerdata="kolor3typFilter" :col="'4'" kol3></scroller>
            <scroller :attr="'kolor2'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter2"></scroller>
          </div>
        </div>

        <!-- <p class="scrollerheading">Typ koloru:</p> -->

        <!-- oscieznica -->

        <!-- <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1">Kolor ościeżnicy zewnętrzny</p>
        <scroller key="fghjklkb" :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" label kol3></scroller>
        <scroller :attr="'kolor6'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter6" ></scroller>

        <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1">Kolor ościeżnicy</p>
        <scroller key="fghjklkb" :attr="'kolor6typ'" :noimage="true" :scrollerdata="kolortypFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1" label kol3></scroller>
        <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1">Kolor ościeżnicy wewnętrzny</p>
        <scroller key="kbejn" :attr="'kolor5typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" label kol3></scroller>
        <scroller :attr="'kolor6'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('1') == -1" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter6" ></scroller>
        <scroller :attr="'kolor5'" v-if="(product.wariant == 'B' || product.wariant == 'MB') && product.seria.indexOf('0') == -1" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter5" ></scroller> -->

        <!-- skrzydlo -->

        <!-- <p class="scrollerheading" v-if="(product.wariant == 'B' || product.wariant == 'MB')">Kolor zewnętrzny</p> -->
        <div v-if="product.wariant == 'M'">
          <p class="scrollerheading" v-if="product.wariant == 'M'">Kolor główny</p>
          <scroller :attr="'kolor1typ'" v-if="activeModel.typ != 'FI'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" kol3></scroller>
          <scroller :attr="'kolor'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"></scroller>
          <p class="scrollerheading" :key="'2'" style="font-weight: bold" v-if="product.wariant == 'M'">Kolor dodatkowy</p>
          <scroller :key="'3'" :attr="'mixz'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter" v-if="product.wariant == 'M'"></scroller>
        </div>
        <!-- <p class="scrollerheading" v-if="product.wariant == 'M'">Kolor główny</p>
        <p class="scrollerheading" v-if="product.wariant == 'S'">Kolor</p> -->

        <!-- bikolor -->
        <!-- <transition-group id="kol" :key="'asdf'" name="test" tag="div">
          <p :key="'1'" style="font-weight: bold" v-if="product.wariant == 'B' || product.wariant == 'MB'">Kolor wewnętrzny</p>
          <p :key="'2'" style="font-weight: bold" v-if="product.wariant == 'M'">Kolor dodatkowy</p>
          <scroller :key="'3'" :attr="'mixz'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"  v-if="product.wariant == 'M'"></scroller>

          <scroller key="fghjk" :attr="'kolor2typ'" :noimage="true" :scrollerdata="kolor1typFilter" :col="'4'" v-if="product.wariant == 'B' || product.wariant == 'MB'" label kol3></scroller>
          <scroller :key="'3'" :attr="'kolor2'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"  v-if="product.wariant == 'B' || product.wariant == 'MB'"></scroller>
        </transition-group> -->

        <!-- mixbikolor -->
        <p class="scrollerheading" v-if="product.wariant == 'MB'">Kolor dodatkowy zewnętrzny</p>
        <scroller :attr="'mixz'" v-if="product.wariant == 'MB'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"></scroller>
        <p class="scrollerheading" v-if="product.wariant == 'MB'">Kolor dodatkowy wewnętrzny</p>
        <scroller :attr="'mixw'" v-if="product.wariant == 'MB'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilter"></scroller>

        <!-- portal -->
        <transition-group id="kol" :key="'asdfff'" name="test" tag="div" v-if="product.seria == '60' && product.typ != 'D1'">
          <p :key="'1'" class="scrollerheading mt-5">Kolor portalu</p>
          <scroller :key="'4'" :attr="'kolor3'" :folder="'okleiny'" kol5 :scrollerdata="kolorFilterp" v-if="product.seria == '60'"></scroller>
        </transition-group>
      </div>

      <!-- <div id="Ramka" :key="'ofghjgj'" class="" v-show="activeTab == 'Ramka'"> -->
      <div id="Ramka" :key="'ofghjgj'" class="" v-show="activeTab == 'Rama'">
        <p :key="'ii'" class="scrollerheading" v-show="this.activeModel.typ != 'GF' && this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')">
          Kolor ramki
        </p>
        <p :key="'ih'" class="scrollerheading" v-show="this.activeModel.typ == 'GF'">
          Aplikacja
        </p>
        <scroller :key="'k'" :attr="'inoxkolor'" kol5 :scrollerdata="ramkakolorfilter2" :folder="'koloryakc'" v-show="this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')"></scroller>

        <div v-if="this.product.wzor != 'GF6'">
          <p id="si pn" :key="'ffh'" class="scrollerheading" v-if="this.activeModel.typ == 'GF'">
            Strona Aplikacji
          </p>
          <p v-else :key="'ich'" class="scrollerheading">
            Strona ramki
          </p>
          <scroller
            :noimage="true"
            :key="'kas'"
            :attr="'inoxstrona'"
            kol5
            :scrollerdata="this.product.szyba == '00' ? inoxstrona.dane : inoxstrona.dane.filter((el) => el.artnr == 0)"
            v-show="this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')"
            label
          ></scroller>
        </div>
      </div>

      <div id="Szyba" :key="'o'" class="" v-show="activeTab == 'Szyba'">
        <p class="scrollerheading" v-if="product.seria != '60'">
          <span v-if="product.seria != '60' && (product.wzor == '47A' || product.wzor == '47' || product.wzor == '48' || product.wzor == '50') && product.szyba != '16' && product.szyba != '25'">Aplikacja</span>
          <span v-else>Przeszklenie</span>
        </p>
        <scroller :attr="'szyba'" :folder="'Przeszklenia/nowe'" :scrollerdata="szybyFilter" v-if="product.seria != '60'" kol5></scroller>
        <!-- baza -->
        <p class="scrollerheading" v-if="(product.wzor == '47A' || product.wzor == '47' || product.wzor == '48' || product.wzor == '50') && product.szyba != '16' && product.szyba != '25'">Przeszklenie bazowe:</p>
        <scroller :attr="'baza'" :folder="'baza'" :scrollerdata="baza.dane" v-if="(product.wzor == '47A' || product.wzor == '47' || product.wzor == '48' || product.wzor == '50') && product.szyba != '16' && product.szyba != '25'" kol5></scroller>

        <transition-group :key="'asdfgs'" name="test" tag="div">
          <div :key="'hj'" v-if="['D1N01', 'D1N02', 'D1N03', 'D1N04', 'D1N05', 'D1N06', 'D1N07'].indexOf(product.typ) >= 0">
            <p id="pn" class="scrollerheading">Przeszklenie naświetli:</p>
            <scroller v-if="1 > 0 != 'g'" :attr="'szyba2'" :folder="'naswietla'" :scrollerdata="szybyFilter2" kol5></scroller>
          </div>
        </transition-group>

        <transition-group :key="'asdfg'" name="test" tag="div">
          <!-- <scroller :key="'h'" :attr="'inoxstrona'"  :scrollerdata="inoxstrona.dane" :noimage="true" v-show="this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX'" v-if="product.szyba == '00'  && product.seria!='60'"></scroller> -->
          <!-- <scroller label :key="'h'" :attr="'inoxstrona'" :scrollerdata="inoxstrona.dane" :noimage="true" v-show="showInox" v-if="product.szyba == '00' && product.seria != '60' && this.activeModel.typ != 'FL' && this.activeModel.typ != 'GF'"></scroller>
          <scroller label :key="'h2'" :attr="'inoxstrona'" :scrollerdata="inoxstrona.dane.filter((el) => el.artnr == '2')" :noimage="true" v-if="product.wzor == 'GF6'"></scroller>
          <scroller
            label
            :key="'h2'"
            :attr="'inoxstrona'"
            :scrollerdata="inoxstrona.dane.filter((el) => el.artnr != '1')"
            :noimage="true"
            v-show="this.activeModel.typ == 'FI' || this.activeModel.typ == 'GF' || showInox || this.activeModel.typ == 'INOX'"
            v-if="product.wzor != 'GF6' && product.szyba == '00' && (product.seria == '60' || this.activeModel.typ == 'FL' || this.activeModel.typ == 'GF')"
          ></scroller> -->
          <!-- <scroller :key="'h3'" :attr="'inoxstrona'"  :scrollerdata="inoxdwustr.dane" :noimage="true" v-show="showInox && this.activeModel.typ != 'GD'" v-if="(product.szyba != '00')"></scroller> -->
          <!-- <p :key="'ii'" class="scrollerheading" v-show="this.activeModel.typ != 'GF' && this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')">
            Kolor ramki
          </p> -->
          <!-- <p :key="'ih'" class="scrollerheading" v-show="this.activeModel.typ == 'GF'">
            Aplikacja
          </p>
          <scroller :key="'k'" :attr="'inoxkolor'" kol5 :scrollerdata="ramkakolorfilter2" :folder="'koloryakc'" v-show="this.product.inoxkolor != '0' && (this.activeModel.typ == 'FI' || showInox || this.activeModel.typ == 'INOX')"></scroller> -->
          <!-- <p  :key="'ii'" class="scrollerheading"> Kolor ramki</p>
        <scroller :key="'k'" :attr="'inoxkolor'" :scrollerdata="ramkakolorfilter" :folder="'koloryakc'"  ></scroller> -->
        </transition-group>
      </div>

      <div id="Okucia" :key="'p'" class="" v-show="activeTab == 'Okucia'">
        <!-- #Kierunek otwierania -->
        <!-- <section>
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
        </section> -->

        <p class="scrollerheading">Kierunek otwierania</p>
        <!-- <scroller :attr="'kierunek'" :scrollerdata="kierunekfilter" :folder="'kotw'" kol4></scroller> -->
        <!-- <scroller :attr="'kierunki'" :scrollerdata="kierunki.dane" :folder="'kotw'" kol5 label :noimage="true"></scroller> -->
        <scroller :attr="'kierunki'" :scrollerdata="kierunkifilter" :folder="'kotw'" kol5 label :noimage="true"></scroller>
        <p class="scrollerheading">Strona drzwi</p>
        <!-- <scroller :attr="'kierunek'" :scrollerdata="kierunekfilter" :folder="'kotw'" kol4></scroller> -->
        <scroller :attr="'kierunek'" :scrollerdata="kierunekfilter.filter((el) => el.artnr.indexOf(product.kierunki) >= 0)" :folder="'kotw'" kol5></scroller>

        <p id="so" class="scrollerheading">Sposób otwierania</p>
        <scroller :attr="'sposobotw'" :scrollerdata="sposobotwfilter" :folder="'sposobyotw'" kol5></scroller>

        <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'">
          <p id="kl" class="scrollerheading"><span>Rodzaj</span></p>
          <div v-if="[21,31,41,661].includes(parseInt(product.seria))" class="alert alert-success">Wybierz pochwyt ALFA lub BETA w promocyjnej cenie 1 PLN!</div>
          <!-- <scroller :attr="'pochwyty'" :noimage="true" :scrollerdata="pochwyty.dane" :folder="'Klamki'" ></scroller> -->
          <scroller :attr="'pochwyty'" :scrollerdata="pochwytyfilter" :folder="'Klamki/nowe'"></scroller>
        </div>

        <!-- <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="dlugosci.length>1"> -->
        <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'">
          <p id="kl" class="scrollerheading"><span>Długość</span></p>
          <scroller :attr="'dlugosci'" :noimage="true" :scrollerdata="dlugosci" label></scroller>
        </div>
        <!-- <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="kat.length>1"> -->
        <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="kat.length > 1">
          <p id="kl" class="scrollerheading"><span>Kąt montażu</span></p>
          <scroller :attr="'kat'" :noimage="true" :scrollerdata="kat" label></scroller>
        </div>
        <!-- <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="opcjepochwytu.length>1"> -->
        <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="opcjepochwytu.length > 1">
          <p id="kl" class="scrollerheading"><span>Dostępne opcje pochwytu</span></p>
          <scroller class="mb-3" :attr="'opcjepochwytu'" :scrollerdata="opcjepochwytu" folder="Klamki/NOWE/Opcje"></scroller>          
          <div v-if="product.opcjepochwytu=='s'" class="alert alert-danger">Promocja pochwyt za 1 PLN nie obowiązuje przy wyborze wariantu z czytnikiem linii papilarnych. </div>
        </div>
        <!-- <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="led.length>1"> -->
        <div v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" v-show="led.length > 1">
          <p id="kl" class="scrollerheading"><span>Podświetlenie</span></p>
          <scroller :attr="'led'" :noimage="true" :scrollerdata="led" label></scroller>
        </div>

        <p class="scrollerheading">Kolor okuć</p>
        <scroller :attr="'klamkakolor'" :scrollerdata="klamkakolorfilter" :folder="'koloryakc'" kol5></scroller>

        <div v-if="(product.sposobotw != 'KP' && product.sposobotw != 'PP') || klamkifilter2.length > 1">
          <p id="kl" class="scrollerheading"><span v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'">Kolor pochwytu</span><span v-else>Klamka</span></p>
          <!-- <scroller v-if="product.sposobotw == 'KP' || product.sposobotw == 'PP'" :attr="'klamka'" :scrollerdata="klamkifilter2" :folder="'Klamki'" kol5></scroller> -->
          <scroller :attr="'klamka'" :scrollerdata="klamkifilter2" :folder="'Klamki'" kol5></scroller>
        </div>

        <p class="scrollerheading" v-if="product.klamka.indexOf('SD') > 0 || product.klamka.indexOf('SR') > 0 || product.klamka.indexOf('SS') > 0">Kolor wypełnienia:</p>
        <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SR') > 0" :folder="'okleiny'" kol5 :scrollerdata="kolor.dane.filter((el) => el.typ == 'RAL')"></scroller>
        <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SD') > 0" :folder="'okleiny'" kol5 :scrollerdata="kolor.dane.filter((el) => el.typ == 'DEK')"></scroller>
        <scroller :attr="'pochwyt2'" v-if="product.klamka.indexOf('SS') > 0" :folder="'koloryakc'" :scrollerdata="inoxkolor2.dane"></scroller>

        <div v-if="(product.sposobotw == 'KP' || product.sposobotw == 'PP') && product.seria == '41' && activeModel.typ != 'GFe'">
        <!-- <div v-if="(product.sposobotw == 'KP' || product.sposobotw == 'PP') && product.seria == '661' && activeModel.typ != 'GFe'"> -->
          <p id="kl" class="scrollerheading"><span>Rodzaj szyldu</span></p>
          <scroller :attr="'rozeta'" :scrollerdata="rozety" folder="rozety" kol5></scroller>
        </div>
      </div>

      <div id="samozamykaczd" :key="'akc'" class="" v-show="activeTab == 'Akcesoria'">
        <p class="scrollerheading">Samozamykacz</p>
        <scroller :scrollerdata="samozamykaczFilter" :attr="'samozamykacz'" :folder="'samozamykacz'" kol5></scroller>
        <div :key="'asdff'" name="test" tag="div" v-if="product.samozamykacz != '-' && product.samozamykacz != 'W'" class="mb-5">
          <p :key="'a'" class="scrollerheading" v-if="product.samozamykacz != '-'">Kolor samozamykacza</p>
          <scroller :key="'b'" :scrollerdata="samkolorfilter" :folder="'koloryakc'" v-if="product.samozamykacz != '-'" :attr="'samozamykaczKolor'" kol5></scroller>
        </div>

        <!-- <p class="scrollerheading " >Wizjer</p> -->
        <!-- <scroller :scrollerdata="wizjer.dane" :attr="'wizjer'" :folder="'wizjer'" ></scroller> -->
        <div v-if="czylamele" class="mb-5">
          <p class="scrollerheading" :noimage="true">Lamele</p>
          <scroller :scrollerdata="elektrozaczep.dane" :attr="'lamele'" :noimage="true" label></scroller>
          <div v-if="this.product.lamele == 'J'">
            <p class="scrollerheading" :noimage="true">Ilość</p>
            <scroller :scrollerdata="lameleiloscdane.dane" :attr="'lameleilosc'" :noimage="true" label></scroller>
            <p class="scrollerheading">Kolor</p>
            <scroller :attr="'kolor7'" :folder="'okleiny'" kol5 :scrollerdata="kolor.dane.filter((el) => el.typ == 'DEK' && el.artnr != '12')"></scroller>
          </div>
        </div>
        <div v-if="product.seria != '60' && product.seria != '661'" class="mb-5">
          <p class="scrollerheading" :noimage="true">Elektrozaczep</p>
          <scroller :scrollerdata="elektrozaczepfilter" :attr="'elektrozaczep'" :noimage="true" label kol5></scroller>
        </div>
        <!-- <div v-if="activeOpcja.artnr != 'rwrc3ei30'"> -->
        <div v-if="product.opcja == 'rwei30' && product.seria == '60'" class="mb-5">
          <p class="scrollerheading" :noimage="true">Elektrozaczep awersyjny</p>
          <scroller :scrollerdata="elektrozaczepr.dane" :attr="'elektrozaczepr'" :noimage="true" label></scroller>
        </div>

        <!-- Podświetlenie progu -->
        <div v-if="[31,41,661].includes(parseInt(product.seria)) && product.kierunki=='z'" class="mb-5">
          <p class="scrollerheading" :noimage="true">Podświetlenie progu <img height="50" src="/images/konfigurator/PROMO/PROMO 1PLN.png" alt="" title="Sprawdż szczegóły promocji PROMO 1 PLN"></p>
          <scroller :scrollerdata="progled.dane" :attr="'progled'" :noimage="true" label></scroller>
        </div>
        <!-- Sterownik Wikęd Smart -->
        <div v-if="[21,31,41,661].includes(parseInt(product.seria)) || product.progled || product.led==true || product.opcjepochwytu!='-' || product.automatyka!='-' || product.elektrozaczep=='J' || (['D1N01','D1N02','D1N03'].includes(product.typ) && product.szyba2=='o4piaskPWzL')" class="mb-0">
          <p class="scrollerheading" :noimage="true">Sterownik Wikęd SMART <img height="50" src="/images/konfigurator/PROMO/PROMO 1PLN.png" alt="" title="Sprawdż szczegóły promocji PROMO 1 PLN"></p>
          <scroller :scrollerdata="progled.dane" :attr="'smart'" :noimage="true" label class="mb-3"></scroller>
          <div class="alert alert-info">WIKĘD SMART to inteligentne rozwiązanie dla drzwi zewnętrznych, które umożliwia sprawdzanie stanu otwarcia, kontrolę podświetlenia i zdalne sterowanie zamkiem elektrycznym.
            <br>
            <a class="btn btn-dark mt-3" href="https://wiked.pl/wiked-smart/" target="_blank">Dowiedz się więcej...</a>
          </div>
        </div>

        <!-- <div v-if="activeModel.typ != 'GD' && activeModel.typ != 'GL' && activeModel.typ != 'GF'">
          <p class="scrollerheading" v-if="activeModel.typ != 'FI'">Kopniak</p>
          <scroller :scrollerdata="KOPNIAKFilter" :attr="'kopniak'" :folder="'kopniak'" :noimage="true"  v-if="activeModel.typ != 'FI'"></scroller>
          <div v-if="this.product.kopniak != '-'">
            <p class="scrollerheading" v-if="activeModel.typ != 'FI'">Kolor kopniaka</p>
            <scroller :key="'k1'" :attr="'kopniakkolor'" :scrollerdata="KOPNIAKkolorFilter" :folder="'koloryakc'" ></scroller>
          </div>
        </div> -->
        <div v-if="this.product.sposobotw != 'KK' && ['661', '41'].indexOf(product.seria) > -1 && product.wzor!='F3A'">
          <p class="scrollerheading">System automatyki</p>
          <scroller :scrollerdata="automatykafilter" :attr="'automatyka'" :folder="'automatyka'"></scroller>
        </div>
        <div v-if="product.seria == '60' && (product.opcja == 'rwei30' || product.opcja == 'rwrc3ei30')">
          <p class="scrollerheading">Opcja przeciwdymowa</p>
          <scroller :scrollerdata="dym.dane" :attr="'dym'" :noimage="true" :folder="'automatyka'" label></scroller>
        </div>
      </div>
    </transition-group>

    <!-- <div id="Podsumowanie" :key="'r'" class="p-4 q o" v-show="activeTab == 'Podsumowanie'"> -->
    <div id="Podsumowanie" :key="'r'" class="p-4 q o" v-show="activeTab == 'Podsumowanie'" hidden>
      <!-- <div id="pod" style="padding: 0 0 75px 0"></div> -->
      <prezenter></prezenter>
      <!-- <customimagebutton></customimagebutton> -->
      <div class="przyciski">
        <div class="przycisk">
          <input type="file" id="file" ref="myFiles" @change="loadcustombackground" style="display: none" />
          <label style="font-weight:unset" for="file">Wgraj zdjęcie swojego domu</label>
        </div>

        <div class="przycisk" onclick="document.getElementById('opcje2').style.display = 'flex'">
          Zmień tło
        </div>
      </div>
      <!-- <myselect style="margin-right:1em"></myselect> -->

      <div
        id="opcje2"
        style="display: none;justify-content: center;justify-content: center;display: flex;position: relative;bottom: 104px;margin-bottom: -87px;background: whitesmoke;width: fit-content;margin-left: auto;margin-right: auto;border-radius: 10px;-webkit-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);-moz-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);"
      >
        <div id="opcje" style="display: inline-flex;width: 110px;height: 110px;padding: 10px;" class="myoption" v-bind:key="index + 'a'" v-for="(elem, index) in backgrounds" @click="setActiveBackground(elem)">
          <!--Tło {{index+1}} --><img onclick="document.getElementById('opcje2').style.display = 'none'" class="img-fluid" :src="elem.url" />
        </div>
      </div>
    </div>

    <!-- <navbuttons></navbuttons> -->
  </div>
</template>

<script>
// import klamki from "./klamki.json";
import Scroller from "@/components/Scroller.vue";
import Prezenter from "@/components/Prezenter.vue";
import Myselect from "@/components/Myselect.vue";
import Navbuttons from "@/components/Navbuttons.vue";
import Customimagebutton from "@/components/customimagebutton.vue";
import { EventBus } from "@/event-bus.js";

import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["left", "top", "width", "height", "back", "turnable"],
  components: {
    Scroller,
    Prezenter,
    Myselect,
    Navbuttons,
    Customimagebutton,
  },
  watch: {
    activeTab: function() {
      // console.log(this.activeTab)
      this.zmianaInspiracji = false;
      this.zmianaWzoru = false;
    },
    "product.inspiracjanr": function() {
      this.zmianaInspiracji = true;
      let inspiracje = this.inspiracje.dane;
      let wybrana = inspiracje.filter((el) => el.artnr == this.product.inspiracjanr);

      this.product.wzor = wybrana[0].wzor;
      this.product.seria = wybrana[0].seria;
      this.product.typ = wybrana[0].typ ? wybrana[0].typ : "D1";

      // wybrana[0].selectedwidok ? this.$store.state.selectedwidok = 'W' : this.$store.state.selectedwidok = 'Z';
      this.$store.state.selectedwidok = wybrana[0].selectedwidok ? "W" : "Z";

      wybrana[0].szerokoscnb1 ? (this.product.szerokoscnb1 = wybrana[0].szerokoscnb1) : (this.product.szerokoscnb1 = 300);
      wybrana[0].szerokoscnb2 ? (this.product.szerokoscnb2 = wybrana[0].szerokoscnb2) : (this.product.szerokoscnb2 = 300);
      wybrana[0].wysokoscng ? (this.product.wysokoscng = wybrana[0].wysokoscng) : (this.product.wysokoscng = 300);
      wybrana[0].wariant ? (this.product.wariant = wybrana[0].wariant) : (this.product.wariant = "S");
      wybrana[0].progled ? (this.product.progled = wybrana[0].progled) : (this.product.progled = false);
      this.product.kolor = wybrana[0].kolor;
      wybrana[0].kolor3 ? (this.product.kolor3 = wybrana[0].kolor3) : "";
      wybrana[0].kolor7 ? (this.product.kolor7 = wybrana[0].kolor7) : "";
      wybrana[0].mixz ? (this.product.mixz = wybrana[0].mixz) : "";
      wybrana[0].mixw ? (this.product.mixw = wybrana[0].mixw) : "";
      if (wybrana[0].wariant && wybrana[0].wariant != "S") {
        this.product.kolor2 = wybrana[0].kolor2;
        if (wybrana[0].kolor5) {
          this.product.kolor5 = wybrana[0].kolor5;
        }
        if (wybrana[0].kolor6) {
          this.product.kolor6 = wybrana[0].kolor6;
        }
      }

      this.product.kierunek = wybrana[0].kierunek;
      wybrana[0].szyba ? (this.product.szyba = wybrana[0].szyba) : (this.product.szyba = this.szybyFilter[0].artnr);
      wybrana[0].baza ? (this.product.baza = wybrana[0].baza) : ""; //: this.product.baza=this.szybyFilter[0].artnr;
      wybrana[0].szyba2 ? (this.product.szyba2 = wybrana[0].szyba2) : (this.product.szyba2 = this.szybyFilter2[0].artnr);
      this.product.sposobotw = wybrana[0].sposobotw;
      this.product.klamkakolor = wybrana[0].klamkakolor;
      this.product.klamka = wybrana[0].klamka;
      if (wybrana[0].sposobotw == "KP") {
        // console.log(wybrana[0])
        wybrana[0].rozeta ? (this.product.rozeta = wybrana[0].rozeta) : (this.product.rozeta = "STD");
        wybrana[0].pochwyt2 ? (this.product.pochwyt2 = wybrana[0].pochwyt2) : "";
        this.product.dlugosci = this.activeKlamka.dlugosc;
        this.product.kat = this.activeKlamka.kat;
      }

      wybrana[0].inoxkolor ? (this.product.inoxkolor = wybrana[0].inoxkolor) : (this.product.inoxkolor = this.$store.getters.ramkakolorfilter[0].artnr);
      
      wybrana[0].lamele ? (this.product.lamele = wybrana[0].lamele) : "";
      wybrana[0].lameleilosc ? (this.product.lameleilosc = wybrana[0].lameleilosc) : 9;

      // this.zmianaInspiracji = false;
      // return;
    },
    "product.protect": function() {
      this.losuj();
    },
    "product.wzor": function(state) {
      if (this.product.inspiracjanr == "") {
        // this.$store.state.selectedwidok == "Z"
        // state.selectedwidok = "Z"
        let wzory = [];
        if (this.product.protect == "blok") {
          wzory = this.wzorp.dane;
        } else {
          wzory = this.wzor.dane;
        }
        // console.log(wzory)
        this.zmianaWzoru = true;
        // this.zmianaInspiracji = true;
        this.product.seria = wzory.filter((el) => el.artnr == this.product.wzor)[0].seria ? wzory.filter((el) => el.artnr == this.product.wzor)[0].seria : "41";
        // this.product.typ = wzory.filter((el) => el.artnr == this.product.wzor)[0].naswietle ? wzory.filter((el) => el.artnr == this.product.wzor)[0].naswietle : "D1";
        this.product.szyba = wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba ? wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba : this.szybyFilter[0].artnr;
        // if (this.product.inspiracja == "tak") {
        this.product.kolor = wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor ? wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor : "04";
        // }

        // console.log(this.activeKlamka)
        this.product.sposobotw = wzory.filter((el) => el.artnr == this.product.wzor)[0].sposobotw ? wzory.filter((el) => el.artnr == this.product.wzor)[0].sposobotw : this.sposobotwfilter[0].artnr;
        this.product.klamka = wzory.filter((el) => el.artnr == this.product.wzor)[0].klamka ? wzory.filter((el) => el.artnr == this.product.wzor)[0].klamka : this.klamkifilter2[0].artnr;
        this.product.pochwyty = this.activeKlamka.GRUPA;
        this.product.dlugosci = this.activeKlamka.dlugosc;
        this.product.kat = this.activeKlamka.kat;
        this.product.opcjepochwytu = this.activeKlamka.opcjepochwytu;
        this.product.led = this.activeKlamka.led;
        this.product.klamkakolor = wzory.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor ? wzory.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor : (this.product.klamkakolor = this.klamkakolorfilter[0].artnr);

        this.product.inoxkolor = wzory.filter((el) => el.artnr == this.product.wzor)[0].inoxkolor ? wzory.filter((el) => el.artnr == this.product.wzor)[0].inoxkolor : this.$store.getters.ramkakolorfilter[0].artnr;
        // console.log(this.activeKlamka)
        this.product.rozeta = wzory.filter((el) => el.artnr == this.product.wzor)[0].rozeta ? wzory.filter((el) => el.artnr == this.product.wzor)[0].rozeta : "STD";
        this.product.wariant = wzory.filter((el) => el.artnr == this.product.wzor)[0].wariant ? wzory.filter((el) => el.artnr == this.product.wzor)[0].wariant : "S";
        this.product.kolor2 = wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor2 ? wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor2 : "04";
        this.product.kolor5 = wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor5 ? wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor5 : "04";
        this.product.kolor6 = wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor6 ? wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor6 : "04";
        this.product.kolor7 = wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor7 ? wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor7 : "04";
        this.product.mixz = wzory.filter((el) => el.artnr == this.product.wzor)[0].mixz ? wzory.filter((el) => el.artnr == this.product.wzor)[0].mixz : wzory.filter((el) => el.artnr == this.product.wzor)[0].kolor7;
        this.product.szyba = wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba ? wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba : this.szybyFilter[0].artnr;
        this.product.szyba2 = wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba2 ? wzory.filter((el) => el.artnr == this.product.wzor)[0].szyba2 : this.szybyFilter2[0].artnr;
        this.product.baza = wzory.filter((el) => el.artnr == this.product.wzor)[0].baza ? wzory.filter((el) => el.artnr == this.product.wzor)[0].baza : "10";
        this.product.inoxstrona = this.product.wzor == "GF6" ? this.inoxstrona.dane[2].artnr : (this.product.inoxstrona = this.inoxstrona.dane[0].artnr);

        /*

      this.product.seria = this.product.sposobotw == "KP" ? "41" : "31";

      this.product.klamkakolor = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor
        ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor
        : (this.product.klamkakolor = this.klamkakolorfilter[0].artnr);

      this.product.pochwyt2 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 : "04";

      */
        //   console.log(this.activeKlamka.GRUPA)
        // console.log(this.product.szyba2)
        // console.log(this.szybyFilter2)
        // if(this.szybyFilter2.find((el) => el.artnr == this.product.szyba2)){}else{
        // this.product.szyba2=this.szybyFilter2[0].artnr
      }
    },
    // "product.pochwyty": function() {},
    "product.automatyka": function(newval, val) {
      if (newval != "-") {
        this.product.elektrozaczep = "N";
      }
    },
    "product.elektrozaczep": function(newval, val) {
      if (newval == "J") {
        this.product.automatyka = "-";
      }
    },
    "product.seria": function(newval, val) {
      if(this.zmianaInspiracji == false){
        this.product.progled=false
      }      
      this.product.smart=false
      if (["661", "41"].indexOf(this.product.seria != -1)) {
        // this.product.rozeta = "STD";
      }
      // console.log(val)
      // console.log(newval)
      this.product.samozamykacz = this.samozamykaczFilter[0].artnr;
      if (["KK", "KP"].indexOf(this.product.sposobotw) == -1 && this.product.seria == "661" && this.zmianaInspiracji == false) {
        this.product.sposobotw = "KK";
      }
      
      if (this.product.seria == "661" && this.zmianaInspiracji == false) {
        this.product.sposobotw = "KK";
      }

      if (["41", "661"].indexOf(this.product.seria) == -1) {
        this.product.automatyka = "-";
      }
      if (["21", "31", "41", "661"].indexOf(this.product.seria) == -1 && this.product.inspiracjanr == "") {
        this.product.typ = "D1";
      }
      if (["22", "32"].indexOf(this.product.seria) > -1) {
        this.product.kolor = "03";
      }
      if (this.CenaOkucia == 99999) {
        console.log("99999");
        // this.product.klamka = this.klamkifilter2[0].artnr;
      }
      if (this.zmianaWzoru == false && this.zmianaInspiracji == false) {
        this.product.klamka = this.klamkifilter2[0].artnr;
      }
    },
    "product.opcja": function() {
      this.product.samozamykacz = this.samozamykaczFilter[0].artnr;
      if (this.zmianaWzoru == false) {
        this.product.klamka = this.klamkifilter2[0].artnr;
        this.product.inoxkolor = this.$store.getters.ramkakolorfilter[0].artnr;
      }
    },
    "product.wariant": function() {},
    "product.typ": function(newval,val) {
      if(!['D1N01','D1N02','D1N03'].includes(val) || !['D1N01','D1N02','D1N03'].includes(newval))
      this.product.szyba2 = this.szybyFilter2[0].artnr
    },
    "product.szerokoscnb1": function() {},
    "product.szerokoscnb2": function() {},
    "product.wysokoscng": function() {},
    "product.szyba": function() {
      if (this.activeModel.typ == "GD") {
        this.product.inoxstrona = "1";
        // this.product.szyba = this.szybyFilter[0].artnr;
      } else if (this.product.wzor == "GF6") {
        this.product.inoxstrona = this.inoxstrona.dane[2].artnr;
      } else {
        this.product.inoxstrona = this.inoxstrona.dane[0].artnr;
      }
    },
    "product.sposobotw": function() {
      if(this.product.sposobotw=='KP' && this.product.seria==661){
        this.product.rozeta='Piersc'
      }
      if (this.zmianaWzoru == false) {
        if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaInspiracji == false) {
          this.product.pochwyty = this.pochwytyfilter[0].artnr || "";
          this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
        } else {
          if (this.product.inspiracjanr == "") {
            this.product.klamkakolor = this.activeKlamka.KOLORY_KLAMEK.trim().split(",")[0];
          }
        }
      }
      if (["KK", "KG"].indexOf(this.product.sposobotw) > -1) {
        this.product.klamka = this.klamkifilter2[0].artnr;
      }
      if (this.CenaOkucia == 99999) {
        console.log("99999");
        this.product.klamka = this.klamkifilter2[0].artnr;
        this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
      }
    },
    "product.pochwyty": function() {
      if (this.product.pochwyty.indexOf("DECOR") > 0) {
        this.product.pochwyt2 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 : "04";
        // this.product.pochwyt2 = "06";
      }
      if (this.product.pochwyty.indexOf("RAL") > 0) {
        this.product.pochwyt2 = "1003";
      }
      if (this.product.pochwyty.indexOf("DEERSTONE") > 0) {
        this.product.pochwyt2 = "1";
      }
      // console.log(this.zmianaWzoru)
      // console.log(this.zmianaInspiracji)
      // console.log(this.product.sposobotw)
      if (this.zmianaWzoru == false && this.product.seria != "60") {
        if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaInspiracji == false) {
          // console.log('dfghj')
          this.product.dlugosci = this.dlugosci[0].artnr;
          this.product.kat = this.kat[0].artnr;
          this.product.opcjepochwytu = this.opcjepochwytu[0].artnr;
          this.product.led = this.led[0].artnr || this.activeKlamka.led;
          this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
          this.product.klamka = this.klamkifilter2[0].artnr;
        }
        // }
        // if(this.zmianaWzoru==false){
        if (this.zmianaInspiracji == false) {
        }
      }
    },
    "product.dlugosci": function() {
      if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaWzoru == false && this.zmianaInspiracji == false) {
        this.product.kat = this.kat[0].artnr;
        this.product.opcjepochwytu = this.opcjepochwytu[0].artnr;
        this.product.led = this.led[0].artnr || this.activeKlamka.led;
        this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
        this.product.klamka = this.klamkifilter2[0].artnr; // wyłączone dla inspiracji
      }
    },
    "product.kat": function() {
      if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaWzoru == false && this.zmianaInspiracji == false) {
        this.product.opcjepochwytu = this.opcjepochwytu[0].artnr;
        this.product.led = this.led[0].artnr || this.activeKlamka.led;
        this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
        this.product.klamka = this.klamkifilter2[0].artnr; // wyłączone dla inspiracji
      }
    },
    "product.opcjepochwytu": function() {
      if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaWzoru == false && this.zmianaInspiracji == false) {
        this.product.led = this.led[0].artnr || this.activeKlamka.led;
        this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
        this.product.klamka = this.klamkifilter2[0].artnr; // wyłączone dla inspiracji
      }
    },
    "product.led": function() {
      if (["PP", "KP"].indexOf(this.product.sposobotw) > -1 && this.zmianaWzoru == false && this.zmianaInspiracji == false) {
        this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
        this.product.klamka = this.klamkifilter2[0].artnr; // wyłączone dla inspiracji
      }
    },
    "product.klamkakolor": function() {
      // console.log(this.zmianaInspiracji);
      // if (this.product.inspiracjanr == "") {
      if (this.zmianaInspiracji == false) {
        this.product.klamka = this.klamkifilter2[0].artnr;
      }
    },
    "product.klamka": function() {
      // this.zmianaWzoru = false;
      if (["PP", "KP"].indexOf(this.product.sposobotw) > -1) {
        this.product.pochwyty = this.activeKlamka.GRUPA;
      }
      //   if (this.klamkakolorfilter.length == 1) {
      // this.product.klamkakolor = this.klamkakolorfilter[0].artnr;
      //   }
    },
    "product.kolor1typ": function() {},
    "product.kolor2typ": function() {},
    "product.kolor3typ": function() {},
    "product.kolor4typ": function() {},
    "product.kolor5typ": function() {},
    "product.kolor6typ": function() {},
    "product.kolor7typ": function() {},
    "product.kolor": function() {
      let kolor = this.product.kolor;
      if (kolor.length == 2) {
        this.product.kolor1typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor1typ = "SKY";
        } else {
          this.product.kolor1typ = "RAL";
        }
      }
    },
    "product.kolor2": function() {
      let kolor = this.product.kolor2;
      if (kolor.length == 2) {
        this.product.kolor2typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor2typ = "SKY";
        } else {
          this.product.kolor2typ = "RAL";
        }
      }
    },
    "product.kolor3": function() {
      let kolor = this.product.kolor3;
      if (kolor.length == 2) {
        this.product.kolor3typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor3typ = "SKY";
        } else {
          this.product.kolor3typ = "RAL";
        }
      }
    },
    "product.kolor4": function() {
      let kolor = this.product.kolor4;
      if (kolor.length == 2) {
        this.product.kolor4typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor4typ = "SKY";
        } else {
          this.product.kolor4typ = "RAL";
        }
      }
    },
    "product.kolor5": function() {
      let kolor = this.product.kolor5;
      // console.log(kolor)
      if (kolor.length == 2) {
        this.product.kolor5typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor5typ = "SKY";
        } else {
          this.product.kolor5typ = "RAL";
        }
      }
    },
    "product.kolor6": function() {
      let kolor = this.product.kolor6;
      let seria = parseInt(this.product.seria);
      // if([60].includes(seria)){
      //   this.product.kolor5=kolor
      // }
      if (kolor.length == 2) {
        this.product.kolor6typ = "DEK";
      } else {
        if (kolor.substr(0, 1) == "C") {
          this.product.kolor6typ = "SKY";
        } else {
          this.product.kolor6typ = "RAL";
        }
      }
    },
    "product.kolor7": function() {
      let kolor = this.product.kolor7;
      if (kolor.length == 2) {
        this.product.kolor7typ = "DEK";
      } else if (kolor.length == 4) {
        this.product.kolor7typ = "RAL";
      } else if (kolor.length == 5 && kolor.substr(0, 1) == "C") {
        this.product.kolor7typ = "SKY";
      } else {
        this.product.kolor7typ = "ANO";
      }
    },
    "product.samozamykacz": function(newval, val) {
      console.log(newval);
      console.log(val);
      // this.product.samozamykacz = this.samozamykaczFilter[0].artnr;
      console.log(this.samkolorfilter[0].artnr);
      console.log(this.samkolorfilter[0].artnr);
      this.product.samozamykaczKolor = this.samkolorfilter[0].artnr;
      if (newval == "-") {
        this.product.samozamykaczKolor = "";
      }
    },
    "product.kierunek": function() {},
    "product.kierunki": function() {
      if(this.product.kierunki=='w'){
        this.product.progled=false
      }
      // console.log(this.kierunekfilter.filter((el) => el.artnr.indexOf(this.product.kierunki) >= 0)[0].artnr)
      // if(this.klamkakolorfilter.length==1){

      if (this.zmianaWzoru == false) {
        this.product.kierunek = this.kierunekfilter.filter((el) => el.artnr.indexOf(this.product.kierunki) >= 0)[0].artnr;
      }
    },
    "product.inoxstrona": function(newval, val) {},
    "product.inoxstrona": function(newval, val) {},
    "product.inspiracja": function(newval, val) {
      // console.log(this.inspiracje.dane[0]);
      // this.product.kolor =
      // console.log(this.inspiracje.dane.filter((el) => el.artnr == "GF7")[0].kolor);
      // this.product.kolor = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor : "04";
      // this.product.wzor=this.product.inspiracja
      // this.product.kierunek='Pz'
      // this.product.typ='D1N02'
      // this.product.szerokoscnb1='300'
      // this.product.szyba2='m'
      // { artnr: "GF7", bez: "GF07", typ: "GF", odpszyb: "GF7", odpszybkonf: "GF7" ,nowosc:true,kolor:'03',sposobotw: "KP",klamka:'P150oSK90',klamkakolor: "10304",inoxkolor:"30",szyba:'00'},
      // this.product.wariant = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].wariant ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].wariant : "S";
      // this.product.sposobotw = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].sposobotw ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].sposobotw : this.sposobotwfilter[0].artnr;
      // this.product.seria = this.product.sposobotw == "KP" ? "41" : "31";
      // this.product.klamka = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamka ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamka : this.klamkifilter2[0].artnr;
      // this.product.klamkakolor = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor ?
      //     this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].klamkakolor :
      //     (this.product.klamkakolor = this.klamkakolorfilter[0].artnr);
      // this.product.pochwyt2 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].pochwyt2 : "04";
      // this.product.kolor2 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor2 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor2 : "04";
      // this.product.kolor5 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor5 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor5 : "04";
      // this.product.kolor6 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor6 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor6 : "04";
      // this.product.kolor7 = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor7 ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor7 : "04";
      // this.product.mixz = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].mixz ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].mixz : this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].kolor7;
      // this.product.szyba = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].szyba ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].szyba : this.szybyFilter[0].artnr;
      // this.product.baza = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].baza ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].baza : "10";
      // this.product.inoxstrona = this.product.wzor == "GF6" ? this.inoxstrona.dane[2].artnr : (this.product.inoxstrona = this.inoxstrona.dane[0].artnr);
      // this.product.inoxkolor = this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].inoxkolor ? this.wzor.dane.filter((el) => el.artnr == this.product.wzor)[0].inoxkolor : this.$store.getters.ramkakolorfilter[0].artnr;
      // this.product.pochwyty=this.activeKlamka.GRUPA
      // this.product.dlugosci=this.activeKlamka.dlugosc
    },
    // "product.szyba": function () {
    //   if (this.product.szyba != "00") {
    //     this.product.inoxstrona ="3";
    //   }
    // },
  },
  data() {
    return {
      elems: [1, 2, 3, 4],
      showoptions: false,
      zmianaWzoru: false,
      zmianaInspiracji: false,
    };
  },
  mounted() {
    // if (this.product.protect == "blok" && this.product.inspiracja == "tak" ) {
    //   alert('bt')
    // }
    $("#search").keyup(function(e) {
      let s = $("#search")[0];
      // console.log(s.value)
      if (s.value >= 1) {
        console.log(this.$store);
        // this.$store.state.product.szukaj=s.value
        $(".mycolumn").hide();
        let wzory = $("#wzory .mycolumn");
        for (let i = 0; i < wzory.length; i++) {
          if (wzory[i].id.indexOf(s.value) > -1) {
            $("#" + wzory[i].id).show();
            console.log(wzory[i].id);
          }
        }
      } else {
        // this.$store.state.product.szukaj=''
        $(".mycolumn").show();
      }
    });

    // search(){
    // console.log('dfghj')
    // },

    this.$store.state.selectedwidok = "Z";
    // console.log('mounted')
    // let wzory=[]
    // if(this.product.seria=='60'){
    //   console.log('Protect')
    //   wzory=this.wzorp.dane
    // }else{
    //   wzory=this.wzor.dane
    // }
    // console.log(wzory)

    // let wzorIndex = [Math.floor(Math.random() * wzory.length)]
    // this.product.wzor=wzory[wzorIndex].artnr
    // this.product.kolekcja=wzory[wzorIndex].typ
  },
  methods: {
    handle(arg) {
      this.$store.dispatch("setActiveTab", arg);
    },
    losuj() {
      let wzory = [];
      if (this.product.protect == "blok") {
        wzory = this.wzorp.dane;
        this.product.kierunki = "w";
        this.product.kierunek = "Lw";
        this.product.klamka = "Manitoba";
        this.product.sposobotw = "KK";
        this.product.klamkakolor = "10304";
        this.product.wzor = "01";
        this.product.szyba = "00";
        this.product.kolor = "13";
        // this.product.kolor3 = "12";
        this.product.kolor7 = "12";
        // this.product.typ = "D1N08";
        this.product.lamele = "J";
        // this.product.typ = "D1N08";
        this.product.lameleilosc = 10;
        return;
      } else {
        this.product.lamele = "N";
        wzory = this.wzor.dane;
      }
      // console.log(wzory)

      // this.product.kierunek = "Pz";
      let wzorIndex = [Math.floor(Math.random() * wzory.length)];
      // console.log(wzory[wzorIndex].artnr)

      // this.product.wzor=wzory[wzorIndex].artnr
      // this.product.kolor=wzory[wzorIndex].kolor
      // if(wzory[wzorIndex].typ=='INOX'){
      //   this.product.kolekcja='PCV'
      // }else{
      //   this.product.kolekcja=wzory[wzorIndex].typ
      // }
    },
    loadcustombackground() {
      this.files = this.$refs.myFiles.files;
      let self = this;
      if (FileReader && this.files && this.files.length) {
        var fr = new FileReader();
        fr.readAsDataURL(this.files[0]);
        fr.onload = function() {
          let ImageObj = new Image();
          ImageObj.src = fr.result;
          ImageObj.onload = function() {
            // self.custombackgroundimg = ImageObj;
            EventBus.$emit("loadcustombackground", "");
            // document.getElementById('output').append(ImageObj);
          };
        };
      }
    },
    setActiveBackground(elem) {
      this.$store.commit("setActiveBackground", elem);
      this.activebackground = elem;
    },
    next() {
      console.log("a");
      // this.$store.dispatch("setPrevTab");
      // this.showIn();
      this.activeTab = "Seria";
    },
  },
  computed: {
    ...mapState({
      selectedwidok: "selectedwidok",
      backgrounds: "backgrounds",
      product: "product",
      progled: "progled",
      smart: "smart",
      inspiracje: "inspiracje",
      inspiracjetablica: "inspiracjetablica",
      wzor: "wzor",
      wzorp: "wzorp",
      kolor: "kolor",
      szyba: "szyba",
      wzorytablica: "wzorytablica",
      wzorytablicap: "wzorytablicap",
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
      klamki: "klamki",
      samozamykacz: "samozamykacz",
      wizjer: "wizjer",
      kopniak: "kopniak",
      elektrozaczep: "elektrozaczep",
      elektrozaczepr: "elektrozaczepr",
      progled: "progled",
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
      protect: "protect",
      dym: "dym",
      pochwyty: "pochwyty",
      pochwytyfilter: "pochwytyfilter",
      activeKolekcja: "activeKolekcja",
      kat: "kat",
      opcjepochwytu: "opcjepochwytu",
      kierunki: "kierunki",
    }),
    ...mapGetters({
      // selectedwidok: "selectedwidok",
      automatykafilter: "automatykafilter",
      elektrozaczepfilter: "elektrozaczepfilter",
      kierunkifilter: "kierunkifilter",
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
      kat: "kat",
      opcjepochwytu: "opcjepochwytu",
      rozety: "rozety",
      led: "led",
      //  szyba:'szyba',
      //  szyba2:'szyba2',
      wzorFilter: "wzorFilter",
      activeSotw: "activeSotw",
      activeKlamka: "activeKlamka",
      activeKolekcja: "activeKolekcja",
      showInox: "showInox",
      ramkakolorfilter: "ramkakolorfilter",
      ramkakolorfilter2: "ramkakolorfilter2",
      // ramkakolorfilter3: "ramkakolorfilter3",
      klamkakolorfilter: "klamkakolorfilter",
      wzor2Filter2: "wzor2Filter2",
      seriafilter: "seriafilter",
      seriafilterNowy: "seriafilterNowy",
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
      // activeModel2: "activeModel2",
      activeTyp2: "activeTyp2",
      pochwytyfilter: "pochwytyfilter",
      CenaOkucia: "CenaOkucia",
    }),
  },
};
</script>

<style scoped>
.bg-success {
  background: #8fcc25 !important;
  /* background: #8fcc25 !important; */
}

.przyciski {
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px;
  gap: 15px;
}

.konfigurator {
  position: relative;
  height: calc(100vh - 108px);
  /* overflow-y: auto; */
  overflow: hidden;
  width: 100%;
  /* flex: 1;
  display: flex;
  justify-content: center; */
}

.asd {
  /* background: #8fcc25 !important;
    color: white; */
  font-size: 24px;
  display: flex;
  align-items: center;

  /* flex-direction: row-reverse; */
  /* justify-content: space-between; */
  /* align-items: flex-start; */
  gap: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  min-height: 53px;
  padding: 0 15px;
  margin-bottom: 15px;
  font-weight: 600;
}

.asd img {
  /* display: none; */
  height: 20px;
  width: auto;
  /* margin-top: 5px; */
}

.asd .gd img {
  height: 24px;
  width: auto;
  /* margin-top: 5px; */
}

.scrollerheading {
  height: 53px;
  background: #eaeaea;
  box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 25%);
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  padding: 0 22px;
}

/* galeria */
.galeria {
  /* height: calc(100vh - 138px); */
  overflow: auto;
  /* padding: 15px; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 15px;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  /* scroll-snap-type: y mandatory;
  
  scroll-snap-align: start; */
}
.galeria2 {
  /* height: calc((100vh - 138px) * 4); */
  overflow: auto;
  /* padding: 15px; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 15px;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  scroll-snap-type: y mandatory;
}

.galeria::-webkit-scrollbar {
  display: none;
}

.wiersz {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 2fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}

.wiersz2 {
  display: grid;
  gap: 15px;
  grid-template-columns: 2fr 1fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}
.wiersz211 {
  display: grid;
  gap: 15px;
  grid-template-columns: 2fr 1fr 1fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}
.wiersz11 {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}
.wiersz111 {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}
.wiersz324 {
  display: grid;
  gap: 15px;
  grid-template-columns: 3fr 2.5fr 4fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}

.wiersz3 {
  display: grid;
  gap: 15px;
  grid-template-columns: 2fr 3fr;
  scroll-snap-align: start;
  /* padding-bottom: 15px; */
}

.wiersz4 {
  display: grid;
  gap: 15px;
  grid-template-columns: 3fr 2fr;
  scroll-snap-align: start;
}

.w-20 {
  max-width: 20%;
}

.w-25 {
  max-width: 25%;
}

.w-30 {
  max-width: 30%;
}

.w-40 {
  max-width: 40%;
}

.w-50 {
  max-width: 50%;
}

.item {
  background: rgb(0 0 0 / 25%);
  /* height: 400px; */
  /* transition: 0.3s ease-in-out; */
  border: 2px transparent solid;
  overflow: hidden;
}

.item:hover {
  cursor: pointer;
  border: 2px #8fcc25 solid;
}

/* .item.active { */
/* border: 2px #8fcc25 solid; */
/* } */
.item img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  max-height: calc(100vh - 138px);
  transition: 1.3s;
  transition: 2s;
}

/* .item img:hover {
  transform: scale(1.25);
  transform: scale(1.5);
} */
.btn:focus {
  outline: none;
  border-color: transparent !important;
  box-shadow: none;
}

img[data-v-1a56e76a] {
  width: 406px;
  height: 368px;
  object-fit: cover;
}

.grid {
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  /* padding-bottom: 15px; */
}

.grid2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid4 {
  grid-template-columns: repeat(4, 1fr);
}
.grid5 {
  grid-template-columns: 1fr 1.5fr 1fr;
}
.grid6 {
  grid-template-columns: 1fr 1fr 1.5fr;
}

.grid img {
  width: 100%;
  object-fit: cover;
  /* object-fit: contain; */
  /* height: 450px !important; */
  cursor: pointer;
}

.gridcustom {
  grid-template-columns: 2.117fr 1fr 1fr;
}
.gridcustom2 {
  grid-template-columns: 1.59fr 1fr 1fr;
}
.item.active {
  border: 8px solid yellowgreen;
}

/* @media only screen and (max-width: 600px) { */
@media (orientation: portrait) {
  .grid2 {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid4 {
    grid-template-columns: repeat(3, 1fr);
  }

  /* .grid {
    grid-template-columns: repeat(1fr) !important;
  } */
  .gridcustom {
    grid-template-columns: 2.117fr 1fr 1fr;
    grid-template-columns: repeat(1, 1fr);
  }
  .gridcustom2 {
    grid-template-columns: 1.59fr 1fr 1fr;
    grid-template-columns: repeat(1, 1fr);
  }
}
.item.disabled {
  cursor: no-drop;
}
.bottom {
  display:flex;
  justify-content: space-between;
  position:absolute;
  bottom:0;
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
  transition: all .5s ease-in-out;;
}
.klaudia:hover {
  opacity: 0.75;
  cursor: pointer;
}
.dafid{
  max-height: 100%;
  overflow: auto;
}
</style>
