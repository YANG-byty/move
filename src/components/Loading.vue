<!--  -->
<template>
  <div class="">
    <div class="loading">
      <span>Loading···</span>
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
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-sizing: border-box;
  border-top: 10px solid hotpink;
  position: relative;
  animation: a1 2s linear infinite;
  top: 100px;
  left: 0;
  background-color: #34495e;
  margin: 60px 80px;
}

.loading::before,
.loading::after {
  content: "";
  width: 100px;
  height: 100px;
  position: absolute;
  top: -10px;
  left: 0;
  /* 指定宽度和高度（最小/最大属性）确定元素边框 */
  box-sizing: border-box;
  border-radius: 50%;
}

.loading::before {
  border-top: 10px solid #0693b6;
  transform: rotate(120deg);
}

.loading::after {
  border-top: 10px solid orangered;
  transform: rotate(240deg);
}

.loading > span {
  position: absolute;
  width: 100px;
  height: 100px;
  color: white;
  text-align: center;
  line-height: 100px;
  animation: a2 2s linear infinite;
}

@keyframes a1 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>