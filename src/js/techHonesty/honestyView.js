/**
 * Created by lifei on 2017/10/17.
 */

$(function () {
    var option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title: {
            text: 'aaa',
            textStyle: {
                align: 'center',
                verticalAlign: 'middle',
                fontSize: 16,
                color: '#3385ff'
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {
                    formatter:'{value}分',
                    color:　'#00c0ff'
                },
                data: [{value: 50}],
                itemStyle:{
                    normal: {
                        color: '#bbbcbe'
                    }
                }
            }
        ]
    };

    var chart1 = echarts.init(document.getElementById('chartOne'));
    chart1.setOption(option);
    var chart2 = echarts.init(document.getElementById('chartTwo'));
    chart2.setOption(option);
    var chart3 = echarts.init(document.getElementById('chartThree'));
    chart3.setOption(option);
    var chart4 = echarts.init(document.getElementById('chartFour'));
    chart4.setOption(option);
});