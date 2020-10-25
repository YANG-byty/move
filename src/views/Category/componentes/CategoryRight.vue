<!-- 分类内容右边 -->
<template>
  <div class="CategoryRight">
    <div v-if="this.dataListRight == ''">
      <Loading />
    </div>
    <!-- <main v-else>
      <div class="imgTop"><img :src="imgSrc" alt="" /></div>
      <div class="content" v-for="value in dataListRight" :key="value.cat_id">
        <div class="title">{{ value.cat_name }}</div>
        <div class="contentImg">
          <ul>
            <li v-for="item in value.child" :key="item.cat_id">
              <a href> <img src="@/images/cc1.jpg" alt="" /></a>
              <span>{{ item.cat_name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </main> -->

    <main v-else>
      <div class="imgTop"><img :src="imgSrc" alt="" /></div>
      <div class="content" v-for="value in dataListRight" :key="value.cat_id">
        <div class="title">{{ value.cat_name }}</div>
        <div class="contentImg">
          <ul>
            <li
              @click.prevent="goodListFn(index)"
              v-for="(item, index) in value.child"
              :key="item.cat_id"
            >
              <a href><img :src="item.touch_icon" alt="" /></a>
              <span>{{ item.cat_name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from "axios";
import Loading from "@/components/Loading";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Loading,
  },
  data() {
    //这里存放数据
    return {
      //   cat_icon: "",
      // rightLists: [],
      imgSrc2: require("@/images/catetory1.jpg"),
      imgSrc: require("@/images/catetory1.jpg"),
    };
  },
  //监听属性 类似于data概念
  computed: {
    dataListRight() {
      return this.$store.state.dataListRight;
    },
  },
  //监控data中的数据变化
  watch: {
    $route(to) {
      // console.log(to);
      var cid = to.params.cid;
      this.$store.state.dataListRight = [];
      this.$store.dispatch("actgetCategoryDatasR", cid);
      var data = this.$store.state.dataList;
      // for (var i = 0; i < data.length; i++) {
      //   if (data[i].category_id == cid) {
      //     console.log(this.imgSrc2);
      //     if (data[i].menu_img == null) {
      //       this.imgSrc = this.imgSrc2;
      //     } else {
      //       this.imgSrc = data[i].menu_img;
      //     }
      //   }
      // }

      // 大商创接口：
      for (var i = 0; i < data.length; i++) {
        if (data[i].cat_id == cid) {
          if (data[i].touch_catads == null) {
            this.imgSrc = this.imgSrc2;
          } else {
            this.imgSrc = data[i].touch_catads;
          }
        }
      }
    },
  },
  //方法集合
  methods: {
    goodListFn(index) {
      // console.log(this.$store.state.dataListRight[0]);
      var cat_id = this.$store.state.dataListRight[0].child[index].cat_id;
      var cat_name = this.$store.state.dataListRight[0].child[index].cat_name;
      this.$router.push("/goodlist/" + cat_id + "?title=" + cat_name);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actgetCategoryDatasR", this.$route.params.cid);
    // console.log(this.$store);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.CategoryRight {
  height: 100%;
  position: absolute;
  top: 0;
  left: 8.4rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  main {
    .imgTop {
      padding: 1.1rem 1.1rem 0;
      img {
        width: 26.8rem;
        height: 9.6rem;
      }
    }
    .content {
      width: calc(100%-2rem);
      margin: 0 1rem;

      .title {
        width: 100%;
        height: 4.7rem;
        line-height: 4.7rem;
        text-align: center;
        font-size: 1.4rem;
        color: #333;
      }
      .contentImg {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 9rem;
            height: 8.2rem;
            text-align: center;
            margin-bottom: 2rem;
            img {
              width: 5.2rem;
              height: 5.2rem;
            }
            span {
              display: block;
              margin-top: 1rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>