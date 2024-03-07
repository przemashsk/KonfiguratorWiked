<template>
  <div class="myrow" id="wizcon" style="transition:1s;opacity:1;position:relative;">
    <div :style="{ width: widthtc + 'px' }" style="transition:1s;">
      <v-stage :config="{ width: widthtc, height: 2080 * 0.25, draggable: false, zoombool: true }">
        <!-- <v-stage :config="{width:widthtc,height:heightc,draggable:false}"> -->
        <drzwi></drzwi>
      </v-stage>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import drzwi from "@/components/Drzwi.vue";
// import oscieznica from '@/components/Oscieznicakonva.vue';
// import skrzydlo from '@/components/Skrzydlo.vue';

export default {
  components: {
    drzwi,
  },
  data() {
    return {
      // grubosc:20,
      // gruboscback:10,
      height: 2080 * 0.25,
      width: 1025 * 0.25,
      back: false,
      extraheight: 0,
    };
  },
  watch: {
    "product.wzor": function() {
      this.fadeIn();
    },
    "product.szyba": function() {
      this.fadeIn();
    },
    selectedwidok: function() {
      this.fadeIn();
    },
  },
  methods: {
    zoom: function(e) {
      if (this.zoombool == true) {
        let scaleBy = 1.1;
        let stage = this.$refs.stage.getStage();
        e.evt.preventDefault();
        var oldScale = stage.scaleX();
        var mousePointTo = {
          x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
          y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
        };
        var newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        console.log(newScale);

        if (newScale < 0.75) {
          newScale = oldScale;
        }

        stage.scale({
          x: newScale,
          y: newScale,
        });

        var newPos = {
          x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
          y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
        };
        stage.position(newPos);
        stage.batchDraw();
      }
    },
    fadeIn() {
      // let self = this;
      // document.getElementById("wizcon").style.transition = "0s";
      // document.getElementById("wizcon").style.opacity = 0;
      // setTimeout(function() {
      //   document.getElementById("wizcon").style.transition = "0.3s";
      // }, 100);

      // setTimeout(function() {
      //   document.getElementById("wizcon").style.opacity = 1;
      // }, 100);
    },
    handl44eScroll() {
      if (window.innerWidth < 600) {
        return;
      }
      if (window.scrollY > 100) {
        document.getElementById("masthead").style.display = "none";
      }

      // if (window.scrollY > 400) {
      //   this.extraheight = 300;
      // } else if (window.scrollY > 8000) {
      //   this.extraheight = 600;
      // }
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    // if (document.getElementById("content")) {
    //   document.getElementById("content").style.marginTop = "10px";
    //   document.getElementById("content").style.paddingTop = "10px";
    // }
  },
  mounted() {
    this.fadeIn();
  },
  computed: {
    ...mapState({
      selectedwidok: "selectedwidok",
      product: "product",
    }),
    wysokoscng() {
      let wys = parseInt(this.$store.state.product.wysokoscng);
      return wys * 0.25;
    },
    szerokoscnb1() {
      let wys = parseInt(this.$store.state.product.szerokoscnb1);
      return wys * 0.25;
    },
    szerokoscnb2() {
      let wys = parseInt(this.$store.state.product.szerokoscnb2);
      return wys * 0.25;
    },
    heightc() {
      let HEIGHT = 2080 * 0.25;
      if (this.product.typ == "D1N04" || this.product.typ == "D1N05" || this.product.typ == "D1N06" || this.product.typ == "D1N07") {
        return HEIGHT + this.wysokoscng;
      } else {
        return HEIGHT;
      }
    },
    widthtc() {
      let HEIGHT = 2080 * 0.25;
      let WIDTH = 1025 * 0.25;
      if (this.product.typ == "D1N01") {
        return WIDTH + this.szerokoscnb1;
      } else if (this.product.typ == "D1F01") {
        return WIDTH + this.szerokoscnb1;
      } else if (this.product.typ == "D1N02") {
        return WIDTH + this.szerokoscnb2;
      } else if (this.product.typ == "D1N03") {
        return WIDTH + this.szerokoscnb1 + this.szerokoscnb2;
      } else if (this.product.typ == "D1N04") {
        return WIDTH * (HEIGHT / (HEIGHT + this.wysokoscng));
      } else if (this.product.typ == "D1N05") {
        return (WIDTH + this.szerokoscnb1) * (HEIGHT / (HEIGHT + this.wysokoscng));
      } else if (this.product.typ == "D1N06") {
        return (WIDTH + this.szerokoscnb2) * (HEIGHT / (HEIGHT + this.wysokoscng));
      } else if (this.product.typ == "D1N07") {
        return (WIDTH + this.szerokoscnb1 + this.szerokoscnb2) * (HEIGHT / (2080 * 0.25 + this.wysokoscng));
      } else if (this.product.typ == "D1N08") {
        return (WIDTH + this.szerokoscnb1 + this.szerokoscnb2) * (HEIGHT / (2080 * 0.25 + this.wysokoscng));
      } else {
        return WIDTH;
      }

      // if (this.product.typ == "D1N06" ||  this.product.typ == "D1N07")
      // {
      //   // return widthtc=widthtc*0.9;
      // }
    },
  },
};
</script>

<style lang="css" scoped>
div#wizcon {
    z-index: -5;
}
</style>
