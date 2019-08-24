<template>
  <div id="app">
    
    <div id="musicbar-container">
      <music-bar></music-bar>
    </div>
  </div>
</template>
<script>
import MusicBar from "components/MusicBar"
export default {
  name:"App",
  components:{
    MusicBar
  }
}
</script>
<style lang="scss">
#app{
  overflow: hidden;
}
#musicbar-container{
  position:absolute;
  bottom:0;
  width:100%;
}
</style>
