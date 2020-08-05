function ElementObj(eleId, name, html, style) {
    this.id = Utils.randomString();
    this.eleId = eleId;
    this.name = name;
    this.html = html;
    this.style = style;
    this.ele;

    var _this = this;
    var aidLine = new AidLine();
    // fake range 指的是canvas相对内部元素的范围
    var canvasRangeFake;
    // real range 指的是canvas相对全局页面的范围
    var canvasRangeReal;

    this.initCanvasRange = function (rangeReal, rangeFake) {
        canvasRangeReal = rangeReal;
        canvasRangeFake = rangeFake;
    };

    // 拖拽事件内容
    this.mousedown = function(e) {
        var positionDiv = _this.ele.offset();
        var distenceX = e.pageX - positionDiv.left;
        var distenceY = e.pageY - positionDiv.top;

        $(document).mousemove(function(e) {
            var x = e.pageX - distenceX - canvasRangeReal.left;
            var y = e.pageY - distenceY - canvasRangeReal.top;

            if (x < canvasRangeFake.left) {
                x = canvasRangeFake.left;
            } else if (x > canvasRangeFake.right - _this.ele.width()) {
                x = canvasRangeFake.right - _this.ele.width();
            }

            if (y < canvasRangeFake.top) {
                y = canvasRangeFake.top;
            } else if (y > canvasRangeFake.bottom - _this.ele.height()) {
                y = canvasRangeFake.bottom - _this.ele.height();
            }

            _this.ele.css({
                'left': x + 'px',
                'top': y + 'px'
            });

            aidLine.draw(x, y);
            return false;
        });

        $(document).mouseup(function() {
            $(document).off('mousemove');
            aidLine.hide();
            return false;
        });
        return false;
    };

    this.selected = function (isOk) {
        if (isOk) {
            _this.ele.addClass("selected");
        } else {
            _this.ele.removeClass("selected");
        }
    };
};