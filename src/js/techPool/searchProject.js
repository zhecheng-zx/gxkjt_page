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
                    title : "项目类别",
                     align:"center",
                     valign: "middle"
                   

                }, {
                    field : 'name',
                    title : "项目名",
                    align:"center",
                    valign: "middle"
                 
                }, {
                    field : 'people',
                    title : "申报人",
                    align:"center",
                    valign: "middle"
                  
                }, {
                    field : 'area',
                    align:"center",
                    valign: "middle",
                    title : "申报地"
                }, {
                    field : 'time',
                    align:"center",
                    valign: "middle",
                    title : "申报时间"
                }, {
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
                url : '../../json/project.json',
                pageList : [ 10000],
                queryParamsType: '',
//                queryParams : function(params) {
//                    return{
//                    offset:params.offset,
//                    limit:params.limit
//                   }
//                }

            };


            $('#project-list').bootstrapTable(options);
});




