<!-- 首页快捷导航 -->
<template>
  <div class="quick-nav">
    <mt-swipe
      :auto="0"
      :show-indicators="true"
      :default-index="0"
      :continuous="true"
    >
      <mt-swipe-item>
        <ul>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i1.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
          <li>
            <img src="@/images/i2.gif" alt />
            <span>拼团</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
    return {};
  },
};
</script>
<style lang="less">
.quick-nav {
  height: 20rem;
  ul {
    height: 18rem;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 9rem;
      width: 20%;
      text-align: center;
      img {
        width: 7rem;
        height: 7rem;
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 0;
    border-radius: 0;
  }
  .mint-swipe-indicator.is-active {
    background: rgba(255, 0, 0, 1);
  }
}
</style>