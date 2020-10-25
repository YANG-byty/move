<!--  -->
<template>
  <div class="swipe-news">
    <div class="news-title">
      <img :src="ImgTitle" alt="" />
    </div>
    <ul :class="{ lists: true, trans: flag }" ref="news">
      <li v-for="item in DataLists" :key="item.id">{{ item.title }}</li>
    </ul>
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
      flag: false,
      ImgTitle: require("@/images/a1.png"),
      timer: "",
      DataLists: [
        {
          id: 1,
          title: "服务店突破2000多家",
        },
        {
          id: 2,
          title: "我们成为中国最大家电零售B2B2C系统",
        },
        {
          id: 3,
          title: "三大国际腕表品牌签约",
        },
        {
          id: 4,
          title: "三大国际腕表品牌签约",
        },
        {
          id: 5,
          title: "我们成为中国最大家电零售B2B2C系统",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scroll() {
      var oUl = this.$refs.news; //获取ul元素
      oUl.style.marginTop = "-5rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.DataLists.push(this.DataLists[0]);
        this.DataLists.shift();
        oUl.style.marginTop = "0";
        this.flag = !this.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this);
    this.timer = setInterval(this.scroll, 3000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipe-news {
  height: 5rem;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 0 1.5rem;
  overflow: hidden;
  .news-title {
    img {
      width: 7rem;
      height: 3rem;
    }
  }
  .lists {
    margin-left: 1rem;
    font-weight: bold;
    li {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.2rem;
    }
  }
  .trans {
    transition: all 0.5s linear;
  }
}
</style>