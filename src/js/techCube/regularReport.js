/**
 * Created by lifei on 2017/10/12.
 */

$(function () {
    $('.search-select ul li').click(function () {
        var _this = $(this);
        _this.addClass('selected').siblings().removeClass('selected');
        //进行搜索

    });
});