<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input @change="countChanged" ref="numbox" id="test" class="mui-input-numbox" type="number" value="1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {

        }
    },
    props: ["max"],
    mounted() {
        //初始化数字计数器组件
        mui('.mui-numbox').numbox()
        console.log('.....max',this.max) //注意这里能直接取出来从父组件里传来的值，但是如果是通过调用api方法取数据 是一个异步方法，取得值可能为undefined

    },
    //这里有bug打印监听不出来
    watch: {
        max: function(newval, oldval){
            console.log('进入')
            console.log('newval',newval)
            mui('.mui-numbox').numbox().setOption("max",newVal)
        },
        immediate: true
    },
    methods: {
        //子组件这里的值传给父组件
        /**
         *@desc 精妙的取值 this.$refs.numbox.value
         */
        countChanged(){
            console.log('.....max',this.max)
            this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    }
}
</script>
<style lang="scss">

</style>