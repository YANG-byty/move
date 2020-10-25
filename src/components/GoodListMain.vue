<!--  -->
<template>
  <div class="goodListDatas">
    <div class="product-list">
      <ul>
        <router-link
          :to="'/goods/' + item.goods_id"
          tag="li"
          v-for="(item, index) in lists"
          :key="index"
        >
          <div class="pro-img"><img :src="item.goods_img" alt="" /></div>
          <div class="pro-details">
            {{ item.goods_name }}
          </div>
          <div class="pro-price">
            <em>￥</em>
            <span>{{ item.shop_price }}</span>
          </div>
          <div class="outer">
            <div>
              <span class="text">进店</span>
              <span class="text2">{{ item.sales_volume }}人已选购</span>
            </div>
            <div><i class="iconfont icon-gouwuche"></i></div>
          </div>
        </router-link>
      </ul>
    </div>
    <div v-if="dataNull" class="data-null">没有更多图片了</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    goodLists: Array,
    dataNull: Boolean,
  },
  data() {
    //这里存放数据
    return {
      // datalist: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    lists() {
      var list = this.goodLists;
      var index = this.$store.state.index;
      if (index == 2) {
        // console.log(this.goodLists);
        list.sort((a, b) => {
          return b.sales_volume - a.sales_volume;
        });
      } else if (index == 3) {
        list.sort((a, b) => {
          return a.shop_price - b.shop_price;
        });
      }
      return list;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.state.searchList = [];
    // console.log(this.$store.state.searchList);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.loading-d {
  width: calc(100% - 2rem);
  margin: 8rem auto;
}
.product-list {
  width: calc(100% - 2rem);
  margin: 8.6rem 1rem;
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
        height: 17.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pro-details {
        height: 3.8rem;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .pro-price {
        color: red;
        font-size: 14px;
        font-weight: bold;
        height: 4rem;
        line-height: 4rem;
        em {
          font-style: normal;
        }
      }
      .outer {
        width: calc(100% - 2rem);
        height: 2rem;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        .text,
        i {
          color: red;
        }
        span {
          margin-right: 1rem;
        }
        .text2 {
          color: #ccc;
        }
      }
    }
  }
}
.data-null {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 20px;
  color: #ccc;
}
</style>