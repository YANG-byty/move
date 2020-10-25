<!-- 发现 -->
<template>
  <div class="integration">
    <div class="intergrationHeader">
      <span
        @click="active(index)"
        :class="index == num ? 'active' : ''"
        v-for="(item, index) in lists"
        :key="item.id"
        >{{ item.title }}</span
      >
    </div>
    <IntegrationList :integrationDatas="integrationDatas" />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import IntegrationList from "./components/IntegrationList.vue";
import Footer from "@/components/Footer";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    IntegrationList,
  },
  data() {
    //这里存放数据
    return {
      datas: {
        page: 1,
        size: 10,
      },
      num: 0,
      lists: [
        {
          id: 1,
          title: "社区",
        },
        {
          id: 2,
          title: "店铺街",
        },
        {
          id: 3,
          title: "视频",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    integrationDatas() {
      return this.$store.state.integrationDatas;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    active(index) {
      this.num = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actGetIntegrationDatas", this.datas);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.integration {
  background-color: #efefef;
  position: absolute;
  top: 0;
  height: auto;
  .intergrationHeader {
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 4.4rem;
    display: flex;
    span {
      flex: 1;
      font-size: 16px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .active::after {
      content: "";
      position: absolute;
      display: block;
      width: 1.9rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: #fa2a29;
      left: 50%;
      margin: 0;
      transform: translateX(-50%);
      bottom: 0;
    }
  }
}
</style>