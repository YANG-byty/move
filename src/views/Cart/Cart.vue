<!--  -->
<template>
  <div class="cart">
    <div v-if="flag">
      <Null />
    </div>
    <div v-else>
      <div class="cart-wrap">
        <!-- 每个店铺 -->
        <div class="card-goods">
          <div class="card-shop-head">
            <div class="card-goods-item">
              <i class="iconfont icon-xuanzhong iconActive" v-if="true"></i>
              <i class="iconfont icon-Artboard" v-else></i>
            </div>
            <div class="card-goods-item">
              <span>创造旗舰店</span>
              <em class="iconfont icon-arrow-left"></em>
            </div>
          </div>
          <div
            class="goods-group"
            v-for="(item, index) in catDatas"
            :key="item.goods_id"
          >
            <div class="goods-item">
              <i
                @click="chackSelect(index, item)"
                class="iconfont icon-xuanzhong iconActive"
                v-if="item.isSelect"
              ></i>
              <i
                class="iconfont icon-Artboard"
                @click="chackSelect(index, item)"
                v-else
              ></i>
            </div>
            <div class="goods-info">
              <div class="goods-img" @click="goodsDetail(index)">
                <img :src="item.goods_img" title="豆浆机" alt="商品" />
              </div>
              <div class="goods-content">
                <div class="goods-title" @click="goodsDetail(index)">
                  {{ item.goods_name }}
                </div>
                <div class="goods-dis">
                  <div class="goods-price">
                    <span>{{ item.shop_price }}</span>
                  </div>
                  <div class="goods-input">
                    <button class="refuce" @click="refuceFn(index)">-</button>
                    <input
                      type="number"
                      ref="val"
                      @input="changeNum(index)"
                      v-model="item.goods_num"
                    />
                    <button class="add" @click="addFn(index)">+</button>
                  </div>
                  <div class="oper-icon">
                    <i class="iconfont icon-xin"></i>
                    <i class="iconfont icon-shanchu" @click="remove(index)"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-submit">
        <div class="chackAll">
          <i
            @click="checkAll"
            v-if="checkAlldate"
            class="iconfont icon-Artboard"
          ></i>
          <i
            @click="checkAll"
            v-else
            class="iconfont icon-xuanzhong iconActive"
          ></i>
          <span class="all">全选</span>
        </div>
        <div class="van-text">
          <p>
            合计：<span>￥{{ total }}.00</span>
          </p>
          <p class="text">(不含运费，已节省 ￥0.00)</p>
        </div>
        <div class="van-btn">去结算({{ num }})</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// @符号默认指向src
import Footer from "@/components/Footer.vue";
import Null from "./components/Null";
import { mapMutations } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Null,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    catDatas() {
      return this.$store.state.catDatas;
    },
    checkAlldate() {
      return this.$store.state.checkAlldate;
    },
    total() {
      var total = 0;
      this.catDatas.map((item) => {
        if (item.isSelect) {
          total += item.goods_num * item.shop_price;
        }
      });
      return total;
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
    flag() {
      return this.catDatas.length == 0;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // remove(index) {
    //   this.$store.commit("remveGoods", index);
    // },
    // refuceFn(index) {
    //   this.$store.commit("refuceFn", index);
    // },
    // addFn(index) {
    //   this.$store.commit("addFn", index);
    // },
    // 简化成：
    ...mapMutations(["remove", "refuceFn", "addFn"]),

    chackSelect(index, item) {
      item.isSelect = !item.isSelect;
      this.$store.commit("chackSelect", { index, item });
    },

    checkAll() {
      this.$store.commit("checkAll");
    },

    changeNum(index) {
      var val = this.$refs.val[index].value;
      // console.log(val);
      this.$store.commit("changeNum", { val, index });
    },

    //跳转到商品详情页
    goodsDetail(index) {
      // console.log(this.catDatas[index].goods_id);
      this.$router.push("/goods/" + this.catDatas[index].goods_id);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.catDatas);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.cart-wrap {
  width: 100%;
  .card-goods {
    width: calc(100% - 2rem);
    margin: 0 1rem;
    .card-shop-head {
      display: flex;
      height: 4.6rem;
      line-height: 4.6rem;
      .card-goods-item {
        margin-right: 1rem;
        span {
          font-size: 16px;
          font-weight: bold;
        }
        em {
          color: #ccc;
          margin-left: 5px;
        }
      }
    }
    .goods-group {
      display: flex;
      width: 100%;
      height: 10rem;
      .goods-item {
        width: 10%;
        height: 10rem;
        line-height: 10rem;
      }
      .goods-info {
        width: 90%;
        display: flex;
        height: 100%;
        align-items: center;
        .goods-img {
          width: 7rem;
          height: 7rem;
          img {
            width: 7rem;
            height: 7rem;
          }
        }
        .goods-content {
          margin-left: 1rem;
          .goods-title {
            height: 3rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .goods-dis {
            display: flex;
            margin-top: 1.5rem;
            .goods-price {
              width: 10.5rem;
              height: 2rem;
              color: #f55;
              font-weight: bold;
              span {
                font-size: 16px;
              }
              &::before {
                content: "￥";
              }
            }
            .goods-input {
              display: flex;
              width: 6.5rem;
              border: 1px solid #efefef;
              border-radius: 5px;
              input {
                width: 3rem;
                text-align: center;
              }
              button {
                width: 2rem;
                height: 2rem;
                font-size: 18px;
              }
            }
            .oper-icon {
              width: 3.5rem;
              i {
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }
  }
  .iconActive {
    color: #f55;
  }
}
.cart-submit {
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 5rem;
  .chackAll {
    width: 5.2rem;
    margin-left: 1rem;
    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
  .van-text {
    width: 19.1rem;
    text-align: right;
    margin-right: 1rem;
    font-size: 14px;
    span {
      color: #f44;
      font-size: 16px;
      font-weight: bold;
    }
    .text {
      color: #888;
      font-size: 12px;
    }
  }
  .van-btn {
    width: 10.8rem;
    height: 4.8rem;
    line-height: 4.8rem;
    background-color: #f44;
    color: white;
    font-size: 14px;
    text-align: center;
  }
  .iconActive {
    color: #f55;
  }
}
</style>