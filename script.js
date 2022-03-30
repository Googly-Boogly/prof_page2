var connect = 500
var con = 2
function add() {
    connect++
    var likess = document.querySelector('#butt2')
    likess.innerText = connect
}   
function remove1() {
    var elem = document.getElementById('myDiv')
    elem.parentNode.removeChild(elem);
}
function remove2() {
    var elem = document.getElementById('myDiv2')
    elem.parentNode.removeChild(elem);
}

function minus() {
    con--
    var likesss = document.querySelector('#butt1')
    likesss.innerText = con
}
function name1() {
    var likessss = document.querySelector('#h11')
    likessss.innerText = 'James Hello'
}

