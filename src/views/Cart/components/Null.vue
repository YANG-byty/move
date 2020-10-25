<!-- 空空如也 -->
<template>
  <div class="">
    <div class="img">
      <img src="https://x.dscmall.cn/static/dist/img/cart-empty.png" alt="" />
    </div>
    <div class="text">您的购物车还是空空的，快去逛逛吧！</div>
    <div class="button">
      <button @click="changFn">去逛逛</button>
      <button>看看关注</button>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changFn() {
      this.$router.push("/home");
    },
  },
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
.img {
  width: 100%;
  text-align: center;
  padding-top: 6rem;
}
.text {
  text-align: center;
  font-size: 14px;
  margin-top: 1rem;
}
.button {
  text-align: center;
  margin-top: 1rem;
  button {
    width: 10rem;
    margin-right: 1rem;
    padding: 5px 1rem;
    font-size: 14px;
  }
}
</style>