/**
 * Created by lifei on 2017/9/7.
 */

$(function () {
    $('#cubeTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.nationBtnGroup .btn').click(function (e) {
        e.preventDefault();
        var _this = $(this);
        $('.nationBtnGroup .btn').removeClass('btn-active');
        _this.addClass('btn-active');

        if(_this.hasClass('view')){
            $('#nation_vew').show();
            $('#nation_trend').hide();
        }else {
            $('#nation_vew').hide();
            $('#nation_trend').show();
        }
    });
});