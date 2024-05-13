// import macierz from "./JSON/23031.json";
import macierz from "./JSON/24011.json";
import bikolor_naswietla from "./JSON/bikolor_naswietla.json";
import SAMOZAMYKACZ_CENA from "./JSON/SAMOZAMYKACZ_CENA.JSON";
import bikolor_drzwi from "./JSON/bikolor_drzwi.json";
import klamkiIpochwyty from "./JSON/klamkiIpochwyty.json";
import klamki from "./JSON/klamki.json";
const ceny = {
  state: {
    test: "test",
    // width:1000,
    height: 2100,
  },
  actions: {},
  getters: {
    KopniakCena: (state, getters, rootState) => {
      return rootState.kopniak.dane.find((el) => el.artnr == rootState.product.kopniak).cena;
    },
    dymCena: (state, getters, rootState) => {
      if (rootState.product.seria == "60" && rootState.product.dym == "J" && (rootState.product.opcja == "rwei30" || rootState.product.opcja == "rwrc3ei30")) {
        return 220; //160
      } else {
        return 0;
      }
    },
    EzaczepCena: (state, getters, rootState) => {
      if (rootState.product.elektrozaczep == "N") {
        return 0;
      }
      let elektrozaczepOpcje = rootState.elektrozaczepOpcje.dane;
      let elektrozaczepopcja = rootState.product.elektrozaczepopcja;
      let cena = -1;
      cena = elektrozaczepOpcje.find((el) => el.artnr == elektrozaczepopcja).cena;
      // console.log(cena);
      // if (rootState.product.klamka.indexOf("x") >= 0 && rootState.product.seria != "661") {
      //   return 140;
      // } else {
      //   return 0;
      // }
      // return cena;
      if (elektrozaczepopcja.indexOf("DN") > -1 && rootState.product.seria == "41") {
        cena = cena * 3;
      }
      // else if (rootState.product.elektrozaczep == "J" && rootState.product.opcja != "rwrc3ei30") {
      //   return 260;
      // } else {
      //   return 0;
      // }
      return cena;
    },
    EzaczeprCena: (state, getters, rootState) => {
      if (rootState.product.elektrozaczepr == "J") {
        return 1620;
      } else {
        return 0;
      }
    },
    LustroCena: (state, getters, rootState) => {
      const wzor = rootState.product.wzor;
      const szyba = parseInt(rootState.product.szyba);
      const grupa = wzor.substr(0, 2);
      const numer = wzor.substr(2, 1);
      const litera = wzor.substr(3, 1);
      var PREIS = litera == "A" ? "PREIS" : "PREIS2";

      if (grupa == "RL" && [34, 35, 36, 37, 38, 39, 40].includes(szyba)) {
        return macierz.find((el) => el.PREISMATRIX == "DRZWI_DOP" && el.KLASSE1 == "ROYAL_SZYB" && el.HOEHE == szyba && el.BREITE == numer)[PREIS] || 99999;
      }
      if ([19, 20, 41].includes(szyba)) {
        PREIS = szyba === 19 ? "PREIS3" : szyba === 20 ? "PREIS4" : szyba === 41 ? "PREIS7" : NULL;

        return macierz.find((el) => el.PREISMATRIX == "DRZWI_DOD" && el.KLASSE1 == "6801" && el.KLASSE2 == "PRZESZKLENIE")[PREIS] || 99999;
      }
      // { "NUMMER": 23031, "PREISMATRIX": "DRZWI_DOP", "KLASSE1": "ROYAL_SZYB", "KLASSE2": "", "BREITE": 2, "HOEHE": 34, "PREIS": 1262, "PREIS2": 664 },
      if (rootState.product.szyba == "19" || rootState.product.baza == "19") {
        return 270; //Lustro Weneckie
      } else if (rootState.product.szyba == "20" || rootState.product.baza == "20") {
        return 110; //Reflex Grafit
      } else if (rootState.product.szyba == "41") {
        return 530; //Black
      } else {
        return 0;
      }
    },
    LustroCena2: (state, getters, rootState) => {
      if (rootState.product.typ == "D1N08") {
        return 0;
      }
      let szyba2 = rootState.product.szyba2;
      let baza = rootState.product.baza;
      let seria = parseInt(rootState.product.seria);
      let ceny = rootState.szyba2.dane;
      let cena = ceny.find((el) => el.artnr == szyba2).cena || 0;
      let cena2 = 0;
      if (["b", "g","bl"].indexOf(szyba2) > -1 && seria != 21) {
        cena = ceny.find((el) => el.artnr == szyba2).cena2 || 0;
      }

      // console.log(baza);
      // console.log(szyba2);
      // console.log(seria);
      // console.log(cena);
      // if (macierz.find((el) => el.KLASSE1 == rootState.product.wzor && el.HOEHE == seria && el.BREITE == BREITE)) {
      let wysokosc = getters.wysokosc;
      let szerokosc = getters.szerokosc;

      let wysokoscng = rootState.product.wysokoscng;
      let szerokoscnb1 = rootState.product.szerokoscnb1;
      let szerokoscnb2 = rootState.product.szerokoscnb2;
      // let cenaLustoWen = 250; //Lustro Weneckie
      let cenaLustoWen = cena;
      let szerokosccal = szerokosc;
      let doplata = 0;
      if (getters.CenaNaswietlaNB1 > 0) {
        szerokosccal += szerokoscnb1;
        doplata += ((szerokoscnb1 * wysokosc) / 1000000) * cena;
      }
      if (getters.CenaNaswietlaNB2 > 0) {
        szerokosccal += szerokoscnb2;
        doplata += ((szerokoscnb2 * wysokosc) / 1000000) * cena;
      }
      if (getters.CenaNaswietlaG > 0) {
        if (["28", "29", "08"].indexOf(szyba2) > -1) {
          if (baza == "19") {
            cena2 = ceny.find((el) => el.artnr == "w").cena;
          }
          if (baza == "20") {
            cena2 = ceny.find((el) => el.artnr == "a").cena;
          }
          doplata += ((szerokosccal * wysokoscng) / 1000000) * cena2;
        } else {
          doplata += ((szerokosccal * wysokoscng) / 1000000) * cena;
        }
      }
      return parseInt(doplata);

      if (rootState.product.typ == "D1N08") {
        return 0;
        // } else if (rootState.product.szyba2 == "w" || 1 > 0) {
      } else if (cena > 0) {
        if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 > 0) {
          //D1N07
          return parseInt((cenaLustoWen * ((getters.szerokosc + szerokoscnb1 + szerokoscnb2) * wysokoscng)) / 1000000 + (cenaLustoWen * getters.wysokosc * szerokoscnb1) / 1000000 + (cenaLustoWen * getters.wysokosc * szerokoscnb2) / 1000000);
        } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 == 0) {
          //NBL NG
          return parseInt((cenaLustoWen * (getters.szerokosc + szerokoscnb1) * wysokoscng) / 1000000 + (cenaLustoWen * getters.wysokosc * szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0) {
          //NBP NG
          return parseInt((cenaLustoWen * (getters.szerokosc + szerokoscnb2) * wysokoscng) / 1000000 + (cenaLustoWen * getters.wysokosc * szerokoscnb2) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0) {
          //NBL NBP
          return parseInt((cenaLustoWen * getters.wysokosc * szerokoscnb2) / 1000000 + (cenaLustoWen * getters.wysokosc * szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB2 == 0) {
          //NBL
          return parseInt((cenaLustoWen * getters.wysokosc * szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB1 == 0) {
          //NBP
          return parseInt((cenaLustoWen * getters.wysokosc * szerokoscnb2) / 1000000);
        } else if (getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0 && getters.CenaNaswietlaNB2 == 0) {
          //NG
          return parseInt((cenaLustoWen * getters.szerokosc * wysokoscng) / 1000000);
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    LedCena3: (state, getters, rootState) => {
      let ceny = rootState.szyba2.dane;
      let cena = ceny.find((el) => el.artnr == "o4piaskPWzL").cena;
      if (rootState.product.szyba2 == "o4piaskPWzL" && ["D1N01", "D1N02", "D1N03"].includes(rootState.product.typ))
        if (["D1N01", "D1N02"].includes(rootState.product.typ)) {
          return 3850;
        } else {
          return 3850 * 2;
        }
      else {
        return 0;
      }
    },
    LustroCena3: (state, getters, rootState) => {
      return 0;
      let cenaBlackLustoWen = 0; //Black / BlackLustro Weneckie
      if (getters.seriac == 20) {
        cenaBlackLustoWen = 790;
      } else {
        cenaBlackLustoWen = 920;
      }
      if (rootState.product.typ == "D1N08") {
        return 0;
      } else if (rootState.product.szyba2 == "g" || rootState.product.szyba2 == "b") {
        if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 > 0) {
          //D1N07
          return parseInt(
            (cenaBlackLustoWen * ((getters.szerokosc + rootState.product.szerokoscnb1 + rootState.product.szerokoscnb2) * rootState.product.wysokoscng)) / 1000000 +
              (cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000 +
              (cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000
          );
        } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 == 0) {
          //NBL NG
          return parseInt((cenaBlackLustoWen * (getters.szerokosc + rootState.product.szerokoscnb1) * rootState.product.wysokoscng) / 1000000 + (cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0) {
          //NBP NG
          return parseInt((cenaBlackLustoWen * (getters.szerokosc + rootState.product.szerokoscnb2) * rootState.product.wysokoscng) / 1000000 + (cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0) {
          //NBL NBP
          return parseInt((cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000 + (cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB2 == 0) {
          //NBL
          return parseInt((cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
        } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB1 == 0) {
          //NBP
          return parseInt((cenaBlackLustoWen * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000);
        } else if (getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0 && getters.CenaNaswietlaNB2 == 0) {
          //NG
          return parseInt((cenaBlackLustoWen * getters.szerokosc * rootState.product.wysokoscng) / 1000000);
        } else {
          return 0;
        }
      } else {
        if (rootState.product.szyba2 == "a") {
          let cenaReflexGrafit = 100; //Reflex Grafit
          if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 > 0) {
            //D1N07
            return parseInt(
              (cenaReflexGrafit * ((getters.szerokosc + rootState.product.szerokoscnb1 + rootState.product.szerokoscnb2) * rootState.product.wysokoscng)) / 1000000 +
                (cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000 +
                (cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000
            );
          } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB2 == 0) {
            //NBL NG
            return parseInt((cenaReflexGrafit * (getters.szerokosc + rootState.product.szerokoscnb1) * rootState.product.wysokoscng) / 1000000 + (cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
          } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0) {
            //NBP NG
            return parseInt((cenaReflexGrafit * (getters.szerokosc + rootState.product.szerokoscnb2) * rootState.product.wysokoscng) / 1000000 + (cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000);
          } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0) {
            //NBL NBP
            return parseInt((cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000 + (cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
          } else if (getters.CenaNaswietlaNB1 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB2 == 0) {
            //NBL
            return parseInt((cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb1) / 1000000);
          } else if (getters.CenaNaswietlaNB2 > 0 && getters.CenaNaswietlaG == 0 && getters.CenaNaswietlaNB1 == 0) {
            //NBP
            return parseInt((cenaReflexGrafit * getters.wysokosc * rootState.product.szerokoscnb2) / 1000000);
          } else if (getters.CenaNaswietlaG > 0 && getters.CenaNaswietlaNB1 == 0 && getters.CenaNaswietlaNB2 == 0) {
            //NG
            return parseInt((cenaReflexGrafit * getters.szerokosc * rootState.product.wysokoscng) / 1000000);
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }
    },
    SamozamykaczCena: (state, getters, rootState) => {      
      const samozamykacz=rootState.product.samozamykacz
      const samozamykaczKolor=rootState.product.samozamykaczKolor
      if(samozamykacz=='-'){
        return 0
      }      
      const kolor = samozamykaczKolor=='czarny'?'CZARNY':'WERT'
      
      let cena= SAMOZAMYKACZ_CENA.find((el)=>el.ARTNR==samozamykacz)[kolor]
      let wzmocnienie= SAMOZAMYKACZ_CENA.find((el)=>el.ARTNR=='W').WERT
      if(samozamykacz!='W'){
        cena+=wzmocnienie
      }   
      return cena   
      if (["rwei30", "rwrc3ei30"].indexOf(rootState.product.opcja) >= 0) {
        return 0;
      } else {
        return rootState.samozamykacz.dane.find((el) => el.artnr == rootState.product.samozamykacz).cena;
      }
    },
    WizjerCena: (state, getters, rootState) => {
      return rootState.wizjerCena[rootState.product.wizjer][getters.seriac];
    },
    BasicPrice: (state, getters, rootState) => {
      let column = getters.seriac;
      let seria = rootState.product.seria;
      const kolor = rootState.product.kolor;
      const kolor2 = rootState.product.kolor2;
      const kolor1typ = rootState.product.kolor1typ;
      const kolor2typ = rootState.product.kolor2typ;
      const kolor3typ = rootState.product.kolor3typ;
      const kolor4typ = rootState.product.kolor4typ;
      const kolor5typ = rootState.product.kolor5typ;
      const kolor6typ = rootState.product.kolor6typ;
      const wzor = rootState.product.wzor;
      const opcja = rootState.product.opcja;
      const wariant = rootState.product.wariant;
      if(wariant=='S'){
        rootState.product.kolor2typ=kolor1typ
      }
      if (seria == "22" || seria == "32");
      {
        seria = column;
      }
      let BREITE = 2;
      if (seria == "60") {
        if (opcja == "rwrc3") {
          column = 65;
          seria = 65;
        } else if (opcja == "rwei30") {
          column = 70;
          seria = 70;
        } else if (opcja == "rwrc3ei30") {
          column = 75;
          seria = 75;
        }
      }

      if (rootState.product.szyba != "00") {
        column += "s";
        BREITE = 1;
      } else {
        if (rootState.product.inoxstrona == "1" || rootState.product.inoxstrona == "2") {
          BREITE = 3;
        } else {
          BREITE = 2;
        }
      }

      let output = 0;

      let PREIS = "PREIS";
      if (rootState.product.wariant != "S" && rootState.product.wariant != "B") {
        PREIS = "PREIS2";
      }
      if (wzor.substring(0, 1) == "S") {
        // console.log(kolor1typ)
        // console.log(kolor2typ)
        // console.log(kolor)
        // console.log(kolor2)
        if ([kolor1typ, kolor2typ].includes("SKY")) {
          PREIS = "PREIS2";
        } else {
          PREIS = "PREIS";
        }
      }
      // console.log(rootState.product.wzor);
      // console.log(seria);
      // console.log(BREITE);
      if (macierz.find((el) => el.KLASSE1 == rootState.product.wzor && el.HOEHE == seria && el.BREITE == BREITE)) {
        output = macierz.find((el) => el.KLASSE1 == rootState.product.wzor && el.HOEHE == seria && el.BREITE == BREITE)[PREIS];
      } else {
        output = 999999;
      }

      // DOPŁATA ZA TERMO
      if (rootState.product.seria == "21") {
        output = parseInt(output) + 890; //ok
      }

      if (rootState.product.seria == "31") {
        output = parseInt(output) + 990;
      }
      if (rootState.product.seria == "22") {
        output = parseInt(output) + 530; //ok
      }

      if (rootState.product.seria == "32") {
        output = parseInt(output) + 540; //ok
      }

      output += getters.CenaKlasaBezpieczenstwa;
      return output;
    },
    CenaKlasaBezpieczenstwa: (state, getters, rootState) => {
      const seria = parseInt(rootState.product.seria);
      if (![80, 81, 82, 83].includes(seria)) {
        return 0;
      }
      let cena = rootState.klasaBezpieczenstwa.dane.find((el) => el.artnr == rootState.product.klasaBezpieczenstwa).cena || 0;
      console.log(cena);
      return cena;
    },
    CenaKlamka: (state, getters, rootState) => {
      rootState.promocja = false;
      const seria = parseInt(rootState.product.seria);
      let seriac = getters.seriac;
      let opcja = rootState.product.opcja;
      let seria_protect = rootState.opcja.dane.filter((el) => el.artnr == opcja)[0].seria;
      if (rootState.product.sposobotw == "KP" || rootState.product.sposobotw == "PP") return;
      if (getters.activeKlamka.typ == "KP" || getters.activeKlamka.typ == "PP") return;
      let output = 0;
      let litera = "";
      if ([20, 21, 22,23].includes(seria)) {
        litera = "D";
      } else if ([30, 31, 32].includes(seria)) {
        litera = "B";
      } else if ([41].includes(seria)) {
        litera = "C";
      } else if ([661].includes(seria)) {
        litera = "H";
      } else if ([60, 80, 81, 82, 83].includes(seria)) {
        litera = "F";
      } else {
        litera = "G";
      }
      // if ([80, 81, 82, 83].includes(parseInt(rootState.product.seria))) {
      //   litera = "H";
      // }
      let pole = 111; //pole 11,111
      if (rootState.product.klamkakolor == "10304") {
        pole = 112; //pole 12,112
        // console.log("Okucia BLACK");
      }
      // let ARTNR = rootState.product.klamka + litera;
      let ARTNR = getters.activeKlamka.KOD + litera;
      // let KOD = getters.activeKlamka.KOD;
      // console.log(ARTNR);

      if (klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole)) {
        output = klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole)["WERT"];
        // console.log(ARTNR)
      } else {
        // console.log(ARTNR);
        output = 99999;
      }

      var wkladka = 0;
      if (rootState.product.klamkakolor == "10304") {
        if (seriac == "20") {
          wkladka = 120;
        } else if (seriac == "30") {
          wkladka = 140;
        } else if (seriac == "41") {
          wkladka = 160;
        } else if (seriac == "661") {
          wkladka = 180;
        } else if (seria_protect == "60" || seria_protect == "70") {
          wkladka = 140;
        } else if (["65","75","80","81","82","83"].includes(seria_protect)) {
          wkladka = 380;
        } else {
          wkladka = 999;
        }
        // console.log(wkladka);
        // console.log("Klamka " + output);
        // console.log("Wkładka " + wkladka);
        output = output + wkladka; // Dopłata za Czarną
      }
      return output;
    },
    CenaPochwyt: (state, getters, rootState) => {
      const sposobotw = rootState.product.sposobotw;
      let seriac = parseInt(getters.seriac);
      if (sposobotw == "KK" || sposobotw == "KG") return;
      if (getters.activeKlamka.typ == "KK" || getters.activeKlamka.typ == "KG") return;
      let output = 0;
      let litera = "";
      let KOD = getters.activeKlamka.KOD || "BRAK";
      let strona = rootState.product.kierunek.substring(0, 1);
      if ([20,22].includes(seriac)) {
        litera = "D";
      } else if ([30,32].includes(seriac)) {
        litera = "B";
      } else if ([41,661].includes(seriac)) {
        litera = "C";
        // } else if (getters.seriac == 60) {
        //   litera = "F";
      } else if ([60,70].includes(seriac)){
        litera = "G";
      }
      let seria = parseInt(rootState.product.seria);

      if (rootState.product.sposobotw == "KP") {
        litera += "1";
      } else {
        litera += "2";
      }
      let GRUPA = getters.activeKlamka.GRUPA;
      let opcjepochwytu = getters.activeKlamka.opcjepochwytu;
      let cyfra = 0;
      // if (opcjepochwytu != "s" && ["ALFA", "BETA"].indexOf(GRUPA) > -1 && [21, 31, 41, 661].includes(seria)) {
      // console.log("Promocja");
      //   rootState.promocja = true;
      //   cyfra = 4;
      // } else {
      //   rootState.promocja = false;
      // }
      // console.log(rootState.promocja)

      let pole = 11 + cyfra; //pole 11,111
      if (rootState.product.klamkakolor == "10304") {
        pole = 112 + cyfra; //pole 12,112
        // console.log("Okucia BLACK");
      }
      let ARTNR = getters.activeKlamka.KOD + litera;
      // console.log(KOD);
      if (KOD.substring(0, 8) == "Pock45ps") {
        // console.log('Pochwyt Pocket 45 z czytnikiem')
        ARTNR = getters.activeKlamka.KOD + strona + litera;
      }
      // console.log(ARTNR)
      // let ARTNR = rootState.product.klamka.replace('SK','') + litera;
      // console.log(ARTNR);
      // if (klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole)) {
      if (klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole)) {
        output = klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole)["WERT"];
      } else {
        output = 99999;
      }
      // console.log("CenaPochwyt: " + output);
      if (rootState.product.klamkakolor == "10304") {
        output = output + 120; // Dopłata za Czarną
      }

      return output;
    },
    CenaKlamkaWew: (state, getters, rootState) => {
      const sposobotw = rootState.product.sposobotw;
      const klamkaWew = rootState.product.klamkaWew;
      const seriac = parseInt(getters.seriac);
      if ((seriac == 661 && klamkaWew == "Lava") || sposobotw != "KP" || rootState.product.protect == "blok" || rootState.product.plus == "tak") {
        return 0;
      }
      // console.log(sposobotw);
      let litera = "";
      let KOD = getters.activeKlamka.KOD || "BRAK";
      let strona = rootState.product.kierunek.substring(0, 1);
      if ([20,22].includes(seriac)) {
        litera = "D";
      } else if ([30,32].includes(seriac)) {
        litera = "B";
      } else if ([41, 661].includes(seriac)) {
        litera = "C";
      } else if ([60, 70].includes(seriac)) {
        litera = "G";
      }
      let cyfra = 0;

      let pole = 111 + cyfra; //pole 11,111
      if (rootState.product.klamkakolor == "10304") {
        pole = 112 + cyfra; //pole 12,112
      }
      let ARTNR = getters.activeKlamka.KOD + litera;

      KOD = klamki.find((el) => el.artnr == klamkaWew).KOD;
      // ARTNR = KOD + litera.substr(0, 1);
      ARTNR = KOD + litera;
      // console.log(litera);
      // console.log(seriac);
      // console.log(ARTNR);
      // console.log(pole);
      // console.log(klamkiIpochwyty)
      // console.log(klamkiIpochwyty.find((el) => el.ARTNR == ARTNR))
      // console.log(klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole))
      // return 1;
      return klamkiIpochwyty.find((el) => el.ARTNR == ARTNR && el.PREISFELDNR == pole).WERT || 0;
    },
    DEERSTONE: (state, getters, rootState) => {
      let output = 0;
      if (rootState.product.inoxkolor == "1" || rootState.product.inoxkolor == "2" || rootState.product.inoxkolor == "3") {
        if (macierz.find((el) => el.KLASSE2 == "DEERSTONE" && el.HOEHE == rootState.product.wzor.substring(0, 2))) {
          output = macierz.find((el) => el.KLASSE2 == "DEERSTONE" && el.HOEHE == rootState.product.wzor.substring(0, 2))["PREIS"];
        } else {
          output = 99999;
        }
        if (rootState.product.inoxstrona == "0") {
          output = output * 2;
        }
      }

      return output;
    },
    CenaAutomatyka(state, getters, rootState) {
      return rootState.automatyka.dane.find((el) => el.artnr == rootState.product.automatyka).cena || 0;
    },
    CenaAutomatycznaZasuwnica(state, getters, rootState) {
      return rootState.automatyczneZasuwnice.dane.find((el) => el.artnr == rootState.product.automatycznaZasuwnica).cena;
    },
    PriceAll(state, getters, rootState) {
      return (
        parseInt(getters.CenaAutomatycznaZasuwnica) +
        parseInt(getters.CenaProgLed) +
        parseInt(getters.CenaSmart) +
        parseInt(getters.BasicPrice) +
        parseInt(getters.CenaLamele) +
        parseInt(getters.KolorNas) +
        parseInt(getters.EzaczepCena) +
        parseInt(getters.EzaczeprCena) +
        parseInt(getters.Rozeta) +
        parseInt(getters.CenaOkucia) +
        parseInt(getters.Anoda) +
        parseInt(getters.CenaZasilacz) +
        parseInt(getters.Kolor) +
        parseInt(getters.LustroCena) +
        parseInt(getters.LustroCena2) +
        parseInt(getters.LustroCena3) +
        parseInt(getters.LedCena3) +
        parseInt(getters.SamozamykaczCena) +
        parseInt(getters.KopniakCena) +
        parseInt(getters.dymCena) +
        parseInt(getters.BikolorCena) +
        parseInt(getters.MixkolorCena) +
        parseInt(getters.CenaAutomatyka) +
        parseInt(getters.CenaKlamkaWew) +
        // parseInt(getters.DEERSTONE) +
        parseInt(getters.CenaNaswietlaG) +
        parseInt(getters.CenaNaswietlaNB1) +
        parseInt(getters.CenaNaswietlaNB2)

        // parseInt(getters.Doplata) +
        // parseInt(getters.Kolor2) +
        // parseInt(getters.CenaPrzycZwal) +
        // parseInt(getters.CenaZasAut) +
      );
    },
    MixkolorCena(state, getters, rootState) {
      if (rootState.product.wariant == "MB") {
        return 640; //ok
      } else {
        return 0;
      }
    },
    CenaZasilacz: (state, getters, rootState) => {
      if (rootState.product.automatycznaZasuwnica == "E") {
        return 0;
      }
      let zasilacze = rootState.zasilacze.dane;
      let zasilacz = rootState.product.zasilacz;
      let cena = -1;
      cena = zasilacze.find((el) => el.artnr == zasilacz).cena;
      return cena;
    },
    CenaProgLed: (state, getters, rootState) => {
      if (rootState.product.progled) {
        return 720;
        // return 1;
      } else {
        return 0;
      }
    },
    CenaSmart: (state, getters, rootState) => {
      if (rootState.product.smart) {
        return 600;
        // return 1;
      } else {
        return 0;
      }
    },
    CenaPrzycZwal: (state, getters, rootState) => {
      if (rootState.product.klamka.indexOf("x") >= 0 && rootState.product.seria == "661") {
        return rootState.product.klamkakolor == "10301" ? 280 : 300;
      } else {
        return 0;
      }
    },
    // CenaZasAut: (state, getters, rootState) => {
    //   if (rootState.product.klamka.indexOf("x") >= 0 && rootState.product.seria == "661") {
    //     return 2700;
    //   } else {
    //     return 0;
    //   }
    // },
    Rozeta: (state, getters, rootState) => {
      const rozeta = rootState.product.rozeta;
      if (rootState.product.sposobotw != "KP") {
        return 0;
      }
      if (rozeta != "STD" && rootState.product.seria == "41") {
        return rootState.rozety.dane.find((el) => el.artnr == rozeta).cena || 0;
      } else {
        return 0;
      }
    },
    CenaLamele: (state, getters, rootState) => {
      if (rootState.product.lamele == "J" && rootState.product.wzor == "01" && rootState.product.seria == "60" && rootState.product.kierunek.indexOf("w") >= 0) {
        return 50 * rootState.product.lameleilosc;
      } else {
        return 0;
      }
    },
    CenaOkucia: (state, getters, rootState) => {
      if(rootState.product.plus=='tak'){
        return 0
      }
      // console.log(getters.CenaKlamka);
      // console.log(getters.CenaPochwytKlamka);
      return rootState.product.sposobotw == "KK" || rootState.product.sposobotw == "KG" ? parseInt(getters.CenaKlamka) : parseInt(getters.CenaPochwyt) + parseInt(getters.CenaPrzycZwal);
    },
    Anoda: (state, getters, rootState) => {
      const wzor = String(rootState.product.wzor);
      const kolor7typ = rootState.product.kolor7typ;
      if (["3D1", "3D2", "3D3", "3D4"].includes(wzor)) {
        if (kolor7typ == "ANO") {
          return 1250;
        } else if (kolor7typ == "SKY") {
          return 480;
        } else if (kolor7typ == "ANO") {
          return 345;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    Kolor2: (state, getters, rootState) => {
      let HOEHE = getters.seriac;

      let cena = 0;
      let kolor1typ = rootState.product.kolor1typ;
      let kolor2typ = rootState.product.kolor2typ;
      let kolor5typ = rootState.product.kolor5typ;
      let kolor6typ = rootState.product.kolor6typ;
      let kolor7typ = rootState.product.kolor7typ;

      let wzor = rootState.product.wzor;
      let wariant = rootState.product.wariant;
      let kolor1 = rootState.product.kolor;
      let kolor2 = rootState.product.kolor2;
      let kolor5 = rootState.product.kolor5;
      let kolor6 = rootState.product.kolor6;
      if (wariant == "S" && (getters.activeModel.typ=='3D')) {
        if (kolor7typ == "ANO") {
          return 1250;
        } else {
          return 0;
        }
      }
      // let KOLOR_HT = ralsky.find((el) => el.KLASSE2 == "KOLOR_HT" && el.HOEHE == HOEHE);
      // let KOLOR_SK = ralsky.find((el) => el.KLASSE2 == "KOLOR_SK" && el.HOEHE == HOEHE);
      // let KOLOR_OS = ralsky.find((el) => el.KLASSE2 == "KOLOR_OS" && el.HOEHE == HOEHE);
      let KOLOR_HT = macierz.find((el) => el.KLASSE2 == "KOLOR_HT" && el.HOEHE == HOEHE);
      let KOLOR_SK = macierz.find((el) => el.KLASSE2 == "KOLOR_SK" && el.HOEHE == HOEHE);
      let KOLOR_OS = macierz.find((el) => el.KLASSE2 == "KOLOR_OS" && el.HOEHE == HOEHE);
      if (wariant == "S") {
        if (kolor1typ != "DEK") {
          if (KOLOR_HT) {
            if (kolor1typ == "RAL") {
              cena = KOLOR_HT["PREIS"];
            } else if (kolor1typ == "SKY") {
              cena = KOLOR_HT["PREIS3"];
            } else {
              cena = 0;
            }
          }
        } else {
          cena = 0;
        }
      } else {
        if (kolor1typ == "SKY" && kolor2typ == "SKY" && kolor5typ == "SKY" && kolor6typ == "SKY") {
          if (kolor1 == kolor2) {
            console.log("Drzwi Jedno Kolor Sky");
            if (KOLOR_HT) {
              if (kolor1typ == "RAL") {
                cena = KOLOR_HT["PREIS"];
              } else if (kolor1typ == "SKY") {
                cena = KOLOR_HT["PREIS3"];
              } else {
                cena = 0;
              }
            }
          } else {
            console.log("Drzwi Bi Kolor Sky");
            if (KOLOR_HT) {
              if (kolor1typ == "RAL") {
                cena = KOLOR_HT["PREIS2"];
              } else if (kolor1typ == "SKY") {
                cena = KOLOR_HT["PREIS4"];
              } else {
                cena = 0;
              }
            }
          }
        } else if (kolor1typ == "SKY" || kolor2typ == "SKY" || kolor5typ == "SKY" || kolor6typ == "SKY") {
          if ((kolor1typ == "SKY" || kolor2typ == "SKY") && (kolor5typ == "SKY" || kolor6typ == "SKY")) {
            if (KOLOR_HT) {
              cena = KOLOR_HT["PREIS4"];
            }
          } else if (kolor1typ == "SKY" || kolor2typ == "SKY") {
            if (kolor1 == kolor2) {
              console.log("Skrzydło Kolor Sky");
              if (KOLOR_SK) {
                cena = KOLOR_SK["PREIS3"];
              }
            } else {
              console.log("Skrzydło Kolor Sky");
              if (KOLOR_SK) {
                cena = KOLOR_SK["PREIS4"];
              }
            }
          } else if (kolor5typ == "SKY" || kolor6typ == "SKY") {
            if (kolor5 == kolor6) {
              if (KOLOR_OS) {
                console.log("Ościeżnica Kolor Sky");
                cena = KOLOR_OS["PREIS3"];
              }
            } else {
              if (KOLOR_OS) {
                console.log("Ościeżnica BiKolor Sky");
                cena = KOLOR_OS["PREIS4"];
              }
            }
          }
        } else if (kolor1typ == "RAL" || kolor2typ == "RAL" || kolor5typ == "RAL" || kolor6typ == "RAL") {
          if ((kolor1typ == "RAL" || kolor2typ == "RAL") && (kolor5typ == "RAL" || kolor6typ == "RAL")) {
            if (kolor1 == kolor2 && kolor5 == kolor6) {
              if (KOLOR_HT) {
                console.log("Drzwi Ral");
                cena = KOLOR_HT["PREIS"];
              }
            } else {
              if (KOLOR_HT) {
                console.log("Drzwi BiKolor Ral");
                cena = KOLOR_HT["PREIS2"];
              }
            }
          } else if (kolor1typ == "RAL" || kolor2typ == "RAL") {
            if (kolor1 == kolor2) {
              console.log("Skrzydło Kolor Ral");
              if (KOLOR_SK) {
                cena = KOLOR_SK["PREIS"];
              }
            } else {
              console.log("Skrzydło Kolor Ral");
              if (KOLOR_SK) {
                cena = KOLOR_SK["PREIS2"];
              }
            }
          } else if (kolor5typ == "RAL" || kolor6typ == "RAL") {
            if (kolor5 == kolor6) {
              if (KOLOR_OS) {
                console.log("Ościeżnica Kolor Ral");
                cena = KOLOR_OS["PREIS"];
              }
            } else {
              if (KOLOR_OS) {
                console.log("Ościeżnica BiKolor Ral");
                cena = KOLOR_OS["PREIS2"];
              }
            }
          }
        }
      }
      return cena;
    },
    Kolor: (state, getters, rootState) => {
      const wariant = rootState.product.wariant;
      const wzor = rootState.product.wzor;
      const kolor1typ = rootState.product.kolor1typ;
      const kolor2typ = rootState.product.kolor2typ;
      const kolor1 = rootState.product.kolor;
      const kolor2 = rootState.product.kolor2;
      const kolor5typ = rootState.product.kolor5typ;
      const kolor6typ = rootState.product.kolor6typ;
      const kolor5 = rootState.product.kolor5;
      const kolor6 = rootState.product.kolor6;
      const OS_Z = rootState.product.kolor6;
      const OS_W = rootState.product.kolor5;
      const SK_Z = rootState.product.kolor;
      const SK_W = rootState.product.kolor2;
      const OS_Z_TYP = rootState.product.kolor6typ == "TOP" ? "RAL" : rootState.product.kolor6typ;
      const OS_W_TYP = rootState.product.kolor5typ == "TOP" ? "RAL" : rootState.product.kolor5typ;
      const SK_Z_TYP = rootState.product.kolor1typ == "TOP" ? "RAL" : rootState.product.kolor1typ;
      const SK_W_TYP = rootState.product.kolor2typ == "TOP" ? "RAL" : rootState.product.kolor2typ;
      // var PREIS = litera == "A" ? "PREIS" : "PREIS2";
      var HOEHE = 0;
      var BREITE = 0;
      var OHOEHE = 0;
      var OBREITE = 0;
      var SHOEHE = 0;
      var SBREITE = 0;
      var PREIS = "PREIS";
      // console.log("kolor1typ: " + kolor1typ);
      // console.log("kolor2typ: " + kolor2typ);
      // console.log("kolor1: " + kolor1);
      // console.log("kolor2: " + kolor2);

      if (wariant == "S") {
        // if (["3D1", "3D2", "3D3", "3D4"].includes(wzor)) {
        if (["3D", "SL"].includes(getters.activeModel.typ)) {
          return 0;
        }
        HOEHE = 1;
        if (kolor1typ == "SKY") {
          // console.log("Drzwi malowane SKY");
          BREITE = 2;
        } else if (["TOP", "RAL"].includes(kolor1typ)) {
          // console.log("Drzwi malowane RAL/TOP");
          BREITE = 1;
        } else {
          return 0;
        }
      } else if (wariant == "B") {
        const O = [OS_Z_TYP, OS_W_TYP].includes("SKY") || [OS_Z_TYP, OS_W_TYP].includes("RAL");
        const S = [SK_Z_TYP, SK_W_TYP].includes("SKY") || [SK_Z_TYP, SK_W_TYP].includes("RAL");
        const D = (O == true) & (S == true);
        if (O) {
          // console.log("Ościeżnica malowana");
          PREIS = "PREIS5";
          if ([OS_Z_TYP, OS_W_TYP].includes("SKY")) {
            OBREITE = 2;
          } else {
            OBREITE = 1;
          }
          if ([OS_Z_TYP, OS_W_TYP].includes("DEK")) {
            OHOEHE = 2;
          } else if (OS_Z != OS_W) {
            OHOEHE = 3;
          } else {
            OHOEHE = 1;
          }
          // console.log("OHOEHE " + OHOEHE);
        }
        if (S) {
          // console.log("Skrzydło malowane");
          PREIS = "PREIS5";
          if ([SK_Z_TYP, SK_W_TYP].includes("SKY")) {
            SBREITE = 2;
          } else {
            SBREITE = 1;
          }
          if ([SK_Z_TYP, SK_W_TYP].includes("DEK")) {
            SHOEHE = 2;
          } else if (SK_Z != SK_W) {
            SHOEHE = 3;
          } else {
            SHOEHE = 1;
          }
        }

        if (D) {
          PREIS = "PREIS";
          // if ([OS_Z_TYP, OS_W_TYP, OS_Z_TYP, OS_W_TYP].includes("SKY")) {
          //   BREITE = 2;
          // }
        }
        HOEHE = Math.max(OHOEHE, SHOEHE);
        BREITE = Math.max(OBREITE, SBREITE);
        // if()
        /*
        console.log(kolor1 + " " + kolor2 + " " + kolor5 + " " + kolor6);
        if (kolor1 == kolor2 && kolor5 == kolor6 && kolor1 == kolor5 && kolor2 == kolor6) {
          HOEHE = 1;
        } else {
          HOEHE = 3;
        }
        if ([kolor1typ, kolor2typ, kolor6typ, kolor5typ].includes("SKY")) {
          BREITE = 2;

          if ([kolor1typ, kolor2typ].includes("SKY") && [kolor6typ, kolor5typ].includes("SKY")) {
            console.log("Drzwi malowane SKY");
            PREIS = "PREIS";
          } else if ([kolor1typ, kolor2typ].includes("SKY") && [kolor6typ, kolor5typ].includes("DEK")) {
            console.log("Drzwi malowane SKY");
            PREIS = "PREIS";
          } else if ([kolor1typ, kolor2typ].includes("SKY")) {
            console.log("Skrzydło malowane SKY");
            PREIS = "PREIS3";
            if ([kolor1typ, kolor2typ].includes("DEK")) {
              HOEHE = 2;
              console.log("Bikolor SKY/OKLEINA");
            }
          } else {
            console.log("Ościeżnica malowana SKY");
            PREIS = "PREIS5";
            if ([kolor5typ, kolor6typ].includes("DEK")) {
              HOEHE = 2;
              console.log("Bikolor SKY/OKLEINA");
            }
          }
        } else if ([kolor1typ, kolor2typ, kolor6typ, kolor5typ].includes("TOP") || [kolor1typ, kolor2typ, kolor6typ, kolor5typ].includes("RAL")) {
          BREITE = 1;
          if (([kolor1typ, kolor2typ].includes("TOP") || [kolor1typ, kolor2typ].includes("RAL")) && ([kolor6typ, kolor5typ].includes("TOP") || [kolor6typ, kolor5typ].includes("RAL"))) {
            console.log("Drzwi malowane RAL/TOP");
            PREIS = "PREIS";
          } else if ([kolor1typ, kolor2typ].includes("TOP") || [kolor1typ, kolor2typ].includes("RAL")) {
            console.log("Skrzydło malowane RAL/TOP");
            PREIS = "PREIS3";
            if ([kolor1typ, kolor2typ].includes("DEK")) {
              HOEHE = 2;
              console.log("Bikolor RAL/OKLEINA");
            }
          } else {
            console.log("Ościeżnica malowana RAL/TOP");
            PREIS = "PREIS5";
            if ([kolor5typ, kolor6typ].includes("DEK")) {
              HOEHE = 2;
              console.log("Bikolor RAL/OKLEINA");
            }
          }
        }*/
      }

      // console.log("BREITE: " + BREITE);
      // console.log("HOEHE: " + HOEHE);
      // console.log("PREIS: " + PREIS);
      if (BREITE == 0 || HOEHE == 0) {
        // console.log("Brak dopłaty za malowanie");

        return 0;
      }
      // console.log("BREITE: " + BREITE);
      // console.log("HOEHE: " + HOEHE);
      let cenka = macierz.find((el) => el.KLASSE1 == "KOLOR_HT" && el.BREITE == BREITE && el.HOEHE == HOEHE)[PREIS];
      return cenka;
    },
    KolorNas: (state, getters, rootState) => {
      const typ = rootState.product.typ;
      let BREITE = 0;
      let HOEHE = 0;
      let cena = 0;
      const kolor1typ = rootState.product.kolor1typ;
      const kolor5typ = rootState.product.kolor5typ;
      const kolor6typ = rootState.product.kolor6typ;

      const wariant = rootState.product.wariant;
      const kolor1 = rootState.product.kolor;
      const kolor2 = rootState.product.kolor2;
      const szyba2 = rootState.product.szyba2;
      const kolor5 = rootState.product.kolor5;
      const kolor6 = rootState.product.kolor6;
      if ([kolor5typ, kolor6typ, kolor1typ].includes("SKY")) {
        HOEHE = 1;
        BREITE = 2;
      } else if ([kolor5typ, kolor6typ, kolor1typ].includes("RAL") || [kolor5typ, kolor6typ, kolor1typ].includes("TOP")) {
        HOEHE = 1;
        BREITE = 1;
      }
      if (wariant == "B") {
        if ([kolor5typ, kolor6typ].includes("DEK")) {
          HOEHE = 2;
        } else {
          if (kolor5 != kolor6) {
            HOEHE = 3;
          }
        }
      }

      // let BREITE = 1;
      // if (szyba2 == "n") {
      //   BREITE = 2;
      // }
      if (BREITE == 0 || HOEHE == 0 || typ == "D1") {
        return 0;
      }

      if (rootState.product.typ != "D1" && rootState.product.typ != "D1N08" && (kolor1typ != "DEK" || kolor5typ != "DEK" || kolor6typ != "DEK" || kolor5 != kolor6)) {
        let naswietle = 99999;
        naswietle = macierz.find((el) => el.KLASSE1 == "KOLOR_HT" && el.BREITE == BREITE && el.HOEHE == HOEHE).PREIS7;

        if (["D1N01", "D1N02", "D1N04"].includes(typ)) {
          cena = naswietle;
        } else if (["D1N03", "D1N05", "D1N06"].includes(typ)) {
          cena = 2 * naswietle;
        } else if (typ == "D1N07") {
          cena = 3 * naswietle;
        }
        // console.log(cena);
        return cena;
      } else {
        return 0;
      }
    },
    BikolorCena(state, getters, rootState) {      
      let drzwi = 0;
      let SERIA = rootState.product.seria;
      if([23,'23'].includes(SERIA)){
        return
      }
      let WARIANT = rootState.product.wariant;
      let kolor = rootState.product.kolor;
      let kolorDrzwiTyp = "";
      if (kolor.lenght == "2") {
        kolorDrzwiTyp = "DEK";
      } else if (kolor.substring(0, 1) == "C") {
        kolorDrzwiTyp = "SKY";
      } else {
        kolorDrzwiTyp = "RAL";
      }
      let RAL_JEDNAKO = "PREIS";
      let RAL_BIKOLOR = "PREIS2";
      let SKY_JEDNAKO = "PREIS3";
      let SKY_BIKOLOR = "PREIS4";

      // console.log('doplata')
      // console.log(macierz)
      // { "NUMMER": 23011, "PREISMATRIX": "DRZWI_DOD", "KLASSE1": "6801", "KLASSE2": "KOLOR", "BREITE": 1, "HOEHE": 41, "PREIS": 550,
      function znajdzcene(KLASSE1, KLASSE2, BREITE, HOEHE, CENA) {
        let ceny = macierz.find((el) => el.KLASSE1 == KLASSE1 && el.KLASSE2 == KLASSE2 && el.BREITE == BREITE && el.HOEHE == HOEHE);
        // console.log(ceny[CENA])
        drzwi = ceny[CENA];
        // console.log(KLASSE1,KLASSE2,BREITE,HOEHE,CENA)
        // return
      }
      if (WARIANT == "B") {
        // if (rootState.product.kolor1typ == "DEK" && rootState.product.kolor2typ == "DEK" && rootState.product.kolor5typ == "DEK" && rootState.product.kolor6typ == "DEK") {
        //   if(rootState.product.kolor != rootState.product.kolor2){
        //     return 550
        //   }
        // }
      }
      if (WARIANT == "S") {
        if (kolorDrzwiTyp == "SKY") {
          // console.log('SKY_JEDNAKO')
          znajdzcene("6801", "KOLOR_HT", 1, SERIA, SKY_JEDNAKO);
        } else if (kolorDrzwiTyp == "RAL") {
          // console.log('RAL_JEDNAKO')
          znajdzcene("6801", "KOLOR_HT", 1, SERIA, RAL_JEDNAKO);
        } else {
          znajdzcene("6801", "KOLOR", 1, SERIA, "PREIS");
        }
      }

      // Cykl cenowy: 22051    Macierz cenowa: DRZWI_DOD
      // Klasa1: 6801    Klasa2: KOLOR_HT    Poziom: SKY_JEDNAKO
      // Maks. szer.:    1    Wysokość:     21
      // Aktualna szerokość:     1    Wysokość:     21

      if (bikolor_drzwi.find((el) => el.SERIAC == getters.seriac)) {
        drzwi = bikolor_drzwi.find((el) => el.SERIAC == getters.seriac)["PREIS"];
      } else {
        drzwi = 99999;
      }
      let naswietle = 0;
      if (rootState.product.kolor1typ == "DEK" && rootState.product.kolor2typ == "DEK" && rootState.product.kolor5typ == "DEK" && rootState.product.kolor6typ == "DEK") {
        if (rootState.product.typ != "D1" && rootState.product.typ != "D1N08") {
          if (bikolor_naswietla.find((el) => el.SERIAC == getters.seriac)) {
            naswietle = bikolor_naswietla.find((el) => el.SERIAC == getters.seriac)["PREIS"];
          } else {
            naswietle = 99999;
          }
        }

        if (rootState.product.wariant == "S" || rootState.product.wariant == "M") {
          return 0;
        }
        if (rootState.product.kolor == rootState.product.kolor2 && rootState.product.kolor5 == rootState.product.kolor6) {
          return 0;
        } else if (rootState.product.kolor != rootState.product.kolor2 && rootState.product.kolor5 == rootState.product.kolor6) {
          console.log("tutaj");

          console.log(drzwi);
          return drzwi;
        }
        return drzwi;
        console.log(drzwi);
        if (rootState.product.kolor != rootState.product.kolor2 && rootState.product.kolor5 != rootState.product.kolor6) {
          if (rootState.product.typ == "D1") {
            return drzwi;
          } else if (rootState.product.typ == "D1N08") {
            return drzwi;
          } else if (rootState.product.typ == "D1N01" || rootState.product.typ == "D1N02" || rootState.product.typ == "D1N04") {
            return drzwi + naswietle;
          } else if (rootState.product.typ == "D1N03" || rootState.product.typ == "D1N05" || rootState.product.typ == "D1N06") {
            return drzwi + 2 * naswietle;
          } else if (rootState.product.typ == "D1N07") {
            return drzwi + 3 * naswietle;
          }
        } else if (rootState.product.kolor == rootState.product.kolor2 && rootState.product.kolor5 != rootState.product.kolor6) {
          naswietle = bikolor_naswietla.find((el) => el.SERIAC == getters.seriac)["PREIS"];
          if (rootState.product.typ == "D1") {
            return naswietle;
          } else if (rootState.product.typ == "D1N08") {
            return naswietle;
          } else if (rootState.product.typ == "D1N01" || rootState.product.typ == "D1N02" || rootState.product.typ == "D1N04") {
            return naswietle + naswietle;
          } else if (rootState.product.typ == "D1N03" || rootState.product.typ == "D1N05" || rootState.product.typ == "D1N06") {
            return naswietle + 2 * naswietle;
          } else if (rootState.product.typ == "D1N07") {
            return naswietle + 3 * naswietle;
          }
        }
      } else if (rootState.product.kolor1typ == "DEK" && rootState.product.kolor2typ == "DEK" && rootState.product.kolor != rootState.product.kolor2) {
        let drzwi = bikolor_drzwi.find((el) => el.SERIAC == getters.seriac)["PREIS"];
        return drzwi;
      } else if (rootState.product.kolor5typ == "DEK" && rootState.product.kolor6typ == "DEK" && rootState.product.kolor5 != rootState.product.kolor6) {
        naswietle = bikolor_naswietla.find((el) => el.SERIAC == getters.seriac)["PREIS"];
        if (rootState.product.typ == "D1") {
          return naswietle;
        } else if (rootState.product.typ == "D1N08") {
          return naswietle;
        } else if (rootState.product.typ == "D1N01" || rootState.product.typ == "D1N02" || rootState.product.typ == "D1N04") {
          return naswietle + naswietle;
        } else if (rootState.product.typ == "D1N03" || rootState.product.typ == "D1N05" || rootState.product.typ == "D1N06") {
          return naswietle + 2 * naswietle;
        } else if (rootState.product.typ == "D1N07") {
          return naswietle + 3 * naswietle;
        }
      } else {
        return 0;
      }
    },
    widthc(state, getters, rootState) {
      let output = "";
      let board = [];
      if (this.typ == "NB") {
        board = [100, 200, 300, 400, 500];
      }
      if (this.typ == "NG") {
        board = [0, 1025, 1225, 1325, 1425, 1525, 1625, 1725, 1825, 1925, 2025];
      }
      for (let i = 0; i < board.length; i++) {
        if (this.width > board[i] && this.width <= board[i + 1]) {
          return board[i + 1];
        }
      }
    },
    heightc(state, getters, rootState) {
      let output = "";
      let board = [];
      let height = 2100;
      if (getters.activeTyp.rodzaj == "NB") {
        board = [0, 2100, 2200, 2300, 2400];
      }
      if (rootState.product.seria == "21") {
        board = [0, 2080, 2200, 2300, 2400];
      }
      if (rootState.product.seria == "60") {
        board = [0, 2072, 2200, 2300, 2400];
      }
      if (getters.activeTyp.rodzaj == "NG") {
        board = [200, 300, 400, 500];
      }

      for (let i = 0; i < board.length; i++) {
        if (this.height > board[i] && this.height <= board[i + 1]) {
          return board[i + 1];
        }
      }
    },
    CenaNaswietlaG(state, getters, rootState) {
      let seria = String(rootState.product.seria);
      let KLASSE1 = seria.substring(0, 1) + 6;
      const kodrozmiaru = rootState.product.kodrozmiaru;
      // console.log(seria);
      // console.log(kodrozmiaru);
      const width = rootState.sizecodedimensions[seria][kodrozmiaru];
      const HOEHE = parseInt(rootState.product.wysokoscng);
      const nb1 = parseInt(rootState.product.szerokoscnb1);
      const nb2 = parseInt(rootState.product.szerokoscnb2);
      let BREITE = parseInt(width);
      if (getters.CenaNaswietlaNB1) {
        BREITE += nb1;
      }
      if (getters.CenaNaswietlaNB2) {
        BREITE += nb2;
      }
      // console.log(BREITE);
      if (rootState.product.typ.indexOf("N") == -1 || seria == "22" || seria == "32") {
        return 0;
      }
      if (getters.activeTyp.rodzaj == "NBL" || getters.activeTyp.rodzaj == "NBP" || getters.activeTyp.rodzaj == "NBNB" || getters.activeTyp.rodzaj == "brak") {
        return 0;
      }
      // let szer = width + nb1 + nb2;
      if (getters.activeTyp.rodzaj == "NBNGNB") {
        if (rootState.product.typ == "D1N08") {
          if (seria == "60") {
            if (macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == rootState.product.wysokoscng)) {
              return macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == rootState.product.wysokoscng)["PREIS3"];
            } else {
              return 99999;
            }
          } else {
            if (macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == rootState.product.wysokoscng)) {
              return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == rootState.product.wysokoscng)["PREIS"];
            } else {
              return 99999;
            }
          }
        } else {
          let cena = macierz.find((el) => el.PREISMATRIX == "DRZWI_NG" && el.KLASSE1.includes(KLASSE1) && el["BREITE"] == BREITE && el["HOEHE"] == HOEHE);
          // console.log(cena);
          return cena.PREIS;
          console.log(cena);
          if (macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == width + nb1 + nb2 && el["HOEHE"] == rootState.product.wysokoscng)) {
            return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == width + nb1 + nb2 && el["HOEHE"] == rootState.product.wysokoscng)["PREIS"];
          } else {
            return 99999;
          }
        }
      }
      let cena = macierz.find((el) => el.PREISMATRIX == "DRZWI_NG" && el.KLASSE1.includes(KLASSE1) && el["BREITE"] == BREITE && el["HOEHE"] == HOEHE);
      // console.log(cena);
      return cena.PREIS;
      return cena;
      if (getters.activeTyp.rodzaj == "NBLNG") {
        return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == width + nb1 && el["HOEHE"] == rootState.product.wysokoscng)["PREIS"];
      }
      if (getters.activeTyp.rodzaj == "NBPNG") {
        return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == width + nb2 && el["HOEHE"] == rootState.product.wysokoscng)["PREIS"];
      }
      if (getters.activeTyp.rodzaj == "NG") {
        return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == width && el["HOEHE"] == rootState.product.wysokoscng)["PREIS"];
      }
    },
    CenaNaswietlaNB1(state, getters, rootState) {
      let seria = String(rootState.product.seria);
      let KLASSE1 = seria.substring(0, 1) + 6;
      const rodzaj = getters.activeTyp.rodzaj;
      const szerokoscnb1 = rootState.product.szerokoscnb1;
      // console.log(szerokoscnb1);
      const wysokosc = getters.wysokosc;
      // console.log(KLASSE1);
      // console.log(getters.wysokosc);
      if (rootState.product.typ.indexOf("N") == -1 || seria == "22" || seria == "32") {
        return 0;
      } else {
        if (rodzaj == "NG" || rodzaj == "NBP" || rodzaj == "NBPNG") {
          return 0;
        }
        if (seria == "60") {
          if (macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == szerokoscnb1)) {
            return macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == szerokoscnb1)["PREIS2"];
          } else {
            return 99999;
          }
        } else {
          let cena = macierz.find((el) => el.PREISMATRIX == "DRZWI_NB" && el.KLASSE1.includes(KLASSE1) && el["BREITE"] == szerokoscnb1 && el["HOEHE"] == wysokosc).PREIS;
          // console.log(cena);
          return cena;
          console.log(cena);
          // console.log(seria*2)
          if (macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == szerokoscnb1 && el["HOEHE"] == wysokosc)) {
            return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == szerokoscnb1 && el["HOEHE"] == wysokosc)["PREIS"];
          } else {
            return 99999;
          }
        }
      }
    },
    CenaNaswietlaNB2(state, getters, rootState) {
      let szerokoscnb2 = rootState.product.szerokoscnb2;
      let seria = String(rootState.product.seria);
      // console.log(seria);
      let KLASSE1 = seria.substring(0, 1) + 6;
      const rodzaj = getters.activeTyp.rodzaj;
      const szerokoscnb1 = rootState.product.szerokoscnb1;
      const wysokosc = getters.wysokosc;
      if (rootState.product.typ.indexOf("N") == -1 || seria == "22" || seria == "32") {
        return 0;
      }
      if (rodzaj == "NG" || rodzaj == "NBL" || rodzaj == "NBLNG") {
        return 0;
      }
      if (seria == "60") {
        if (macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == szerokoscnb2)) {
          return macierz.find((el) => el["KLASSE1"] == "6811" && el["KLASSE2"] == "PORTALE" && el["BREITE"] == szerokoscnb2)["PREIS"];
        }
        return 99999;
      } else {
        let cena = macierz.find((el) => el.PREISMATRIX == "DRZWI_NB" && el.KLASSE1.includes(KLASSE1) && el["BREITE"] == szerokoscnb2 && el["HOEHE"] == wysokosc).PREIS;
        return cena;
        if (macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == szerokoscnb2 && el["HOEHE"] == wysokosc)) {
          return macierz.find((el) => el["KLASSE1"].substring(0, 1) == seria.substring(0, 1) && el["BREITE"] == szerokoscnb2 && el["HOEHE"] == wysokosc)["PREIS"];
        } else {
          return 99999;
        }
      }
    },
  },
};
export default ceny;
//
