import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//先从本地存储中加入放到car里
var car = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    // car: []
    car: car //注意这里的精妙设计==>将购物车中商品的数据用数组存起来,即存储商品对象{id:'',count:'数量',price:'商品的价格',selected:false}
  },
  mutations: {
    //把商品信息保存到car里
    addToCar(state, goodsinfo) {

      var flag = false //没有找到对应的商品
      //如果已经有了这个商品，就只加数量
      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true 
          return true
        }
      })

      if(!flag){
        state.car.push(goodsinfo)
      }
      //当更新car之后，把car数组 存储到本地的localStorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    //更新方法更新每一行数量
    updateGoodsInfo(state, goodsinfo){
      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      //当修改为update数量的时候,把数据保存在前端存储里面
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeCar(state,id){
      state.car.some((item,i)=>{
        if(item.id == id){
          state.car.splice(i,1)
          return true
        }
      })
      //将删除完毕的同步到本地存贮中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
     //更新方法 更新开关状态
     updateGoodsSelected(state, info){
      state.car.some(item => {
        if(item.id == info.id){
          item.selected =info.selected
          return true
        }
      })
      //当修改为update数量的时候,把数据保存在前端存储里面
      localStorage.setItem('car', JSON.stringify(state.car))
    }, 
  },
  getters: {
    getAllCount(state){
      var c = 0
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
       var o = {}
       state.car.forEach(item=>{
         o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.selected
     })
     return o
   },
   //实时计算购买的件数以及价钱且为true勾选状态
   getGoodsCountAndAmount(state){
    var o = {
      count: 0, //勾选的数量
      amount: 0//勾选的总价
    }
    state.car.forEach(item=>{
      if(item.selected){
        o.count += item.count
        o.amount += item.price * item.count
      }
    })
    return o
   }
  },
  actions: {
  },
  modules: {
  }
})
