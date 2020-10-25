<!-- 分页头部 -->
<template>
  <div class="CategoryHeader">
    <div class="ch-left" onclick="window.history.back()">
      <i class="iconfont icon-right-angle"></i>
    </div>
    <div class="ch-rigth">
      <form action>
        <input
          type="text"
          @click="searchFn"
          v-if="search"
          v-model="searchValue"
        />
        <input type="text" v-else />
        <i class="iconfont icon-sousuo"></i>
      </form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    search: Boolean,
    searchValue: String,
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
  methods: {
    searchFn() {
      //   this.$router.replace("/Search"); //替换当前路由
      this.$router.push("/search"); //添加新的路由，不可以前进
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
.CategoryHeader {
  width: 100%;
  height: 5rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #efefef;
  background: white;
  z-index: 99;
  .ch-left {
    width: 10%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
    i {
      font-size: 18px;
    }
  }
  .ch-rigth {
    width: 85%;
    text-align: center;
    height: 4.4rem;
    position: relative;
    margin-top: 1rem;
    form {
      input {
        border: 1px solid #ccc;
        border-radius: 1.5rem;
        height: 3rem;
        width: 100%;
        text-indent: 1rem;
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 3rem;
        color: #ccc;
      }
    }
  }
}
</style>