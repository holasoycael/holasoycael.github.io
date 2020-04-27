function commentDisplay(json) {

document.write('<ul class="owl-carousel testimonia">');

  for (var i = 0; i < numcomments; i++) {
    var entry = json.feed.entry[i];
    var alturl;
    var altdat;
    var altimg;
    var altid;
	var authorName = entry.author[0].name.$t;

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
 
alturl = entry.link[k].href;
altdat = entry.gd$extendedProperty[1].value;
altid  = entry.gd$extendedProperty[0].value;
altimg  = entry.author[0].gd$image.src;
pid = altid.substr(4);
up  = entry.updated.$t;
updated = up.replace(/\D/g, '');

        break;
      }
    }
    alturl = alturl.replace("#", "#comment-");

	var comment = entry.content.$t;
	var urlNoAvatar = "data:image/svg+xml;base64,PHN2ZyBpZD0iQWdydXBhcl8xIiBkYXRhLW5hbWU9IkFncnVwYXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjNWM1YzU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IlJldMOibmd1bG9fMSIgZGF0YS1uYW1lPSJSZXTDom5ndWxvIDEiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiLz4KICA8Y2lyY2xlIGlkPSJFbGlwc2VfMSIgZGF0YS1uYW1lPSJFbGlwc2UgMSIgY2xhc3M9ImNscy0yIiBjeD0iMTI1IiBjeT0iMTAzIiByPSI1NyIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMxLDI1MHM0LjE1Mi03Ny4yMzIsNjktOTljMS42NjQtLjA0NCw0Ny40MDYtMC4wMDcsNTAsMCwzNy41MTEsOC4yODUsNzAuMTUxLDYxLjM3NSw2OSw5OUMyMTUuNzY5LDI0OS45MDUsMzEsMjUwLDMxLDI1MFoiLz4KPC9zdmc+Cg==";

    if (comment.length < numchars) { var commentText = comment; 
	
	String.prototype.stripHTML = function() {return this.replace(/<.*?>/g, ' ');}
	commentText = commentText.stripHTML();
	}
	else {
		
commentText = comment.substring(0, numchars);
partes = commentText.split(' ');
posicao_ultima_palavra = partes.length - 1;
ultima_palavra = partes[posicao_ultima_palavra]; //pegar na ultima palavra(chover neste caso)
partes.pop();//remover a ultima palavra do array
primeiras_palavras = '';
partes.forEach(function(palavra){ //percorrer o array de palavras para formar a frase depois da virgula
primeiras_palavras += ' '; //espaco entre as palavras
primeiras_palavras += palavra; // a palavra em causa
});
commentText = primeiras_palavras + "(...)";

	String.prototype.stripHTML = function() {return this.replace(/<.*?>/g, ' ');}
	commentText = commentText.stripHTML();

	}

    if (altimg == "https://img1.blogblog.com/img/blank.gif" != "") { altimg = urlNoAvatar; }

	document.write('<li class="item t-slid" id="identity' + pid + '"><span class="imgAuthor"><img src="' + altimg + '" width="90" height="90"/></span><section><span class="nameAuthor">' + authorName + '</span><span class="dateComment">' + altdat + '</span></section><script align="center" async="async" blocktext="" bottomtext="" emptystarimg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iI0JFQkVCRSI+PHBhdGggZD0iTTE2IDAgTDI2IDMwIEwwIDExIEwzMiAxMSBMNiAzMCIvPjwvc3ZnPg==" ratingname="' + updated + '" firebaseurl="https://blogger-star-rating.firebaseio.com/" fontfamily="Trebuchet MS" fullstarimg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iI0ZGRjcwQSI+PHBhdGggZD0iTTE2IDAgTDI2IDMwIEwwIDExIEwzMiAxMSBMNiAzMCIvPjwvc3ZnPg==" hoverstarimg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iI0U5OUQwNSI+PHBhdGggZD0iTTE2IDAgTDI2IDMwIEwwIDExIEwzMiAxMSBMNiAzMCIvPjwvc3ZnPg==" numberofstars="5" src="https://drive.google.com/uc?export=download&amp;id=1_3EXmeXQzNkbuQ369vV4li-eLN1mGcOV" starsize="18" status="active" textsize="12" toptext=""></script><p>'+commentText+'</p></li>');
}
document.write('</ul>');
}
