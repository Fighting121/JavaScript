function getKeys(evt) {
    var e = evt || window.event;
    var keys = [];
    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    return keys;
}

document.onclick = function (evt) {
    alert('1');
    alert(getKeys(evt));
};