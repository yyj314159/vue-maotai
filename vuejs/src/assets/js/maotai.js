//search start

export default ()=>{
	$("#search").on("click",function(){
		console.log(1)
		location.href = "https://www.baidu.com/s?wd="+$("#searchText").val();
	})
	//search over
	
	//bar start
	$(".bar_2").fadeToggle(200,fn);
		function fn(){
			$(this).fadeToggle(200,fn)
		}
	//bar over
	
}









