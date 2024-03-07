<template>
  <div class="filtry">
    <!-- <pre>
      {{this.$store.getters.activeModel.bezramek}}
    </pre> -->
    <div v-for="item in scrollerdata" :key="item.artnr" class="mycolumn" :class="{ active: item.artnr == activeItem ,'dropdown-toggle': item.artnr == 'PCV'}" @click="handleitemclick(item.artnr)">
      <label v-if="item.tekst" class="caption" style="cursor: pointer" :class="{ captionnoimg: noimage }">{{ item.bez }}</label>
      <img v-else class="img-fluid" :class="item.artnr" :src="`/images/konfigurator/${folder}/${item.artnr}.png`" />
    </div>

    <div v-show="$store.state.product.kolekcja=='PCV'">
      <div class="mycolumn" v-show="$store.getters.activeKolekcja.artnr=='PCV'" v-for="item in scrollerdata" :key="item.artnr+'2'">
      <div class="mb-3" v-for="opcja in item.opcje" :key="opcja.artnr" @click="podkolekcja(opcja.artnr)" :class="{ active: opcja.artnr == $store.state.product.podkolekcja}">
        {{ opcja.bez }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  props: {
    attr: String,
    scroll: { type: Boolean, default: true },
    scrollerdata: Array,
    folder: String,
    odpszyb: String,
    noimage: Boolean,
    scroll: { type: Boolean, default: false },
    col: { type: String, default: "col-3" },
    height: { type: String, default: "400" },
    ext: { type: String, default: "jpg" },
    addmargins: { type: Boolean, default: true },
  },
  data() {
    return {
      thevalue: null,
    };
  },
  mounted() {},
  methods: {
    handleitemclick: function(val) {
      EventBus.$emit("scroller", this.attr);
      EventBus.$emit("input", this.attr);
      let self = this;
      this.thevalue = val;
      let payload = { attr: this.attr, val: this.thevalue };
      this.$store.dispatch("setProductAttribute", payload);
    },
    podkolekcja: function(val) {
      // console.log(val)
      this.$store.state.product.podkolekcja=val;
      
      // this.$store.dispatch("setProductAttribute", { attr: 'podkolekcja', val: val });
    },
  },
  computed: {
    activeItem() {
      return this.$store.state.product[this.attr];
    },
    odpszybkonf() {
      return this.$store.getters.odpszybkonf;
    },
  },
};
</script>

<style lang="css" scoped>
.active {
    border-bottom: 3px solid yellowgreen;
}
/* .active{
  border: 2px solid yellowgreen;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
} */
.filtry {
  width: 160px;
  background: #292929;
  color: white;
  border-right: 8px solid #8fcc25;
  height: calc(100vh - 108px);
  display: FLEX;
  flex-direction: COLUMN;
  gap: 15px;
  /* background: url(https://wallpapercave.com/wp/DCQewPZ.png); */
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
}
.filtry img {
  padding: 4px;
  height: 22px;
}
.GD {
  height: 25px !important;
}
.mycolumn:hover {
  cursor: pointer;
}
.mycolumn.active {
  border-bottom: 4px solid yellowgreen;
}
label {
  margin: 0;
  font-weight: 400;
}
</style>
