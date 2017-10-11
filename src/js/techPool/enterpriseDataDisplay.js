$(function () {

    $('#nav-classify li').click(function () {
        $('#nav-classify li').removeClass('active');
        $(this).addClass('active');
    });

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
        columns: [
            {
                field:'name',
                align:"center",
                valign: "middle",
                title : "被投资企业名称"
            },{
                field : 'person',
                align:"center",
                valign: "middle",
                title : "被投资法定代表人"
            },{
                field : 'registerMoney',
                align:"center",
                valign: "middle",
                title : "注册资本"
            },{
                field : 'investMoney',
                align:"center",
                valign: "middle",
                title : "投资数额"
            },{
                field : 'percent',
                align:"center",
                valign: "middle",
                title : "投资占比"
            }, {
                field : 'datetime',
                align:"center",
                valign: "middle",
                title : "注册时间"
            }, {
                field : 'state',
                align:"center",
                valign: "middle",
                title : "状态",
                formatter: function (val) {
                    if (val == 1){
                        return '<span class="gray">注销</span>';
                    }else {
                        return '<span class="blue">存续</span>';
                    }
                }
            }
        ],
        paginationPreText:"<i class='glyphicon glyphicon-menu-left'></i>",
        paginationNextText:"<i class='glyphicon glyphicon-menu-right'></i>",
        method: 'get',
        sortable:true,
        sortOrder : 'desc',
        pagination : true,
        sidePagination : 'server',
        pageNumber :1,
        pageSize :10,
        dataType: "json",
        url : '../../json/invest.json',
        pageList : [],
        paginationDetailHAlign:'left',
        queryParamsType: '',
        onLoadSuccess:function(){
        }
    });


    $('#table_brand_info').bootstrapTable({
        columns: [
            {
                field:'datetime',
                align:"center",
                valign: "middle",
                title : "申请日期"
            },{
                field : 'brand',
                align:"center",
                valign: "middle",
                title : "商标"
            },{
                field : 'brandName',
                align:"center",
                valign: "middle",
                title : "商标名称"
            },{
                field : 'registerNum',
                align:"center",
                valign: "middle",
                title : "注册号"
            },{
                field : 'category',
                align:"center",
                valign: "middle",
                title : "类别"
            }, {
                field : 'state',
                align:"center",
                valign: "middle",
                title : "状态",
                formatter: function (val) {
                    return '';
                }
            }
        ],
        paginationPreText:"<i class='glyphicon glyphicon-menu-left'></i>",
        paginationNextText:"<i class='glyphicon glyphicon-menu-right'></i>",
        method: 'get',
        sortable:true,
        sortOrder : 'desc',
        pagination : true,
        sidePagination : 'server',
        pageNumber :1,
        pageSize :10,
        dataType: "json",
        url : '../../json/brand.json',
        pageList : [],
        paginationDetailHAlign:'left',
        queryParamsType: '',
        onLoadSuccess:function(){
        }
    });
});