<!-- 首页-首页 -->
<template>
  <div class="home-index">
    <div class="indexTop"></div>
    <div class="swipeWrip">
      <Swipe />
    </div>
    <div class="swipeOne">
      <IndexSwipe />
      <SwipeNews />
    </div>
    <div class="term-box">
      <img :src="imgSrc" alt="" />
    </div>
    <SwipeList :dataLists="dataLists" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "@/components/Swipe.vue";
import IndexSwipe from "../components/IndexSwipe";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    IndexSwipe,
    SwipeNews,
    SwipeList,
  },
  data() {
    //这里存放数据
    return {
      imgSrc: require("@/images/k.png"),
      dataLists: [
        {
          id: 1,
          time: "24:00",
          title: "抢购中",
          children: [
            {
              id: 1,
              src: require("@/images/m1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 2,
              src: require("@/images/m2.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 3,
              src: require("@/images/m1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 4,
              src: require("@/images/m2.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 5,
              src: require("@/images/m1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 6,
              src: require("@/images/m2.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
          ],
        },
        {
          id: 2,
          time: "8:00",
          title: "即将开始",
          children: [
            {
              id: 1,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 2,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 3,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 4,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 5,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 6,
              src: require("@/images/m2-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
          ],
        },
        {
          id: 3,
          time: "10:00",
          title: "即将开始",
          children: [
            {
              id: 1,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 2,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 3,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 4,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 5,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 6,
              src: require("@/images/m3-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
          ],
        },
        {
          id: 4,
          time: "16:00",
          title: "即将开始",
          children: [
            {
              id: 1,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 2,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 3,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 4,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 5,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
            {
              id: 6,
              src: require("@/images/m4-1.jpg"),
              title: "实木衣柜",
              price: "￥6590",
              noPrice: "￥9360",
            },
          ],
        },
      ],
    };
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
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.home-index {
  .indexTop {
    width: 100%;
    height: 13rem;
    background-color: #f20e28;
    border-radius: 15px;
  }
  .swipeWrip {
    margin: 0 10px;
    margin-top: -2rem;

    div {
      border-radius: 1rem;
    }
  }
  .term-box {
    width: calc(100%-1rem);
    margin: 0 1rem 1rem;
    height: 17rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swipeOne {
    background-color: white;
    margin: 1rem;
    border-radius: 1rem;
  }
}
</style>