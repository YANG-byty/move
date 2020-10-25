<!--  -->
<template>
  <div class="goodlist">
    <GoodListHeader />
    <div class="loading-d" v-if="this.$store.state.goodLists == ''">
      <Loading />
    </div>
    <div v-else>
      <GoodListMain :goodLists="goodLists" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GoodListHeader from "./components/GoodListHeader";
import GoodListMain from "@/components/GoodListMain";
import Loading from "@/components/Loading";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    GoodListHeader,
    GoodListMain,
    Loading,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    goodLists() {
      return this.$store.state.goodLists;
    },
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
    // console.log(this.$store.state);
    this.$store.state.goodLists = "";
    this.$store.dispatch("actGetGoodLists", this.$route.params.cid);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.goodlist {
  background-color: #efefef;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>