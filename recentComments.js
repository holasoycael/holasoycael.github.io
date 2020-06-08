function COMMENTdisplay(json){
var PIDcmmt = new Array();
for(var i = 0; i < json.feed.entry.length; i++){

    var entry = json.feed.entry[i];
    var alturl;
    var altdat;
    var altimg;
	var alttitle;
	var authorName = entry.author[0].name.$t;
	var altid = entry.id.$t;

PIDcmmt += '"' +altid.split('post-')[1]+ '"';

console.log(altid.split('post-')[1]);




    if(i == json.feed.entry.length) break;
    for(var k = 0; k < entry.link.length; k++){
      if(entry.link[k].rel == 'alternate'){
alturl = entry.link[k].href;
alttitle = entry.title.$t;
altdat = entry.gd$extendedProperty[1].value;
altimg  = entry.author[0].gd$image.src;
        break;
      }
    }

	var urlNoAvatar = "data:image/svg+xml;base64,PHN2ZyBpZD0iQWdydXBhcl8xIiBkYXRhLW5hbWU9IkFncnVwYXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjNWM1YzU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IlJldMOibmd1bG9fMSIgZGF0YS1uYW1lPSJSZXTDom5ndWxvIDEiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiLz4KICA8Y2lyY2xlIGlkPSJFbGlwc2VfMSIgZGF0YS1uYW1lPSJFbGlwc2UgMSIgY2xhc3M9ImNscy0yIiBjeD0iMTI1IiBjeT0iMTAzIiByPSI1NyIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMxLDI1MHM0LjE1Mi03Ny4yMzIsNjktOTljMS42NjQtLjA0NCw0Ny40MDYtMC4wMDcsNTAsMCwzNy41MTEsOC4yODUsNzAuMTUxLDYxLjM3NSw2OSw5OUMyMTUuNzY5LDI0OS45MDUsMzEsMjUwLDMxLDI1MFoiLz4KPC9zdmc+Cg==";
    if (altimg == "https://img1.blogblog.com/img/blank.gif" != "") { altimg = urlNoAvatar; }
	

	document.write('<div class="FLEXdiv"><a href="' +alturl.split('?')[0]+ '"><div class="FLOATdiv"><span class="IMGthub"><img src="' + altimg + '" width="42" height="42"/></span></div><div class="FLOATdiv"><section><b>' + authorName + '</b> fez um novo comentario: "'+alttitle+'"</section><section class="DATEcomment">' + altdat + '</section></div></a></div>');

// console.log(Date().split('GMT')[0].split(' '))

}


	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('beforeend', '<div class="SEEmore">Mostrar tudo</div>');
	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('afterbegin', '<div class="INFOcmmt">' +json.feed.entry.length+ ' comentários sendo exidos.</div>');


// var CLOUDalt = PIDcmmt.substring(1, PIDcmmt.length-1).split('""');
var CLOUDalt = '[' +PIDcmmt.replace(/("")/gi,'","')+ ']';

console.log(PIDcmmt.substring(1, PIDcmmt.length-1).split('""'));
	localStorage.setItem('CLOUDalt', CLOUDalt)

// console.log('[' +PIDcmmt.replace(/("")/gi,'","')+ ']');
}
