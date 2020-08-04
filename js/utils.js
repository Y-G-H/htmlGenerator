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
    }
};