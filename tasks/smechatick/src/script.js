document.querySelector('#send').onclick = send;

document.querySelector('#clear').onclick = clear;

document.getElementsByName('radio')[0].onchange = show;
document.getElementsByName('radio')[1].onchange = show;
document.getElementsByName('radio')[2].onchange = show;
document.getElementsByName('radio')[3].onchange = show;
document.getElementsByName('radio')[4].onchange = show;

let history_krosh = '';
let history_ezhik = '';
let history_losyash = '';
let history_karich = '';
let history_kopatich = '';

document.getElementsByName('text')[0].addEventListener('keyup', function (data){
    if (data.key === 'Enter') {
        send();
    }
})

function send() {
    let message = document.querySelector('#content');
    let link = document.createElement('div');
    let time = new Date();
    link.innerHTML = time.getHours().toString() + ':' + time.getMinutes().toString() + '\n' + document.querySelector('#text').value;
    document.getElementById('text').focus();
    let sen = false;
    for(let i = 0; i<link.innerHTML.length; i++){
        if(link.innerHTML[i] !== ' '){
            sen = true;
        }
    }
if(link.innerHTML !== '' && sen){
    if (document.getElementsByName('radio')[0].checked) {
        history_krosh += time.getHours().toString() + ':' + time.getMinutes().toString() + ' ' + document.querySelector('#text').value + ' -';
        localStorage.setItem('krosh', history_krosh);

    } else if (document.getElementsByName('radio')[1].checked) {
        history_ezhik += time.getHours().toString() + ':' + time.getMinutes().toString() + ' ' + document.querySelector('#text').value + ' -';
        localStorage.setItem('ezhik', history_ezhik);

    } else if (document.getElementsByName('radio')[2].checked) {
        history_losyash += time.getHours().toString() + ':' + time.getMinutes().toString() + ' ' + document.querySelector('#text').value + ' -';
        localStorage.setItem('losyash', history_losyash);

    } else if (document.getElementsByName('radio')[3].checked) {
        history_karich += time.getHours().toString() + ':' + time.getMinutes().toString() + ' ' + document.querySelector('#text').value + ' -';
        localStorage.setItem('karich', history_karich);

    } else if (document.getElementsByName('radio')[4].checked) {
        history_kopatich += time.getHours().toString() + ':' + time.getMinutes().toString() + ' ' + document.querySelector('#text').value + ' -';
        localStorage.setItem('kopatich', history_kopatich);
    }
    message.appendChild(link);
    message.scrollTop = message.scrollHeight;
    document.querySelector('#text').value = "";
    }
}

function clear() {
    while (document.querySelector('#content').hasChildNodes()) {
        let content = document.querySelector('#content').lastChild;
        content.parentNode.removeChild(content);
    }

    if (document.getElementsByName('radio')[0].checked) {
        history_krosh = '';
        localStorage.removeItem('krosh');
    } else if (document.getElementsByName('radio')[1].checked) {
        history_ezhik = '';
        localStorage.removeItem('ezhik');
    } else if (document.getElementsByName('radio')[2].checked) {
        history_losyash = '';
        localStorage.removeItem('losyash');
    } else if (document.getElementsByName('radio')[3].checked) {
        history_karich = '';
        localStorage.removeItem('karich');
    } else if (document.getElementsByName('radio')[4].checked) {
        history_kopatich = '';
        localStorage.removeItem('kopatich');
    }
}

function local_clear() {
    while (document.querySelector('#content').hasChildNodes()) {
        let content = document.querySelector('#content').lastChild;
        content.parentNode.removeChild(content);
    }
}

function local_send(mess) {
    let message = document.querySelector('#content');
    let link = document.createElement('div');
    link.innerHTML = mess;
    message.appendChild(link);
    document.querySelector('#text').value = "";
}

function valueOfHis(hist) {
    let result = 0;
    for (let i = 0; i < hist.length; i++) {
        if (hist[i] === '-') {
            result++;
        }
    }
    return result;
}

function show() {
    local_clear();
    document.getElementById('text').focus();
    if (document.getElementsByName('radio')[0].checked && localStorage.getItem('krosh') !== null) {
        let res = localStorage.getItem('krosh');
        let len = valueOfHis(res);
        for (let i = 0; i < len; i++) {
            local_send(res.slice(0, res.indexOf('-')));
            res = res.slice(res.indexOf('-') + 1, res.length);
        }
    } else if (document.getElementsByName('radio')[1].checked && localStorage.getItem('ezhik') !== null) {
        let res = localStorage.getItem('ezhik');
        let len = valueOfHis(res);
        for (let i = 0; i < len; i++) {
            local_send(res.slice(0, res.indexOf('-')));
            res = res.slice(res.indexOf('-') + 1, res.length);
        }
    } else if (document.getElementsByName('radio')[2].checked && localStorage.getItem('losyash') !== null) {
        let res = localStorage.getItem('losyash');
        let len = valueOfHis(res);
        for (let i = 0; i < len; i++) {
            local_send(res.slice(0, res.indexOf('-')));
            res = res.slice(res.indexOf('-') + 1, res.length);
        }
    } else if (document.getElementsByName('radio')[3].checked && localStorage.getItem('karich') !== null) {
        let res = localStorage.getItem('karich');
        let len = valueOfHis(res);
        for (let i = 0; i < len; i++) {
            local_send(res.slice(0, res.indexOf('-')));
            res = res.slice(res.indexOf('-') + 1, res.length);
        }
    } else if (document.getElementsByName('radio')[4].checked && localStorage.getItem('kopatich') !== null) {
        let res = localStorage.getItem('kopatich');
        let len = valueOfHis(res);
        for (let i = 0; i < len; i++) {
            local_send(res.slice(0, res.indexOf('-')));
            res = res.slice(res.indexOf('-') + 1, res.length);
        }
    }
    let message = document.querySelector('#content');
    message.scrollTop = message.scrollHeight;
}