<template>
  <div class="app_container">
    <!--header-->
    <mt-header fixed title="头部导航">
      <router-link to="" slot="left">
        <mt-button v-show="isShow" @click.native="$router.back(-1)" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--body 中间的部分 此时引入transition 进行(移动端的)页面切换的过度效果-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!--footer-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-hax" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-hax" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-hax" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-hax" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
		</nav>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isShow: false,
    }
  },
  watch: {
    //监听路由对象 来判断返回键是否展示
    $route(now, old) {
      if(now.path == '/home' || now.path == '/member' || now.path == '/shopcar' || now.path == '/search'){
        this.isShow = false
      }else{
        this.isShow = true
      }
    }
  }  
}
</script>
<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }
  .app_container {
    padding-top: 40px;
    padding-bottom: 50px;//这里在路由容器内防止内容显示不出来
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateX(-100%);
    transition: all 0.3s ease;
    position: absolute; //加上作用大
  }

  //此处改类名，防止和mui滑动功能冲突，终极办法，换一个轮子，  解决点击tab无法切换的问题
    .mui-bar-tab .mui-tab-item-hax.mui-active {
      color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-hax {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
  }
  .mui-bar-tab .mui-tab-item-hax .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-hax .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
