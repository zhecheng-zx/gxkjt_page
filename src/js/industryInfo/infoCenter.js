/**
 * Created by lifei on 2017/9/9.
 */

$(function () {

    var width = $('.infoCenter .content-wrap').width();

    $('.slideBox').slideBox({
        duration : 0.2,//滚动持续时间，单位：秒
        easing : 'linear',//swing,linear//滚动特效
        delay : 3,//滚动延迟时间，单位：秒
        hideClickBar : false,//不自动隐藏点选按键
        clickBarRadius : 10,
        height:　478,
        width: width
    });

    $('.search-select ul li').click(function () {
       var _this = $(this);
       _this.addClass('selected').siblings().removeClass('selected');
       //进行搜索

    });


    var  label = {
        normal: {
            show: true,
            textStyle: {
                fontSize: '14',
                color: '#ffffff'
            },
            formatter: function(param) {
                return param.data.name;
            }
        }
    }
    var data1 = [
        {
            value: [50,50], symbolSize: 99, name: '互联网经济', itemStyle: {normal: {color: '#00b6ef'}},label:label
        },
        {
            value: [10,20], symbolSize: 76, name: '自动驾驶', itemStyle: {normal: {color: '#ffb041'}},label:label
        },
        {
            value: [57,11], symbolSize: 69, name: '人工智能', itemStyle: {normal: {color: '#5095fb'}},label:label
        },
        {
            value: [90,30], symbolSize: 81, name: '互联网经济', itemStyle: {normal: {color: '#7fc420'}},label:label
        },
        {
            value: [85,82], symbolSize: 79, name: '黑盒子', itemStyle: {normal: {color: '#00b6ef'}},label:label
        },
        {
            value: [65,90], symbolSize: 63, name: '大数据', itemStyle: {normal: {color: '#5095fb'}},label: label
        },
        {
            value: [42,100], symbolSize: 74, name: '互联网经济', itemStyle: {normal: {color: '#ffb041'}},label: label
        },
        {
            value: [18,68], symbolSize: 59, name: 'VR', itemStyle: {normal: {color: '#7fc420'}},label:label
        }
    ]

    var option = {
        xAxis: {
            show: false,
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            show: false,
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
        },

        series: [{
            name: '热词',
            type: 'scatter',
            data: data1
        }]
    };

    var chart = echarts.init(document.getElementById('chart-word'));
    chart.setOption(option)
});