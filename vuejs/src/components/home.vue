<template>
    <div id="home">
        <hd></hd>        
        <!--maotai lq start-->
        <div class="text w-100">
            
        <div class="hotProdoct_T">
            <p>习酒馆</p>&nbsp;窖藏系列&nbsp; 金质系列&nbsp; 习酱系列&nbsp; 浓香系列
            <a href="">&gt;&gt;更多......</a>
        </div>
        <div id="lq1"></div>

        <div class="hotProdoct_T">
            <p>UMEET(悠蜜)专场</p>
            <a href="">&gt;&gt;更多......</a>
        </div>
        <div id="lq2"></div>

        <div class="hotProdoct_T">
            <p>葡萄酒庄</p>&nbsp;干红系列 &nbsp;干白系列
            <a href="">&gt;&gt;更多......</a>
        </div>
        <div id="lq3"></div>

        <div class="hotProdoct_T">
            <p>技术开发公司</p>&nbsp;茅台醇
            <a href="">&gt;&gt;更多......</a>
        </div>
        <div id="lq4"></div>

        </div>
        <!--maotai lq over-->
        <foot></foot>
    </div>
</template>
<script>
import hd from './hd.vue';
import foot from './foot.vue';

    export default{      
        data(){
            return{
                list:[]
            }
        },
        mounted () {
            this.$http({
                url:'http://localhost:3000/index_read',
                methods:'get'
            }).then(res=>{
                this.list = res.data;                              
                    var str1 = '';
                    var str2 = '';
                    var str3 = '';
                    var str4 = '';
                        for (var i = 0;i<5;i++) {
                            str1 += "<div id='lq' myid = '"+this.list[i].GoodID+"'>"+
                                "<img src='"+this.list[i].src+"' />"+
                                "<p>"+this.list[i].price+"</p>"+
                                "<p>"+this.list[i].name+"</p>"+
                                "<em class='EM'>加入购物车</em>"+
                            "</div>";
                        };
                        $("#lq1").html(str1);
                        for (var i = 5;i<10;i++) {
                            str2 += "<div id='lq' myid = '"+this.list[i].GoodID+"'>"+
                                "<img src='"+this.list[i].src+"' />"+
                                "<p>"+this.list[i].price+"</p>"+
                                "<p>"+this.list[i].name+"</p>"+
                                "<em class='EM'>加入购物车</em>"+
                            "</div>";
                        };
                        $("#lq2").html(str2);
                        for (var i = 10;i<15;i++) {
                            str3 += "<div id='lq' myid = '"+this.list[i].GoodID+"'>"+
                                "<img src='"+this.list[i].src+"' />"+
                                "<p>"+this.list[i].price+"</p>"+
                                "<p>"+this.list[i].name+"</p>"+
                                "<em class='EM'>加入购物车</em>"+
                            "</div>";
                        };
                        $("#lq3").html(str3);
                        for (var i = 15;i<20;i++) {
                            str4 += "<div id='lq' myid = '"+this.list[i].GoodID+"'>"+
                                "<img src='"+this.list[i].src+"' />"+
                                "<p>"+this.list[i].price+"</p>"+
                                "<p>"+this.list[i].name+"</p>"+
                                "<em class='EM'>加入购物车</em>"+
                            "</div>";
                        };
                        $("#lq4").html(str4);
              
            })
        },
        components:{
            hd,foot
        }
    }
</script>
