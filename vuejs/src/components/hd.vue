<template>
    <div class="head">
        <!--maotai Titel start-->
<div class="title">
	<ul class="t1">
		<li v-for="item in t1" :key="item.id"><a href="#">{{item}}</a></li>
	</ul>
	<div class="t2">
		<p>{{t2}}</p>
	</div>
</div>
<!--maotai Titel over-->

<!--maotai Search start-->	
<header>
<div class="header d-flex justify-content-between align-items-center">
	<div id="s1">
		<input type="text" id="searchText" value="" placeholder="茅台迎宾酒"/>
		<input type="button" id="search" value="搜索" />
		<div class="keyWord">
			{{keyword}}
			<a href="#" v-for="item in content" :key="item.id">{{item}}</a>
		</div>
	</div>
</div>
</header>
<!--maotai Search over-->	

<!--maotai Bar start-->
<div class="bar">
	<div class="bar_1 d-flex justify-content-between align-items-center">
		<a href="#" class="catalogue">{{sort}}</a>
		<router-link to="/home">{{home}}</router-link>
		<router-link to="/contactUs">{{contactUs}}</router-link>		
		<div class="user d-flex justify-content-around align-items-center">
			<router-link id="SPC" to="/shopping">{{shoppingMarket}}</router-link>		
			<router-link to="/login">{{login}}</router-link>           
		</div>
	</div>
	<div class="bar_2">HOT</div>
</div>
<!--maotai Bar over-->	
    </div>
</template>

<script>
import fn from '../assets/js/maotai';
export default {
	mounted() {
		fn()
	},
	data(){
		return{
			t1:["首次茅台商城","微商城","茅台云商"],
			t2:'您好，欢迎来到茅台商城！',
			content:['飞天茅台 ','赖茅酒 ','贵州大曲 ','茅台酒 ','生肖属相 ','汉酱 ','仁酒'],
			keyword:'关键字:',
			sort:'茅台商城商品分类',
			home:'首页',
			contactUs:'联系我们',
			shoppingMarket:'[购物车]',
			login:'[登陆注册]'
		}
	}
}
</script>



   

