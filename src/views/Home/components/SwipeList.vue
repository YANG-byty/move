<!--  -->
<template>
  <div class="swipe-box">
    <MiaoSha />
    <div class="header-time-slot">
      <ul>
        <li
          :class="{ active: flag == index }"
          v-for="(value, index) in dataLists"
          @click="liFn(index)"
          :key="value.id"
        >
          <div>{{ value.time }}</div>
          <div>{{ value.title }}</div>
        </li>
      </ul>
    </div>
    <div class="swipe-list">
      <div class="swipe-warp" :style="styleobj2">
        <div
          class="swipe-item"
          v-for="item in dataLists[flag].children"
          :key="item.id"
        >
          <img class="msImg" :src="imgSrc" alt="" />
          <img :src="item.src" alt="" />
          <span class="font14">{{ item.title }}</span>
          <span class="red">{{ item.price }}</span>
          <s>{{ item.noPrice }}</s>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="styleobj"></div>
    </div>
    <div class="warp-text">查看更多秒杀商品&gt;</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MiaoSha from "./Miaosha";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    MiaoSha,
  },
  //接收父组件Index.vue传递过来的数据
  props: {
    dataLists: Array,
  },
  data() {
    //这里存放数据
    return {
      flag: 0,

      imgSrc: require("@/images/seckill-tag.png"),
      screenW: document.documentElement.clientWidth, //屏幕宽度
      scrollContentW: 700, // 滚动内容的宽度
      bgBarW: 100, // 进度条的宽度
      barW: 20, // 进度条滑块的宽度
      startX: 0, // 进度条的起点
      endX: 0, // 进度条的终点
      barMoveW: 0, // 滑块移动的距离
      contentMoveW: 0, //内容滚动的距离
      contentMove: 0, // 设置变量来存储内容第一次滚动的left值
    };
  },
  //监听属性 类似于data概念
  computed: {
    styleobj() {
      return {
        width: `${this.barW}px`,
        left: `${this.barMoveW}px`,
      };
    },
    styleobj2() {
      return {
        left: `${this.contentMove}px`,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    liFn(index) {
      // console.log(index);
      this.flag = index;
    },

    //开始触摸
    touchstartFn(e) {
      // console.log(e);
      //获取
      let touch = e.touches[0];
      this.startX = touch.pageX; //获取鼠标落点位置

      console.log(this.startX);
      // let touch = e.touches;
    },
    //触摸移动
    touchmoveFn(e) {
      let touch = e.touches[0];
      //求出移动的距离
      let moveWidth = touch.pageX - this.startX;
      // console.log(moveWidth);
      this.contentMove = moveWidth + this.contentMoveW;
      // 求出滑块移动的距离
      this.barMoveW =
        this.endX - (this.bgBarW / this.scrollContentW) * moveWidth;

      //边界值
      if (this.barMoveW <= 0) {
        this.barMoveW = 0;
      } else if (this.barMoveW >= this.bgBarW - this.barW) {
        this.barMoveW = this.bgBarW - this.barW;
      }

      if (this.contentMove >= 0) {
        this.contentMove = 0;
      } else if (this.contentMove <= this.screenW - this.scrollContentW) {
        this.contentMove = this.screenW - this.scrollContentW;
      }
    },
    touchendFn() {
      this.endX = this.barMoveW;
      this.contentMoveW = this.contentMove;
    },
    // 动态设置进度条的长度
    getBarWidth() {
      this.barW = (this.bgBarW * this.screenW) / this.scrollContentW;
    },
    bindEvent() {
      //绑定事件
      this.$el.addEventListener("touchstart", this.touchstartFn, false);
      this.$el.addEventListener("touchmove", this.touchmoveFn, false);
      this.$el.addEventListener("touchend", this.touchendFn, false);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.bindEvent();
    this.getBarWidth();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipe-box {
  margin: 0 1rem;
  background-color: white;
  margin-bottom: 10rem;
  border-radius: 1rem;
  .swipe-list {
    width: 100%;
    height: 16rem;
    overflow-x: hidden;
    position: relative;
    top: 0;
    left: 0;
    // &::-webkit-scrollbar {
    //   //隐藏滚动条
    //   display: none;
    // }
    .swipe-warp {
      width: 70rem;
      height: 16rem;
      position: absolute;
      top: 0;
      left: 0;
      .swipe-item {
        float: left;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
        .font14 {
          font-size: 1.4rem;
          font-weight: bold;
        }
        .red {
          color: red;
          font-weight: bold;
        }
        img {
          width: 10rem;
        }
        .msImg {
          width: 5rem;
          position: absolute;
        }
      }
    }
  }
  .warp-text {
    width: 100%;
    height: 4rem;
    text-align: center;
    color: #232326;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .progress {
    width: 10rem;
    height: 0.5rem;
    background-color: #ccc;
    margin: 0 auto;
    margin-bottom: 2rem;
    position: relative;
    .progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 2rem;
      height: 100%;
      background-color: coral;
    }
  }
  .header-time-slot {
    margin: 1rem;
    margin-bottom: 2rem;
    ul {
      display: flex;
      li {
        width: 25%;
        text-align: center;
        color: #555;
        height: 4.8rem;
        border-bottom: 1px solid #ccc;
        & > div:first-child {
          font-weight: bold;
        }
      }
      .active {
        color: red;
        font-size: 16px;
        border-bottom: 1px solid red;
      }
    }
  }
}
</style>