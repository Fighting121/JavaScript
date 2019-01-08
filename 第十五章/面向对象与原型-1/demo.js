function Box() {};
Box.prototype = {
    name: 'Lee',
    age: 18,
    run: function () {
        return this.name + this.age + '运行中...';
    }
};

var box = new Box();
alert(box.hasOwnProperty('name'));

