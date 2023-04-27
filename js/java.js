$('.nav-item a').click(function(){
    $('this').css('color','red');
    $('this').siblings().css('color','blue');
})


let bgColor=['coral','burlywood','darkblue','hotpink']
for(var i=0;i<bgColor.length;i++){
    $('.colorOptions li').eq(i).css('backgroundColor',bgColor[i])
}


$('.colorOptions li').click(function(){
    let currentbg=$(this).css('backgroundColor');
    $('.theme').css('color',currentbg)
})

let optionWidth=$('.colorOptions').outerWidth();
$('.colorBox').animate({'right':-optionWidth},1000)
$('.colorBox i').click(function(){
    if($('.colorBox').css('right')=='0px'){
        $('.colorBox').animate({'right':-optionWidth},1000)
    }else{
        $('.colorBox').animate({'right':0},1000)
    }
})


let advOffest=$('#about').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop() > advOffest){
 $('.navbar').css({'backgroundColor':'darkblue','transition':'2s'});
 $('#topBtn').fadeIn(1000);
    }else{
        $('.navbar').css({'backgroundColor':'transparent'});
        $('#topBtn').fadeOut(1000);
    }
})
$('#topBtn').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})




$('.nav-link').click(function(){
    let currentLink=$(this).attr('href');
    let currentOffest=$(currentLink).offset().top;
    $('body,html').animate({scrollTop:currentOffest},1000)
})


$(document).ready(function(){
    $('#loading').fadeOut(1000,function(){
        $('body').css('overflow','visible')
    });
})


