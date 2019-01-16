window.onload = function () {
    var table = document.createElement('table');
    table.width = 300;
    table.setAttribute('height', '300');
    table.border = 2;

    var caption = document.createElement('caption');
    table.appendChild(caption);
    caption.appendChild(document.createTextNode('人员表'));

    document.body.appendChild(table);
};