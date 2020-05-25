//<![CDATA[

function POSTbox(pID, pURL, pTITLE, pLOCAL, pLABEL, pDATE){
	var div = document.getElementById(pID);
	var img = div.getElementsByTagName("img");
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');
	var priceOut = p.length;
	
	var nDATA = pDATE.split(' ');
	var POSTdata = nDATA[0];
	var nYEAR = POSTdata.split('/');
	var nDIA_ = nYEAR[1]
	var nMES_ = nYEAR[0]
	var nANO_ = nYEAR[2]
	var POSTdata = nDIA_ + '/' + nMES_ + '/' + nANO_;
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
	summary = '<section class="POSTup '+pLOCAL+'"><div class="POSTimg"><img class="THUMBnail" src="'+img[0].src+'"></img></div><div class="POSTspot"><i class="BTNfav" rel="'+pID+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pricePost+'</div><div class="POSTbtn"><li><a class="BTNlive" href="#" target="_blank">Demo</a></li><li><a class="BTNinfo" href="#">Info</a></li></div></div></div></section>';
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

	summary = '<div class="POSTcontent"><div class="POSTleft"><div class="LEFTinst"><div class="POSTimg"><img src="https://4.bp.blogspot.com/-sFt6m4qFkA0/Xr_Gi8W4JHI/AAAAAAAAG50/8iQa42-JL3cSGPWPsApS2H8vtMm4wJflgCLcBGAsYHQ/s1600/cat-ba.png"></div><div class="TOOLSpost"><div class="ACTIONpost"><div class="SHAREpage"><h3>Compartilhe essa página</h3><li class="item btnFacebook"><a href="https://www.facebook.com/share.php?v=4amp;src=bmamp;u=https://www.elainegaspareto.com/2018/11/criar-newsletter-para-o-blog.htmlamp;t=Newsletter para o blog: o que é, os erros que cometemos e qual sua finalidade" onclick="window.open(this.href,&quot;sharer&quot;,&quot;toolbar=0,status=0,width=626,height=436&quot;); return false;" rel="nofollow" target="_blank" title="Compartilhe no Facebook">Facebook</a></li><li class="item btnTwitter"><a href="https://twitter.com/intent/tweet?text=Newsletter para o blog: o que é, os erros que cometemos e qual sua finalidadeamp;url=https://www.elainegaspareto.com/2018/11/criar-newsletter-para-o-blog.html" target="_blank" title="Compartilhe no Twitter">Twitter</a></li><li class="item btnWhatsapp"><a alt="Compartilhar no WhatsApp" data-action="share/whatsapp/share" href="whatsapp://send?text=Newsletter para o blog: o que é, os erros que cometemos e qual sua finalidade-https://www.elainegaspareto.com/2018/11/criar-newsletter-para-o-blog.html" title="Compartilhar no WhatsApp">WhatsApp</a></li></div><div class="FAVORITEthis"><a href="#" rel="nofollow" class="btn FREEbtn"><i class="cart"></i><span>Salvar nos favoritos</span></a></div></div></div><div class="INFORMATIONpage"><div class="DESCpost"><h3>Nossa opinião sobre o Smart Game Booster 4</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="FEATURESthis"><h4>Recursos inclusos</h4><ul><li class="true"><strong>A lot of article boxes</strong>: slider, ticker, carousel, grid, columns, blog roll, ….</li><li class="true"><strong>Customizer</strong>: change colors, background, fonts and other stuff easily with simple clicks. You can also upload your custom font</li></ul></div><div class="CHANGElog"><h3>Changelog</h3><blockquote class="tr_bq">- v1.6.0 – 12 May 2020<BR /><b>Fixed:</b> The image plug-in was unable to get the first image of the post in some cases.<BR /><BR />- v1.5.0 – 8 May 2020<BR /><b>Fixed:</b> Featured Image was not displayed in some posts after the blogger latest updates.<BR /><b>Added:</b> Support for external images.<BR /><b>Added:</b> YouTube videos embedded in posts are now responsive.<BR /><BR />- v1.4.0 – 22 March 2020 <BR /><b>Fixed:</b> Breadcrumb error for posts with special characters in the title.<BR /><BR />- v1.3.0 – 20 March 2020<BR /><b>Fixed:</b> Images appear stretched on mobile devices.<BR /><BR />- v1.2.0 – 17 March 2020<BR /><b>Added:</b> No Encrypted Scripts (Premium).<BR /><BR />- v1.1.0 – 1 December 2019<BR /><b>Fixed:</b> MegaMenu Links on Mobile Menu Not Working.<BR /><BR />- v1.0.0 – 6 July 2019<BR /><b>Initial Release</b></blockquote></div></div></div></div><div class="POSTright"><div class="PURCHASEbox"><div class="PURCHASEinst"><h4><span class="LICENSEtxt">Premium</span><a target="_blank" href="#"><i class="CIRCLEhelp"></i></a><span class="PREMIUMval">R$ 59,90</span></h4><div class="contentWhy"><li class="itWhat">Atualização do template</li><li class="itWhat">Nenhum script criptografado</li><li class="itWhat">3 Meses de suporte</li><li class="itWhat">Para domínios ilimitados</li><li class="itWhat">Remover créditos</li><span class="in_stock"><a href="#" rel="nofollow" class="btn checkoutButton"><i class="cart"></i><span>Comprar</span></a></span></div></div></div><div class="FILEtools"><div class="ITEMdeatails"><li><strong>Atualização:</strong><i> 12/05/2020</i></li><li><strong>Criado:</strong><i> 12/05/2019</i></li><li><strong>Layout:</strong><i> Responsivo</i></li></li><li><strong>Tipo de Arquivo:</strong><i> Arquivo ZIP</i></li></div><div class="FREEdownload"><li><a class="URLfree" href="https://www.templateify.com/search/label/Ads%20Ready?max-results=9"><div class="btn-download-left"></div><div class="btn-download-right"><span class="btn-download-right-main">Baixar Grátis</span> <span class="btn-download-right-secondary">versão de avaliação</span></div></a></li><li class="SECURITYitem">Verificado com <b>Antivírus</b></li></div></div><div class="GOOGLEtrend"><h2 class="HEADERtitle">Interesse ao longo do tempo</h2><div class="TRENDbox"><iframe id="trends-widget-1" title="trends-widget-1" src="https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22Smart%20Game%20Booster%204%22%2C%22geo%22%3A%22BR%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=180&amp;eq=geo%3DBR%26q%3DSmart%20Game%20Booster%204%26date%3Dtoday%2012-m" width="100%" frameborder="0" scrolling="0" style="border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 2px 2px 0px; height: 301px;"></iframe></div></div></div></div>';

	div.innerHTML = summary;
}

//]]>
