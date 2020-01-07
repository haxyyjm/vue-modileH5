<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <P class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>点击:{{newsinfo.click}}</span>
        </P>
        <hr>
        <div class="content">
            2017年6月1日起，《互联网新闻信息服务管理规定》（国家互联网信息办公室令第1号）实施。根据《规定》，
            通过互联网站、应用程序、论坛、博客、微博客、公众账号、即时通信工具、网络直播等形式向社会公众提供互联网新闻信息服务，应当取得互联网新闻信息服务许可。
            截至2019年12月31日,由北京市网信办批准的互联网新闻信息服务单位共6家，分别是：北京日报社、北京青年报网际传播技术有限公司、北京千龙新闻网络传播有限责任公司、
            中共北京市委前线杂志社、新京报社和北京青年报社。其中，获得采编发布服务许可6家、传播平台服务1家。具体服务形式包括：互联网站5个，应用程序10个，论坛1个，博客1个，公众账号57个，共74个服务项。
        </div>

        <!--评论区子组件 对应新闻需传id-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id, //如有后台接口，这个参数就有作用
            newsinfo: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    components: {
        "comment-box": comment
    },
    methods: {
        getNewsInfo(){
            this.newsinfo = {
                add_time: '2020-02-01 12:12',
                click: 1,
                title: '1季度多家企业',
            }
            // this.$http.get(''+ this.id).then(result=>{
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            font-size: 14px;
            color: #909399;
        }
    }
</style>