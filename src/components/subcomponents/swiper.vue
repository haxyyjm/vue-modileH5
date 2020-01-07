<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in swiperList" :key='item.url'>
                <!-- <img :src="item.img" alt="" :class="{'full': isfull}"> -->
                <img :src="item.img" alt="" class="full">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // swiperList: [{
            //     url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/e725fd62e74f428092c6276a8cf758a3.jpg',
            //     img: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/a8acc8ad90594239a6df94ec9b5f827b.jpg'
            // },{
            //     url: 'https://static.veer.com/veer/static/resources/keyword/2019-12-31/baf4298920a64380bbb52e6219fcd3b5.jpg',
            //     img: 'https://static.veer.com/veer/static/resources/keyword/2019-12-30/dd3d826477744589ac019d61b0686b2c.jpg'
            // }]
        }
    },
    props: ["swiperList","isfull"]
}
</script>
<style lang="scss" scoped>
     .mint-swipe{
        height: 200px
    }
    .mint-swipe-item{
        text-align: center;
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: aqua;
        }
        &:nth-child(3){
            background-color: blue;
        }
        .full{
            width: 100%;
            height: 100%;
        }
    }
</style>