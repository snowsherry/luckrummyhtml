function downloadApp(page){
    let url='http://joingamestech.com/apk/luckyrummy_40008.apk';
    window.open(url);
    try {
        ga('send', 'event', 'downloadApp', 'click', page||'');
    }catch (e) {

    }
}
