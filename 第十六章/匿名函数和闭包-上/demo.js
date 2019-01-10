function Desk() {};
var box = function () {
    var age = 100;
    function run () {
        return '运行中...';
    }
    var desk = new Desk();
    desk.go = function () {
        return age + run();
    };
    return desk;
}();
alert(box.go());