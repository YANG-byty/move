<!-- 详情页尾部 -->
<template>
  <div class="detailFooter">
    <div class="van-goods-action">
      <div class="kefu">
        <i class="iconfont icon-xinxi"></i>
        <span>客服</span>
      </div>
      <div class="kefu">
        <i class="iconfont icon-xin"></i>
        <span>收藏</span>
      </div>
      <div class="kefu" @click="cartFn">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
        <em class="num">{{ num }}</em>
        <em :class="{ addnum: flag }">+1</em>
      </div>
      <div class="cartBtn" @click="addCartFn">加入购物车</div>
      <div class="buyBtn">立即购买</div>
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
      flag: false,
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    detailLists() {
      return this.$store.state.detailLists;
    },
    catDatas() {
      return this.$store.state.catDatas;
    },
    num() {
      var num = 0;
      this.catDatas.map((item) => {
        if (item.isSelect) {
          num += Number(item.goods_num);
        }
      });
      return num;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    cartFn() {
      this.$router.push("/cart");
    },
    addCartFn() {
      this.flag = true;
      this.timer = setTimeout(() => {
        this.flag = false;
      }, 1000);

      var isCart = this.catDatas.find((item) => {
        if (item.goods_id == this.detailLists.goods_id) {
          item.goods_num++;
        }
        return item.goods_id == this.detailLists.goods_id;
      });
      if (!isCart) {
        var cart = {
          goods_id: this.detailLists.goods_id,
          shop_price: this.detailLists.shop_price,
          goods_img: this.detailLists.goods_img,
          goods_name: this.detailLists.goods_name,
          goods_num: 1,
          isSelect: true,
        };
      }
      this.$store.commit("setCartDatas", cart);
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
.detailFooter {
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  .van-goods-action {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 100%;
    line-height: 5rem;
    text-align: center;
    font-size: 14px;
    .kefu {
      width: 5.6rem;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 5rem;
      color: #666;
      position: relative;
      i {
        line-height: 2.5rem;
        font-size: 20px;
      }
      span {
        line-height: 2.5rem;
      }
      .num {
        position: absolute;
        top: -0.5rem;
        height: 2rem;
        line-height: 2rem;
        color: white;
        width: 2rem;
        text-align: center;
        left: 3rem;
        border-radius: 1rem;
        background-color: #f55;
      }
      .addnum {
        position: absolute;
        top: -2rem;
        left: 2rem;
        color: #f55;
        font-size: 20px;
        font-weight: bold;
        opacity: 0;
        animation: addnum 1s linear;
      }
      @keyframes addnum {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
          top: -6rem;
        }
        100% {
          opacity: 0;
          top: -8rem;
        }
      }
    }
    .cartBtn {
      background-color: #f55;
      color: white;
      width: 10.3rem;
    }
    .buyBtn {
      background-color: #ff976a;
      color: white;
      width: 10.3rem;
    }
  }
}
</style>