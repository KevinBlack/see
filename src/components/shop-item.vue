<template>
    <div class="item">
        <div>
            <div class="item-img"><img :alt="item.name" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
            </div>
            <h6>{{item.name}}</h6>
            <h3 >{{item.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li v-for="sku,index in item.sku_info"><a href="javascript:;" @click="tableIndex(index)" :class="{'active':index==itemIndex}" :title="sku.spec_json.show_name"><img :src="'http://img01.smartisanos.cn/'+sku.spec_json.image+'20X20.jpg'"></a></li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn"><router-link :to="{name:'Item',query: {itemId:item.sku_info[itemIndex].sku_id}}">查看详情</router-link></span>
                <span class="item-blue-btn" @click="addCarPanelHandle(item.sku_info[itemIndex])">加入购物车</span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{item.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <router-link :to="{name:'Item',query: {itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            itemIndex: 0
        }
    },
   props:{
       item:{
           type: Object
       }
   },
   methods:{
       tableIndex (index) {
           this.itemIndex = index
       },
       addCarPanelHandle (data) {
           let itemData = {info:data,count:1}
           this.$store.commit('addCarPanelData',itemData)
       }
   }
}
</script>

<style>

</style>

<!--
17、接 mzhf.vue  定义对象来接收传过来的 item ：
export default {
   props:{
       item:{
           type: Object
       }
   }
}
至此，可以使用 item.XXX 来读取数据了
18、
图片原：<img :alt="item.name" :src="item.sku_info[0].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
图片改：<img :alt="item.name" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">

小按钮原：<a href="javascript:;" :title="sku.spec_json.show_name">
小按钮改：<a href="javascript:;" @click="tableIndex(index)" :class="{'active':index==itemIndex}" :title="sku.spec_json.show_name">

19、新增变量来使选择的小按钮颜色与商品图片对应起来
export default {
    data () {
        return{
            itemIndex: 0
        }
    },
   props:{
       item:{
           type: Object
       }
   },
   methods:{
       tableIndex (index) {
           this.itemIndex = index
       }
   }
}
20、先定义返回数据及初始值：
data () {
        return{
            itemIndex: 0
        }
    }
11、然后定义函数，并将获取到的 item 中的 index 作为参数传过来，使当前被点击的按钮的 index 值与图片的 index 值相等（对应）即可
methods:{
       tableIndex (index) {
           this.itemIndex = index
       }
   }

-->