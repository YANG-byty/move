<!-- 详情页主体内容 -->
<template>
  <div class="detailContent">
    <DetailSwipe :SwipeDatas="detailLists" />
    <div class="area">
      <div class="price">
        <em>￥</em>
        <span>{{ detailLists.shop_price }}</span>
        <s>{{ detailLists.market_price_formated }}</s>
      </div>
      <div class="vip-warp">
        <div class="text">
          <i class="vip-img">
            <img
              src="https://x.dscmall.cn/static/dist/img/icon-vip.png"
              alt=""
            />
          </i>
          <span
            >高级VIP享超值优惠价<em>￥</em
            ><i>{{ detailLists.shop_price }}</i></span
          >
        </div>
        <div class="vip-register">
          <a>
            <span>立即开通</span>
            <i class="iconfont icon-arrow-left"></i>
          </a>
        </div>
      </div>
      <div class="explain">
        {{ detailLists.goods_name }}
      </div>
      <div class="goods-outer">
        <span>累计销量{{ detailLists.sales_volume }}</span>
        <span
          >库存<em>{{ detailLists.goods_number }}</em></span
        >
        <span>上海市</span>
      </div>
      <div class="integral">
        <span>赠送积分:</span>
        <em>{{ detailLists.give_integral }} 积分</em>
      </div>
      <div class="integral">
        <span>服务:</span>
        <em>正品保证 七天无理由退换 闪速配送</em>
      </div>
      <div class="integral">
        <span>送至:</span>
        <em>上海市 上海市 黄浦区</em>
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="integral">
        <span>运费:</span>
        <em>{{ detailLists.formated_goods_rate }}</em>
      </div>
      <div class="integral">
        <span>已选:</span>
        <em>{{ detailLists.show_goodsnumber }}{{ detailLists.goods_unit }}</em>
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="integral">
        <span>门店自提</span>
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="integral">
        <span>网友讨论圈</span>
        <span class="iconfont icon-arrow-left"></span>
      </div>
      <div class="goods-info">
        <div class="goods-create">
          <div class="img">
            <img
              src="https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598316246303568918.jpg"
              alt=""
            />
          </div>
          <div class="create">
            <h3>
              <span>创造旗舰店</span>
              <i class="iconfont icon-shop"></i>
            </h3>
            <p>已有 9 人关注</p>
          </div>
          <div class="info-add">未关注</div>
        </div>
        <div class="goods-score">
          <ul>
            <li>
              <span>商品<i class="color1">5分</i></span>
              <em class="bg1">高</em>
            </li>
            <li>
              <span>服务<i class="color2">5分</i></span>
              <em class="bg2">高</em>
            </li>
            <li>
              <span>时效<i class="color3">5分</i></span>
              <em class="bg3">高</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="van-tabs">
      <div class="van-tab">
        <a href="javascript:;" class="active">商品详情</a>
      </div>
      <div class="van-tab">
        <a href="javascript:;">规格参数</a>
      </div>
    </div>
    <div class="van-tabs__content" v-html="detailLists.goods_desc"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailSwipe from "@/components/DetailSwipe";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailSwipe,
  },

  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    // gallery_list    img_url
    detailLists() {
      return this.$store.state.detailLists;
    },
    attrprice() {
      return this.$store.state.attrprice;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    this.$store.dispatch("actGetDetailLists", this.$route.params.cid);
  },
};
</script>
<style lang='less' >
.area {
  width: calc(100% - 2rem);
  margin: 0 1rem;
  .price {
    em,
    span {
      color: #f20e28;
      font-weight: bold;
    }
    span {
      font-size: 20px;
    }
    em {
      font-size: 14px;
    }
    s {
      margin-left: 1rem;
      color: #888;
    }
  }
  .vip-warp {
    width: calc(100% - 2rem);
    height: 4.3rem;
    background-color: #efefef;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    .text {
      display: flex;
      align-items: center;
      .vip-img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
      span {
        font-size: 14px;
        i,
        em {
          font-weight: bold;
        }
        i {
          font-size: 16px;
        }
      }
    }
    .vip-register {
      width: 7.6rem;
      height: 2.3rem;
      background-color: #000;
      border-radius: 10rem;
      text-align: center;
      line-height: 2.3rem;
      a {
        color: #e3c49e;
        i {
          font-size: 12px;
          margin-left: 3px;
        }
      }
    }
  }
  .explain {
    font-size: 14px;
    height: 5.5rem;
    margin-top: 1rem;
  }
  .goods-outer {
    display: flex;
    justify-content: space-between;
    span {
      color: #888;
      font-size: 14px;
    }
  }
  .integral {
    margin: 2rem 0;
    font-size: 14px;
    span {
      color: #888;
      margin-right: 1rem;
    }
  }
  .goods-info {
    .goods-create {
      height: 5.8rem;
      display: flex;
      .img {
        width: 5.2rem;
        height: 5.2rem;
        padding-top: 0;
        img {
          width: 5rem;
          height: 5rem;
          border: 1px solid #ccc;
          padding: 3px;
        }
      }
      .create {
        width: 22.6rem;
        height: 5.8rem;
        margin-left: 2rem;
        h3 {
          font-size: 16px;
          font-weight: normal;
          i {
            color: #f55;
            font-weight: bold;
            margin-left: 5px;
          }
        }
        p {
          color: #888;
          font-size: 14px;
        }
      }
      .info-add {
        width: 6rem;
        height: 2rem;
        border: 1px solid #f55;
        color: #f55;
        text-align: center;
        line-height: 2rem;
        border-radius: 1rem;
        font-size: 14px;
      }
    }
    .goods-score {
      height: 5rem;
      line-height: 5rem;
      ul {
        display: flex;
        li {
          width: 11.7rem;
          font-size: 14px;
          span {
            color: #888;
            .color1 {
              color: red;
            }
            .color2 {
              color: #13ab53;
            }
            .color3 {
              color: #f447c9;
            }
          }
          em {
            color: white;
          }
          .bg1,
          .bg2,
          .bg3 {
            padding: 1px 5px;
            font-size: 12px;
            border-radius: 50%;
          }
          .bg1 {
            background-color: red;
          }
          .bg2 {
            background-color: #13ab53;
          }
          .bg3 {
            background-color: #f447c9;
          }
        }
      }
    }
  }
}
.van-tabs {
  display: flex;
  margin-bottom: 2px;
  .van-tab {
    width: 50%;
    text-align: center;
    font-size: 14px;
    height: 4.3rem;
    line-height: 4.3rem;
    a {
      display: inline-block;
    }
  }
  .active {
    color: #f55;
    border-bottom: 1px solid #f55;
  }
}
.van-tabs__content {
  width: 100%;
  .s-img {
    .img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  p {
    a {
      img {
        width: 100%;
      }
    }
  }
}
</style>