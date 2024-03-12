<template>
  <div class="myrow" id="wizcon" style="transition:1s;opacity:1;position:relative;padding:0 2.5rem;">
    <div :style="{width:widthtc+'px'}" style="transition:1s;"></div>
    <v-stage :config="{width:widthtc,height:600,draggable:false}">
      <!-- <v-stage :config="{width:widthtc,height:heightc,draggable:false}"> -->
      <drzwi></drzwi>
    </v-stage>
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
    drzwi
  },
  data() {
    return {
      // grubosc:20,
      // gruboscback:10,
      height: 600,
      width: 300,
      back: false,
      extraheight: 0
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
    }
  },
  methods: {
    fadeIn() {
      let self = this;
      document.getElementById("wizcon").style.transition = "0.3s";
      document.getElementById("wizcon").style.opacity = 0;
      setTimeout(function() {
        document.getElementById("wizcon").style.transition = "0.3s";
      }, 200);

      setTimeout(function() {
        document.getElementById("wizcon").style.opacity = 1;
      }, 400);
    },
    handl44eScroll() {
      if (window.innerWidth < 600) {
        return;
      }
      if (window.scrollY > 100 ){document.getElementById("masthead").style.display="none";}

      // if (window.scrollY > 400) {
      //   this.extraheight = 300;
      // } else if (window.scrollY > 8000) {
      //   this.extraheight = 600;
      // } 
      else {
        this.extraheight = 0;
        document.getElementById("masthead").style.display = "block";
      }
    }
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
      product: "product"
    }),
    wysokoscng() {
      let wys = parseInt(this.$store.state.product.wysokoscng);
      if (wys==200){return 110}
      else if (wys==300){return 140}
      else if (wys==400){return 170}
      else if (wys==500){return 200}

      else return wys=0
      //return parseInt(this.$store.state.product.wysokoscng);
    },
    szerokoscnb1() {
      let wys = parseInt(this.$store.state.product.szerokoscnb1);
      if (wys==200){return 110}
      else if (wys==300){return 140}
      else if (wys==400){return 170}
      else if (wys==500){return 200}

      else return wys=0
      //return parseInt(this.$store.state.product.wysokoscng);
    },
    szerokoscnb2() {
      let wys = parseInt(this.$store.state.product.szerokoscnb2);
      if (wys==200){return 110}
      else if (wys==300){return 140}
      else if (wys==400){return 170}
      else if (wys==500){return 200}

      else return wys=0
      // return parseInt(this.$store.state.product.szerokoscnb2);
    },
    heightc() {
      let HEIGHT = 600;
      if (this.product.typ == "D1N04" || this.product.typ == "D1N05" || this.product.typ == "D1N06" || this.product.typ == "D1N07") {
        return HEIGHT + this.wysokoscng;
      } else {
        return HEIGHT;
      }
    },
    widthtc() {
      let HEIGHT = 600;
      let WIDTH  = 300;
      if (this.product.typ == "D1N01") 
      {
        return WIDTH + this.szerokoscnb1;
      }
      else if (this.product.typ == "D1N02") 
      {
        return WIDTH + this.szerokoscnb2;
      }
      else if (this.product.typ == "D1N03") 
      {
        return WIDTH + this.szerokoscnb1+ this.szerokoscnb2;
      }
      else if (this.product.typ == "D1N04")
      {
        return (WIDTH)*(HEIGHT/(HEIGHT+this.wysokoscng));
      }
      else if (this.product.typ == "D1N05")
      {
        return (WIDTH + this.szerokoscnb1)*(HEIGHT/(HEIGHT+this.wysokoscng));
      }
      else if (this.product.typ == "D1N06")
      {
        return (WIDTH + this.szerokoscnb2)*(HEIGHT/(HEIGHT+this.wysokoscng));
      } 
      else if (this.product.typ == "D1N07")
      {
        return (WIDTH + this.szerokoscnb1+ this.szerokoscnb2)*(HEIGHT/(600+this.wysokoscng));
      } 
      else 
      {
        return WIDTH;
      }

      // if (this.product.typ == "D1N06" ||  this.product.typ == "D1N07") 
      // {
      //   // return widthtc=widthtc*0.9;
      // }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
