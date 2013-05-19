//confirm delete for control panel
function disp_confirm(title)
{
	
var r=confirm("Are you sure you want to delete this item " + title + "!");
if (r==true)
  {
  return true;
  }
else
  {
  return false;
  }
}

$(document).ready(function(){
	$('.switch').live('click',function(e){
		e.preventDefault();
		if($(this).attr('disabled')!='disabled')
		{
			//$('[disabled="disabled"]').click();
			$('a.switch').each(function(){
				if($(this).attr('disabled')=='disabled')
					closeLogin();
			});
			$('.switch').attr('disabled','disabled');
			//.attr('disabled','disabled');
			var html= $(this).parent().html();
			newHtml='<ol class="listed_login"><li class="listing" style="z-index: 10;padding: 0;margin: 0;">'+html+'</li><li class="login1" style=" position: relative;left: 0px;height: 230px;background: url(images/login1_bg.png) right top no-repeat;z-index: 9;width: 215px;margin:0"><div class="login-listed"><div class="closeLogin" ></div><form style=""><table><tbody><tr><td style="color: rgba(250, 175, 22, 1);font-size:18px">KINDLY LOGIN FIRST</td></tr><tr><td  style="color: rgba(102, 102, 102, 1);height: 30px;">IN ORDER TO SWITCH ITEMS</td></tr><tr><td><input type="text" name="username" value="username"></td></tr><tr><td><input type="password" name="password" value=""></td></tr><tr><td><input type="submit" value="LOGIN"></td></tr></tbody></table></form></div></li></ol>';
	        //console.log('ok');
	        $(this).parent().html(newHtml);
			openLogin();
			
		}
		else
		{
			closeLogin();
		}
	});
	$('.closeLogin').live('click',function(e){
		closeLogin();
	});
	$('.login').live('click',function(e){
		e.preventDefault();
		if($(this).width()==75)
		{
			$(this).find('a').fadeOut(200);
			$(this).stop().animate({width:'400px'},{queue:false,duration:800, 
				complete:function() {
					$(this).css('background','url(images/loggedin_bg.jpg) no-repeat left top');
					$(this).find('a').remove();
					$(this).css('padding','0 0 0 14px');
					$(this).append('<div style="dislay:none" dir="ltr"><input type="text" name="username" value="username" ><input type="password" name="password" ><input type="submit" value="LOGIN" ></div>');
					$(this).children().fadeIn(200);
				}
			});
		}
	});
});


function openLogin(){	
	$(".login1").stop().animate({left:'215px'},{queue:false,duration:1000},
		function(){closeLogin();}
	);

}
function closeLogin(){
	var html= $('ol').children('.listing').html();
	var parent = $('ol').parent();
	$(".login1").stop().animate({left:'0px'},{queue:false,duration:1000, 
		complete:function() {
			parent.html(html);
			$('.switch').removeAttr('disabled');
		}
	});
	

}