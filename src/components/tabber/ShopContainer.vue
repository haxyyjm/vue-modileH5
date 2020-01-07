<template>
    <div class="shopcar-container">
        <!-- 商品列表项区域 -->
        <div class="goods-list">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item, i) in goodsList" :key="item.id">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img src="https://hellorfimg.zcool.cn/provider_image/preview260/2235347447.jpg" alt="商品照片">

                        <div class="info">
                            <h1>小米最大的最好的手机m1</h1>
                            <div>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :goodsid="item.id" :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
                                <a href="javascript:void(0)" @click.prevent="remove(item.id, i)">删除</a>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>元</p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox'
export default {
    data(){
        return {
            goodsList: [],
        }
    },
    components: {
        numbox
    },
    mounted(){
        this.getGoodsList()
        console.log('...',this.$store.state.car)
    },
    methods: {
        //其实这里应该是请求后台获取购物车数据?是否  主要是获取额外信息 ，通过拼接id作为参数获取 即为详情信息
        getGoodsList(){
            this.goodsList = this.$store.state.car
        },
        //点击删除 把组件中与store中都删除
        remove(id, index){
            this.goodsList.splice(index, 1)
            this.$store.commit('removeCar', id)
        },
        selectedChanged(id, val){
            //每当点击开关，把最新的开关状态同步到store当中
            console.log('state',id,val)
            this.$store.commit('updateGoodsSelected', {id:id,selected: val})
        }
    }
}
</script>
<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    width: 60px;
                    height: 60px;
                }
                .info{
                    flex: 1;
                    h1{
                        font-size: 13px;
                        margin-left: 2px;
                    }
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .price{
                        color: red;
                        font-weight: bold;
                    }
                    div{
                        display: flex;
                        margin-left: 2px;
                        justify-content: space-between;
                        align-items: center;
                        a{
                            width: 42px;
                        }
                    }
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
</style>