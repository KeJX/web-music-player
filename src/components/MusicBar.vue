<template>
  <div class="audiobar">
    <audio
      ref="audio"
      :src="`${publicPath}music/test.mp3`"
      @timeupdate="_updateTime"
      @canplay="_readyToPlay"
    ></audio>

    <div class="audiobar-mini">
      <kjx-progress class="progress" :percent="percentage" @changePercent="changePercent" />
      <img :src="`${publicPath}test/music.jpg`" class="music-img" />
      <div class="music-info">
        <span class="music-name">{{ "白色羽毛"}}</span>
        <span class="singer-name">{{ "芮恩"}}</span>
      </div>
      <i class="control-btn" :class="controlBtnClass" @click="tooggleAudioState"></i>
      <i class="iconfont icon-liebiao list-btn" @click="_toggleMusicList"></i>
    </div>

    <transition name="list">
      <div class="music-list" v-show="isListShow"  >
        <kjx-cell class="play-order van-hairline--bottom" :value="'顺序播放(20)'">
          <i class="iconfont icon-xunhuan" slot="left-icon"></i>
          <i class="iconfont icon-shanchu" slot="right-icon"></i>
        </kjx-cell>

        <kjx-scroll id="list-scroll" ref="list">
          <div class="content">
            <kjx-cell
              class="list-item van-hairline--bottom"
              v-for="(item,i) in list"
              :key="i"
              :value="item"
              
            >
              <i class="iconfont icon-shengyin" slot="left-icon"></i>
              <i class="iconfont icon-shanchu" slot="right-icon"></i>
            </kjx-cell>
          </div>
        </kjx-scroll>
        <kjx-cell :value="`关闭`" class="close-btn van-hairline--top" @click="_toggleMusicList"></kjx-cell>
      </div>
    </transition>
  </div>
</template>
<script>
import kjxProgress from "../base/Progress";
import kjxScroll from "../base/Scroll";
import kjxCell from "../base/Cell";
export default {
  components: {
    kjxProgress,
    kjxScroll,
    kjxCell
  },
  created() {},
  mounted() {
    // 获取audio
    this.audio = this.$refs.audio;

    // 更新list里面的内容的高度
    // this.$refs.list.refresh()
  },
  data() {
    return {
      // audio
      publicPath: process.env.BASE_URL,
      audio: null,
      isPlay: false,
      currentTime: 0,
      totalTime: 0,

      // LIST
      isListShow: false,
      list: [
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang",
        "daoxiang"
      ]
    };
  },
  computed: {
    controlBtnClass() {
      return {
        iconfont: true,
        "icon-zanting": !this.isPlay,
        "icon-bofang": this.isPlay
      };
    },
    percentage() {
      if (this.totalTime !== 0) return this.currentTime / this.totalTime;
      return 0;
    }
  },
  watch: {},
  methods: {
    tooggleAudioState() {
      if (this.isPlay) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlay = !this.isPlay;
    },
    changePercent(percent) {
      this.audio.currentTime = this.totalTime * percent;
    },
    _updateTime(e) {
      let target = e.target;
      this.currentTime = target.currentTime;
    },
    _readyToPlay(e) {
      let target = e.target;
      this.totalTime = target.duration;
    },
    _toggleMusicList() {
      console.log(1);
      this.isListShow = !this.isListShow;
    }
  }
};
</script>
<style lang="scss">



.audiobar {
  .music-list {
    .play-order {
      .value {
        margin-left: 20px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "../assets/scss/_variable.scss";
@import "../assets/scss/_mixin.scss";
$list-height: 400PX;
$list-info-height: 40PX;

$list-item-height: 40PX;

$list-close-btn-height: 40PX;
.list-enter-active,
.list-leave-active{
  transition: all .5s;
}

.list-enter,
.list-leave-to
{
  transform: translateY($list-height);
}

.list-enter-to,
.list-leave{
  transform:translateY(0);
}


.audiobar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 15px #cecdcd;
  .audiobar-mini {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    z-index: $bar_index;

    .progress {
      position: absolute;
      top: -2px;
    }

    .music-img {
      display: inline-block;
      flex: 0 0 60px;
      height: 60px;
      object-fit: cover;
    }

    .music-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
      margin-left: 20px;
      .music-name {
        margin-bottom: 10px;
      }
      .singer-name {
        font-size: 14px;
      }
    }

    .control-btn,
    .list-btn {
      display: inline-block;
      flex: 0 0 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 30px;
      margin-right: 10px;
    }
    .control-btn {
      // margin-right: -120px;
    }
    .list-btn {
      font-size: 25px;
    }
  }

  .music-list {
    position: absolute;
    z-index: $list_index;
    height: $list-height;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;

    .play-order {
      padding: 0 16px;
      font-size: 16px;
      height: $list-info-height;
      .iconfont {
        font-size: 20px;
      }

      .list-info {
        flex: 1 0 50px;
        text-indent: 30px;
      }
    }

    #list-scroll {
      height: $list-height - $list-info-height - $list-close-btn-height;
      overflow: hidden;
      padding: 0 20px;
      .list-item {
        @include flexCenter(row);
        height: $list-item-height;

        .iconfont {
          color: $main-color;
        }
        .icon-shengyin {
          margin-right: 10px;
        }
      }
    }

    .close-btn {
      height: $list-close-btn-height;
      position: absolute;
      width: 100%;
      text-align: center;
    }
  }
}
</style>

