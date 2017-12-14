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
        /*legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },*/
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                /*label: {
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
                },*/
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'大健康产业',itemStyle: {normal: {color: '#2395ff'}}},
                    {value:310, name:'先进制造业',itemStyle: {normal: {color: '#0084ff'}}},
                    {value:234, name:'先进制造业',itemStyle: {normal: {color: '#00de9d'}}},
                    {value:335, name:'互联网经济',itemStyle: {normal: {color: '#00c8e0'}}},
                    {value:448, name:'优势特色农业',itemStyle: {normal: {color: '#00a9e0'}}}
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
                    itemStyle: {normal: {color: '#50a9fb' ,areaStyle: {
                        type: 'default'
                    }}}

                },
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '2016',
                    itemStyle: {normal: {color: '#50a9fb', areaStyle: {
                        type: 'default'
                    }}}
                },
                {
                    value : [6000, 11000, 18000, 29000, 22000, 18000],
                    name : '2015',
                    itemStyle: {normal: {color: '#84dcee', areaStyle: {
                        type: 'default'
                    }}}
                }
            ]
        }]
    };
    card2.setOption(option3, true);

    var card3 = echarts.init(document.getElementById('card3'))
    var option4 = {
        color: ['#2a96fa'],

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
    card3.setOption(option4, true);

    var card4 = echarts.init(document.getElementById('card4'))
    var option5 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '社发出', itemStyle: {normal: {color: '#1ccaff'}}},
                    {value: 310, name: '合作处', itemStyle: {normal: {color: '#00e4b1'}}},
                    {value: 234, name: '社发处', itemStyle: {normal: {color: '#00d5d2'}}},
                    {value: 135, name: '网络中心', itemStyle: {normal: {color: '#b3ff9b'}}}
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


    var markLineOpt = {};

    var bg = {
        name: '相关背景',
        type: 'pie',
        avoidLabelOverlap: false,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 1
        }],
        animation: false
    };

    var dot = {
        name: '强相关',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: 'circle',
        symbolSize: 40,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#555'
                },
                position: 'bottom',
                formatter: function(param) {
                    return param.data[2];
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#00E5B1'
            },
        },

        data: [],
    }

    var datalist = [
        /**
         * x坐标
         * y坐标
         * name 标签名称
         * symbolSize 点大小
         * 趋势，1:上升 0:下降
         */
        [25, 1, 'VR', 10, 1],
        [70, 50, 'AR', 10, 1],
        [90, 50, '自动驾驶', 10, 1],
        [85, 90, '大数据', 10, 1],
        [52, 83, '黑盒子', 14, 1],
        [72, 83, '人工智能', 20, 0],
        [47, 110, '全自动', 21, 0],
        [68, 5, 'VR', 15, 1],
        [40, 30, 'AR', 17, 1],
        [58, 2, '自动驾驶', 20, 1],
        [15, 90, '大数据', 12, 1],
        [22, 83, '黑盒子', 13, 1],
        [78, 98, '人工智能', 14, 0],
        [47, 14, '全自动', 18, 0],
        [20, 50, 'AR', 22, 1],
        [15, 20, '自动驾驶', 20, 1],
        [80, 20, '大数据', 14, 1],
        [70, 30, '黑盒子', 17, 1],
        [59, 110, '人工智能', 19, 0],
        [35, 100, '全自动', 12, 0]
    ]

    var dataMap = datalist.map((item) => {
        return Object.assign({}, dot, {
            symbolSize: item[3],
            itemStyle: {
                normal: {
                    color: item[4]==1? '#00E5B1':'#FFB041'
                },
            },
            data: [
                item
            ]
        })
    });

    var hot = echarts.init(document.getElementById('hot_page'))
    var card_hot = {
        title: {
            text: '',
            x: '35%',
            y: 0
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: '#fff',
            textStyle: {
                color: '#999'
            },
            formatter: (item) => {
                if (item.data[2]) {
                    return `${item.data[2]}<br/>  数量:${item.data[3]}`;
                }
            }
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30,
        }],
        series: [
            ...dataMap, {
                name: '弱相关',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: 80,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '20'
                        },
                        formatter: function(param) {
                            return param.data[2];
                        },
                    },

                },
                itemStyle: {
                    normal: {
                        color: '#00C0FF'
                    }
                },
                data: [
                    [50, 50, '互联网经济', '5']
                ],
                markLine: markLineOpt
            },
            Object.assign({}, bg, {
                radius: ['0%', '100%'],
                itemStyle: {
                    normal: {
                        color: '#f5f5f5',
                    },
                    emphasis: {
                        color: '#f5f5f5',
                    }
                }
            }),

        ]
    };
    hot.setOption(card_hot, true);

    var chartOne = echarts.init(document.getElementById('chart-guangxi'));
    function showProvince() {
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
                                borderColor: '#0a89ff',
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
                                areaColor: '#0a89ff',
                                borderWidth: 0
                            }
                        },
                        animation: true
                    }
                ]
            });
        });
    }
    showProvince();
});