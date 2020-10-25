<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <div class="msImg"><img src="@/images/ms.png" alt="" /></div>
    <div class="ms">
      距结束还剩
      <span>{{ dd }}</span>
      <i>:</i>
      <span>{{ hh }}</span>
      <i>:</i>
      <span>{{ mm }}</span>
      <i>:</i>
      <span>{{ ss }}</span>
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
    return {
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      var date = new Date();
      var newTime = date.getTime();
      var time = new Date("2020-11-16 18:00:00");
      var dateTime = time.getTime();

      var difference = dateTime - newTime;

      if (difference > 0) {
        this.dd = Math.floor(difference / 1000 / 60 / 60 / 24);
        this.dd = this.dd < 10 ? "0" + this.dd : this.dd;
        this.hh = Math.floor((difference / 1000 / 60 / 60) % 24);
        this.hh = this.hh < 10 ? "0" + this.hh : this.hh;
        this.mm = Math.floor((difference / 1000 / 60) % 60);
        this.mm = this.mm < 10 ? "0" + this.mm : this.mm;
        this.ss = Math.floor((difference / 1000) % 60);
        this.ss = this.ss < 10 ? "0" + this.ss : this.ss;
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setInterval(this.timeFn, 1000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.miaosha {
  width: calc(100%-1rem);
  height: 5.5rem;
  line-height: 5.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
  .msImg {
    img {
      width: 10rem;
    }
  }
  .ms {
    i {
      font-style: normal;
      color: #fe412d;
      margin: 0 5px;
    }
    span {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      background-color: #fe412d;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>