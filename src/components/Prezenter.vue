<template>
  <div class="">
    
    <div class="przyciski">
      <div class="przycisk">
        <input type="file" id="file" ref="myFiles" @change="loadcustombackground" style="display: none" />
        <label v-if="this.$store.state.product.protect=='dom'" style="font-weight: unset;margin: 0;" for="file">Wgraj zdjęcie swojego domu</label>
        <label v-else style="font-weight: unset;margin: 0;" for="file">Wgraj zdjęcie swojego mieszkania</label>
      </div>

      <div v-if="this.$store.state.product.protect=='dom'" class="przycisk" onclick="document.getElementById('opcje2').style.display = 'flex'">
        Zmień tło
      </div>
    </div>
    <div id="output"></div>
    <!-- <myselect style="margin-right:1em"></myselect> -->

    
    <v-stage ref="stage" :config="{ width: 690, height: 520, draggable: false }" @mousedown="handleStageMouseDown" @wheel="zoom">
      <v-layer id="tlo">
        <v-image
          :config="{
            image: backgroundimage,
            height: 520,
            width: (520 / backgroundimage.height) * backgroundimage.width,
          }"
          id="tloimage"
        ></v-image>
      </v-layer>
      <drzwi :turnable="true" :dragprop="dragbool" :width="width" :height="height" :xprop="activebackground.x" :yprop="activebackground.y" :scalexprop="activebackground.scalex" :scaleyprop="activebackground.scaley"> </drzwi>
    </v-stage>
    <div
    v-if="this.$store.state.product.protect=='dom'"
      id="opcje2"
      style="display: none;justify-content: center;justify-content: center;display: flex;position: relative;bottom: 104px;margin-bottom: -87px;background: whitesmoke;width: fit-content;margin-left: auto;margin-right: auto;border-radius: 10px;-webkit-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);-moz-box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);box-shadow: 5px 5px 11px 0px rgba(0, 0, 0, 0.75);"
    >
      <div id="opcje" style="display: inline-flex;width: 110px;height: 110px;padding: 10px;" class="myoption" v-bind:key="index + 'a'" v-for="(elem, index) in backgrounds.filter((el)=>el.dom!=true)" @click="setActiveBackground(elem)">
        <!--Tło {{index+1}} --><img onclick="document.getElementById('opcje2').style.display = 'none'" class="img-fluid" :src="elem.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import drzwi from "@/components/Drzwi copy.vue";
// import drzwi from "@/components/Drzwi.vue";
import { EventBus } from "@/event-bus.js";

export default {
  watch: {
    activebackground: function() {
      this.loadbackground();
    },
  },
  components: {
    drzwi,
  },
  props: {
    // width:Number,
    // height:Number,
    mobile: { type: Number, default: 1 },
  },
  data() {
    return {
      width: 1025 / 4,
      height: 2080 / 4,
      backgroundimage: "",
      scalexbuf: 1,
      scaleybuf: 1,
      dragbool: true,
      transformbool: true,
      zoombool: false,
    };
  },
  methods: {
    loadcustombackground() {
      
      this.files = this.$refs.myFiles.files;
      let self = this;
      if (FileReader && this.files && this.files.length) {
        var fr = new FileReader();
        fr.readAsDataURL(this.files[0]);
        fr.onload = function() {
          let ImageObj = new Image();
          ImageObj.src = fr.result;
          ImageObj.onload = function() {
            self.backgroundimage = ImageObj;
            // self.custombackgroundimg = ImageObj;
            // EventBus.$emit("loadcustombackground", "");
            // document.getElementById('output').append(ImageObj);
          };
        };
      }
    },
    setActiveBackground(elem) {
      this.$store.commit("setActiveBackground", elem);
      // this.activebackground = elem;
    },
    loadbackground() {
      let imgObject = new Image();
      let self = this;
      // this.activebackground=this.$store.state.backgrounds[3]
      imgObject.src = this.activebackground.url;
      // imgObject.src = this.$store.state.backgrounds[2].url;
      imgObject.onload = () => {
        self.backgroundimage = imgObject;
      };
    },
    handleStageMouseDown(e) {
      if (!this.transformbool) {
        return;
      }

      if (e.target === e.target.getStage() || e.target.attrs.id == "tloimage") {
        this.updateTransformer("detach");

        return;
      }

      this.updateTransformer("");
    },
    updateTransformer(mode) {
      const transformerNode = this.$children[0].$children[1].$refs.transformer.getStage();
      const stage = transformerNode.getStage();
      //  const selectedNode = stage.findOne('.' + 'D1');
      const selectedNode = stage.findOne("." + "D1");

      if (mode == "detach") {
        transformerNode.detach();
        transformerNode.getLayer().batchDraw();

        return;
      }

      transformerNode.attachTo(selectedNode);
      transformerNode.getLayer().batchDraw();
    },
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
  },
  mounted() {
    this.$store.state.product.protect=='dom'?this.setActiveBackground(this.$store.state.backgrounds[4]):this.setActiveBackground(this.$store.state.backgrounds[0])
    
      // this.activebackground=this.$store.state.backgrounds[3]
    this.loadbackground();
    EventBus.$on("loadcustombackground", (payload) => {
      this.backgroundimage = this.$store.state.custombackgroundimg;
      this.transformbool = true;
      this.dragbool = true;
      this.updateTransformer();
    });
  },
  computed: {
    ...mapState({
      backgrounds: "backgrounds",
      activebackground: "activebackground",
      custombackgroundimg: "custombackgroundimg",
    }),
  },
};
</script>

<style lang="css" scoped>
.przyciski {
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  gap: 15px;
}
</style>
