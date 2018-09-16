//shoppingCart start
class ShoppingCarts{
	constructor(options){
		this.body = options.tbody
		this.load()
	}
	load(){
		var that = this;
		$.ajax({
			url:"http://localhost/maotai/database/maotai.json",
		}).then(function(res){
			that.res = res;
			that.getCookie()
			that.display();
			that.remove()
		})
	}
	getCookie(){
		this.goods = JSON.parse($.cookie("Goods"))
	}
	display(){
		var that = this;
		var str = '';
		this.res.forEach(function(val1){
			that.goods.forEach(function(val2){
				if (val1.GoodID == val2.id) {
					str += `<tr>
								<td>${val1.GoodID}</td>
								<td>${val1.name}</td>
								<td class = "ZZ"><img src="${val1.src}"</td>
								<td>${val1.price}</td>
								<td>${val2.num}</td>
								<td><span>删除</span></td>
							</tr>`
				}
			})
		})

//		for (var i = 0;i<this.res.length;i++) {
//			for (var j = 0;j<this.goods.length;i++) {
//				if(this.res[i].GoodID == that.goods[j].id){
//					console.log(this.res[i].GoodID)
//					console.log(that.goods[j].id)
//					str += `
//					<tr>
//						<td>${that.res[i].GoodID}</td>
//						<td>${that.res[i].name}</td>
//						<td><img src="${that.res[i].src}"</td>
//						<td>${that.res[i].price}</td>
//						<td>${that.goods[j].num}</td>
//						<td><span>删除</span></td>
//					</tr>					
//					`
//				}
//			}
//		}
		this.body.html(str);	
	}
	
	remove(){
		var that = this
		this.body.on("click","span",function(){
			var index = $(this).parent().parent().children().eq(0).text()
			for (var k=0;k<that.goods.length;k++) {
				if (that.goods[k].id == index) {
					break;
				}
			}
			
			that.goods.splice(k,1);
			var str = JSON.stringify(that.goods);
			$.cookie("Goods",str)
			
			$(this).parent().parent().remove()
		})
	}
}

new ShoppingCarts({tbody:$("tbody")});


//shoppingCart over
