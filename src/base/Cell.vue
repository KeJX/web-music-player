<template>
    <div class="kjx-cell" @click="clickEvent">
        <slot name="left-icon" class="left-icon"></slot>
        <div class="value">{{value}}</div>
        <slot name="right-icon" class="right-icon"></slot>
    </div>
</template>
<script>
export default {
    name:"kjxCell",
    props:{
        value:{
            type:String,
            default:"输入你的内容"
        }
    },
    methods:{
        clickEvent(){
            this.$emit("click")
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.kjx-cell{
    @include flexCenter(row);
    .value{
        flex-grow:1;
    }
}
</style>