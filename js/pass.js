$(function () {
    showPassInfo();
});

//显示凭证信息
function showPassInfo() {
    let data = localStorage.getItem('passData')&&JSON.parse(localStorage.getItem('passData')) || {}
    $("#stuName").text(data.stuName ? data.stuName : "未输入姓名");
    $("#stuDept").text(data.stuDept ? data.stuDept : "未输入院系");
    $("#stuNum").text(data.stuNum ? data.stuNum : "未输入学号");
    $("#stuClass").text(data.stuClass ? data.stuClass : "未输入班级");
    let startTime = getFormatTime(data.startTime);
    $("#startTime").text(startTime ? startTime + "-" : "未选择请假开始时间");
    let endTime = getFormatTime(data.endTime);
    $("#endTime").text(endTime ? endTime : "未选择请假结束时间");
    $("#status").text(data.statusType ? data.statusType === "leave" ? "离校" : "进校" : "未选择凭证类型")

    // 逾期特殊处理
    if (data.statusType === "overtime") {
        $("#status").text("请假过期,逾期返校");
        $("#qrCode").attr("src", "./images/QR_code_overtime.png")
    }
}

//获取指定格式化的时间
function getFormatTime(time) {
    if (time) {
        let date = time.split(" ")[0].split("-");
        //年月日
        date = date[0] + "年"
            + ((date[1])[0] !== "0" ? date[1] : (date[1])[1]) + "月"
            + ((date[2])[0] !== "0" ? date[2] : (date[2])[1]) + "日";
        //时
        let hour = time.split(" ")[1].split(":")[0];
        hour = (hour[0] !== "0" ? hour : hour[1]) + "时";
        return date + hour;
    }
    return time;
}

