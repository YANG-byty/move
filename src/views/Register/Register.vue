<!-- 注册组件 -->
<template>
  <div class="register">
    <div class="user-regiter">
      <i onclick="window.history.back()" class="iconfont icon-right-angle"></i>
      <h2>新用户注册</h2>
    </div>
    <form action="">
      <div class="item-input">
        <i class="iconfont icon-pic"></i>
        <input type="text" placeholder="请输入图片验证码" />
        <img src="http://114.215.173.225:3000/api/v1/users/captcha" alt="" />
      </div>
      <div class="item-input">
        <i class="iconfont icon-shouji"></i>
        <input type="text" v-model="phone" placeholder="请输入手机号" />
        <button v-if="!num" @click="phoneFn" class="verif-btn">
          获取验证码
        </button>
        <button v-else class="verif-btn">已发送{{ num }}s</button>
      </div>
      <div class="item-input">
        <i class="iconfont icon-yanzhengma"></i>
        <input type="text" placeholder="请输入短信验证码" />
      </div>
      <div class="item-input">
        <i class="iconfont icon-mima"></i>
        <input type="text" placeholder="请输入登录密码" />
      </div>
      <input class="register-btn" type="button" value="立即注册" />
    </form>
    <div class="tips">
      若您输入的手机号未注册，将会进入注册流程。注册即视为同意
      <a href="javascript:;">《用户协议》</a>
    </div>
    <div class="user-login-list">
      <a @click="toLoginFn" href="javascript:;">账号密码登录</a>
      <i class="iconfont icon-arrow-left"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      phone: "",
      num: 0,
      timer: "",
      captcha: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    monitorPhone() {
      return /^[1][3,5,7,8]\d{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toLoginFn() {
      this.$router.push("/login");
    },
    phoneFn() {
      if (this.monitorPhone) {
        this.num = 60;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast("请输入正确的手机号");
      }
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
.register {
  width: calc(100% - 2rem);
  margin: 2rem 1rem;
  .user-regiter {
    i {
      width: 100%;
      font-size: 20px;
    }
    h2 {
      font-size: 30px;
      font-weight: normal;
      margin-top: 3rem;
    }
  }
  form {
    margin-top: 2.5rem;
    i {
      width: 100%;
      font-size: 20px;
    }
    .item-input {
      height: 2.4rem;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem 0;
      color: #bdbdbd;
      border-bottom: 1px solid #ddd;
      input {
        margin-left: 1rem;
        font-size: 16px;
      }
      input::-webkit-input-placeholder {
        color: #bdbdbd;
      }
      & > i:last-child {
        position: absolute;
        right: 0;
      }
      .active {
        color: #f55;
      }
      .verif-btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 9.1rem;
        height: 2.4rem;
        background-color: transparent;
        border-left: 1px solid #ddbbdd;
        color: #888;
      }
    }
    .register-btn {
      margin-top: 2rem;
      width: 100%;
      height: 4.1rem;
      background: #f92028;
      border-radius: 5px;
      color: white;
      font-size: 16px;
    }
  }
  .tips {
    margin-top: 1rem;
    color: #888;
    font-size: 13px;
    a {
      color: #4b89dc;
    }
  }
  .user-login-list {
    width: 100%;
    text-align: center;
    margin: 3rem 0;
    a {
      font-size: 16px;
      color: #f92028;
    }
    i {
      color: #f92028;
    }
  }
}
</style>