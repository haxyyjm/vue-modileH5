<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="输入内容" maxlength="120"></textarea>
        <!-- 1.绑定点击事件，校验评论是否为空 得到新的评论 
        为防止重新请求评论list 导致你在第二页的时候，第一页的内容消失，
        所以可以前端重组数组，即是把最新的评论unshift追加到数组头部 -->
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:23:12
                </div>
                <div class="cmt-body">
                    醋聚合大额人家急
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:23:12
                </div>
                <div class="cmt-body">
                    醋聚合大额人家急
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:23:12
                </div>
                <div class="cmt-body">
                    醋聚合大额人家急
                </div>
            </div>
        </div>
        <!-- 点击加载更多1.绑定点击事件 在事件中请求分页数据， 注意老数组被清空 需要用 concat拼接组合新老数组-->
        <mt-button type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        getComment(){
            // this.$http.get('...' + this.id + '....').then(res=>{}); 分页的数据
        }
    },
    props: ["id"] //接收父组件传的id值
}
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>