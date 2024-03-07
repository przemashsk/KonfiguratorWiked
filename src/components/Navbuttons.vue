<template>
  <transition name="fade" tag="div">
    <div
      class="column"
      style="display: flex; justify-content: center; padding: 20px;"
      v-if="activeTab == 'Podsumowanie'"
    >
      <customimagebutton
        class="mobile"
        @click="prev"
        v-if="activeTab == 'Podsumowanie'"
      ></customimagebutton>
      <myselect
        class="mobile"
        v-if="activeTab == 'Podsumowanie'"
        style="margin-right: 1em"
      ></myselect>
      <div
        class="btn btn-light"
        style="
          border: 2px solid #d4d4d4;
          margin-right: 20px;
          background-color: #c6c6c6;
        "
        v-if="activeTab != 'Seria'"
        @click="next"
      >
        Cofnij
      </div>
      <div
        class="btn btn-success"
        @click="prev"
        v-if="activeTab != 'Podsumowanie'"
      >
        Dalej
      </div>
      <!-- <pdfbutton v-if="activeTab == 'Podsumowanie'"></pdfbutton> -->
      <pdf v-if="activeTab == 'Podsumowanie'"/>
      <!-- <button @click="this.generateReport()">rtyuik</button> -->
    </div>
    <div
      style="display: flex; justify-content: center; padding: 20px;align-items:center; gap:10px;"
      v-if="activeTab != 'Podsumowanie'"
    >
      <customimagebutton
        class=""
        @click="prev"
        v-if="activeTab == 'Podsumowanie'"
      ></customimagebutton>
      <myselect
        @click="prev"
        v-if="activeTab == 'Podsumowanie'"
        style="margin-right: 1em"
      ></myselect>
      <div
        class="btn btn-light"
        style="
          border: 2px solid #d4d4d4;
          margin-right: 20px;
          background-color: #c6c6c6;
        "
        v-if="activeTab != 'Seria'"
        @click="next"
      >
        Cofnij
      </div>
      <div
        class="btn btn-success"
        @click="prev"
        v-if="activeTab != 'Podsumowanie'"
      >
        Dalej
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import pdf from "@/components/pdf.vue";
import Myselect from "@/components/Myselect.vue";
import Navbuttons from "@/components/Navbuttons.vue";
import Customimagebutton from "@/components/customimagebutton.vue";
import { EventBus } from "@/event-bus.js";

export default {
  components: { Myselect, Navbuttons, Customimagebutton ,pdf},
  data() {
    return {
      show: true,
    };
  },
  methods: {
    next() {
      this.$store.dispatch("setPrevTab");
      this.showIn();
    },
    prev() {
      this.$store.dispatch("setNextTab");
      this.showIn();
    },
    showIn() {
      this.show = false;
      let self = this;
      setTimeout(function () {
        self.show = true;
      }, 400);
    },
  },
  mounted() {
    EventBus.$on("nav", (payload) => {
      this.showIn();
    });
  },
  computed: {
    ...mapState({
      activeTab: "activeTab",
    }),
  },
};
</script>

<style scoped>
.pezyciski > div {
  /* display:block; */
  margin-top: 10px;
  margin-bottom: 10px;
  /* border-top: 1px solid  #c2c2c2;  */
  padding: 5px;
  /* justify-content: right !important; */
  /* text-align: right; */
  /* float: right; */
  /* position:f; */
  /* right: 0; */
}
.btn:focus {
  outline: unset;
  /* color:red; */
}
.btn-light {
  border-color: gray !important;
  background-color: white !important;
  color: grey;
  border-radius: 20px;
  padding-left: 35px;
  padding-right: 35px;
  float: right;
}
.btn-light:hover {
  background-color: grey !important;
  color: white !important;
}
.btn-success {
  border: 2px solid #8fcc25;
  background-color: white !important;
  color: #8fcc25;
  border-radius: 20px;
  padding-left: 35px;
  padding-right: 35px;
  float: right;
}
.btn-light {
  border: 2px solid #d4d4d4 !important;
  color: #d4d4d4;
}
.btn-light:hover {
  background-color: #d4d4d4 !important;
}
.btn-success:hover {
  border-color: #8fcc25 !important;
  background-color: #8fcc25 !important;
  color: white !important;
}
</style>
