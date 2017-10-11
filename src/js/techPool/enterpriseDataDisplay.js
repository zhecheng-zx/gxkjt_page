$(function () {
    var data1 = [];
    for(var j = 0; j < 10; j++){
        data1.push(j*10);
    }

    var data = [];

    for (var i = 0; i < 10; i++) {
        data.push(Math.random() * 100);
    }

    var option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data1,
            show: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            show: false
        },
        series: [
            {
                name:'分数',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(0, 228, 148)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgb(238, 255, 249)'
                    }
                },
                data: data
            }
        ]
    };
    var chart = echarts.init(document.getElementById('chart_grade'));
    chart.setOption(option);

    $('#table_investOut').bootstrapTable({
        pagination: true,
        pageNumber: 1,
        pageSize: 10
    });
});