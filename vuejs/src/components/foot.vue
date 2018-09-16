<template>
<div class="foot">
    <!--footer start-->
    <div class="profooter">
        <div class="F1">
            <ul class="F11 d-flex">
                <li v-for="item in address" :key="item.id">{{item}}</li>
            </ul>
            <div id="F12">
                <ul><li v-for="item in ls1" :key="item.id">{{item}}</li></ul>
                <ul><li v-for="item in ls2" :key="item.id">{{item}}</li></ul>
                <ul><li v-for="item in ls3" :key="item.id">{{item}}</li></ul>
                <ul><li v-for="item in ls4" :key="item.id">{{item}}</li></ul>
            </div>
        </div>
        <div id="F2">
            <div class="F21 d-flex justify-content-between align-items-center"></div>
        </div>
    </div>
    <footer>
        <div id="f1"></div>
        <div class="f2">
            <ul class="d-flex justify-content-between align-items-center">
                <li v-for="item in about" :key="item.id"><a href="#">{{item}}</a></li>
            </ul>
            <p>{{ban}}</p>
        </div>
    </footer>
<!--footer over-->
</div>
</template>
<script>
export default {
    
    data(){
        return{
            address:['400 1000& 799 服务热线','点击在线咨询(9:00--22:00)',
            'cuijie@emaotai.cn 精品入住 商务联系'],
            ls1:['服务中心','常见问题','邮件订阅','领取优惠券'],
            ls2:['支付方式','银行汇款','支付宝','银联支付'],
            ls3:['物流配送','配送费用','配送方式','配送方式'],
            ls4:['商城指南','购物流程','订购方式','积分政策'],
           about:['商城首页','关于我们','公司资质','联系我们','经销商网络','自提货网点'],
           ban:'未满18岁禁止饮酒！'
        }
    }
}
</script>






