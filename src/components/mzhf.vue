<template>
  <div id="main" class="container">
    <div class="sku-box store-content">
      <div class="sort-option">
        <ul class="line clear">
          <li><a href="javascript:;" class="active">综合排序</a></li>
          <li><a href="javascript:;" class="">销量排序</a></li>
          <li><a href="javascript:;" class="">价格低到高</a></li>
          <li><a href="javascript:;" class="">价格高到低</a></li>
        </ul>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <shop-item v-for="item,index in mzhf" :item="item"></shop-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mzhf from '@/lib/newGoodsData'

import shopItem from '@/components/shop-item'

export default {
    data(){
        return{
            mzhf:mzhf
        }
    },
    components:{
        shopItem
    }
}
</script>

<style>

</style>

<!--
接 index.js 页面，本页将单个商品做成组件形式，便于复用：
11、引入数据：import mzhf from '@/lib/newGoodsData'
12、定义数据的挂载点——mzhf ：
export default {
    data(){
        return{
            mzhf:mzhf
        }
    }
}
13、自定义<shop-item>标签，循环生成商品：<shop-item v-for="item,index in mzhf" :item="item"></shop-item>
14、引入组件页面：import shopItem from '@/components/shop-item'
15、配置相关项：
export default {
    data(){
        return{
            mzhf:mzhf
        }
    },
    components:{
        shopItem
    }
}
16、利用 :item="item"进行页面之间的数据传递，具体见 shop-item.vue
-->