<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
            <span>点击:{{photoinfo.click}}</span>
        </p>
        <hr>
        <!-- 图片缩略图放置处 -->
        <vue-preview
            :list="photoList"
            :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
            :previewBoxStyle="{border: '1px solid #eee'}"
            :tapToClose="true"
            @close="closeHandler"
            @destroy="destroyHandler"
        />
        <div class="content">
            {{photoinfo.content}}
        </div>
        <!--评论子组件 第一版显示的评论内容一样是因为没有请求后台,全是静态数据-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            photoList:[
                {
                src: 'https://placekitten.com/600/400',
                w: 600,
                h: 400
                },{
                src: 'https://placekitten.com/1200/900',
                w: 600,
                h: 400
                },{
                src: 'https://placekitten.com/1200/900',
                w: 600,
                h: 400
                },{
                src: 'https://placekitten.com/1200/900',
                w: 600,
                h: 400
                }
            ],
            id: this.$route.params.id, //路由的id
            photoinfo: { //图片详情
                add_time: '2020-02-01 12:12',
                click: 1,
                title: '这个图片很美',
                content: '发的阿法第三方发的阿法第三方发的阿法第三方发的阿法第三方发的阿法第三方发的阿法第三方发的阿法第三方发的阿法第三方'
            }
        }
    },
    components: {
        'comment-box': comment 
    },
    methods: {
        //获取图片的详情
        // getPhotoInfo(){

        // }
        //获取缩略图list即为 photoList 通过id获取
        getPhotoList(){

        },
        // 即将关闭的时候，调用这个处理函数
        closeHandler() {
        console.log('closeHandler')
        },
        // 完全关闭之后，调用这个函数清理资源
        destroyHandler() {
        console.log('destroyHandler')
        }
    }
}
</script>

<style lang="scss">
    .photoinfo-container {
        padding: 3px;
        h3{
           color: #26A2FF;
           font-size: 15px;
           text-align: center;
           margin: 15px 0; 
        } 
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
            text-indent: 2em;
        }
        .thumbImg {
            box-shadow: 0 0 8ox #999;
        }
    }
</style>