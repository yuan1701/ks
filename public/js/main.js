$(function(){
	
	console.log($('.mainLeft1'))
	
	//左侧栏
	$('.mainLeft1').on('click',function(){
		$('.mainLeftn').css('display','none')
		var ul=$(this).parent();//寻找父元素
		$(ul).find('.mainLeftn').css('display','block')//再找子元素
		})
	//默认点击
	var leftone=$('.mainLeft1').eq(0);
	$(leftone).trigger('click')
	//跳转页面
	$('.mainLeftn').on('click',function(){
		$('section #content').load('router/'+$(this).attr('u')+'.html')
	})
	//
	var leftone=$('.mainLeftn').eq(0);
	$(leftone).trigger('click')
	//退出登录
	$('#quit').on('click',function(){
		window.location.href="index.html"
	})
	//help
	$('#help').on('click',function(){
		// window.location.href="router/help.html";
		// location.href="router/help.html"
		// window.location="router/help.html";
		location="router/help.html";
	})
	//获取use
	var user=decodeURI(window.location.href.split('?')[1]);
	$('#user').text(user)
})