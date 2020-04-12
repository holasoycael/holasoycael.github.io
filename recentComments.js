function toggleIt(id) {
	post = document.getElementById(id);
	if (post.style.display != 'none') {
		post.style.display = 'none';
	} else {
		post.style.display = '';
	}
}

function showFullPost(id) {
	var post = document.getElementById(id);
        var spans = post.getElementsByTagName('span');
        for (var i = 0; i < spans.length; i++) {
             if (spans[i].id == "fullpost")
                 spans[i].style.display = 'inline';
             if (spans[i].id == "readmore")
                 spans[i].style.display = 'none';
        }
}

function showFull(id) {
	var post = document.getElementById(id);
        var spans = post.getElementsByTagName('span');
        for (var i = 0; i < spans.length; i++) {
             if (spans[i].id == "fullpost")
                 spans[i].style.display = 'inline';
             if (spans[i].id == "showlink")
                 spans[i].style.display = 'none';
             if (spans[i].id == "hidelink")
                 spans[i].style.display = 'inline';
        }
}


function hideFull(id) {
	var post = document.getElementById(id);
        var spans = post.getElementsByTagName('span');
        for (var i = 0; i < spans.length; i++) {
             if (spans[i].id == "fullpost")
                 spans[i].style.display = 'none';
             if (spans[i].id == "showlink")
                 spans[i].style.display = 'inline';
             if (spans[i].id == "hidelink")
                 spans[i].style.display = 'none';
        }
        post.scrollIntoView(true);
}

function checkFull(id) {
	var post = document.getElementById(id);
        var spans = post.getElementsByTagName('span');
        var found = 0;
        for (var i = 0; i < spans.length; i++) {
             if (spans[i].id == "fullpost")
                 found = 1;
             if ((spans[i].id == "showlink") && (found == 0))
                 spans[i].style.display = 'none';
        }
}

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
		altimg = entry.link[k].src;
        altid  = entry.gd$extendedProperty[0].value;
		pid    = altid.substr(4)
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
	document.write('<li class="slide" id="identity' + pid + '"><span class="imgAuthor"><img src="'+altimg+'" width="35" height="35"/></span><q>');
	if (comment.length < numchars)
	document.write(comment + '</q>');
	else
	document.write(comment.substring(0, numchars) + '...</q>');

	document.write('<section><span class="dateComment">' + altdat + '</span><span class="nameAuthor">' + entry.author[0].name.$t + '</span></section></li>');
}

}
