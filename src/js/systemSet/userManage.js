/**
 * Created by zhangxin on 2017/10/9.
 */
$(function () {
    var option = {
        columns : [ {
            field : 'id',
            align:"center",
            valign: "middle",
            title : "编号",
        }, {
            field : 'name',
            title : "用户名",
            width : "100px",
            align:"center",
            valign: "middle"


        }, {
            field : 'price',
            title : "标题",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : "部门",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : "职位",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : "角色",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : "部门",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : "手机号",
            align:"center",
            valign: "middle",

        }, {
            field : 'price',
            title : '操作',
            align:"center",
            valign: "middle",
            formatter:function(){
                return '<button type="button" data-target="#searchRoleModal" data-toggle="modal" class="btn btn-link deployBtn"> 查看</button>  |  '+
                    '<button type="button" data-target="#editRoleModal" data-toggle="modal" class="btn btn-link editBtn">编辑</button>  |  '+
                    '<button type="button" data-target="#deleteRoleModal" data-toggle="modal" class="btn btn-link deleteBtn">删除</button>';
            }

        }],
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
        url : '../../json/data3.json',
        pageList : [],
        paginationDetailHAlign:'left',
        queryParamsType: '',
        onLoadSuccess:function(){
        }
    }
    $(".table").bootstrapTable(option)
    
    
    $('#modal_cancel_btn').click(function () {
        $('#editRoleModal').modal('toggle')
    })
})