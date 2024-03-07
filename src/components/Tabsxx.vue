<template>
  <div id="tabsall" :class="{ fixed: fixed }" class="topMenu">
    <div @click="product.inspiracja == 'tak' ? handle('Inspiracje') : handle('Model')">
      <i class="fa-solid fa-house-chimney"></i>
    </div>
    <div class="d-flex" style="gap:15px;align-items: center;">

      <div @click="next" v-show="activeTab != 'Model'">
        <i class="bi bi-arrow-left-circle-fill"></i>
      </div>

      <div style="font-size: 40px;">{{ activeTab }}</div>

      <div @click="prev" v-show="activeTab != 'Podsumowanie'">
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div>

    </div>

    <div @click="handle('Podsumowanie')" v-if="activeTab != 'Podsumowanie'">
      <i class="fa-solid fa-eye"></i>
    </div>
    <div @click="refresh" v-else>
      <i class="fa-solid fa-arrow-rotate-left"></i>
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
i {
  color: #91c412 !important;
  font-size: 60px;
}
</style>
