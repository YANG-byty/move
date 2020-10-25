<!-- 详情页头部 -->
<template>
  <div class="DetailHeader">
    <div class="nav-bar">
      <div class="nav-bar_left">
        <i
          onclick="window.history.back()"
          class="iconfont icon-right-angle iconActive"
          style="position: absolute; left: 1rem"
          v-if="true"
        ></i>
        <i
          onclick="window.history.back()"
          class="iconfont icon-right-angle"
          v-else
        ></i>
      </div>
      <div class="nav-bar_title" v-if="show">
        <span class="active" @scroll="scrollEvent">商品</span>
        <span @click="activeFn">详情</span>
        <span @click="activeFn">评论</span>
      </div>
      <div class="nav-right">
        <i
          class="iconfont icon-draw-forward iconActive"
          style="position: absolute; right: 1rem"
          v-if="true"
        ></i>
        <i class="iconfont icon-draw-forward" v-else></i>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    activeFn() {},
    scrollEvent(e) {
      console.log(e);
    },
    // bindEvent() {
    //   this.$el.addEventListener("scroll", this.scrollEvent, false);
    // },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.bindEvent();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.DetailHeader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 4rem;
  .nav-bar {
    width: 100%;
    display: flex;
    height: 100%;
    line-height: 4rem;
    // background-color: hsla(0, 0%, 100%, 0.95);
    .nav-bar_left,
    .nav-right {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      i {
        font-size: 18px;
        font-weight: bold;
        color: #ccc;
        height: 2rem;
        line-height: 2rem;
        padding: 5px;
      }
    }
    .nav-bar_title {
      display: flex;
      flex: 3;
      span {
        width: 7.5rem;
        text-align: center;
        font-size: 15px;
      }
      .active {
        color: #f55;
        border-bottom: 2px solid #f55;
      }
    }
  }
  .iconActive {
    background-color: #888;
    border-radius: 50%;
    color: #fff !important;
  }
}
</style>