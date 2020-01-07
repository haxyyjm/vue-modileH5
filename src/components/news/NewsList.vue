<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_tim | dateFormat}}</span>
                            <span>点击: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsList: [],
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            this.newsList = [{
                add_time: '2020-02-01 12:12',
                click: 1,
                id: 1,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-01-01T12:12:12.000Z',
                click: 12,
                id: 12,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '2季度多家企业',
                zhaiya0: '这是房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 13,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 14,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 111,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 122,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 133,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 144,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 1445,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            },{
                add_time: '2020-02-01 12:12:12',
                click: 1,
                id: 177,
                img_url: 'https://upload.jianshu.io/users/upload_avatars/12598332/dd2c4b88-e36b-45f5-af67-c36f731222fc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
                title: '1季度多家企业',
                zhaiya0: '房价一季度销售企业已经陆续公布，什么葳蕤研究中心',
            }]
            // this.$http.get('')
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
           h1{font-size: 14px;}
           .mui-ellipsis{
               font-size: 12px;
               color: #226aff;
               display: flex;
               justify-content: space-between;
           } 
        }
    }
</style>