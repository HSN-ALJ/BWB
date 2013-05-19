// JavaScript Document
$(function(){
	$('#tpc').width($('#container').width()-32);
	$('#btmc').width($('#container').width()-32);
		  // $('html, body').animate({scrollTop: '0px'}, 800);
	var x = 0;
	r();
	colorTitle();
	placeFB();
	/*if($(window).width() > 1366)
		var space= $(window).width() * 0.25;
	else
		space = 350;*/
	$('#menuContainer').children().each(function(){
		$(this).attr('id','menu'+x);
		$(this).css('margin-right',x*100+x*5+ 350 +'px'); 	//3ashen tozbeet 2el dmenu
		x++;									//3ashen ya3mel 3enwen lakel tab
		titleAction(this,0);							//bayyen 2el title bel menu
	});
	//$('#menuContainer').css('background','#234223');
	$('#menuContainer').width($('#container').width());

	//$('#header').append('<div id="logo" style="position:relative;top:60px;right:5px;width:300px;z-index:3"><div style="position: absolute;height: 180px;width: 270px;z-index:9999"></div><image src="images/logo.png" width="250px" alt="" /></div>');
	
	//$('#header').css('background','#233423');
	$('#menu0').click();
	//$('#fb').children('a:first').children().click();
});


$("div.menu").click(function(e) {
	if($(this).attr('id')=='menu0')
	{
		$('html, body').animate({scrollTop: '0px'}, 800);
	}
	else
	{
		if($(window).scrollTop()!=330)
			$('html, body').animate({scrollTop: '330px'}, 800);
	}
	// animate window (scroll down)
	if($(this).attr('class')=='menu')
	if(!$(this).attr('active')==1)
	{
		if(!$("div").find('[active]')=="")
		{
			$('div#container').children().removeClass();
			$("div").find('[active]').stop();
			clse($('div[active]'));
		}
		opn($(this));
	}
	return false;
});
function opn(target){	
	//$(target).animate({top:"-110px"},200);
	$(target).animate({bottom:"-60px"},200);
	$(target).animate({bottom:"-70px"},100);
	$(target).attr('active',1);	
	getdata($(target).find('#title').html(),"");
	$('[id^="menu"]').attr('class','menu');
	colorTitle();
	resizeBody();
}
function clse(target){
	$('#innerPage').remove();
	$(target).removeAttr('active');
	$(target).animate({bottom:"-80px"},200);
}
function getdata(title,album){
	$.ajax({           		                           
		url: 'page.php',								//the script to call to get data          
		data: 't='+title,									//you can insert url argumnets here to pass to api.php
														//for example "id=5&parent=6"
		async:    true,
		dataType: 'json',								//data format 
		timeout: (50000),  
		error: function(data)          
		{                     
			alert('الرجاء عدم تحديث الصفحة بسرعة و شكرا لكم');
			window.location.reload(true); 
		}, //end of ERROR handling    					//timeout 0.1sec  
		success: function(data)          				//on recieve of reply
		{	
			if( album == ""){
				$('#innerPage').remove();
				$('div#bdyc').append('<div id="innerPage" style="display:none"><div id="data" ></div></div>');
				$('#data').load(data);			//Set element html
			}
			else
			{
				$('#innerPage').remove();
				$('div#bdyc').append('<div id="innerPage" style="display:none"><div id="data" ></div></div>');
				$('#data').load(data+"?album="+album);
				
			}
			$('#innerPage').fadeIn(500);
		} 
	});
}; 
function rndm(){
  var number = 1 + Math.floor(Math.random() * 100000);
  return number;
}

function titleAction(target,type,url){					//top menu;
	if(type==0)		//show title of top menu
	{
		
		$(target).find('#title').css('margin','10px 5px');
		$(target).find('#title').css('display','none');
		$(target).find('#title').css('position','absolute');
		$(target).find('#title').css('top','-5px');
		$(target).find('#title').css('font-size','1em');
		$(target).find('#title').fadeIn(2000);
	}
	else
	if(type==1)		//hide title of menu on animating
	{
		$(target).find('#title').css('display','none');	
		$(target).find('#title').css('position','relative');
	}
	else
	if(type==2)		//show title and innerPage of page
	{
		url='test';
		//getdata($(this).attr('title'));
		//$(target).find('#innerPage').html(url);
		
		$(target).find('#innerPage').css('display','none');
		$(target).find('#title').css('bottom','');
		$(target).find('#title').css('margin','20px 30px 10px 0');
		$(target).find('#title').css('font-size','30px');
		$(target).find('#title').fadeIn(500);
		$(target).find('#innerPage').fadeIn(600);
	}
	else
	if(type==3)
	{
		
		$(target).removeClass();
		$(target).find('#title').fadeOut(1000);
		$(target).find('#innerPage').fadeOut(200);
		
	}
	return false;
}
function r(){
	$('#footer').append($("<div>").load("r.html"));
}


//place facebook tab
function placeFB(){
	$('#fb').css('top',$(window).height()/2-50);
	$('#fb').css('left','0px');
	$('#fb').append('<a href="fb.html?lightbox[width]=700&lightbox[height]=500&lightbox[facebook]=true" class="lightbox"><div style="z-index:999999;position:relative" ><img style="width:50px;height=auto;z-index:1;position:absolute;top:0;right:0" src="images/fbb.png" alt="اتبعنا"/><img class="fb"  style="width:50px;height=auto;z-index:2;position:absolute;top:0;right:0;display:none" src="images/fb.png" alt="facebook"/></div></a><a href="http://www.youtube.com/watch?v=JNmZMlJ9SB0&list=PL1THWlRTr6bN8SZuAXBONj0lo7v-C2RCw" target="blank"><div style="z-index:999999;position:relative;top:55px" ><img style="width:50px;height=auto;z-index:1;position:absolute;top:0;right:0" src="images/ytb.png" alt="اتبعنا"/><img class="fb"  style="width:50px;height=auto;z-index:2;position:absolute;top:0;right:0;display:none" src="images/yt.png" alt="youtube"/></div></a>');
}

$("#fb").mouseenter(function(){
	$('.fb').fadeIn(300);
})
 .mouseleave(function(){
  $('.fb').fadeOut(300);
});
/* $(".menu").mouseenter(function(){
	$(this).css('font-weight','800');
})
 .mouseleave(function(){
	if($(this).attr('active')=='1')
		$(this).css('font-weight','800');
	else
		$(this).css('font-weight','500');
});*/
function colorTitle(){
	$('#menuContainer').children().children('#title').each(function(){
		$(this).css({'font-weight':'bold'});
		if($(this).parent().attr('active')=='1')
			$(this).css('color','#fff');
		else
			$(this).css('color','#000');
	});
};
 
function goback(){
	getdata($('div[active]').find('#title').html(),"")	
}
jQuery(window).resize(function() {
    var height = $(window).height();
	$('#fb').animate({'top':height/2-100+'px'},500);
});

function resizeBody(h){
	if(h != null)
		var x=h;
	else
		var x=$('#wrapper').height()+100;
	if(x==null || x<580)
		x=580;
	$('#container').height(x);
	$('#bdyr').animate({height: x+'px'},500);
	$('#bdyc').animate({height: x+'px'},500);
	$('#bdyl').animate({height: x+'px'},500);
	$('#bdyc').width($('#container').width()-32);
}
 
 function downAudio(id){
	$('#down'+id).html('');
	$('#down'+id).removeAttr('downing');
	$('#data').append('<div id="download" style="display:none"><iframe src="captcha/new/php/download.php?id='+id+'"></iframe></div>');
	$('#down'+id).html('<div style="display:none" id="done">يتم الان تحميل الانشودة</div>');
	$('#done').fadeIn(1000);
	$('#done').removeAttr('id');
	$('td[downing="yes"]').removeAttr('downing');
	//alert(id);
	
 };