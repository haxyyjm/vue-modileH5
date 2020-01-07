<template>
    <div class="goodsinfo-container">
        <!-- 动画 -->
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :swiperList="swiperList" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">小米10手机</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>{{goodsInfo.marketPrice}}元</del> &nbsp;&nbsp; 销售价: <span class="now_price">{{goodsInfo.sellPrice}}元</span>
                    </p>
                    <!-- 这里的加减数量 所以是单独组件 不影响购物车 -->
                    <p style="display: flex; align-items: center">购买数量:<numbox @getcount="getSelectCount" :max="goodsInfo.maxNum"></numbox></p>
                    <p>
                        <mt-button class="btn" type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

       <div class="mui-card">
            <div class="mui-card-header">
                商品参数
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: 131243</p>
                    <p>库存情况: {{goodsInfo.maxNum}}件</p>
                    <p>上架时间: 2019-12-20</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
// 到时通过id获取相应的数据
import swiper from '../subcomponents/swiper.vue'
//导入数字选择框
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            goodsInfo: {
                marketPrice: '2800',
                sellPrice: '2200',
                maxNum: 61
            },
            selectedCount: 1, //默认为1件
            ballFlag: false,//控制小球显示与否
            id: this.$route.params.id,
            swiperList: [{
                url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/e725fd62e74f428092c6276a8cf758a3.jpg',
                img: 'https://ali.image.hellorf.com/images/716d481c1cfcf96ba189693cf3421f3b.jpeg?x-oss-process=image/resize,m_fill,w_739,h_554'
            },{
                url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/baf4298920a64380bbb52e6219fcd3b5.jpg',
                img: 'https://ali.image.hellorf.com/images/163e21576de3fb98c64310dbcec0d2e9.jpeg?x-oss-process=image/resize,m_fill,w_739,h_554'
            }]
        }
    },
    components: {
        swiper,
        numbox
    },
    methods: {
        goDesc(id){
            console.log('地址中携带的id',id)
            this.$router.push({name: 'goodsdesc', params: {id}}) //编程时导航
        },
        goComment(id){
            this.$router.push({name: 'goodscomment', params: {id}})
        },
        //添加购物车
        addToShopCar(){
            this.ballFlag = !this.ballFlag
            var goodsInfo = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsInfo.sellPrice,
                selected: true
            }
            this.$store.commit('addToCar', goodsInfo)
        },
        //动画
        beforeEnter(el){
            el.style.transform = "translate(0, 0 )"
        },
        /**
         * @desc Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
         */
        enter(el, done){
            el.offsetWidth;
            //小球动画会被不同手机及滚动条影响 要解决 实质:位置是个变量

            const ballPosition = this.$refs.ball.getBoundingClientRect()
            const badgePosition = document.getElementById("badge").getBoundingClientRect()

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top
            el.style.transform = `translate(${xDist}px, ${yDist}px)`
            // el.style.transition = "all 1s ease"
            el.style.transition = "all 0.5s cubic-bezier(.66,.1,1,.41)"
            done()
        },
        afterEnter(el){ 
            this.ballFlag = !this.ballFlag
        },
        getSelectCount(count) {
            this.selectedCount = count
            console.log('父组件从子组件拿到的值',this.selectedCount)
        }
    }   
}
</script>
<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
        .btn{
            margin: 0 4px;
        }
        .now_price{
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
        .mui-card-footer{
            display: block;
            button {
                margin: 15px 0;
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 140px;
            transform: translate(63px, 429px)
        }
    }
</style>