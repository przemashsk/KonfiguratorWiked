<template>
  <div id="tabsall" :class="{ fixed: fixed }" class="topMenu">
    <div v-show="activeTab == 'protect' || activeTab == 'inspiracja' || activeTab == 'plus'"></div>

    <div
      style="display:flex;gap:15px;
    align-items: center;"
    >
      <a target="_blank" :class="activeTab == 'protect' || activeTab == 'inspiracja' || activeTab == 'plus' ? 'NaLewo' : ''" href="https://wiked.pl"><img width="145" height="47" src="/images/Wiked_LOGO_KONTRA_RGB.png" alt="Logo"/></a>
      <div @click="refresh" v-show="activeTab != 'protect' && activeTab != 'inspiracja' && activeTab != 'plus'" title="Zacznij od początku">
        <i class="fa-solid fa-house-chimney"></i>
      </div>
      <div @click="product.inspiracja == 'tak' ? handle('Inspiracje') : handle('Model')" v-show="activeTab != 'protect' && activeTab != 'inspiracja' && activeTab != 'plus'" title="Zmień wzór">
        <i class="fa-solid fa-arrow-rotate-left"></i>
      </div>
      <div @click="next" v-show="activeTab != 'protect' && activeTab != 'inspiracja'&& activeTab != 'plus' && activeTab != 'Model'" :class="activeTab == 'Model' || activeTab == 'inspiracja' ? 'transparent' : ''">
        <!-- <i class="bi bi-arrow-left-circle-fill"></i> -->
        <a :href="`#` + activeTab"><i class="bi bi-arrow-left-circle-fill" title="Powrót"></i></a>
      </div>
    </div>
    <!-- <button v-if="activeTab != 'protect'" class="btn btn-success new" @click="next">
      <span v-if="activeTab == 'Inspiracje' || activeTab == 'Model'" style="white-space: nowrap;">Zacznij od początku</span>
      <span v-else>Cofnij</span>
    </button>
    <button v-else class="btn btn-success new" @click="next" style="z-index:-1">Cofnij</button> -->
    <div class="d-flex noscrolbar" style="gap:15px;align-items:center;overflow-x:auto">
      <div
        class="topMenuEl"
        v-for="tab in tabsFilter"
        :key="tab.bez"
        @click="handleClick(tab.bez)"
        :id="tab.bez"
        :class="{
          shown: tab.shown == true,
          active: activeTab == tab.bez,
          nonactive: activeTab != tab.bez,
        }"
      >
        <p style="margin: 0" class="">{{ tab.bez2 }}</p>
      </div>

      <!-- <div style="font-size: 40px;" v-show="activeTab != 'protect' && activeTab != 'inspiracja'">{{ activeTab }}</div> -->
    </div>
    <div style="display:flex;gap:15px;align-items: center;">
      <div @click="prev" v-show="activeTab != 'protect' && activeTab != 'inspiracja' && activeTab != 'plus'" :class="activeTab == 'Podsumowanie' ? 'transparent' : ''">
        <a :href="`#` + activeTab"><i class="bi bi-arrow-right-circle-fill" title="Przejdź dalej"></i></a>
      </div>
      <!-- <div v-show="activeTab != 'protect' && activeTab != 'inspiracja'">
        <a href="https://wiked.pl/promo-1-pln/" target="_blank">
          <img src="/images/konfigurator/PROMO/ikona.png" alt="" title="Sprawdż szczegóły promocji PROMO 1 PLN" width="50">
        </a>
      </div> -->
      <div @click="handle('Podsumowanie')" v-if="activeTab != 'Podsumowanie'" v-show="activeTab != 'protect' && activeTab != 'inspiracja' && activeTab != 'plus'">
        <!-- <i class="fa-solid fa-eye"></i> -->
        <i class="fa-solid fa-file-circle-check" title="Przejdź do podsumowania"></i>
      </div>
      <!-- <div v-show="activeTab != 'protect' && activeTab != 'inspiracja'" class="transparent">
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div> -->
      <!-- <div v-show="activeTab == 'Podsumowanie'" class="transparent">
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div> -->
    </div>
    <!-- <button  v-if="product.protect!='' && product.inspiracja != '' && activeTab!='Podsumowanie'" class="btn btn-success new" @click="prev">Dalej</button>
    <button  v-else class="btn btn-success new" @click="prev" style="z-index:-1">Dalej</button>     -->
    <div v-show="activeTab == 'protect' || activeTab == 'inspiracja' || activeTab == 'plus'"></div>
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
      if (confirm("Kliknij OK aby zacząć od początku") == true) {
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
    window.addEventListener("scroll", function() {
      // console.log(window.scrollY);

      if (window.scrollY > 300) {
        self.fixed = false;
      } else if (window.scrollY < 100) {
        // console.log('mniej niż 100');

        self.fixed = false;
      }
    });
  },
};
</script>

<style scoped>
.new {
  font-size: 18px;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
* {
  /* font-family: "Open Sans", sans-serif; */
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
  padding: 0 15px;
  /* gap: 53px; */
  font-size: 24px;
  height: 108px;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 8px solid #8fcc25;
  /* overflow-x: auto; */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  justify-content: space-between;
  position: relative;
}
.NaLewo {
  position: absolute;
  left: 15px;
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
i {
  color: #91c412 !important;
  font-size: 50px;
}
i.fa-eye {
  color: #91c412 !important;
  font-size: 56px;
}
.transparent i {
  color: transparent !important;
}
.noscrolbar::-webkit-scrollbar {
  display: none;
}
</style>
