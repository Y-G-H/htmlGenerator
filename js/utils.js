var Utils = {
    getByArray: function (lib, callback) {
        var len = lib.length;
        for (var i = 0; i < len; i++) {
            var target = lib[i];
            if (callback(target)) {
                return target;
            }
        }

        return null;
    },
    copyElementObj: function (ele) {
        var content = ele.content;
        var newEle = new ElementObj(content.id, content.name, content.html, content.style);
        return {
            id: newEle.id,
            content: newEle
        };
    },
    randomString: function (len) {
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOl,9gq,Vv,Uu,1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
};