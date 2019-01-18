window.onload = function () {
    var box = document.getElementById('box');
    box.onmouseover = function (evt) {
        alert(evt.relatedTarget);
    }
};