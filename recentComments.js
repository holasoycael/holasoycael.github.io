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
comment = entry.content.$t;
pid = altid.substr(4);

        break;
      }
    }
    alturl = alturl.replace("#", "#comment-");

	var urlNoAvatar = "https://u.cubeupload.com/holasoycael/visitorGravatar35.png";

    if (comment.length < numchars) { comment = comment; }
	else { comment = comment.substring(0, numchars); comment = comment + '(...)'; }

    if (altimg == "https://img1.blogblog.com/img/blank.gif" != "") { altimg = urlNoAvatar; }

	var re = /<\S[^>]*>/g; 
	document.write('<li class="slide" id="identity' + pid + '"><span class="imgAuthor"><img src="' + altimg + '" width="35" height="35"/></span><q>'+comment+'</q><section><span class="dateComment">' + altdat + '</span><a href="' + alturl + '"><span class="nameAuthor">' + authorName + '</span></a></section></li>');
}
document.write('</ul>');
}
