function commentDisplay(json) {

document.write('<ul class="slides">');

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

        break;
      }
    }
    alturl = alturl.replace("#", "#comment-");

	var comment = entry.content.$t;
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
	
	var urlNoAvatar = "https://u.cubeupload.com/holasoycael/visitorGravatar35.png";

    if (comment.length < numchars) { var commentText = comment; }
	else {
		
nova_frase = primeiras_palavras + "(...)";

	}

    if (altimg == "https://img1.blogblog.com/img/blank.gif" != "") { altimg = urlNoAvatar; }

String.prototype.stripHTML = function() {return this.replace(/<.*?>/g, ' ');}
nova_frase = nova_frase.stripHTML();

	document.write('<li class="slide" id="identity' + pid + '"><span class="imgAuthor"><img src="' + altimg + '" width="35" height="35"/></span><q>'+nova_frase+'</q><section><span class="dateComment">' + altdat + '</span><a href="' + alturl + '"><span class="nameAuthor">' + authorName + '</span></a></section></li>');
}
document.write('</ul>');
}
