function showgalleryposts(json) {
    var numPosts = json.feed.openSearch$totalResults.$t;
    var indexPosts = new Array();
    for (var i = 0; i < numPosts; ++i) {
        indexPosts[i] = i;
    }
	if (random_posts == true){
    indexPosts.sort(function() {return 0.5 - Math.random()});
	}
    if (numposts_gal > numPosts) {
        numposts_gal = numPosts;
    }
    for (i = 0; i < numposts_gal; ++i) {
        var entry_gal = json.feed.entry[indexPosts[i]];
		var posttitle_gal =  entry_gal.title.$t;
		var postcategory_gal =  entry_gal.category;
		var postgeorss_gal =  entry_gal.georss$featurename.$t;
		var postid_gal =  entry_gal.published.$t;
        for (var k = 0; k <  entry_gal.link.length; k++) {
            if ( entry_gal.link[k].rel == 'alternate') {
                posturl_gal =  entry_gal.link[k].href;
                break;
            }
        }
		if ("content" in entry_gal) {
            var postcontent_gal = entry_gal.content.$t
        }

        document.write('<li class="tickle ' + postgeorss_gal + '"><a href="' + posturl_gal + '">' + posttitle_gal + ' </a><b>' + postcontent_gal + '</b></li>')
    }
	
}