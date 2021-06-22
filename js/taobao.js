$(function () {
    //加载模态框
    showModal();
    //初始化日期表单
    initDateForm();
    //回显信息
    echoInfo();
    //生成凭证
    createPass();
    //清空信息
    removeInfo();
    //状态控制器
    statusController();
    $('#closeBtn').click(()=>{
        $('#my-modal').css('display','none')
    })
});

//加载模态框
function showModal() {
    $("#my-modal").modal("show");
}


//初始化日期表单
function initDateForm() {
    $('.date-form-box .date').datetimepicker({
        language: "zh-CN",                  //以中文显示
        autoclose: true,                    //选择完毕后自动关闭选择器
        pickerPosition: "bottom-left",      //选择器显示位置
        format: "yyyy-mm-dd hh:00",         //日期格式
        startView: "month",                 //初始日期从月开始
        minView: "day"                      //最精确视图为日
    });
}

//回显信息
function echoInfo() {
    let defaultData = {
        endTime: "" ,
        startTime: "",
        statusType: "进校",
        stuClass: "17网络工程",
        stuDept: "计算机学院",
        stuName: "黎章龙",
        stuNum: "17551117028"
    };
    let data = localStorage.getItem('passData')&&JSON.parse(localStorage.getItem('passData')) || defaultData
    $("#stuName").val(data.stuName);
    $("#stuDept").val(data.stuDept);
    $("#stuNum").val(data.stuNum);
    $("#stuClass").val(data.stuClass);
    $("#startTime").val(data.startTime);
    $("#endTime").val(data.endTime);
    $(`#${data.statusType}`).addClass('status-active')
}

//生成凭证
function createPass() {
    $("#createPass").click(function () {
        let statusType = "未选择凭证类型"
        if ($("#leave").hasClass("status-active")) {
            statusType = "离校"
        } else if ($("#enter").hasClass("status-active")) {
            statusType = "进校"
        } else if ($("#overtime").hasClass("status-active")) {
            statusType = "请假过期,逾期返校"
        }
        let data = {
            "stuName": $("#stuName").val(),
            "stuDept": $("#stuDept").val(),
            "stuNum": $("#stuNum").val(),
            "stuClass": $("#stuClass").val(),
            "statusType": statusType,
            "startTime":$("#startTime").val(),
            "endTime":$("#endTime").val()
        }
        localStorage.setItem('passData',JSON.stringify(data))
        location.href = "./pass.html";
    });
}

//清空信息
function removeInfo() {
    $("#removeInfo").click(function () {
        //清除表单信息
        $("#stuName").val("")
        $("#stuDept").val("")
        $("#stuNum").val("")
        $("#stuClass").val("")
        $("#startTime").val("")
        $("#endTime").val("")
        localStorage.setItem('passData',{})
        //去除状态
        $("#leave, #enter, #overtime").removeClass("status-active");
    });
}

//状态控制器
function statusController() {
    $("#leave").click(function () {
        if ($(this).hasClass("status-active")) {
            $(this).removeClass("status-active");
        } else {
            $("#enter").removeClass("status-active");
            $("#overtime").removeClass("status-active");
            $(this).addClass("status-active");
        }
        return false;
    });
    $("#enter").click(function () {
        if ($(this).hasClass("status-active")) {
            $(this).removeClass("status-active");
        } else {
            $("#leave").removeClass("status-active");
            $("#overtime").removeClass("status-active");
            $(this).addClass("status-active");
        }
        return false;
    });
    $("#overtime").click(function () {
        if ($(this).hasClass("status-active")) {
            $(this).removeClass("status-active");
        } else {
            $("#leave").removeClass("status-active");
            $("#enter").removeClass("status-active");
            $(this).addClass("status-active");
        }
        return false;
    });
}
