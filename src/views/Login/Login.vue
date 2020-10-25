<!-- 登录组件 -->
<template>
  <div class="login">
    <div class="user-login-head">
      <i @click="gotoFn" class="iconfont icon-right-angle"></i>
      <h2>用户登录</h2>
    </div>
    <!-- 用户密码登录 -->
    <form action="" v-if="change">
      <div class="item-input">
        <i class="iconfont icon-wode1"></i>
        <input
          type="text"
          v-model="user_name"
          placeholder="请输入您的用户名/手机号"
        />
      </div>
      <div class="item-input">
        <i style="font-size: 20px" class="iconfont icon-mima"></i>
        <input
          v-if="flag"
          v-model="password"
          type="password"
          placeholder="请输入登录密码"
        />
        <input
          v-else
          v-model="password"
          type="text"
          placeholder="请输入登录密码"
        />
        <i v-if="flag" @click="LoginFn" class="iconfont icon-ziyuan"></i>
        <i v-else @click="LoginFn" class="iconfont icon-ziyuan active"></i>
      </div>
      <div class="item-input">
        <i class="iconfont icon-yanzhengma"></i>
        <input type="text" v-model="captcha" placeholder="验证码" />
        <img
          ref="captcha"
          @click="getCaptchaFn"
          src="http://localhost:3000/api/v1/users/captcha"
          class="verif-btn"
        />
      </div>
      <div class="user-password">
        <a href="javascript:;" @click="registerFn">新用户注册</a>
        <a href="javascript:;">忘记密码？</a>
      </div>
      <input type="button" class="btn-button" @click="login" value="登录" />
    </form>
    <!-- 短信登录 -->
    <form action="" v-else>
      <div class="item-input">
        <i class="iconfont icon-shouji"></i>
        <input type="text" v-model="phone" placeholder="手机号" />
      </div>
      <div class="item-input">
        <i class="iconfont icon-yanzhengma"></i>
        <input type="text" placeholder="验证码" />
        <button class="verif-btn" @click="verifFn" v-if="!num">
          获取验证码
        </button>
        <input
          class="verif-btn"
          type="button"
          v-else
          :value="'已发送' + num + 's'"
        />
      </div>
      <div class="user-password">
        <a href="javascript:;" @click="registerFn">新用户注册</a>
        <a href="javascript:;">忘记密码？</a>
      </div>
      <input type="button" class="btn-button" value="登录" />
    </form>
    <div class="user-login-list">
      <a @click="changeFn" v-if="change" href="javascript:;"
        >短信验证码登录
        <i class="iconfont icon-arrow-left"></i>
      </a>
      <a @click="changeFn" v-else href="javascript:;"
        >用户密码登录
        <i class="iconfont icon-arrow-left"></i>
      </a>
    </div>
    <div class="quick-login">
      <p>使用以下方式登录</p>
      <i class="iconfont icon-qq-copy"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      change: true,
      flag: true,
      password: "",
      captcha: "",
      phone: "",
      traim: "",
      num: 0,
      user_name: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    identifyPhone() {
      return /^[1][3,5,7,8]\d{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gotoFn() {
      this.$router.push("/home");
    },
    registerFn() {
      this.$router.push("/Register");
    },
    LoginFn() {
      if (this.password) {
        this.flag = !this.flag;
      }
    },
    changeFn() {
      this.change = !this.change;
    },
    verifFn() {
      if (this.identifyPhone) {
        this.num = 60;
        this.traim = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.traim);
          }
        }, 1000);
      } else {
        Toast({
          message: "请输入正确的手机号",
          position: "center",
          duration: 3000,
        });
      }
    },
    getCaptchaFn() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
    async login() {
      if (!this.user_name) {
        Toast("请输入用户名/邮箱/手机号！");
      } else if (!this.password) {
        Toast("请输入密码！");
      } else if (!this.captcha) {
        Toast("验证码不正确！");
      }

      // 请求数据
      const result = await loginuser(
        this.user_name,
        this.password,
        this.captcha
      );
      console.log(result);
      // 验证码不正确
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      //用户名或密码错误
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      //登录成功
      if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
        console.log(this.$store.state);
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
.login {
  width: calc(100% - 2rem);
  padding: 2rem 1rem;
  .user-login-head {
    i {
      font-size: 20px;
      color: #bdbdbd;
    }
    h2 {
      font-size: 30px;
      font-weight: normal;
      margin-top: 3rem;
    }
  }
  form {
    margin-top: 2.5rem;
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
    .user-password {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 1rem 0 2rem;
      a {
        color: #4b89dc;
        font-size: 16px;
      }
    }
    .btn-button {
      width: 100%;
      height: 4.1rem;
      background: #f92028;
      border-radius: 5px;
      color: white;
      font-size: 16px;
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
  }
  .quick-login {
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 5rem;
    p {
      font-size: 16px;
      color: #888;
      margin-bottom: 1rem;
    }
    i {
      font-size: 5rem;
      color: #49a7e7;
    }
  }
}
</style>