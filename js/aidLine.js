// 维护一个单例的辅助线对象
var AidLine = function () {

    function _AidLine() {
        this.xEle;
        this.yEle;

        var xEleProto = $(`<div id="SYS-MODEL" class="x-line" style="width: 100%; height: 0; border-bottom: 1px dashed #ccc; position: absolute;"></div>`);
        var yEleProto = $(`<div id="SYS-MODEL" class="y-line" style="width: 0; height: 100%; border-left: 1px dashed #ccc; position: absolute;"></div>`);

        _AidLine.prototype.draw = function (x, y) {
            this.xEle = this.xEle || ($(".x-line").length == 0 ? undefined : $(".x-line")) || function () {
                $(".canvas").append(xEleProto);
                return xEleProto;
            }();
            this.yEle = this.yEle || ($(".y-line").length == 0 ? undefined : $(".y-line")) || function () {
                $(".canvas").append(yEleProto);
                return yEleProto;
            }();

            this.xEle.css({
                top: y + "px"
            });
            this.yEle.css({
                left: x + "px"
            });

            this.xEle.show();
            this.yEle.show();
        };

        _AidLine.prototype.hide = function () {
            this.xEle ? this.xEle.hide() : null;
            this.yEle ? this.yEle.hide() : null;
        };

        _AidLine.prototype.getXEle = function () {
            return xEle;
        };
        _AidLine.prototype.getYEle = function () {
            return yEle;
        };
    }

    AidLine.prototype.instance;
    AidLine.prototype.getInstance = function () {
        if (!AidLine.prototype.instance) {
            AidLine.prototype.instance = new _AidLine();
        }
        return AidLine.prototype.instance;
    };

    return AidLine.prototype.getInstance();
};