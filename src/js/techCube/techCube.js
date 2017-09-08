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
            $('#nation_view').show();
            $('#nation_trend').hide();
        }else {
            $('#nation_view').hide();
            $('#nation_trend').show();
        }
    });


    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode : 'multiple',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name:'广东', selected:true}
                ]
            }
        ]
    };
    var chartOne = echarts.init(document.getElementById('chartOne'));
    chartOne.setOption(option, true);
});