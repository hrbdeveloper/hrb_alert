// HRB_ALERT Powered By Hamidreza Biglari WWW.HRBCMS.IR
function close_hrb_alert(){
    $(".bg_hrb_alert").removeClass('show');
    $(".hrb_alert").removeClass('show');
    setTimeout(function () {
        $('body .bg_hrb_alert , body .hrb_alert').remove();
    },200);
}
function hrb_alert([type, title, text, btn,TextOkDelSendSubmit,textCancel,html], hrb_success, hrb_cancel) {
    var $btns = "", $type = "", $title = "", $text = "", html_hrb_alert = "", $html_content="";
    switch (btn) {
        case 'ok' :
            $btns = '<button class="btn_hrb_alert info">'+TextOkDelSendSubmit+'</button>';
            break;
        case 'okCancel' :
            $btns = '<button class="btn_hrb_alert cancel">'+textCancel+'</button><button class="btn_hrb_alert info">'+TextOkDelSendSubmit+'</button>';
            break;
        case 'sendCancel' :
            $btns = '<button class="btn_hrb_alert cancel">'+textCancel+'</button><button class="btn_hrb_alert send submit">'+TextOkDelSendSubmit+'</button>';
            break;
        case 'delCancel' :
            $btns = '<button class="btn_hrb_alert cancel">'+textCancel+'</button><button class="btn_hrb_alert del">'+TextOkDelSendSubmit+'</button>';
            break;
        case 'cancel' :
            $btns = '<button class="btn_hrb_alert cancel">'+textCancel+'</button>';
            break;
        default :
            break;
    }
    if(text != null){
        switch (type) {
            case 'success' :
                $type = '<div class="f-modal-icon f-modal-success animate"><span class="f-modal-line f-modal-tip animateSuccessTip"></span><span class="f-modal-line f-modal-long animateSuccessLong"></span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div>';
                break;
            case 'danger' :
                $type = '<div class="f-modal-icon f-modal-error animate"><span class="f-modal-x-mark"><span class="f-modal-line f-modal-left animateXLeft"></span><span class="f-modal-line f-modal-right animateXRight"></span></span><div class="f-modal-placeholder"></div><div class="f-modal-fix"></div></div>';
                break;
            case 'warning' :
                $type = '<div class="f-modal-icon f-modal-warning scaleWarning"><span class="f-modal-body pulseWarningIns"></span><span class="f-modal-dot pulseWarningIns"></span></div>';
                break;
            case 'info' :
                $type = '<div class="info"><div class="f-modal-icon f-modal-warning scaleWarning"><span class="f-modal-body pulseInfoIns"></span><span class="f-modal-dot pulseInfoIns"></span></div></div>';
                break;
            default :
                break;
        }
        $text = text;
    }else{
        $text = ""
    }
    if(title != null){
        $title = title;
    }else{
        $title = ""
    }

    if(html != null){
        $html_content = '<div class="hrb_alert_html_content"><form action="" class="frm_hrb_alert_Send_Data">'+html+'</form></div>';
    }else{
        $html_content = "";
    }
    html_hrb_alert = '<i class="bg_hrb_alert"></i><div class="hrb_alert"><div class="content_hrb_alert"><i class="close fal fa-times"></i><i class="icon_hrb_alert">'+$type+'</i><h2 class="title_hrb_alert">' + $title + '</h2><p class="text_hrb_alert">' + $text + '</p>'+$html_content+'<div class="btns_hrb_alert">' + $btns + '</div></div></div></div>';
    $('.bg_hrb_alert ,.hrb_alert').remove();
    $('body').append(html_hrb_alert);

    setTimeout(function () {
        $(".bg_hrb_alert").addClass('show');
        $(".hrb_alert").addClass('show');
    }, 1);

    $(".content_hrb_alert .close , .bg_hrb_alert").click(function () {close_hrb_alert()});
    $(".btn_hrb_alert.cancel").click(function () { close_hrb_alert();hrb_cancel()});
    $('.btn_hrb_alert.send , .btn_hrb_alert.info').click(function () {close_hrb_alert();hrb_success();});
    $('.btn_hrb_alert.del').click(function () {close_hrb_alert();hrb_success()});
}// HRB_ALERT Powered By Hamidreza Biglari WWW.HRBCMS.IR
