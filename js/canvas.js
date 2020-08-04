function Canvas() {
    var _this = this;
    var _thisEle = $(".canvas");
    var canvasStyle = $("#canvas-style");

    this.elements = [];
    this.html = "";
    this.style = `
        .omit {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
        }
        .omit-xs {
            max-width: 140px;
        }
        .omit-md {
            max-width: 300px;
        }
        .omit-lg {
            max-width: 650px;
        }
    `;
    this.currFocusEle;


    var graticule = function () {

    };

    var pen = function (newEleObj) {
        // 创建元素绑定事件
        var newEle = $(newEleObj.content.html);
        newEle.mousedown(newEleObj.content.mousedown);
        _thisEle.append(newEle);

        // 对象绑定元素
        newEle.css({'position': "absolute"});
        newEleObj.content.setEle(newEle);

        _this._html = newEleObj.content.html;
        _this._style = newEleObj.content.style;
    };

    Canvas.prototype.pen = function (newEleObj) {
        this.elements.push(newEleObj);
        pen(newEleObj);
    };

    Canvas.prototype.getEle = function () {
        return _thisEle;
    };

    // 导出，即时从.canvas中获取内容
    Canvas.prototype.export = function () {
        var fileContent = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>预览</title>            
                    <style>
                        ${this.style}
                    </style>            
                </head>
                <body>
                    ${_thisEle.html()}
                </body>
            </html>
        `;
        console.log(fileContent);
    };

    // 监听两个属性，下划线帮助解决栈溢出
    Object.defineProperties(_this, {
        _style: {
            configurable: true,
            set: function (newValue) {
                _this.style += newValue;
                canvasStyle.html(_this.style);
                console.log("监听到画板style发生变化");
            }
        },
        _html: {
            configurable: true,
            set: function (newValue) {
                _this.html += newValue;
                console.log("监听到画板html发生变化");
            }
        }
    })
};