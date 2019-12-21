//<![CDATA[
function identityComment(cmmIMG){

	var div = document.getElementById(cmmIMG);
	var imgtag = "";
	var img = div.getElementsByTagName("img");

	if(img.length>=0) {	
      imgtag = '<div class="avatar-image-container avatar-stock" id="identity'+cmmIMG+'"></div>';
	}	
	var summary = imgtag + '';
	div.innerHTML = summary;

  var random= Math.floor(Math.random() * 11) + 0;
  var bigSize = ["0px 0px",
                 "0px -37px",
                 "0px -74px",
                 "0px -111px",
                 "0px -148px",
                 "0px -185px",
                 "0px -222px",
                 "0px -259px",
                 "0px -297px",
                 "0px -333px",
                 "0px -370px"];
  document.getElementById("identity"+cmmIMG).style.backgroundPosition=bigSize[random];

}
//]]>
