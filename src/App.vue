<template>
  <div id="app">
    <div id="header">
      <div class="nav-global">
        <div class="container">
          <h1 class="nav-logo">
            <a href="/home"></a>
          </h1>
          <ul class="nav-aside">
            <li class="nav-user">
              <a href="javascript:;">个人中心</a>
              <!--active-->
              <div class="nav-user-wrapper">
                <div class="nav-user-list">
                  <dl class="nav-user-avatar">
                    <dd><span class="ng-scope"></span></dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <router-link tag="li" to="/account" class="order"><a href="javascript:;">我的订单</a></router-link>
                    <li class="support"><a href="javascript:;">售后服务</a></li>
                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                    <li class="information"><a href="javascript:;">账户资料</a></li>
                    <li class="address"><a href="javascript:;">收货地址</a></li>
                    <li class="logout"><a href="javascript:;">退出</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <!--active-->
            <car-panel></car-panel>
          </ul>
          <ul class="nav-list">
            <li class="nav-item" v-for="item,index in navBtn">
              <router-link class="nav-link" :to="item.road">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
    <div _ngcontent-c2="" class="footer">
      <div _ngcontent-c2="" class="container">
        <div _ngcontent-c2="" class="siteinfo">
          <ul _ngcontent-c2="" class="nav-footer">

            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">订单服务 </h3>
              <ul _ngcontent-c2="">

                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/instruction">购买指南</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/payment">支付方式</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/delivery">送货政策</a> </li>
              </ul>
            </li>
            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">服务支持 </h3>
              <ul _ngcontent-c2="">

                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/service">售后服务</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/servicelist">维修门店</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/storelist">零售门店</a> </li>
              </ul>
            </li>
            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">自助服务 </h3>
              <ul _ngcontent-c2="">

                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/self-service">热点咨询</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/self-service/6">预约购买</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/self-service/7">订单物流</a> </li>
              </ul>
            </li>
            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">媒体中心 </h3>
              <ul _ngcontent-c2="">

                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/pr/#/news-center">新闻动态</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/pr/#/videos">官方视频</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/pr/#/pictures">图片资源</a> </li>
              </ul>
            </li>
            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">关于公司 </h3>
              <ul _ngcontent-c2="">

                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/about">公司简介</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/join">加入我们</a> </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/awards">荣誉奖项</a> </li>
              </ul>
            </li>
            <li _ngcontent-c2="">
              <h3 _ngcontent-c2="">关注我们</h3>
              <ul _ngcontent-c2="">
                <li _ngcontent-c2=""><a _ngcontent-c2="" href="http://weibo.com/u/2968634427" target="_blank">新浪微博</a></li>
                <li _ngcontent-c2="" class="weixin"> <a _ngcontent-c2="">官方微信</a>
                  <div _ngcontent-c2="" class="mask"></div>
                  <div _ngcontent-c2="" class="qrcode">
                    <div _ngcontent-c2="" class="close-btn"></div>
                    <div _ngcontent-c2="" class="qrcode-bg"></div>
                  </div>
                </li>
                <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/contact" target="_blank">联系我们</a> </li>
              </ul>
            </li>
          </ul>
          <ul _ngcontent-c2="" class="service">
            <li _ngcontent-c2="" class="tel">400-626-5666</li>
            <li _ngcontent-c2="" class="time">周一至周日 9:00-18:00（仅收市话费）</li>
            <li _ngcontent-c2="" class="online"> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/self-service"><span _ngcontent-c2="" class="smartisan-icon info-question"></span>在线帮助</a> </li>
          </ul>
        </div>
        <div _ngcontent-c2="" class="copyright">
          <h4 _ngcontent-c2="">Copyright © <span _ngcontent-c2="" copyright-year=""></span>, aner Co., Ltd. All Rights Reserved.</h4>
          <h5 _ngcontent-c2="" class="company">北京安儿宝贝科技有限公司</h5>
          <ul _ngcontent-c2="" class="privacy">
            <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/agreement">法律声明</a> </li>
            <li _ngcontent-c2=""> <a _ngcontent-c2="" href="//www.smartisan.com/support/#/privacy">隐私条款</a> </li>
            <li _ngcontent-c2="" class="devstore"> <a _ngcontent-c2="" href="http://dev.smartisan.com/">开发者中心</a> </li>
          </ul>
          <h6 _ngcontent-c2=""> <a _ngcontent-c2="" href="http://www.miibeian.gov.cn/" target="_blank"><span _ngcontent-c2="">京ICP备14041720号-1</span><span _ngcontent-c2="">京ICP证140622号</span><span _ngcontent-c2="">京公网安备11010502025474</span></a> </h6> </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBtn from '@/lib/nav'
import carPanel from '@/components/car-panel'

export default {
  data () {
    return {
      navBtn:navBtn
    }
  },
  components: {
      carPanel: carPanel
  }
}
</script>

<style>
.footer[_ngcontent-c2] {
  background: #fafafa;
  border-top: 1px solid #e6e6e6;
  display: block;
}
.footer[_ngcontent-c2] .container[_ngcontent-c2] {
  width: 1220px;
}
.footer[_ngcontent-c2] .siteinfo[_ngcontent-c2] {
  height: 100px;
  padding: 100px 0 32px;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
}
.footer[_ngcontent-c2] .siteinfo[_ngcontent-c2] .nav-footer[_ngcontent-c2] > li[_ngcontent-c2] {
  width: 149px;
  line-height: 1;
  float: left;
}
.footer[_ngcontent-c2] .siteinfo[_ngcontent-c2] .nav-footer[_ngcontent-c2] > li[_ngcontent-c2] h3[_ngcontent-c2] {
  color: #646464;
  font-size: 16px;
  font-weight: bolder;
  padding: 0 0 14px;
}
.footer[_ngcontent-c2] .siteinfo[_ngcontent-c2] .nav-footer[_ngcontent-c2] > li[_ngcontent-c2] li[_ngcontent-c2] {
  color: #c3c3c3;
  font-size: 12px;
  padding: 6px 0;
}
.footer[_ngcontent-c2] .service[_ngcontent-c2] {
  position: absolute;
  right: 0;
  overflow: hidden;
  line-height: 34px;
}
.footer[_ngcontent-c2] .service[_ngcontent-c2] .tel[_ngcontent-c2] {
  font-size: 30px;
  line-height: 1;
  cursor: default;
  color: #646464;
  top: -2px;
  position: relative;
}
.footer[_ngcontent-c2] .service[_ngcontent-c2] li[_ngcontent-c2] {
  clear: both;
  width: 241px;
  font-size: 12px;
  line-height: 18px;
  color: #c3c3c3;
  text-align: right;
}
.footer[_ngcontent-c2] .service[_ngcontent-c2] li.online[_ngcontent-c2] a[_ngcontent-c2] {
  float: right;
  width: 102px;
  height: 32px;
  line-height: 32px;
  background: linear-gradient(#fcfcfc,#f5f5f5);
  cursor: pointer;
  font-size: 14px;
  padding: 0 0 0 26px;
  margin-top: 8px;
  text-align: left;
  color: #5079d9;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
.footer[_ngcontent-c2] .language-switch[_ngcontent-c2] {
  position: absolute;
  right: -20px;
  bottom: -50px;
}
.language-switch[_ngcontent-c2] {
  position: relative;
  z-index: 21;
  background: hsla(0,0%,99%,0);
  font-size: 12px;
  line-height: 30px;
  width: 118px;
}
.footer[_ngcontent-c2] .copyright[_ngcontent-c2] {
  color: #434d55;
  font-size: 12px;
  padding: 40px 0;
}
.footer[_ngcontent-c2] .copyright[_ngcontent-c2] h4[_ngcontent-c2], .footer[_ngcontent-c2] .copyright[_ngcontent-c2] h5[_ngcontent-c2] {
  float: left;
  height: 15px;
  line-height: 15px;
  color: #757575;
}
.footer[_ngcontent-c2] .privacy[_ngcontent-c2] {
  float: left;
  margin: 0 0 0 12px;
}
.footer[_ngcontent-c2] .privacy[_ngcontent-c2] li[_ngcontent-c2] {
float: left;
line-height: 12px;
padding: 1px 10px 0;
border-left: 1px solid #ccc;
}
.footer[_ngcontent-c2] .copyright[_ngcontent-c2] h6[_ngcontent-c2] {
  clear: both;
  padding: 10px 0 0;
  height: 15px;
}
</style>

<!--
一切都是从这里开始：
1、以 index.html 为模板，以 main.js 为总 js 入口页，vue 的首页
2、引入数据：import navBtn from '@/lib/nav' @符即‘src’，引入 src 目录下的 lib 文件夹中的 nav.js 文件
3、定义数据的挂载点 ：
export default {
    data(){
        return{
            navBtn:navBtn
        }
    }
}
4、84行循环生成导航链接：<li class="nav-item" v-for="item,index in navBtn">
5、85行自定义标签，<router-link class="nav-link" :to="item.road">{{item.name}}</router-link>
 :to="item.road"属性指定每个链接对应的路由地址，{{item.name}}获取每个链接的名称
6、<router-view/>标签是页面通过路由信息在本页渲染的挂载点，可以有多个，通过<router-view name="XXX" />来与路由信息中一一对应，具体见 index.js 页
-->