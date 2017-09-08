/**
 * Created by lifei on 2017/9/8.
 */

$(function () {
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
    var chartOne = echarts.init(document.getElementById('chart-guangxi'));
    chartOne.setOption(option, true);


    var option1 = {
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
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