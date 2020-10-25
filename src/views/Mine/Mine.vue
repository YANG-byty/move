<!--  -->
<template>
  <div class="Mine">
    <Login v-if="!userInfo" />
    <div v-else class="user-default">
      <div class="user-header-box">
        <div class="user-header">
          <div class="user-img">
            <a href="javascript:;">
              <img
                src="https://x.dscmall.cn/storage/images/errorImg.png"
                alt=""
              />
            </a>
          </div>
          <div class="user-admin">
            <div class="admin-top">
              <h3>nick82789492</h3>
              <div class="icon">
                <i class="iconfont icon-xinxi"></i>
                <i class="iconfont icon-shezhi"></i>
              </div>
            </div>
            <div class="admin-growith">
              <span>王者</span>
              <span
                >成长值0/1001
                <i class="iconfont icon-arrow-left"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="itemize">
          <ul>
            <li>
              <p>0</p>
              <p>我的收藏</p>
            </li>
            <li>
              <p>0</p>
              <p>我的足迹</p>
            </li>
            <li>
              <p>0</p>
              <p>店铺关注</p>
            </li>
          </ul>
        </div>
        <div class="exclusive">
          <div class="vip-left">
            <span><img src="@/images/icon-vip.png" alt="" /></span>
            <span>高级VIP</span>
            <span>购物省钱 分享赚钱</span>
          </div>
          <div class="vip-right">
            立即开通<i class="iconfont icon-arrow-left"></i>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Login from "@/views/Login/Login.vue";
import Footer from "@/components/Footer";
// @符号默认指向src

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Login,
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    // console.log(this.$store);
  },
};
</script>
<style lang='less' scoped>
.user-default {
  width: 100%;
  .user-header-box {
    position: relative;
    height: 18.8rem;
    background: linear-gradient(-88deg, #ff4c30, #ea0a21);
    .user-header {
      padding: 1.7rem;
      color: #fff;
      display: flex;
      .user-img {
        height: 6.5rem;
        width: 6.5rem;
        img {
          height: 6.5rem;
          width: 6.5rem;
          border-radius: 10rem;
          box-shadow: 0px 0px 5px 2px #efefef;
        }
      }
      .user-admin {
        margin-left: 2rem;
        width: 26rem;
        height: 4rem;
        .admin-top {
          margin-top: 3px;
          display: flex;
          justify-content: space-between;
          h3 {
            font-size: 16px;
          }
          .icon {
            width: 5rem;
            display: flex;
            justify-content: space-between;
          }
        }
        .admin-growith {
          line-height: 4.2rem;
          border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
          span {
            padding: 0 1.2rem;
            background: rgba(0, 0, 0, 0.1);
            font-size: 1.2rem;
            display: inline-block;
            border-radius: 1rem;
            line-height: 1.8;
            &:nth-child(2) {
              margin-left: 1rem;
            }
            i {
              font-size: 12px;
            }
          }
        }
      }
    }
    .itemize {
      margin-top: 1rem;
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          color: #efefef;
          &:nth-child(1),
          &:nth-child(2) {
            border-right: 1px solid #efefef;
          }
          p {
            &:nth-child(1) {
              font-size: 15px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .exclusive {
      position: absolute;
      left: 1rem;
      right: 1rem;
      bottom: -2rem;
      z-index: 3;
      background: #fff;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .vip-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 2.1rem;
          height: 2.1rem;
        }
        span {
          &:nth-child(2) {
            margin-left: 1rem;
          }
          &:nth-child(3) {
            margin-left: 1rem;
            font-size: 12px;
            color: #805223;
          }
        }
      }
      .vip-right {
        width: 8.5rem;
        height: 2.6rem;
        background-color: #000;
        border-radius: 10rem;
        color: #e3c49e;
        line-height: 2.6rem;
        text-align: center;
        font-size: 12px;
        i {
          font-size: 12px;
          margin-left: 2px;
        }
      }
    }
  }
}
</style>