/**
 * Created by 徐健康 on 2018/8/1.
 */
//        lunbo content

$(function () {

    // lunbo tu
    $(document).ready(function () {
            $(".bxslider").bxSlider({
                auto:true,
                pager:true
            });
        });

// huidaodingbu
            $(document).ready(function () {
            $("#gototop").click(function () {
            var speed=300;
            $("body,html").animate({scrollTop:0},speed);
            return false;
        });
        });
})
// weixin js
$(document).ready(function () {
            $("#weixin").click(function () {
            $(".weixingerweim").addClass('weix666666');
            return false;
        });
        });

// xialaguan style
$(document).ready(function () {
            $(".header-nav ul li").mouseenter(function () {
                $(this).find('a').next().show();
            })
            $(".header-nav ul li").mouseleave(function () {
                $(this).find('a').next().hide();
            })
        })
