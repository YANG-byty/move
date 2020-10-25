<!--  -->
<template>
  <div class="swipe">
    <!-- <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeDatas" :key="item.swipe_id">
        <a href=""><img :src="item.swipe_img" alt="" /></a>
      </mt-swipe-item>
    </mt-swipe> -->

    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href=""><img src="@/images/s1.jpg" alt="" /></a>
        </div>
        <div class="swiper-slide">
          <a href=""><img src="@/images/s2.jpg" alt="" /></a>
        </div>
        <div class="swiper-slide">
          <a href=""><img src="@/images/s3.jpg" alt="" /></a>
        </div>
        <div class="swiper-slide">
          <a href=""><img src="@/images/s4.jpg" alt="" /></a>
        </div>
        <div class="swiper-slide">
          <a href=""><img src="@/images/s5.jpg" alt="" /></a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    // swipeDatas() {
    //   return this.$store.state.swipeDatas;
    // },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.$store.dispatch("actGetSwipeDatas");
    // console.log(this.$store.state);

    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipe {
  height: 12rem;
  width: 100%;
  .swiper-container {
    height: 100%;
    img {
      height: 12rem;
      width: 100%;
    }
  }
}
</style>