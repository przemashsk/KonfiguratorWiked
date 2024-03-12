<template>
  <nav id="page-sidebar"
                class="flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-gray-800 text-gray-200 z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0"
                aria-label="Main Sidebar Navigation">
    <div class="topMenuEl" style="padding:0px;"><button class="btn btn-success" @click="wizcon" id="Pokaz">Wizualizacja</button></div>
    <div class="topMenuEl">
      <button id="stronka" class="aa btn btn-success mobile zmianastrony" style="width: 36px" @click="performSwitch">
            <i id="switch" @click="zmianastrony" style="margin-right: 0; max-width: 8px !important;" class="fa fa-refresh"></i>
      </button></div>
    <div class="topMenuEl" v-for="tab in tabsFilter" :key="tab.bez" @click="handleClick(tab.bez)"
      :class="{
        shown: tab.shown == true,
        active: activeTab == tab.bez,
        nonactive: activeTab != tab.bez,
      }"
    >
      <p style="margin: 0" class="">{{ tab.bez2 }}</p>
    </div>

    <select
      class=""
      name=""
      v-model="activeTab"
      @change="setActiveTab"
      style="display: none"
    >
      <option :value="tab.bez" v-for="tab in tabsFilter" :key="tab.bez">
        {{ tab.bez }}
      </option>
    </select>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      fixed: false,
      // tabs:['model','kolor','szyba','okucia']
    };
  },
  watch: {
    activeTab() {
      let self = this;
      this.$store.commit("setActiveTab", self.activeTab);
    },
    "product.wzor": function (val) {
      if (this.szybyFilter.length == 0 && this.szybyFilter[0].artnr == "00") {
        this.$store.dispatch("manipulateTab", false);
      } else {
        this.$store.dispatch("manipulateTab", true);
      }
    },
  },
  methods: {
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
      console.log('test')
      window.scrollTo(300, 130);
      const wizcon=document.getElementById('wizcon')
      wizcon.style.display=='flex'
        ? wizcon.style.display='none'
        : wizcon.style.display='flex'
    },
    zmianastrony() {
      const strona = document.getElementById('opcje2')
      strona.style.display=='block';
    },
    performSwitch() {
      this.$store.state.selectedwidok == "Z"
        ? (this.$store.state.selectedwidok = "W")
        : (this.$store.state.selectedwidok = "Z");
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
    // window.addEventListener("scroll", function () {
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
</style>
