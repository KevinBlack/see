import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        carPaneData:[]
    },
    mutations:{
        addCarPaneData (state,data) {
            let bOff = true
            state.carPaneData.forEach((goods)=>{
                if(goods.sku_id === data.sku_id){
                    goods.count++
                    bOff = false
                }
            })
            if (bOff) {
                let goodsData = data
                Vue.set(goodsData,'count',1)
                state.carPaneData.push(goodsData)
            }
        }
    }
})

export default store