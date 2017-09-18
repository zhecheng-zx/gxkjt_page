/**
 * Created by lifei on 2017/9/7.
 */

var loadTrendChart = false, loadGuangXiTrend = false;

$(function () {
    $('#cubeTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        if($(this).text() == '广西'){
            getGuangXiView();
        }
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

    var chart = echarts.init(document.getElementById('guangxi_trend_chart_one'));
    showProjectTrendChart(chart);
    loadGuangXiTrend = true;
}

/**
 * 获取广西科技纵览
 */
function getGuangXiView() {
    var chartOne = echarts.init(document.getElementById('guangxi_chart_one'));
    showProvince(chartOne);

    var chartTwo = echarts.init(document.getElementById('guangxi_chart_two'));
    showClassNumChart(chartTwo);
    var chartThree = echarts.init(document.getElementById('guangxi_chart_three'))
    showClassNumChart(chartThree);
    var chartFour= echarts.init(document.getElementById('guangxi_chart_four'));
    showClassNumChart(chartFour);
    var chartFive = echarts.init(document.getElementById('guangxi_chart_five'));
    showClassNumChart(chartFive);

    var chartSix = echarts.init(document.getElementById('guangxi_chart_six'));
    showAreaNumChart(chartSix);
    var chartSeven = echarts.init(document.getElementById('guangxi_chart_seven'));
    showAreaNumChart(chartSeven);
    var chartEight = echarts.init(document.getElementById('guangxi_chart_eight'));
    showAreaNumChart(chartEight);
    var chartNine = echarts.init(document.getElementById('guangxi_chart_nine'));
    showAreaNumChart(chartNine);
}

function showProvince(chartOne) {
    var name = 'guangxi';
    $.get('../../json/guangxi.json', function (geoJson) {
        chartOne.hideLoading();

        echarts.registerMap(name, geoJson);

        chartOne.setOption(option = {
            series: [
                {
                    type: 'map',
                    mapType: name,
                    label: {
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#20cbff',
                            areaColor: '#fff',
                            borderWidth: 2,
                            label:{
                                show:true,
                                color:'#999',
                                textStyle:{
                                    fontSize:8
                                }
                            },
                        },
                        emphasis: {
                            areaColor: '#20cbff',
                            borderWidth: 0
                        }
                    },
                    animation: true
                }
            ]
        });
    });
}

function showClassNumChart(chart) {
    var option5 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    // {value:335, name:'社发出',itemStyle: {normal: {color: '#1ccaff'}}},
                    // {value:310, name:'合作处',itemStyle: {normal: {color: '#00e4b1'}}},
                    // {value:234, name:'基础处',itemStyle: {normal: {color: '#ffb24d'}}},
                    // {value:135, name:'网络中心',itemStyle: {normal: {color: '#b3ff9b'}}}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    chart.setOption(option5, true);
    chart.showLoading({text: '暂无数据', color: '#fff', textColor: '#3385ff'})
}

function showAreaNumChart(chart) {
    var option4 = {
        color: ['#3398DB'],

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis : [
            {
                type : 'category',
                data : ['获得成果', '获得奖项', '专利申请', '科技论文', '技术成交额'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390]
            }
        ]
    };
    chart.setOption(option4, true);
}

function showProjectTrendChart(chart) {
    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'left',
            text: '数量指数',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(0, 197, 250)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#e8fbff'
                    }
                },
                data: data
            }
        ]
    };

    chart.setOption(option)
}