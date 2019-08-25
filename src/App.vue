<template>
  <div id="app">
    <top-bar></top-bar>

     <music-bar></music-bar>
    
  </div>
</template>
<script>
import MusicBar from "components/MusicBar"
import TopBar from "components/TopBar"
export default {
  name:"App",
  components:{
    MusicBar,
    TopBar
  }
}
</script>
<style lang="scss">
#app{
  overflow: hidden;
}



</style>
