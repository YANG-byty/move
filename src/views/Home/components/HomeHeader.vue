<!--  -->
<template>
  <div class="homeHeader">
    <header class="header">
      <form action="">
        <input type="text" @click="searchFn" placeholder="鞋靴" />
        <i class="iconfont icon-sousuo"></i>
      </form>
      <div class="registerBtn">
        <a href=""><i class="iconfont icon-xiaoxi1"></i></a>
      </div>
    </header>
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
    searchFn() {
      this.$router.push("/search");
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
<style lang='less' scoped>
.homeHeader {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #f20e28;
    position: relative;
    form {
      width: 85%;
      position: relative;
      margin-left: 0.5rem;
      input {
        width: 100%;
        border-radius: 50px;
        height: 3rem;
        line-height: 3rem;
        padding-left: 1rem;
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
        width: 4.4rem;
        line-height: 3rem;
        text-align: center;
      }
    }
    .registerBtn {
      width: 15%;
      line-height: 5rem;
      a {
        display: block;
        color: #fff;
        text-align: center;
        i {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>