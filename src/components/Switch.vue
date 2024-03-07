<template>
  <div class="" id="all" style="" @click="performSwitch">
    <!-- <div class="przycisk" :class="this.$store.state.selectedwidok == 'Z' ? 'active' : ''"><i class="fa fa-home"></i> Widok zewnętrzny</div> -->
    <div class="przycisk" :class="this.$store.state.selectedwidok == 'Z' ? 'active' : ''"><i class="fa fa-home"></i> Widok z zewnątrz</div>
    <!-- <div class="przycisk" :class="this.$store.state.selectedwidok == 'W' ? 'active' : ''"><i class="fa fa-bed"></i>Widok wewnętrzny</div> -->
    <div class="przycisk" :class="this.$store.state.selectedwidok == 'W' ? 'active' : ''"><i class="fa fa-bed"></i>Widok od wewnątrz</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // state: 'on'
    };
  },
  methods: {
    performSwitch() {
      this.$store.state.selectedwidok == "Z" ? (this.$store.state.selectedwidok = "W") : (this.$store.state.selectedwidok = "Z");
    },
  },
  computed: {
    leftc() {
      return this.$store.state.selectedwidok == "Z" ? "#8fcc25 !important" : "white !important";
    },
    left() {
      return this.$store.state.selectedwidok == "Z" ? "white !important" : "#8fcc25 !important";
    },
  },

  mounted() {},
};
</script>

<style>
.przycisk {
  white-space: nowrap;
  background: #4e4e4e;
  height: 41px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  cursor: pointer;
  border: 3px solid #4e4e4e;
}
.przycisk.active {
  border: 3px solid #8fcc25;
}
#all {
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}
.p3 {
  display: inline-block;
  width: 100px;
  /* height: 40px !important; */
  text-align: center;
  /* display:flex; */
  align-items: center;
  /* margin: 30px; */
  /* margin-top: 3rem; */
  padding: 6px !important;
  /* text-transform: uppercase; */
  border-color: #8fcc25 !important;
  border-radius: 20px;
  background-color: #e8e8e8;
  color: #9b9b9b;
  margin-right: 5px;
  height: 36px;
  /* border:1px solid grey; */
  /* border:1px solid #ccc; */
}
.p {
  display: inline-block;
  width: 100%;
  min-width: 180px;
  height: 36px;
  /* height: 40px !important; */
  text-align: center;
  /* display:flex; */
  align-items: center;
  /* margin: 30px; */
  /* margin-top: 3rem; */
  padding: 6px !important;
  /* text-transform: uppercase; */
  /* border: 2px solid #8fcc25 !important; */
  border-radius: 20px;
  background-color: #8fcc25;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  /* padding:10px 10px; */
  /* border:1px solid grey; */
  /* border:1px solid #ccc; */
  /* transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
}
/* .btn{
  padding: 6px 11px !important;
      height: 36px;
} */
.p2 {
  display: inline-block;
  width: 100%;
  min-width: 180px;
  /* height: 40px !important; */
  text-align: center;
  /* display:flex; */
  align-items: center;
  /* margin: 30px; */
  /* margin-top: 3rem; */
  padding: 5px 10px;
  /* text-transform: uppercase; */
  /* border-color: #8fcc25 !important; */
  border-radius: 20px;
  /* background-color:#8fcc25 !important; */
  color: #8fcc25;
  border: 2px solid #8fcc25;
  /* opacity: 0.5; */
  margin-left: 10px;
  cursor: pointer;
  height: 36px;
}
.p2:hover {
  background-color: #8fcc25 !important;
  color: white !important;
}
.p:hover {
  background-color: #8fcc25 !important;
  color: white !important;
}
.myrow2 {
  display: flex;
  flex-wrap: wrap;
}
.fitCenter {
  margin: auto;
  width: fit-content;
}

.switch {
  transition: 0.4s;
  position: relative;
  opacity: 0.6;
  width: 30px;
  cursor: pointer;
}

[v-cloak] {
  display: none;
}

.contain {
  opacity: 0.6;
}

.contain:hover {
  opacity: 1;
}

.switch:hover {
  opacity: 1;
}
</style>
