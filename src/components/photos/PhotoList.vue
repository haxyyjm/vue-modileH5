<template>
    <div>
        <!-- 引入mui 可滑动的top顶部滑动条 无法滑动需要引入mui-js文件-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!-- 拼劲类 三元表达判断 -->
                    <a v-for="item in topData" :key="item.id" :class="['mui-control-item', item.id == 1 ? 'mui-active' : '']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        {{item.name}}
                    </a>
                </div>
            </div>
        </div>
        <!--图片列表区域 懒加载加载图片 mint-ui直接拿来使用 点击通过拿取图片携带的id查询详情信息-->
        <ul class="photo-list">
            <router-link tag="li" :to="'/home/photoinfo/' + item.id" v-for="item in imgList" :key="item.id">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.body}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            imgList: [{
                id: 1,
                title: '这是标题',
                body: '大萨达撒大萨达撒多打扫按说按说按说放松的反倒是大萨达撒多放松的打扫方式使得打扫打扫使得的是',
                url: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            },{
                id: 2,
                title: '这是标题22',
                body: '内容附近的撒大飒飒是娇返回司法鉴定红烧豆腐',
                url: 'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            },{
                id: 3,
                title: '这是标题33',
                body: '内容附近的gdg撒娇返回司法鉴定红烧豆腐',
                url: 'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
            },{
                id: 4,
                title: '这是标题44',
                body: '内容附近的撒娇fadsa返回司法鉴定红烧豆腐',
                url: 'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
            },{
                id: 5,
                title: '这是标题44333',
                body: '内容附近的撒娇f放松的放松的adsa返回司法鉴定红烧豆腐',
                url: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            },{
                id: 6,
                title: '这是标题42224',
                body: '放松的娇fafsdfdsdsa返回司法鉴定红烧豆腐',
                url: 'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            }],
            topData: [{
                id: 1,
                name: '全部'
            },{
                id: 2,
                name: '生活家居'
            },{
                id: 3,
                name: '摄影设计'
            },{
                id: 4,
                name: '明星美女'
            }]
        }
    },
    //当组件中的dom结构渲染好并放到页面中后，才会执行这个钩子函数
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }
    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            position: relative;
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999; //阴影   
            img{
                width: 100%;
                vertical-align: middle;
                height: 300px;
            }
        }   

        .info{
            width: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            bottom: 0;
            color: white;
            text-align: left;
            max-height: 84px;
            min-height: 50px;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>