//<![CDATA[

function POSTbox(pID, pURL, pTITLE, pLOCAL, pLABEL, pDATE){
	var div = document.getElementById(pID);
	var img = div.getElementsByTagName("img");
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');
	var priceOut = p.length;
	
	var nDATA = pDATE.split(' ');
	var POSTdata = nDATA[0];
	var POSTtime = nDATA[1];
	var DATAsplt = POSTtime.split(':');
	var DATAhour = DATAsplt[0];
	var DATAmini = DATAsplt[1];
	var POSTampm = nDATA[2];
	var pDATE = POSTdata + ' ÀS ' + DATAhour + ':' + DATAmini + ' ' +POSTampm;

	// MOEDA
	var BR = "R$ ";

	//3 DIGITOS NA MOEDA
	var aa = p.substring(0, 1);
	var ab = p.substring(1);

	//4 DIGITOS NA MOEDA
	var ba = p.substring(0, 2);
	var bb = p.substring(2);

	//5 DIGITOS NA MOEDA
	var ca = p.substring(0, 3);
	var cb = p.substring(3);

	//6 DIGITOS NA MOEDA
	var da = p.substring(0, 1);
	var db = p.substring(1, 4);
	var dc = p.substring(4);

	//7 DIGITOS NA MOEDA
	var ea = p.substring(0, 2);
	var eb = p.substring(2, 5);
	var ec = p.substring(5);

	//8 DIGITOS NA MOEDA
	var fa = p.substring(0, 3);
	var fb = p.substring(3, 6);
	var fc = p.substring(6);

	if((priceOut == 1) || (priceOut == 2) || (priceOut > 8)){ var pricePost = 'ERRO 400, OPS!'; }
	if(priceOut == 3){ var pricePost = BR + aa + "," + ab; }
	if(priceOut == 4){ var pricePost = BR + ba + "," + bb; }
	if(priceOut == 5){ var pricePost = BR + ca + "," + cb; }
	if(priceOut == 6){ var pricePost = BR + da + "." + db + "," + dc; }
	if(priceOut == 7){ var pricePost = BR + ea + "." + eb + "," + ec; }
	if(priceOut == 8){ var pricePost = BR + fa + "." + fb + "," + fc; }
	if(priceOut == 0){ var pricePost = 'EMPTY!'; }

	if(img.length>=1){
	summary = '<section class="POSTup '+pLOCAL+'"><img src="'+img[0].src+'"></img></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pricePost+'</div><div class="POSTbtn"><li><a class="BTNlive" href="#" target="_blank">Demo</a></li><li><a class="BTNinfo" href="#">Info</a></li></div></div></div></section>';
	} else { summary = '<span class="msgFailure idPost-'+pID+'">Esta publicação é um fracasso.<p>'+pID+'</p></span>'; }
	div.innerHTML = summary;
}

function createPostBody(pID, pTITLE, pDATE, pLABEL){
	var div = document.getElementById(pID);

	var ma = div.innerHTML.substring(div.innerHTML.indexOf("[watch]")+7,div.innerHTML.indexOf("[/watch]"));
	var mb = div.innerHTML.substring(div.innerHTML.indexOf("[url]")+5,div.innerHTML.indexOf("[/url]"));
	var mc = div.innerHTML.substring(div.innerHTML.indexOf("[demo]")+6,div.innerHTML.indexOf("[/demo]"));
	var md = div.innerHTML.substring(div.innerHTML.indexOf("[pre]")+5,div.innerHTML.indexOf("[/pre]"));
	var me = div.innerHTML.substring(div.innerHTML.indexOf("[buy]")+5,div.innerHTML.indexOf("[/buy]"));
	var mf = div.innerHTML.substring(div.innerHTML.indexOf("[responsive]")+12,div.innerHTML.indexOf("[/responsive]"));
	var mg = div.innerHTML.substring(div.innerHTML.indexOf("[404page]")+9,div.innerHTML.indexOf("[/404page]"));

	var youtu_be = "https://youtu.be/" + ma;

	var content = div.innerHTML;
	var xa = content.indexOf("[watch]") > -1 ? true : false;
	var xb = content.indexOf("[/watch]") > -1 ? true : false;
	var xc = content.indexOf("[url]") > -1 ? true : false;
	var xd = content.indexOf("[/url]") > -1 ? true : false;
	var xe = content.indexOf("[demo]") > -1 ? true : false;
	var xf = content.indexOf("[/demo]") > -1 ? true : false;
	var xg = content.indexOf("[pre]") > -1 ? true : false;
	var xh = content.indexOf("[/pre]") > -1 ? true : false;
	var xi = content.indexOf("[buy]") > -1 ? true : false;
	var xj = content.indexOf("[/buy]") > -1 ? true : false;
	var xk = content.indexOf("[responsive]") > -1 ? true : false;
	var xl = content.indexOf("[/responsive]") > -1 ? true : false;
	var xm = content.indexOf("[404page]") > -1 ? true : false;
	var xn = content.indexOf("[/404page]") > -1 ? true : false;

	if(xa == true){ ua = ''; } else { var ua = '<li><p>Chave invalida:</p><p>[whatch]</p></li>'; }
	if(xb == true){ ub = ''; } else { var ub = '<li><p>Chave invalida:</p><p>[/whatch]</p></li>'; }
	if(xc == true){ uc = ''; } else { var uc = '<li><p>Chave invalida:</p><p>[url]</p></li>'; }
	if(xd == true){ ud = ''; } else { var ud = '<li><p>Chave invalida:</p><p>[/url]</p></li>'; }
	if(xe == true){ ue = ''; } else { var ue = '<li><p>Chave invalida:</p><p>[demo]</p></li>'; }
	if(xf == true){ uf = ''; } else { var uf = '<li><p>Chave invalida:</p><p>[/demo]</p></li>'; }
	if(xg == true){ ug = ''; } else { var ug = '<li><p>Chave invalida:</p><p>[pre]</p></li>'; }
	if(xh == true){ uh = ''; } else { var uh = '<li><p>Chave invalida:</p><p>[/pre]</p></li>'; }
	if(xi == true){ ui = ''; } else { var ui = '<li><p>Chave invalida:</p><p>[buy]</p></li>'; }
	if(xj == true){ uj = ''; } else { var uj = '<li><p>Chave invalida:</p><p>[/buy]</p></li>'; }
	if(xk == true){ uk = ''; } else { var uk = '<li><p>Chave invalida:</p><p>[responsive]</p></li>'; }
	if(xl == true){ ul = ''; } else { var ul = '<li><p>Chave invalida:</p><p>[/responsive]</p></li>'; }
	if(xm == true){ um = ''; } else { var um = '<li><p>Chave invalida:</p><p>[404page]</p></li>'; }
	if(xn == true){ un = ''; } else { var un = '<li><p>Chave invalida:</p><p>[/404page]</p></li>'; }

	var locationHref = window.location.href;
	var homeUrl = window.location.origin;

	if((xa == true) && (xb == true) && (xc == true) && (xd == true) && (xe == true) && (xf == true) && (xg == true) && (xh == true) && (xi == true) && (xj == true) && (xk == true) && (xl == true) && (xm == true) && (xn == true)){
	summary = '<a href="'+youtu_be+'" target="_blank"><div class="watchYT" style="background-image: url(https://i.ytimg.com/vi/'+ma+'/maxresdefault.jpg)"><div class="buttonYT"><path class="playIcon"></path></div><p></p></div></a><div class="postContet"><div class="aContent"><ul><li><a href="'+mc+'" class="buttonFree" target="_blank"></a></li><li><a href="'+mb+'" class="buttonDown" target="_blank"></a></li></ul></div><div class="bContent"><ul><div class="postTitle"><h4>'+pTITLE+'<p>U$ 9.99</p></h4><strong>'+pDATE+'</strong></div><span>'+md+'</span></ul></div><div class="cContent"><div class="buyContent"><span>COMPRE PREMIUM</span><p>recomendado</p></div></div><div class="dContent"><ul class="owl-carousel"><li class="item templateFree"><h4>Free</h4><div class="contentWhy"><ol><li class="itWhat">Updates to Followers</li><li class="itWhat">Follower Lucky Draw</li></ol><span class="in_stock"><a href="/freetemplate" rel="nofollow" class="btn freeButton"><i class="info"></i>Read More</a></span></div></li><li class="item templatePaid"><h4>Premium</h4><div class="contentWhy"><ol><li class="itWhat">Life Time Update</li><li class="itWhat">No Encrypted Scripts</li><li class="itWhat">3 Months Support Service</li><li class="itWhat">For Unlimited Domains</li><li class="itWhat">Remove Credit Spot</li></ol><span class="in_stock"><a href="'+me+'" rel="nofollow" class="btn checkoutButton"><i class="cart"></i><span>Comprar</span></a></span></div></li></ul></div><div class="eContent"><h4>Features</h4><ul><li class="'+mf+'"><strong>A lot of article boxes</strong>: slider, ticker, carousel, grid, columns, blog roll, ….</li><li class="'+mg+'"><strong>Customizer</strong>: change colors, background, fonts and other stuff easily with simple clicks. You can also upload your custom font</li></ul></div></div>';
	} else { summary = '<div class="msgFailure idPost-'+pID+'"><h4>ERRO 400, OPS!</h4><ul><h5>Descrição</h5><li><p class="report">Os comandos estão digitados de maneira incorreta, por favor, verifique as palavras no texto da postagem.</p></li><h5>Relatorio de erros</h5>' + ua + ub + uc + ud + ue + uf + ug + uh + ui + uj + uk + ul + um + un + '<h5>Informações adicionais</h5><li><p class="item"><b>Caminho:</b> ' + locationHref + '</p></li><li><p class="item"><b>ID do Post:</b> ' + pID + '</p></li><li><p class="item"><b>Data do Post:</b> ' + pTITLE + '</p></li><li><p class="item"><b>Data do Post:</b> ' + pDATE + '</p></li><li><p class="item"><b>Categorias:</b> ' + pLABEL + '</p></li><li><p class="item"><b>Autor do Post:</b> N. Lourenço</p></li></ul><a class="homeUrl" href="' + homeUrl + '">Página inicial</a></div>'; }
	div.innerHTML = summary;
}

//]]>
