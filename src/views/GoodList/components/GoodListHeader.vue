<!--  -->
<template>
  <div>
    <div class="goodListHeader">
      <section class="list-input">
        <div class="input-text">
          <CategoryHeader :search="search" :searchValue="searchValue" />
        </div>
        <div class="mode-switch">
          <i @click="pailieFn" class="iconfont icon-pailie" v-if="flag"></i>
          <i @click="pailieFn" class="iconfont icon-pailie1" v-else></i>
        </div>
      </section>
      <section class="list-filter">
        <ul class="">
          <li
            v-for="(item, index) in lists"
            :key="index"
            :class="num == index ? 'active' : ''"
          >
            <span @click="salesFn(index)">{{ item.title }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "@/components/SearchHeader";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
  },
  props: {
    searchValue: String,
  },
  data() {
    //这里存放数据
    return {
      flag: true,
      num: 0,
      lists: [
        {
          title: "综合",
        },
        {
          title: "新品",
        },
        {
          title: "销量",
        },
        {
          title: "价格",
        },
        {
          title: "筛选",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodListsFn() {
      return this.$store.state.goodLists;
    },
    search() {
      return true;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pailieFn() {
      this.num = !this.flag;
    },
    salesFn(index) {
      this.num = index;
      this.$store.state.index = index;
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
.goodListHeader {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  .list-input {
    display: flex;
    border-bottom: 1px solid #efefef;
    .input-text {
      width: 90%;
      .CategoryHeader {
        position: static;
        border: 0;
        z-index: 0;
      }
    }
    .mode-switch {
      width: 10%;
      height: 5rem;
      line-height: 5rem;
    }
  }

  .list-filter {
    width: 100%;
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        height: 3.5rem;
        line-height: 3.5rem;
      }
      .active {
        color: #f55;
        font-weight: bold;
      }
    }
  }
}
</style>