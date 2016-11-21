var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
    isMobile = true;
}

var _defaultWidth = $(window).width(),
    _defaultHeight = $(window).height();

$(function(){
    if(isMobile) {
        $(".bottom").hide();
    } else {;
         $(".bottom").show();
        browserRedirect();
    }
});

function browserRedirect() {
    if (!isMobile) {
        var windowHeight = $(window).height(),
            windowWidth = $(window).width();
        if(_defaultWidth == windowWidth , _defaultHeight == windowHeight ,  windowHeight > 700 ) {
            $(".my_section").css("zoom",1);
        } else {
            var t = (windowHeight - 135) / 600;
            $(".my_section").css("zoom",t);
        }
    }
}

var my_engineer= {
    init : function(){
        $(".cod_rom img").each(function(){
            var left = 400*(Math.random()-0.5);
            var top = 100*(Math.random()-0.5);
            $(this).css({ 'transform': 'translate3d('+left+'px,'+top+'px,0)'}).removeClass('animSect1')
        })
    },
    anim : function(){
        $(".cod_rom img").each(function(i){
            var _this = $(this);
            var _i = i+(0.1*i*i)
            setTimeout(function(){
               _this.addClass("animSect1");
            },_i*50+100)
        })
    }
}
var my_skills= {
    init : function(){
        $(".frontend_img img").css({ 'transform': 'translate3d('+300+'px,'+0+'px,0)'}).removeClass('animSect2')
    },
    anim : function(){

        setTimeout(function(){
              $(".frontend_img img").addClass('animSect2');
         },100)

    }
}