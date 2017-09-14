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
        [14, 16, 'VR', 50, 1],
        [70, 50, 'AR', 30, 1],
        [90, 50, '自动驾驶', 20, 1],
        [85, 90, '大数据', 47, 1],
        [52, 83, '黑盒子', 50, 1],
        [72, 83, '人工智能', 20, 0],
        [47, 110, '全自动', 30, 0]
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
                symbolSize: 120,
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

    var option1 = {
        "title": {
            "text": "诚信指数",
            "x": "center",
            "top": 10
        },
        "toolbox": {
            "show": false,
            "feature": {
                "mark": {
                    "show": true
                },
                "restore": {
                    "show": true
                },
                "saveAsImage": {
                    "show": true
                }
            }
        },
        "series": [{
            "name": "指标",
            "type": "gauge",
            "startAngle": 180, //总的360，设置180就是半圆
            "endAngle": 0,
            "center": ["50%", "70%"], //整体的位置设置
            "radius": 70,
            "axisLine": {
                "lineStyle": {
                    "width": 30, //柱子的宽度
                    "color": [[0.298, "#03cbff"], [1, "#f0f0f0"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "show": false,
                "margin":-10
            },
            "splitLine": {
                "show": false
            },
            "pointer": {
                "width": 5, //指针的宽度
                "length": "80%", //指针长度，按照半圆半径的百分比
                "color": "#2d99e2"
            },
            "title": {
                "show": true,
                "offsetCenter": [0, "20%"], //标题位置设置
                "textStyle": { //标题样式设置
                    "color": "#2d99e2",
                    "fontSize": 15,
                    "fontFamily": "微软雅黑",
                    "fontWeight": "bold"
                }
            },
            "detail": {
                "show": false
            },
            "data": [{ //显示数据
                "value": 29.8,
                "name": " 29.8",
            }]
        }]
    };


    var one = echarts.init(document.getElementById('one')),
        two = echarts.init(document.getElementById('two')),
        three = echarts.init(document.getElementById('three')),
        four = echarts.init(document.getElementById('four'));
    one.setOption(option1, true);
    two.setOption(option1, true);
    three.setOption(option1, true);
    four.setOption(option1, true);


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
    showProvince();
});