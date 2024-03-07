<template>
  <!-- <div class=""> -->
  <!-- :style="{maxHeight:height+'px'}" -->
  <div class="myrow" :class="{ kol1: kol1, kol2: kol2, kol3: kol3, kol4: kol4, kol5: kol5, scroll: scroll }">
    <!-- :class="{active:item.artnr==activeItem}" -->
    <div
      :title="item.opis ? item.opis : titlee"
      :id="item.artnr"
      v-for="item in scrollerdata"
      :key="item.artnr"
      class="mycolumn"
      :class="{ active: item.artnr == activeItem, decor: item.klasa == 'decor', sky: item.klasa == 'sky', ral: item.klasa == 'ral', top: item.klasa == 'top', ano: item.klasa == 'ano' }"
      @click="handleitemclick(item.artnr)"
    >
      <div style="position:relative;cursor: pointer" :class="{ addmargins: addmargins }" @click="handler ? handle(handler) : ''">
        <a v-if="folder == 'serie'" :href="`${item.link}`" style="position:absolute;right:0;bottom:0" class="btn btn-dark" target="_blank">Dowiedz się więcej</a>
        <!-- <a v-if="item.promo" :href="`${item.promo}`" style="position: absolute;right: 0;top: -12px;" target="_blank"><img height="100" src="/images/konfigurator/PROMO/PROMO 1PLN.png" alt="" title="Sprawdż szczegóły promocji PROMO 1 PLN"/></a>
        <a v-if="attr == 'pochwyty' && ['ALFA', 'BETA'].includes(item.artnr)" :href="`${item.promo}`" style="position: absolute;right: 0;top: -12px;" target="_blank"><img height="65" src="/images/konfigurator/PROMO/PROMO 1PLN.png" alt="" title="Sprawdż szczegóły promocji PROMO 1 PLN"/></a> -->
        <img v-if="noimage" style="display: none" />
        <!-- <img v-else-if="folder == 'Przeszklenia' && item.artnr == '00'" class="img-fluid" :src="'/images/konfigurator/Przeszklenia/pusty.png'" /> -->
        <!-- <img v-else-if="folder == 'Przeszklenia' && item.artnr == '19'" class="img-fluid" :src="`/images/konfigurator/Przeszklenia/${odpszybkonf}.${ext}`" /> -->
        <!-- <img v-else-if="folder == 'Przeszklenia'" class="img-fluid" :src="`/images/konfigurator/Przeszklenia/${odpszybkonf}_${item.artnr}.${ext}`" /> -->
        <img v-else-if="folder == 'Przeszklenia'" class="img-fluid" :src="`/images/konfigurator/Przeszklenia/${item.artnr}.${ext}`" />
        <img v-else-if="folder == 'okleiny'" class="img-fluid" :src="`/images/konfigurator/${folder}/${item.typ}/${item.artnr}.${ext}`" />
        <img v-else :class="folder == 'serie' ? 'serie' : ''" class="img-fluid" :src="`/images/konfigurator/${folder}/${item.artnr}.${ext}`" />
        <!-- <span>{{ item.artnr }}</span> -->
        <!-- <label v-if="attr != 'opcja' && attr != 'wzor' && attr != 'seria'" class="caption" style="cursor: pointer" :class="{ captionnoimg: noimage }">{{ item.bez }}</label> -->
        <!-- <label v-if="folder != 'okleiny' && attr != 'opcja' && attr != 'wzor' && attr != 'seria'" class="caption" style="cursor: pointer" :class="{ captionnoimg: noimage }">{{ item.bez }}</label> -->
        <label v-if="label" class="caption" style="cursor: pointer" :class="{ captionnoimg: noimage }">{{ item.bez }}</label>
        <label v-if="folder == 'eee'" class="caption" style="cursor: pointer" :class="{ captionnoimg: noimage }">{{ item }}</label>
        <!-- <a :href="`#${item.artnr}`">{{item.artnr}}</a> -->
      </div>
    </div>
    <!-- </div> -->
    <!-- <select class="" name="" v-model="thevalue" style="display: none">
      <option
        v-for="item in scrollerdata"
        :value="item.artnr"
        :key="item.artnr"
      >
        {{ item.bez }}
      </option>
    </select> -->
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
    handler: String,
    odpszyb: String,
    noimage: Boolean,
    label: Boolean,
    kol1: Boolean,
    kol2: Boolean,
    kol4: Boolean,
    kol3: Boolean,
    kol5: Boolean,
    titlee: String,
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
    handle(arg) {
      this.$store.dispatch("setActiveTab", arg);
    },
    handleitemclick: function(val) {
      // console.log(this.$store.state.product.protect);
      if (this.$store.state.product.protect == "") {
        this.$store.state.activeTab = "Model";
      }
      EventBus.$emit("scroller", this.attr);
      EventBus.$emit("input", this.attr);
      let self = this;
      this.thevalue = val;
      let payload = { attr: this.attr, val: this.thevalue };
      this.$store.dispatch("setProductAttribute", payload);
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
.mycolumn {
  overflow: hidden;
}
.mycolumn {
  color: lightgray;
  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
}
.decor {
  height: 77px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  background: url("/images/Natural decor.jpg");
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}
.sky {
  height: 77px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  background: url("/images/Crsytal sky color.jpg");
  background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}
.ral {
  height: 77px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  background: url("/images/Harmony Color.jpg");
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}
.top {
  height: 77px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  background: url("/images/TOP TRENDS.png");
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}
.ano {
  height: 77px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  background: url("/images/kolory anodowane.jpg");
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px !important;
  margin-bottom: 0;
}

img {
  min-width: 100%;
}
.scrollerheading {
  margin-top: 10px !important;
  /* padding:10px; */
  cursor: pointer;
  /* max-height: 600px; */
  /* max-width:800px; */
}

.addmargins {
  margin: 10px;
  padding: 0px;
}
.q {
  justify-content: space-between;
}
/* 
.scroll{
  overflow-y:auto;
  max-height:70vh;
} */
.myrow {
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-auto-rows: 40vh; */
  margin-bottom: 45px;
  /* overflow: hidden; */
  /* flex-wrap: wrap; */
  /* margin: 15px 0; */

  /* justify-content: space-between; */
}
.myrow:last-child {
  /* margin-bottom: 0; */
  /* margin-bottom: 0 !important; */
}
.kol1 {
  grid-template-columns: repeat(1, 1fr) !important;
  /* margin-bottom: 15px !important; */
}
.kol2 {
  grid-template-columns: repeat(2, 1fr) !important;
  /* margin-bottom: 15px !important; */
}
.kol3 {
  grid-template-columns: repeat(3, 1fr);

  /* margin-bottom: 15px !important; */
}
@media (orientation: portrait) {
  .btn-success[data-v-bdda1ea4] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 1em;
    background: #95c11f;
    border-radius: 8px;
    height: 50px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 21px;
    color: #ffffff;
  }
  .mycolumn[data-v-1a56e76a] {
    color: gray;
    font-weight: 700 !important;
    font-size: x-large;
  }
  .active[data-v-1a56e76a] {
    border: 4px #8fcc25 solid;
  }
  .decor,
  .ral,
  .sky {
    height: 125px;
  }
  .kol3 {
    grid-template-columns: repeat(1, 1fr) !important;

    /* margin-bottom: 15px !important; */
  }
  .kol2 {
    grid-template-columns: repeat(1, 1fr) !important;
    /* margin-bottom: 15px !important; */
  }
}

.kol4 {
  /* grid-template-columns: repeat(4, 1fr) !important; */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 263px), 1fr));
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 263px), 24%));
  /* grid-template-columns: repeat(auto-fit,minmax(min(100%,332px),332px)); */

  /* margin-bottom: 15px !important; */
}
.kol5 {
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(auto-fit,minmax(min(100%,217px),217px)); */
  /* grid-template-columns: repeat(auto-fit,minmax(min(100%,262px),262px)); */
  /* margin-bottom: 15px !important; */
}

.grid {
  display: grid;
}

.scroller-item:hover {
  box-shadow: #999 0px 0px 2px;
}

.active {
  border: 2px #8fcc25 solid;
  /* color: #8fcc25; */

  box-shadow: 2px 2px 5px #8fcc25 !important;
  /* border-radius: 20px; */
  /* padding: 10px; */
}

.caption {
  /* font-size:.9em; */
  /* margin-bottom:0px; */
  text-align: center;
  display: block;
  font-weight: 400;
}
@media (min-width: 1921px) {
  .col5k {
    flex: 0 0 12.5% !important; /*100*/
    max-width: 12.5% !important; /*183*/
    cursor: pointer;
    /* margin:auto; */
  }
}
@media (min-width: 1900px) {
  .col5k {
    flex: 0 0 183px !important; /*100*/
    max-width: 174px !important; /*183*/
    cursor: pointer;
    /* margin:auto; */
  }
}
@media (min-width: 1370px) {
  .col5k {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    flex: 0 0 283px !important;
    max-width: 168px !important; /*26*/
    /* max-width: 16% !important; 26 */
    max-width: 23.9% !important; /*26*/
    cursor: pointer;
    /* margin:auto; */
  }
}
@media (max-width: 1440px) {
  .col5k {
    flex: 0 0 283px !important;
    max-width: 145px !important; /*26*/
    cursor: pointer;
    /* margin:auto; */
  }
}
.col4k {
  flex: 0 0 25% !important;
  max-width: 22% !important;
}

/* @media(max-width: 1299px){
.col5k{
flex: 0 0 33% !important;
max-width: 33%px !important;
cursor: pointer;
}
} */
/* .col4k{
flex: 0 0 25% !important;
max-width: 25% !important;
}

.col3k{
flex: 0 0 33% !important;
max-width: 33% !important;
}

.col2k{
flex: 0 0 50% !important;
max-width: 50% !important;
} */

/* @media(max-width: 1800px){
  .mycolumn{
    flex:20% !important;
    max-width:20% !important;
  }
}
@media(max-width: 1600px){
  .mycolumn{
    flex:25% !important;
    max-width:25% !important;
  }
}*/

.captionnoimg {
  padding: 0;
  margin: -2px;
}
.addmargins img {
  max-height: calc((100vh - 116px - 3 * 15px - 4 * 10px) / 2);
  object-fit: scale-down;
  /* aspect-ratio: 1 / 1; */
}
img.serie {
  transform-origin: 25% 60%;
  transition: 2s;
}
img.serie:hover {
  /* transform: scale(1.5); */
}
</style>
