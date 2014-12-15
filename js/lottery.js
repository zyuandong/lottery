var lottery = {
	light:"odd",
	prize:["鼓励奖","再接再厉","三等奖","再接再厉","二等奖","再接再厉","一等奖","再接再厉"],
	p:0
}

$(function(){
	setInterval(light,700);
});
/*
小灯闪烁
 */
function light(){
	if(lottery.light == "odd"){
		$(".light-odd div").css({
			"background-color":"#FBEDBC",
			"box-shadow":"0 0 5px 10px #FBCB1F"
		})
		$(".light-even div").css({
			"background-color":"#FBCB1F",
			"box-shadow":"none"
		})
		lottery.light = "even";
	}else{
		$(".light-odd div").css({
			"background-color":"#FBCB1F",
			"box-shadow":"none"
		})
		$(".light-even div").css({
			"background-color":"#FBEDBC",
			"box-shadow":"0 0 5px 10px #FBCB1F"
		})
		lottery.light = "odd";
	}
}
function clickBtn(){
	var n = Math.floor(Math.random()*8+1);
		lottery.p = 45 * n + 1822.5;
	$(this).unbind().css("cursor","wait");
	$('.lottery').css({
		"transition":"all 5s ease-in-out",
		"transform":"rotate("+lottery.p+"deg)",
		"-webkit-transform":"rotate("+lottery.p+"deg)"
	});
}
$('.btn').bind('click',clickBtn);

/*
 监听动画结束事件
 */
$('.lottery')[0].addEventListener('transitionend',function(){
	$('.btn').bind('click',clickBtn).css("cursor","pointer");
	result();
	$(this).css({
		"transition":"none",
		"transform":"none",
		"-webkit-transform":"none"
	})
})

function result(){
	var num = (lottery.p - 1822.5)/45;
	if(num % 2 == 0){
		alert("很遗憾，请"+lottery.prize[num-1]+"!");
	}else{
		alert("恭喜您，获得"+lottery.prize[num-1]+"!");
	}
}