function ElementObj(id, name, html, style) {
    this.id = id;
    this.name = name;
    this.html = html;
    this.style = style;

    var _thisEle;
    // fake range 指的是canvas相对内部元素的范围
    var canvasRangeFake;
    // real range 指的是canvas相对全局页面的范围
    var canvasRangeReal;

    this.setEle = function (ele) {
        _thisEle = ele;
    };

    this.initCanvasRange = function (rangeReal, rangeFake) {
        canvasRangeReal = rangeReal;
        canvasRangeFake = rangeFake;
    };

    // 拖拽事件内容
    this.mousedown = (function(e) {
        var positionDiv = _thisEle.offset();
        var distenceX = e.pageX - positionDiv.left;
        var distenceY = e.pageY - positionDiv.top;

        $(document).mousemove(function(e) {
            var x = e.pageX - distenceX - canvasRangeReal.left;
            var y = e.pageY - distenceY - canvasRangeReal.top;

            if (x < canvasRangeFake.left) {
                x = canvasRangeFake.left;
            } else if (x > canvasRangeFake.right - _thisEle.width()) {
                x = canvasRangeFake.right - _thisEle.width();
            }

            if (y < canvasRangeFake.top) {
                y = canvasRangeFake.top;
            } else if (y > canvasRangeFake.bottom - _thisEle.height()) {
                y = canvasRangeFake.bottom - _thisEle.height();
            }

            _thisEle.css({
                'left': x + 'px',
                'top': y + 'px'
            });
            return false;
        });

        $(document).mouseup(function() {
            $(document).off('mousemove');
            return false;
        });
        return false;
    });
};