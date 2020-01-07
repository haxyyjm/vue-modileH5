<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input ref="numbox"  @change="countChange" id="test" class="mui-input-numbox" type="number" readonly :value="initcount" />
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
    props: ["initcount","goodsid"],
    mounted() {
        //初始化数字计数器组件
        mui('.mui-numbox').numbox()

    },
    methods: {
        countChange(){
            console.log('ref',this.$refs.numbox.value)
            this.$store.commit('updateGoodsInfo',
                {
                    id: this.goodsid,
                    count: this.$refs.numbox.value
                })
        }
    }
}
</script>
<style lang="scss">

</style>