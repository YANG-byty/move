<!-- 分类内容左边 -->
<template>
  <div class="CategoryLeft">
    <ul>
      <!-- <li v-for="item in dataList" :key="item.menu_id">
        <router-link :to="'/category/' + item.category_id" tag="p">{{
          item.menu_name
        }}</router-link>
      </li> -->

      <li v-for="item in dataList" :key="item.cat_id">
        <router-link :to="'/category/' + item.cat_id" tag="p">{{
          item.cat_alias_name
        }}</router-link>
      </li>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // getCategoryData() {
    //   // https://x.dscmall.cn/api/catalog/list
    //   Axios.get("/api/list").then((data) => {
    //     console.log(data);
    //     if (data.status == 200) {
    //       //   this.dataList = data.data.data;
    //       //将数据传给actions.js中的actgetCategoryDatas
    //       this.$store.dispatch("actgetCategoryDatas", data.data.data);
    //     }
    //   });
    // },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actgetCategoryDatas");
    // console.log(this.$store.state);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.CategoryLeft {
  width: 8.4rem;
  height: 100%;
  border-right: 1px solid #efefef;
  margin: 0 0 5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    li {
      width: 8.4rem;
      height: 3.8rem;
      text-align: center;
      line-height: 3.8rem;
      color: #999;
      font-size: 14px;
      display: flex;
      align-items: center;
      p {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        border-left: 3px solid #fff;
      }
      .router-link-active {
        border-left: 3px solid #f55;
        color: #f55;
      }
    }
  }
}
</style>