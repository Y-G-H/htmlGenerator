var modelNav;
var canvas;

_init();

$(".save span").click(function () {
    canvas.export();
});

function _init() {
    canvas = new Canvas();
    modelNav = new ModelNav(canvas);
};