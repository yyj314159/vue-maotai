<template>
    <div class="shopping">
            <div id="shoppingCart">
        <!--shoppingCart_title start-->
        <div class="shoppingCart_title d-flex justify-content-around align-items-center">
            <span>{{market}}</span>
            <p>欢迎&nbsp;{{user}}</p>
            <router-link to="/">{{goback}}</router-link>
        </div>
        <!--shoppingCart_title over-->

        <!--shoppingCart_Content start-->
        <table border="1" class="shoppingCart_content">
            <thead>
                <tr> <th v-for="item in title" :key="item.id">{{item}}</th></tr>
            </thead>
            <tbody>
                <tr><td v-for="item in content" :key="item.id">{{item}}</td></tr>              
            </tbody>	
        </table>
        <!--shoppingCart_Content over-->      
    </div>
    </div>
</template>
<script>
export default {
    name:'.shopping',
    data(){
        return{
            user:'杨艳杰',
            title:['产品编号','产品名称','产品图片','产品价格','产品数量','产品管理'],
            content:['D','茅台酒','Data','￥222','2','删除'],
            market:'购物车',
            goback:'返回首页'
        }
    }
}
</script>

