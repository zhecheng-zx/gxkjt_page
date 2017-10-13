/**
 * Created by lifei on 2017/10/13.
 */


$(function () {
   var option = {
       color: ['#3385ff'],
       tooltip : {
           trigger: 'axis'
       },
       xAxis : [
           {
               type : 'category',
               data : ['6 纸质已接收', '8 同意立项', '10 退回修改', '5 纸质待接收', '1 审核中', '9 不予立项', '3 审核中', '95 审核中']
           }
       ],
       yAxis : [
           {
               type : 'value'
           }
       ],
       series : [
           {
               name:'项目数量',
               type:'bar',
               barWidth: '50%',
               data:[2200, 2893, 1972, 1864, 1690, 1730, 1520]
           }
       ]
   };

   var chart = echarts.init(document.getElementById('chartOne'));
   chart.setOption(option);
    var chart6 = echarts.init(document.getElementById('chartSix'));
    chart6.setOption(option);
    var chart3 = echarts.init(document.getElementById('chartThree'));
    option['color'] = ["#00df9c"];
    chart3.setOption(option);
    var chart5 = echarts.init(document.getElementById('chartFive'));
    option['color'] = ['#00c9e2'];
    chart5.setOption(option);

    var option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'项目数量',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'高新处',itemStyle: {normal: {color: '#1997ff'}}},
                    {value:310, name:'社发处',itemStyle: {normal: {color: '#00aae3'}}},
                    {value:234, name:'证监处',itemStyle: {normal: {color: '#00c9e2'}}},
                    {value:335, name:'基础处',itemStyle: {normal: {color: '#00df9c'}}},
                    {value:448, name:'合作处',itemStyle: {normal: {color: '#0086ff'}}}
                ]
            }
        ]
    }
    var chart2 = echarts.init(document.getElementById('chartTwo'));
    chart2.setOption(option2);

    var option3 = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["科研研究所","高等研究所","事业单位", "企业", "其他"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'项目数量',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: '#00e2d5'
                    }
                },
                areaStyle: {
                    normal: {
                        color: "#d8fffd"
                    }
                },
                data: [989, 1099, 1000, 920, 1106]
            }
        ]
    };
    var chart4 = echarts.init(document.getElementById('chartFour'));
    chart4.setOption(option3);
});