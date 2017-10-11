
$(function(){
    var info={score:'50',pj:'良好'};
    pf(info);
});
function pf(info){
    option = {
        title: {
            text: "信用评分",
            x: "center",
            y:'bottom',
            textStyle: {
                color: '#333',
                fontSize:14,
                fontWeight:400
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },

        series: [{
            name: '信用评分',
            type: 'pie',
            radius: ['75%', '85%'],
            center: ['50%', '45%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: info.score,
                name: '分数',
                label: {
                    normal: {
                        formatter: info.score,
                        textStyle: {
                            color:'#3385ff',
                            fontSize: 29
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24,196,247,1)'
                        },{
                            offset: 0.5,
                            color: 'rgba(33,230,234,1)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(24,196,247,1)'
                            }])
                    }

                }
            }, {
                value: 100-info.score,
                name: '占位',
                label: {
                    normal: {
                        formatter:info.pj,
                        textStyle: {
                            color: '#333',
                            fontSize: 20
                        }
                    }
                },
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#e6e6e6'
                    },
                    emphasis: {
                        color: '#e6e6e6'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };
    var score = echarts.init(document.getElementById('score'));

    score.setOption(option);
}