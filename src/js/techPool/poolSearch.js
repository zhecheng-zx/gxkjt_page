
$(document).ready(function () {
    $(':checkbox').iCheck({
        checkboxClass: 'icheckbox_square-blue'
    });
     $("[data-toggle='tooltip']").tooltip();
    $('.myWord span').dblclick(function(e){

        console.log(this);

    });
    $('.addWord span').dblclick(function(e){

        console.log(this);

    })
});