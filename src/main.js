try {
    console.log(chrome.tabs);
    chrome.tabs.getSelected(undefined, function(tab){
           console.log(tab);
           var url = encodeURIComponent(tab.url);
            console.log(url);
            //var iframe = document.getElementById('qrcode');
            //iframe.src = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|4&chl=" + url;
            /*
            var img = document.getElementById('qrcode');
            img.src = "http://qr.liantu.com/api.php?text=" + url;
            */
            $("#qrcode").qrcode({
                width: 200,
                height: 200,
                text: tab.url
            });
    });

}catch(e){
    console.log(e);
}
