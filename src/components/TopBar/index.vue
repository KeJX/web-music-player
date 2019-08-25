<template>
    <div class="topBar">
        <Kjx-cell id="topBar-content">
            <i class="iconfont icon-erji left-icon" slot="left-icon"></i>
           <input slot="center" type="text" class="fake-search" placeholder="搜索音乐">
           <i class="iconfont icon-erji left-icon" slot="right-icon"></i>
        </Kjx-cell>
    </div>
</template>

<script>
import KjxCell from "@/base/Cell"
export default {
    name:"TopBar",
    components:{
        KjxCell
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/variable";
    .topBar{
        background-color: $main-color;
        padding:0 14px;
       #topBar-content{
           height: 46px;
           .left-icon{
               font-size: 20px;
               color:#fff;
           }
           .fake-search{
               text-indent: 32px;
               margin-left: 20px;
               padding:4px;
               border-radius: 10px;
               width:100%;
           }
       }
    }
</style>