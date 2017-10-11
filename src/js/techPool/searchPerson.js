/**
 * Created by dell on 2017/10/11.
 */
$(function(){
    $('.sld').selectpicker({
        style:"btn-default"
    });


    var stateFormatter=function (value, row, index){
        var s="<a href='javascript:void(0);'>查看</a>";
        return s;
    };
    var options = {
        columns : [ {
            field : 'number',
            align:"center",
            valign: "middle",
            title : "编号"
        }, {
            field : 'category',
            title : "研究方向",
            align:"center",
            valign: "middle"


        }, {
            field : 'name',
            title : "姓名",
            align:"center",
            valign: "middle"

        }, {
            field : 'people',
            title : "性别",
            align:"center",
            valign: "middle"

        }, {
            field : 'area',
            align:"center",
            valign: "middle",
            title : "年龄"
        }, {
            field : 'time',
            align:"center",
            valign: "middle",
            title : "所在单位"
        },{
            field : 'location',
            align:"center",
            valign: "middle",
            title : "所在地"
        },
            {
            field : 'id',
            align:"center",
            valign: "middle",
            title : "操作",
            formatter:stateFormatter
        }],
        paginationPreText:"<i class='glyphicon glyphicon-menu-left'></i>",
        paginationNextText:"<i class='glyphicon glyphicon-menu-right'></i>",
        method: 'get',
        pagination : true,
        sidePagination : 'server',
        pageNumber :1,
        pageSize :10,
        dataType: "json",
        url : '',
        pageList : [ 10000],
        queryParamsType: '',
//                queryParams : function(params) {
//                    return{
//                    offset:params.offset,
//                    limit:params.limit
//                   }
//                }

    };


    $('#person-list').bootstrapTable(options);
});