<template>
  <div class="" style="display: inline-block; cursor: pointer">
    <input type="file" id="file2" ref="myFiles" class="btn btn-success" @change="loadcustombackground" style="display: none" />
    <label for="file" class="btn btn-success" style="height: 36px;border: 2px solid;margin-right: 1em;cursor: pointer;">Wgraj zdjęcie swojego domu</label>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {};
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
            self.$store.state.custombackgroundimg = ImageObj;
            EventBus.$emit("loadcustombackground", "");
            // document.getElementById('output').append(ImageObj);
          };
        };
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
