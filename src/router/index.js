import Vue from 'vue'
import VueRouter from 'vue-router'
//导入对应的路由组件 
 import HomeContainer from '../components/tabber/HomeContainer.vue'
 import MemberContainer from '../components/tabber/MemberContainer.vue'
 import ShopContainer from '../components/tabber/ShopContainer.vue'
 import SearchContainer from '../components/tabber/SearchContainer.vue'
 import NewsList from '../components/news/NewsList.vue'
 import NewsInfo from '../components/news/NewsInfo.vue'
 import PhotoList from '../components/photos/PhotoList.vue'
 import PhotoInfo from '../components/photos/PhotoInfo.vue'
 import GoodsList from '../components/goods/GoodsList.vue'
 import GoodsInfo from '../components/goods/GoodsInfo.vue'
 import GoodsDesc from '../components/goods/GoodsDesc.vue'
 import GoodsComment from '../components/goods/GoodsComment.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: HomeContainer },
  { path: '/member', component: MemberContainer },
  { path: '/shopcar', component: ShopContainer },
  { path: '/search', component: SearchContainer },
  { path: '/home/newslist', component: NewsList },
  { path: '/home/newsinfo/:id', component: NewsInfo },
  { path: '/home/photolist', component: PhotoList },
  { path: '/home/photoinfo/:id', component: PhotoInfo },
  { path: '/home/goodslist/', component: GoodsList },
  { path: '/home/goodsinfo/:id', component: GoodsInfo },
  { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
  { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },


]

const router = new VueRouter({ //配置路由规则
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'mui-active',//覆盖默认的路由高亮的类，这里引用的是mui里的高亮样式
  routes
})

export default router
