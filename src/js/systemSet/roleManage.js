/**
 * Created by lf on 2017/9/22.
 */

$(function () {
    //-----------------------------------编辑角色系列事件start ------------------------------------------------
    //表格里 编辑角色按钮点击事件
    $('.editBtn').click(function () {
        //根据当前点击btn，获取该角色信息
        var param = {};

        $('#editRoleModal').data('data', param).modal('toggle');
    });

    $('#modal_cancel_btn').click(function () {
        $('#editRoleModal').removeData('data').modal('toggle');
    });

    $('#edit_role_submit').click(function () {
        //获取模态框绑定的角色信息
        var data =   $('#editRoleModal').data('data');
        //ajax编辑信息后  关闭模态框
        $('#editRoleModal').removeData('data').modal('toggle');
    });
    // ---------------------------------------------编辑角色系列事件end-------------------------------------

    //-----------------------------------------配置角色系列事件start--------------------------------------------
    //表格里配置角色点击事件
    $('.deployBtn').click(function () {
        $('#deployRoleModal').modal('toggle');
    });

    //初始化ztree
    let zNodes = getRoleTreeData();
    let setting = {
        view: {
            addHoverDom: false,
            removeHoverDom: false,
            selectedMulti: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        edit: {
            enable: false
        }
    };
    $.fn.zTree.init($("#ztree"), setting, zNodes);

    //配置角色模态框取消按钮点击事件
    $('#deploy_cancel_btn').click(function () {
        //

        $('#deployRoleModal').modal('toggle');
    });

    $('#deploy_role_submit').click(function () {
        //ajax回调后关闭模态框
        $('#deployRoleModal').modal('toggle');
    });
    //-----------------------------------------配置角色系列事件end---------------------------------------------

    $('.deleteBtn').click(function () {
        $('#deleteRoleModal').modal('toggle');
    });
    $('#delete_cancel_btn').click(function () {
        $('#deleteRoleModal').modal('toggle');
    });
    $('#delete_role_submit').click(function () {
        $('#deleteRoleModal').modal('toggle');
    });

    $('#addBtn').click(function () {
        $('#addRoleModal').modal('toggle');
    });
    $('#add_role_submit').click(function () {
        //ajax回调 清空模态框绑定的信息  关闭模态框
        $('#addRoleModal').modal('toggle');
    });
    $('#add_cancel_btn').click(function () {
        $('#addRoleModal').modal('toggle');
    });
});

function getRoleTreeData() {
    let zNodes =[
        {id:1, pId:0, name:"科技台", open:true},
        {id:2, pId:0, name:"科技立方", open:true},

        {id:3, pId:0, name:"科技查重", open:true},
        {id:301, pId:3, name:"项目查重"},
        {id:302, pId:3, name:"查重记录"},
        {id:303, pId:3, name:"分析记录"},

        {id:4, pId:0, name:"科技行业情报", open:true},
        {id:401, pId:4, name:"情报中心"},
        {id:402, pId:4, name:"科研故事"},

        {id:5, pId:0, name:"科研智汇", open:true},
        {id:501, pId:5, name:"一键搜索"},
        {id:502, pId:5, name:"科技智搜"},

        {id:6, pId:0, name:"科技诚信", open:true},
        {id:601, pId:6, name:"诚信总览"},
        {id:602, pId:6, name:"个人诚信"},
        {id:603, pId:6, name:"企业诚信"},

        {id:7, pId:0, name:"系统设置", open:true},
        {id:701, pId:7, name:"用户管理"},
        {id:702, pId:7, name:"科研故事管理"},
        {id:703, pId:7, name:"角色管理"}
    ];

    return zNodes;
}