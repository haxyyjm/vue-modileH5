<template>
    <div class="goods-list">
        <!-- <router-link :to="'/home/goodsinfo' + item.id" tag="div" class="goods-item" v-for="item of goodsList" :key="item.img_url">
            <img 
            :src="item.img_url">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.newPrice}} + '元'</span>
                    <span class="old">{{item.oldPrice}}} + '元'</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.shengyu}} 件</span>
                </p>
            </div>
        </router-link> -->
        <!-- vue中的编程式导航 -->
         <div @click="goDetail(item.id)" class="goods-item" v-for="item of goodsList" :key="item.id">
            <img 
            :src="item.img_url">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.newPrice}} + '元'</span>
                    <span class="old">{{item.oldPrice}} + '元'</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.shengyu}} 件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [{
                id: 1,
                img_url: 'https://hellorfimg.zcool.cn/provider_image/preview260/2234688283.jpg',
                title: '小米手机这个是',
                newPrice: '199',
                oldPrice: '899',
                shengyu: 10,
            },{
                id: 2,
                img_url: 'https://hellorfimg.zcool.cn/provider_image/preview260/2234688283.jpg',
                title: '小米手机这个是',
                newPrice: '399',
                oldPrice: '899',
                shengyu: 10,
            },{
                id: 3,
                img_url: 'https://hellorfimg.zcool.cn/provider_image/preview260/2234688283.jpg',
                title: '小米手机这个是',
                newPrice: '599',
                oldPrice: '899',
                shengyu: 10,
            },{
                id: 4,
                img_url: 'https://hellorfimg.zcool.cn/provider_image/preview260/2234688283.jpg',
                title: '小米手机这个是',
                newPrice: '599',
                oldPrice: '899',
                shengyu: 10,
            },{
                id: 5,
                img_url: 'https://hellorfimg.zcool.cn/provider_image/preview260/2234688283.jpg',
                title: '小米手机这个是',
                newPrice: '599',
                oldPrice: '899',
                shengyu: 10,
            }]
        }
    },
    methods: {
        //编程式导航
        goDetail(id){
            this.$router.push('/home/goodsinfo/' + id)
        }
    }
}
</script>
<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px; //精妙的思想
        justify-content: space-between;
        .goods-item{
            display: flex;
            flex-direction: column;//改变方向
            justify-content: space-between;
            min-height: 200px;//防止网速过慢高度撑不开
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            padding: 2px;
            img{
                width: 100%;
            }
            .title{
               font-size: 14px; 
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
        // .mint-button--large {
        //     position: absolute;
        //     bottom: 40px;
        //     width: 100%;
        // }
    }
</style>