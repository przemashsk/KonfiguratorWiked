<template>
  <div id="tabsall" :class="{ fixed: fixed }" class="topMenu">
    <!-- <div v-if="activeTab == 'protect'" style="width: 160px;"></div>
    <button v-else class="btn btn-success new" @click="next">Cofnij</button> -->
    <button v-if="activeTab != 'protect'" class="btn btn-success new" @click="next">
      <span v-if="activeTab == 'Inspiracje' || activeTab == 'Model'" style="white-space: nowrap;">Zacznij od początku</span>
      <span v-else>Cofnij</span>
    </button>
    <button v-else class="btn btn-success new" @click="next" style="z-index:-1">Cofnij</button>
    <!-- <a
      v-show="product.protect != ''"
      class="btn btn-success new"
      onclick="if (confirm('Kliknij OK aby zacząć konfiguracje od początku.') == true) {
        window.location.reload()
      }"
      >Zacznij od początku</a
    > -->

    <!-- <a class="btn btn-success new" @click="handle('protect')" v-if="activeTab=='inspiracja'">Zacznij od początku</a>
      <a class="btn btn-success new" @click="handle('Model')" v-if="activeTab=='Seria'">Zmień wzór</a>
      <a class="btn btn-success new" @click="handle('Seria')" v-if="activeTab=='Naswietle'">Zmień technoligie</a> -->

    <!-- <div class="topMenuEl" style="padding:0px;"><button class="btn btn-success" @click="wizcon" id="Pokaz">Wizualizacja</button></div> -->
    <!-- <div class="topMenuEl"> -->
    <!-- <button id="stronka" class="aa btn btn-success mobile zmianastrony" style="width: 36px" @click="performSwitch">
            <i id="switch" @click="zmianastrony" style="margin-right: 0; max-width: 8px !important;" class="fa fa-refresh"></i>
      </button></div> -->
    <div class="d-flex" style="gap:15px">
      <div
      class="topMenuEl"
      v-for="tab in tabsFilter"
      :key="tab.bez"
      @click="handleClick(tab.bez)"
      :class="{
        shown: tab.shown == true,
        active: activeTab == tab.bez,
        nonactive: activeTab != tab.bez,
      }"
    >
      <p style="margin: 0" class="">{{ tab.bez2 }}</p>
    </div>
    </div>
    <!-- <button class="btn btn-secondary" @click="handle('Seria')">Dalej</button> -->
    <!-- <a class="btn btn-success new" @click="handle('Seria')" v-if="activeTab=='Model'">Przejdź do technoligii</a>
    <a class="btn btn-success new" @click="handle('Naswietle')" v-if="activeTab=='Seria'">Przejdź do naświetli</a>
    <a class="btn btn-success new" @click="handle('Kolor')" v-if="activeTab=='Naswietle'">Przejdź do kolorystyki</a> -->
    <!-- <a v-show="product.protect != '' && product.inspiracja != ''" class="btn btn-success new" @click="handle('Podsumowanie')">Przejdź do podsumowania</a> -->
    <!-- <div v-if="product.protect == '' || product.inspiracja == ''" style="width: 160px;"></div> -->
    <!-- <select
      class=""
      name=""
      v-model="activeTab"
      @change="setActiveTab"
      style="display: none"
    >
      <option :value="tab.bez" v-for="tab in tabsFilter" :key="tab.bez">
        {{ tab.bez }}
      </option>
    </select> -->
    <!-- <podsumowanie ></podsumowanie> -->
    <!-- <button  v-if="product.inspiracja != '' && activeTab!='Podsumowanie'" class="btn btn-success new" @click="prev">Dalej</button> -->
    <button  v-if="product.protect!='' && product.inspiracja != '' && activeTab!='Podsumowanie'" class="btn btn-success new" @click="prev">Dalej</button>
    <button  v-else class="btn btn-success new" @click="prev" style="z-index:-1">Dalej</button>
    
      <div v-if="product.inspiracja == 'tak'" hidden>
        <button
          style="position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 1;"
          class="btn btn-primary new"
          v-if="activeTab != 'Podsumowanie'"
          @click="handle('Podsumowanie')"
        >
          Przejdź do podsumowania
        </button>
        <button
          style="position: absolute;
    bottom: 15px;
    left: 15px;
    z-index: 1;"
          class="btn btn-info new"
          v-if="activeTab != 'Inspiracje'"
          @click="handle('Inspiracje')"
        >
          Zmień inspirację
        </button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { EventBus } from "@/event-bus.js";

import Podsumowanie from "@/components/Podsumowanie.vue";

export default {
  data() {
    return {
      fixed: false,
      // tabs:['model','kolor','szyba','okucia']
    };
  },
  components: {
    Podsumowanie,
  },
  watch: {
    activeTab() {
      let self = this;
      this.$store.commit("setActiveTab", self.activeTab);
    },
    "product.wzor": function(val) {
      if (this.szybyFilter.length == 0 && this.szybyFilter[0].artnr == "00") {
        this.$store.dispatch("manipulateTab", false);
      } else {
        this.$store.dispatch("manipulateTab", true);
      }
    },
  },
  methods: {
    handle(arg) {
      this.$store.dispatch("setActiveTab", arg);
    },
    next() {
      this.$store.dispatch("setPrevTab");
      // this.showIn();
    },
    prev() {
      this.$store.dispatch("setNextTab");
      // this.showIn();
    },
    ...mapActions({
      setNextTab: "setNextTab",
    }),
    setActiveTab() {
      let self = this;
      this.$store.commit("setActiveTab", self.activeTab);
    },
    handleClick(bez) {
      EventBus.$emit("nav", "");
      this.$store.state.activeTab = bez;
    },
    wizcon() {
      console.log("test");
      window.scrollTo(300, 130);
      const wizcon = document.getElementById("wizcon");
      wizcon.style.display == "flex" ? (wizcon.style.display = "none") : (wizcon.style.display = "flex");
    },
    zmianastrony() {
      const strona = document.getElementById("opcje2");
      strona.style.display == "block";
    },
    performSwitch() {
      this.$store.state.selectedwidok == "Z" ? (this.$store.state.selectedwidok = "W") : (this.$store.state.selectedwidok = "Z");
    },
    refresh() {
      if (confirm("Czy na pewno") == true) {
        window.location.reload();
      }
    },
  },
  computed: {
    ...mapState({
      activeTab: "activeTab",
      product: "product",
    }),
    ...mapGetters({
      tabsFilter: "tabsFilter",
      szybyFilter: "szybyFilter",
    }),
    screen() {
      return window.width;
    },
  },
  mounted() {
    let self = this;
    // window.addEventListener("scroll", function() {

    //   if (window.scrollY > 300) {
    //     self.fixed = false;
    //   } else if (window.scrollY < 100) {

    //     self.fixed = false;
    //   }
    // });
  },
};
</script>

<style scoped>
.new{
  font-size: 18px;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
* {
  font-family: "Open Sans", sans-serif;
  color: white;
}
.topMenuEl {
    white-space: nowrap;
}
.topMenu {
  /* display: flex;
  justify-content: center;
  justify-content: space-evenly;
  justify-content: space-between;
  padding: 0 30px;
  flex-wrap: wrap;
  font-size: 24px;
  height: 108px;
  align-items: center;
  border-bottom: 8px solid #8fcc25; */
  display: flex;
  -webkit-box-pack: center;
  padding: 0 30px;
  gap: 53px;
  font-size: 24px;
  height: 108px;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 8px solid #8fcc25;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  justify-content: space-between;
}
   .topMenu::-webkit-scrollbar {
  display: none;
}
.topMenuEl {
  padding: 0 5px;
  /* display: none; */
}
.topMenuEl.active {
  /* display: block; */
  border-bottom: 4px solid #8fcc25;
  /* border-radius: 17px; */
  opacity: 1;
}
.topMenuEl :hover {
  /* border-bottom: 4px solid #8FCC25; */
  cursor: pointer;
  /* border-radius: 17px; */
  opacity: 1;
}
.btn-success {
  display: flex;
  align-items: center;
  padding: 0 1em;
  background: #95c11f;
  border-radius: 8px;
  height: 41px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  /* font-size: 12px; */
  line-height: 16px;

  color: #ffffff;
}
</style>
