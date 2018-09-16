<template>
    <div class="contactUs">
        <hd></hd>
        <!--mtContact start-->
        <div class="mtContact_title">
            {{title}}
        </div>

        <div class="mtContact_text">
            <div class="mtContact_text_1">
                <p>CONNECT&nbsp;US</p>
                <span>联系我们</span>
            </div>
            <div class="mtContact_text_2 d-flex justify-content-between align-items-center">
                <ul><li v-for="item in address1" :key="item.id">{{item}}</li></ul>
                <ul><li v-for="item in address2" :key="item.id">{{item}}</li></ul>
            </div>
        </div>
        <!-- map start -->
        <div id="container"></div>
        <!-- map over -->
        <foot></foot>
    </div>
</template>
    <style>       
        #container{width: 1200px; height: 500px; margin: 0 auto 30px;}
    </style>

<script>
        import hd from './hd.vue';
        import foot from './foot';       
        export default {
            mounted() {
                	var map = new BMap.Map(container);
                    // 创建地图实例  
                    var point = new BMap.Point(121.496670, 31.385815);
                    // 创建点坐标  
                    map.enableScrollWheelZoom();
                    map.centerAndZoom(point, 16);
                    var marker = new BMap.Marker(point);
                    map.addOverlay(marker);
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            },
            data(){
                return{
                    title:'茅台是著名三大蒸馏酒之一，誉称国酒，在国内外享有盛名！',
                    address1:['企业在线QQ:800083967','售前咨询: 400 1000 799',
                    '地址：贵州省贵阳市观山湖区湖滨路10号翔明大厦10楼'],
                    address2:['您对店铺的意见或建议：xliang@emaotai.cn','售前、售中、售后服务：xliang@emaotai.cn',
                    '企业客户咨询服务：xliang@emaotai.cn','商务合作:xliang@emaotai.cn']
                }
            },
            components:{
                hd,foot
            }
        }
</script>

