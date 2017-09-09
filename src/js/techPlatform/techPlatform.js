/**
 * Created by lifei on 2017/9/8.
 */

$(function () {

    var card1 = echarts.init(document.getElementById('chart-nine-card'))
    var option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问',itemStyle: {normal: {color: '#ffb24d'}}},
                    {value:310, name:'邮件营销',itemStyle: {normal: {color: '#00b1f3'}}},
                    {value:234, name:'联盟广告',itemStyle: {normal: {color: '#00c8ec'}}},
                    {value:135, name:'视频广告',itemStyle: {normal: {color: '#00e1e4'}}},
                    {value:1548, name:'搜索引擎',itemStyle: {normal: {color: '#00eabb'}}}
                ]
            }
        ]
    }
    card1.setOption(option2, true);

    var card2 = echarts.init(document.getElementById('card2'))
    var option3 = {

        tooltip: {},
        legend: {
            left:'right',
            data: ['2015', '2016','2017']
        },
        radar: {
            name: {
                textStyle: {
                    color: '#00bfff',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售', max: 6500},
                { name: '管理', max: 16000},
                { name: '信息技术', max: 30000},
                { name: '客服', max: 38000},
                { name: '研发', max: 52000},
                { name: '市场', max: 25000}
            ]
        },
        series: [{
            name: '',
            type: 'radar',
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '2017',
                    itemStyle: {normal: {color: '#20e1b7' ,areaStyle: {
                        type: 'default'
                    }}}

                },
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '2016',
                    itemStyle: {normal: {color: '#ffb24d', areaStyle: {
                        type: 'default'
                    }}}
                },
                {
                    value : [6000, 11000, 38000, 39000, 32000, 18000],
                    name : '2015',
                    itemStyle: {normal: {color: '#00bfff', areaStyle: {
                        type: 'default'
                    }}}
                }
            ]
        }]
    };
    card2.setOption(option3, true);

    var card3 = echarts.init(document.getElementById('card3'))
    var option4 = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
    card3.setOption(option4, true);

    var card4 = echarts.init(document.getElementById('card4'))
    var option5 = {

        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'社发出',itemStyle: {normal: {color: '#1ccaff'}}},
                    {value:310, name:'合作处',itemStyle: {normal: {color: '#00e4b1'}}},
                    {value:234, name:'基础处',itemStyle: {normal: {color: '#ffb24d'}}},
                    {value:135, name:'网络中心',itemStyle: {normal: {color: '#b3ff9b'}}}
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

    card4.setOption(option5, true);

    var option1 = {

        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%',fontSize:16},
                data: [{value: 50, name: ''}]
            }
        ]
    };
    var one = echarts.init(document.getElementById('one')),
        two = echarts.init(document.getElementById('two')),
        three = echarts.init(document.getElementById('three')),
        four = echarts.init(document.getElementById('four'));
    one.setOption(option1, true);
    two.setOption(option1, true);
    three.setOption(option1, true);
    four.setOption(option1, true);
});