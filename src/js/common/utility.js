/**
 * Created by suibobuzhuliu on 16/5/18.
 */
function isWeChat(){
    var ua = navigator.userAgent;
    if(/MicroMessenger/.test(ua)){
        return true;
    }else{
        return false;
    }
}

export { isWeChat }
