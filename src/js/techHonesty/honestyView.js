/**
 * Created by lifei on 2017/10/17.
 */

$(function () {
    var option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title: {
            text: '个人诚信指数',
            x: 'center',
            top: 10,
            textStyle: {
                fontSize: 16,
                color: '#3385ff'
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                splitNumber: 1,
                detail: {
                    formatter:'{value}分',
                    color:　'#00c0ff',
                    fontSize: 18
                },
                axisLine:  {
                    "lineStyle": {
                        "color": [[0.298, "#03cbff"], [1, "#f0f0f0"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                    }
                },
                axisLabel: {
                    distance: -55,
                    textStyle: {
                        color: "#687180",
                        fontSize: 14
                    }
                },
                startAngle: 180,
                endAngle: 0,
                center: ["50%", "77%"], //整体的位置设置
                pointer: {
                    length: '80%',
                    color: '#bbbcbe'
                },
                data: [{value: 50}]
            }
        ]
    };

    var chart1 = echarts.init(document.getElementById('chartOne'));
    chart1.setOption(option);
    option.series[0].axisLine = {
        lineStyle: {
            "color": [[0.298, "#00e5b1"], [1, "#f0f0f0"]]
        }
    }
    option.series[0].detail.color = '#00e5b1';
    var chart2 = echarts.init(document.getElementById('chartTwo'));
    chart2.setOption(option);
    option.series[0].axisLine = {
        lineStyle: {
            "color": [[0.298, "#ffb041"], [1, "#f0f0f0"]]
        }
    }
    option.series[0].detail.color = '#ffb041';
    var chart3 = echarts.init(document.getElementById('chartThree'));
    chart3.setOption(option);
    option.series[0].axisLine = {
        lineStyle: {
            "color": [[0.298, "#00d7e7"], [1, "#f0f0f0"]]
        }
    }
    option.series[0].detail.color = '#00d7e7';
    var chart4 = echarts.init(document.getElementById('chartFour'));
    chart4.setOption(option);


    var opt = {
        color: ['#03cbff'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisTick: {
                    alignWithLabel: true
                },
                boundaryGap:true,
                data: ['南宁','桂林','贺州','河池','南宁','桂林','贺州','河池']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'行业',
                type:'bar',
                barWidth: '50',
                data:[389,212,256,199,327,284,190,201]
            }
        ]
    }

    var chartA = echarts.init(document.getElementById('honestAverage'));
    chartA.setOption(opt);
});