<!--  -->
<template>
  <div class="goodListDatas">
    <div class="product-list">
      <ul>
        <router-link
          :to="'/goods/' + item.comment_id"
          tag="li"
          v-for="item in integrationDatas"
          :key="item.comment_id"
        >
          <div class="pro-img"><img :src="item.img" alt="" /></div>
          <div class="pro-details">
            {{ item.goods_name }}
          </div>

          <div class="outer">
            <div class="outer-img">
              <img width="22" :src="item.user_picture" alt="" />
              <span class="text">{{ item.user_name }}</span>
            </div>
            <div style="color: #ccc">
              <i class="iconfont icon-ziyuan"></i> {{ item.dis_browse_num }}
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="data-null">没有更多图片了</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { goodlists } from "../api/goodlist.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    integrationDatas: Array,
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
<style lang='less' scoped>
.loading-d {
  width: calc(100% - 2rem);
  margin: 8rem auto;
}
.product-list {
  width: calc(100% - 2rem);
  margin: 4.5rem 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 49%;
      background-color: white;
      margin-top: 1rem;
      .pro-img {
        width: 100%;
        height: 21.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pro-details {
        margin-top: 1rem;
        height: 3.8rem;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .outer {
        width: calc(100% - 2rem);
        height: 2rem;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        margin-top: 1rem;
        .outer-img {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .text {
            color: #000;
            font-size: 12px;
            margin-left: 1rem;
          }
        }
        img {
          border-radius: 10rem;
        }
        i {
          color: #ccc;
        }
        span {
          margin-right: 1rem;
        }
      }
    }
  }
}
.data-null {
  text-align: center;
  margin-bottom: 6rem;
  font-size: 20px;
  color: #ccc;
}
</style>