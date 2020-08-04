var elementLib = [{
    id: "COMPANY-LOGO",
    content: function () {
        var ele = new ElementObj("COMPANY-LOGO", "公司logo",
            `
            <div class="COMPANY-LOGO">
               <img src="http://pro.yinmishu.com/scor-web-pro/app/img/logo.png">
            </div>
        `, `
            .COMPANY-LOGO img {
                width: 60px;
                height: 60px;
            }
            .COMPANY-LOGO {
                width: 91px;
                text-align: center;
            }
        `);
        return ele;
    }()
},{
    id: "CUSTOMER-NAME",
    content: function () {
        var ele = new ElementObj("CUSTOMER-NAME", "客户姓名",
            `
            <div class="CUSTOMER-NAME">
               <span>客户姓名：</span>
               <span class="omit omit-xs">废物</span>
            </div>
        `, `
            .CUSTOMER-NAME {
                width: 237px;
                height: 18px;
                font-size: 12px;
            }
        `);
        return ele;
    }()
}];


function ModelNav(canvas) {
    var modelNav = $(".model-nav");
    var canvas = canvas;
    var canvasEle = canvas.getEle();
    var canvasRangeReal = {
        top: canvasEle.offset().top,
        left: canvasEle.offset().left,
        right: canvasEle.offset().left + canvasEle.width(),
        bottom: canvasEle.offset().top + canvasEle.height()
    };
    var canvasRangeFake = {
        top: 0,
        left: 0,
        right: canvasEle.width(),
        bottom: canvasEle.height()
    };

    modelNav.on('click', function (e) {
        var elementId;
        if (e.target.className == "model-opt") {
            elementId = $(e.target).attr("data-id");
        } else if (e.target.tagName == "SPAN" && $(e.target).parent("div").attr("class") == "model-opt") {
            elementId = $(e.target).parent(".model-opt").attr("data-id");
        } else {
            return;
        }

        var ele = Utils.copyElementObj(function () {
            return Utils.getByArray(elementLib, function (item) {
                return elementId == item.id;
            })
        }());

        ele.content.initCanvasRange(canvasRangeReal, canvasRangeFake);

        canvas.pen(ele);
    });

    for (var i = 0; i < elementLib.length; i++) {
        var content = elementLib[i].content;
        var modelOpt = $(`<div class="model-opt" data-id="${content.id}">
                              <span>${content.name}</span>
                          </div>`);
        modelNav.append(modelOpt);
    }
}