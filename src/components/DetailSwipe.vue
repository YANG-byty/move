<!--  -->
<template>
  <div class="detailSwipe">
    <!-- <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in SwipeDatas.gallery_list" :key="item.img_id">
        <a href=""><img :src="item.img_url" alt="" /></a>
      </mt-swipe-item>
    </mt-swipe> -->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in SwipeDatas.gallery_list"
          :key="item.img_id"
        >
          <img :src="item.img_url" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper"; //cnpm install swiper@4 --save
import "swiper/dist/css/swiper.css";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    SwipeDatas: Object,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
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
.swiper-container {
  width: 100%;
  height: 37.5rem;
  img {
    width: 100%;
    height: 37.5rem;
  }
}
</style>