//<![CDATA[
function createSummaryAndThumb(pID, pBODY, pLABEL, pTITLE, pURL){

	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");

	if(img.length>=0) {	
		imgtag = '<span class="post-location"><li class="'+pLABEL+'"></li></span><div class="title" id="titlePost' + pID + '"><h3 class="post-title entry-title" id="ttl'+pID+'"><a href="'+pURL+'">'+pTITLE+'</a></h3></div><div class="post-body entry-content" id="post-body-'+pID+'">' + pBODY + '</div>';
	}	
	var summary = imgtag + '';
	div.innerHTML = summary;

	var x = document.getElementById("post-body-" +pID).innerText;
	var y = (x).substr(0,7);
	document.getElementById("post-body-" +pID).innerHTML = y;

	var divTitle = document.getElementById("titlePost" +pID).offsetWidth;
	
	var attVFixe = '132';
	
	if(divTitle > attVFixe){

	document.getElementById("ttl" +pID).style.width = '230px';
	document.getElementById("titlePost" +pID).style.width = '132px';

	}

}
//]]>