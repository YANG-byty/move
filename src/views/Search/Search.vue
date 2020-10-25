<!--  -->
<template>
  <div class="Search">
    <div>
      <div class="CategoryHeader">
        <div class="ch-left" onclick="window.history.back()">
          <i class="iconfont icon-right-angle"></i>
        </div>
        <div class="ch-rigth">
          <form action>
            <input type="text" v-model="title" autofocus placeholder="手机" />
            <i class="iconfont icon-sousuo"></i>
          </form>
        </div>
      </div>
      <div class="searchBtn" @click="searchListFn">搜索</div>
    </div>
    <main>
      <div>
        <div class="icon">
          <p>最近搜索</p>
          <i class="iconfont icon-shanchu" @click="clearFn"></i>
        </div>
        <div class="searchContent" v-if="titleArr == '' ? false : true">
          <span
            v-for="(item, index) in titleArr"
            :key="index"
            @click="titleFn(item)"
            ><a href="javascript:void(0)">{{ item }}</a></span
          >
        </div>
        <div class="searchContent" v-else>
          <span>暂无</span>
        </div>
      </div>
      <div>
        <div>
          <p>热搜</p>
        </div>
        <div>
          <span><a href="javascript:void(0)">周大福</a></span>
          <span><a href="javascript:void(0)">内衣</a></span>
          <span><a href="javascript:void(0)">Five Plus</a></span>
          <span><a href="javascript:void(0)">手机</a></span>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// @符号默认指向src
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      title: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    search() {
      return false;
    },
    titleArr() {
      return this.$store.state.titleArr;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchListFn() {
      if (this.title == "") {
        this.title = "手机";
      } else {
        this.$store.commit("titleDatas", this.title);
      }
      this.$router.push("/searchList?keywords=" + this.title);
    },
    titleFn(item) {
      this.$router.push("/searchList?keywords=" + item);
    },
    clearFn() {
      this.$store.state.titleArr = [];
      localStorage.setItem("title", this.$store.state.titleArr);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (!this.title == "") {
      this.$store.commit("titleDatas", this.title);
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.Search {
  .CategoryHeader {
    .ch-rigth {
      width: 75%;
    }
  }
  .searchBtn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    width: 15%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 14px;
  }
  main {
    margin: 7rem 1rem;
    width: calc(100% - 2rem);
    .searchContent {
      display: flex;
      flex-wrap: wrap;
      span {
        margin: 0.5rem;
      }
    }
    .icon {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 14px;
      }
    }
    span {
      padding: 3px 1rem;
      background-color: #f5f5f5;
      margin-right: 1rem;
      a {
        color: #686868;
      }
    }
    div {
      margin: 1rem 0;
    }
  }
}
</style>