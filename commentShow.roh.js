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
    var altid;

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        alturl = entry.link[k].href;
		altdat = entry.gd$extendedProperty[1].value;
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
	document.write('<dt class="comment-author"><div class="avatar-image-container avatar-stock" id="identity' + pid + '"></div><div class="topComment"><a href="' + alturl + '">' + entry.author[0].name.$t + '</a><span class="comment-timestamp">' + altdat + '</span><a href="' + alturl + '"><p class="permalink"></p></a></div></dt><dd class="comment-body"><p>');
	if (comment.length < numchars)
	document.write(comment + '</p></dd>');
	else
	document.write(comment.substring(0, numchars) + '...</p></dd>');

  var random= Math.floor(Math.random() * 9) + 0;
  var bigSize = ["0px 0px",
                 "0px -37px",
                 "0px -74px",
                 "0px -111px",
                 "0px -148px",
                 "0px -185px",
                 "0px -222px",
                 "0px -259px",
                 "0px -297px",
                 "0px -334px",
                 "0px -371px"];
  document.getElementById("identity"+pid).style.backgroundPosition=bigSize[random];

}
  
}