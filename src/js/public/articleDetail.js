/**
 * Created by lifei on 2017/9/9.
 */

$(function () {
    var width = $('.articleDetail').width() - 20;
    $('.slideBox').slideBox({
        duration : 0.2,//滚动持续时间，单位：秒
        easing : 'linear',//swing,linear//滚动特效
        delay : 3,//滚动延迟时间，单位：秒
        hideClickBar : false,//不自动隐藏点选按键
        clickBarRadius : 10,
        height:　500,
        width: width
    });
});