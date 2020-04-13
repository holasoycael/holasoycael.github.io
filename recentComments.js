function commentDisplay(json) {

  for (var i = 0; i < numcomments; i++) {
    var entry = json.feed.entry[i];
    var alturl;
    var altdat;
    var altimg;
    var altid;

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

    if (entry.content) {
      comment = entry.content.$t;
    } else if (entry.summary) {
      comment = entry.summary.$t;
    }

	var re = /<\S[^>]*>/g; 
	document.write('<li class="slide" id="identity' + pid + '"><span class="imgAuthor"><img src="' + altimg + '" width="35" height="35"/></span><q>'+comment+'</q><section><span class="dateComment">' + altdat + '</span><a href="' + alturl + '"><span class="nameAuthor">' + entry.author[0].name.$t + '</span></a></section></li>');
}

}
