var Bloggerplugins_shortener = {};
Bloggerplugins_shortener.init = function(bp_short_form_id, url) {
    var callback_name = url.replace(/\W/g, '');
    BitlyCB[callback_name] = function(data) {
    var result = Bloggerplugins_shortener.getResult(data);
    document.getElementById(bp_short_form_id).innerHTML="<textarea onclick=\"this.focus();this.select()\" readonly=\"true\" type=\'text\'/\>"+result.shortUrl+"</textarea>";
    };
    BitlyClient.call('shorten', {'longUrl': url, 'history': '1'}, 'BitlyCB.' + callback_name);
    return false;
};


Bloggerplugins_shortener.getResult = function(data) {
    for (var r in data.results) {
        return data.results[r];
    }
};