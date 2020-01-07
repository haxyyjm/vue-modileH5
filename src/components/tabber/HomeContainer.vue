<template>
    <div>
        <swiper :swiperList="swiperList" :isfull="true"></swiper>
        <!--九宫格转为六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                     <img src="../../assets/images/news.png" alt="新闻">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../assets/images/picture.png" alt="新闻">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../assets/images/buy.png" alt="新闻">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/people.png" alt="新闻">
                    <div class="mui-media-body">人员反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/video.png" alt="新闻">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/link.png" alt="新闻">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return {
            swiperList: [{
                url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/e725fd62e74f428092c6276a8cf758a3.jpg',
                img: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/a8acc8ad90594239a6df94ec9b5f827b.jpg'
            },{
                url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/baf4298920a64380bbb52e6219fcd3b5.jpg',
                img: 'https://static.veer.com/veer/static/resources/keyword/2019-12-30/dd3d826477744589ac019d61b0686b2c.jpg'
            }]
        }
    },
    created(){
        this.getSwiperData()
    },
    components: {
        swiper
    },
    methods: {
        getSwiperData(){
            return  this.swiperList
            // this.$http.get('http://vue.studyit.io/api/getlunbotu').then(result => {
            //     console.log(result.body)
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px
    }
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: aqua;
        }
        &:nth-child(3){
            background-color: blue;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
    .mui-media-body{
        font-size: 13px !important;
    }

</style>