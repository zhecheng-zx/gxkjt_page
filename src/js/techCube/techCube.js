/**
 * Created by lifei on 2017/9/7.
 */

var loadTrendChart = false, loadGuangXiTrend = false;

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

            if(!loadTrendChart){
                getTrendChart()
            }
        }
    });

    $('.guangxiBtnGroup .btn').click(function (e) {
        e.preventDefault();
        var _this = $(this);
        $('.guangxiBtnGroup .btn').removeClass('btn-active');
        _this.addClass('btn-active');

        if(_this.hasClass('view')){
            $('#guangxi_view').show();
            $('#guangxi_trend').hide();
        }else {
            $('#guangxi_view').hide();
            $('#guangxi_trend').show();

            if(!loadTrendChart){
                getGuangXiTrendChart()
            }
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

    var option2 = {

        legend: {
            left:'left',
            data: ['全国科技概览']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '企事业单位（家）', max: 6500},
                { name: '科技工作者（人）', max: 16000},
                { name: '经费支出（亿）', max: 30000},

            ]
        },
        series: [{
            name: '全国科技概览',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '全国科技概览'
                }

            ]
        }]
    };
    var chartOne = echarts.init(document.getElementById('chartOne'));
    chartOne.setOption(option, true);

    var chartTwo = echarts.init(document.getElementById('chartTwo'));
    chartTwo.setOption(option2, true);


    $('#datePicker').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
});

function  getTrendChart() {
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} W'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                lte: 6,
                color: 'green'
            }, {
                gt: 6,
                lte: 8,
                color: 'red'
            }, {
                gt: 8,
                lte: 14,
                color: 'green'
            }, {
                gt: 14,
                lte: 17,
                color: 'red'
            }, {
                gt: 17,
                color: 'green'
            }]
        },
        series: [
            {
                name:'用电量',
                type:'line',
                smooth: true,
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                markArea: {
                    data: [ [{
                        name: '早高峰',
                        xAxis: '07:30'
                    }, {
                        xAxis: '10:00'
                    }], [{
                        name: '晚高峰',
                        xAxis: '17:30'
                    }, {
                        xAxis: '21:15'
                    }] ]
                }
            }
        ]
    };

    var chartThree = echarts.init(document.getElementById('chartThree'));
    chartThree.setOption(option, true);
    loadTrendChart = true;
}

/**
 * 获取广西趋势分析
 */
function getGuangXiTrendChart() {

}