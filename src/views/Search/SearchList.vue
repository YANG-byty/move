<!-- 搜索结果页面 -->
<template>
  <div class="">
    <SearchList :searchValue="searchValue" @click="salesNum" />
    <div class="searchMain">
      <GoodListMain :goodLists="searchList" :dataNull="dataNull" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SearchList from "../GoodList/components/GoodListHeader";
import GoodListMain from "@/components/GoodListMain";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    SearchList,
    GoodListMain,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    searchList() {
      return this.$store.state.searchList;
    },
    data() {
      return {
        keywords: this.$route.query.keywords,
        page: 1,
        size: 10,
      };
    },
    searchValue() {
      return this.$route.query.keywords;
    },
    dataNull() {
      return this.$store.state.dataNull;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollEvent() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 设备/屏幕高度
      let scrollObj = document.documentElement; // 滚动区域
      let scrollTop = scrollObj.scrollTop; // div 到头部的距离
      let scrollHeight = scrollObj.scrollHeight; // 内容的总高度
      //滚动条到底部的条件
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        //   // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
        setTimeout(() => {
          this.data.page++;
          this.$store.dispatch("actGetSearchList", this.data);
        }, 1000);
      }
    },
    salesNum(data) {
      // console.log(data);
      this.searchList = data;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actGetSearchList", this.data);
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("scroll", this.scrollEvent);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
</style>