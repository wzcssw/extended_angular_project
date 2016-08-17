module.exports = {
    session_filter: function *(next){
        if ( isEmpty(this.session)){
            this.body = JSON.stringify({success:false,info:"请先建立会话"});
            return;
        }else{
            yield next;
        }
    }
}


function isEmpty(obj) { // 判断是否为空对象
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}