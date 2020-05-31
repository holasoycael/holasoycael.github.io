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

function createPostBody(pID, pTITLE, pURL, pDATE, pLOCAL){
	var div = document.getElementById(pID);
	var img = div.getElementsByTagName("img");
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');

	var DATEspt = pDATE.split('/');
	var MONTHdate = DATEspt[0];
	if(MONTHdate == 1){ var MONTHdate = "Janeiro" }
	if(MONTHdate == 2){ var MONTHdate = "Fevereiro" }
	if(MONTHdate == 3){ var MONTHdate = "Março" }
	if(MONTHdate == 4){ var MONTHdate = "Abril" }
	if(MONTHdate == 5){ var MONTHdate = "Maio" }
	if(MONTHdate == 6){ var MONTHdate = "Junho" }
	if(MONTHdate == 7){ var MONTHdate = "Julho" }
	if(MONTHdate == 8){ var MONTHdate = "Agosto" }
	if(MONTHdate == 9){ var MONTHdate = "Setembro" }
	if(MONTHdate == 10){ var MONTHdate = "Outubro" }
	if(MONTHdate == 11){ var MONTHdate = "Novembro" }
	if(MONTHdate == 12){ var MONTHdate = "Dezembro" }

	var nDATE = DATEspt[1]+ ' de ' +MONTHdate+ ' de ' +DATEspt[2];

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

	if((p.length == 1) || (p.length == 2) || (p.length > 8)){ var pricePost = 'ERRO 400, OPS!'; }
	if(p.length == 3){ var pricePost = BR + aa + "," + ab; }
	if(p.length == 4){ var pricePost = BR + ba + "," + bb; }
	if(p.length == 5){ var pricePost = BR + ca + "," + cb; }
	if(p.length == 6){ var pricePost = BR + da + "." + db + "," + dc; }
	if(p.length == 7){ var pricePost = BR + ea + "." + eb + "," + ec; }
	if(p.length == 8){ var pricePost = BR + fa + "." + fb + "," + fc; }
	if(p.length == 0){ var pricePost = 'EMPTY!'; }

	var POSTtext = div.innerHTML;
	var POSTrepl = POSTtext.replace(/<[^>]*>?/gm, '');
	var POSTneaw = POSTrepl.replace(/(?:\r\n|\r|\n)/g, '');
	var FUNCpram = 'createPostBody("' +pID+ '","' +pTITLE+ '","' +pURL+ '","' +pDATE+ '","' +pLOCAL+ '");'
	var POSTsubs = POSTneaw.substring(0, POSTneaw.length-FUNCpram.length);
	var POSTcode = POSTsubs.replace(/(?:\]\[)/g, ']\n[');
	var CODEdemo = POSTcode.replace('[demo', '[class="demo"');
	var CODEdemo = CODEdemo.replace('[pre]', '<pre>');
	var CODEdemo = CODEdemo.replace('[/pre]', '</pre>');
	var CODEdemo = CODEdemo.replace('[buy', '[class="buy"');
	var CODEdemo = CODEdemo.replace('[zip', '[class="zip"');
	var CODEdemo = CODEdemo.replace('[baixar', '[class="baixar"');
	var CODEdemo = CODEdemo.replace(/(?:\[changelog)/g, '[class="changelog"');
	var CODEdemo = CODEdemo.replace(/(?:\"])/g, '"></CAEL>');
	var CODEdemo = CODEdemo.replace(/(?:\[responsive])/g, '<responsive></responsive>');
	var CODEdemo = CODEdemo.replace(/(?:\[error])/g, '<error></error>');
	var CODEdemo = CODEdemo.replace(/(?:\[pagenavi])/g, '<pagenavi></pagenavi>');
	var CODEdemo = CODEdemo.replace(/(?:\[cookies])/g, '<cookies></cookies>');
	var CODEdemo = CODEdemo.replace(/(?:\[ads])/g, '<ads></ads>');
	var CODEdemo = CODEdemo.replace(/(?:\[fav])/g, '<fav></fav>');
	var CODEdemo = CODEdemo.replace(/(?:\[comments])/g, '<comments></comments>');
	var CODEdemo = CODEdemo.replace(/(?:\[seo])/g, '<seo></seo>');
	var CODEdemo = CODEdemo.replace(/(?:\[post])/g, '<post></post>');
	var CODEdemo = CODEdemo.replace(/(?:\[class=")/g, '<CAEL class="');

	var doc = new DOMParser().parseFromString(CODEdemo, 'text/html');
	var DESCpost = doc.body.querySelector('pre').innerText;
	var URLfree = doc.body.querySelector('.baixar').getAttribute('url');
	var LIVEtemplate = doc.body.querySelector('.demo').getAttribute('url');
	var CHECKOUTbtn = doc.body.querySelector('.buy').getAttribute('url');
	var ITEMdeatails = doc.body.querySelector('.zip').getAttribute('update');

	var ITEMupdate = doc.body.querySelector('.zip').getAttribute('update').replace(/(-)/gi,'/');
	var ITEMcreate = doc.body.querySelector('.zip').getAttribute('created').replace(/(-)/gi,'/');
	var ITEMlayout = doc.body.querySelector('.zip').getAttribute('layout').replace('responsivo','Responsivo');

	if(doc.body.querySelector('responsive') > -1 ? false : true == true){
	var CODErespon = '<li><strong>Responsivo</strong>: 100% funcionando em todos os dispositivos móveis e tablets.</li>';}
	else{CODErespon = '';}
	if(doc.body.querySelector('error') > -1 ? false : true == true){
	var CODEerror = '<li><strong>Página 404</strong>: conteúdo costumizado para páginas não encontradas.</li>';}
	else{CODErespon = '';}
	if(doc.body.querySelector('pagenavi') > -1 ? false : true == true){
	var PAGEnavi = '<li><strong>Pagenavi</strong>: plug-in para navegação númeradas das postagens.</li>';}
	else{PAGEnavi = '';}
	if(doc.body.querySelector('cookies') > -1 ? false : true == true){
	var COOKies = '<li><strong>Notificação do uso de Cookies</strong>: ponto notificando o uso de cookies segundo as leis da união europeia em ordem do alerta aos visitantes da UE sobre os cookies usados e os dados coletados em sua página.</li>';}
	else{COOKies = '';}
	if(doc.body.querySelector('post') > -1 ? false : true == true){
	var CONpost = '<li><strong>Postagens por comandos</strong>: o conteúdo da postagem é inserido por comandos de texto específicos dentro da edição de postagem.</li>';}
	else{CONpost = '';}
	if(doc.body.querySelector('comments') > -1 ? false : true == true){
	var COMMents = '<li><strong>Múltiplo sistema de comentários</strong>: não apenas para Blogger, mas também o sistema de comentários do Facebook e Disqus com opção de escolher quais usar.</li>';}
	else{COMMents = '';}
	if(doc.body.querySelector('seo') > -1 ? false : true == true){
	var SEOmeta = '<li><strong>SEO Otimizado</strong>: resultados de buscadores prontos.</li>';}
	else{SEOmeta = '';}
	if(doc.body.querySelector('ads') > -1 ? false : true == true){
	var ADSspot = '<li><strong>Espaço de anúncios prontos</strong>: tenha locais específicos de anúncios para otimizar sua receita.</li>';}
	else{ADSspot = '';}
	if(doc.body.querySelector('fav') > -1 ? false : true == true){
	var FAVOrite = '<li><strong>Lista de favoritos</strong>: crie lista personalizada das postagens públicadas no dominio.</li>';}
	else{ADSspot = '';}

	var SHAREpage = '<div class="SHAREpage"><h3>Compartilhe essa página</h3><li class="btnFacebook"><a class="SOCIALurl" data-height="500" data-url="https://www.facebook.com/sharer.php?u=' +pURL+ '" data-width="550" rel="nofollow">Facebook</a></li><li class="btnTwitter"><a class="SOCIALurl" data-height="460" data-url="https://twitter.com/intent/tweet?url=' +pURL+ '&text=' +pTITLE+ '&via=bracael" data-width="550" rel="nofollow">Twitter</a></li><li class="btnWhatsapp"><a alt="Compartilhar no WhatsApp" data-action="share/whatsapp/share" href="whatsapp://send?text=' +pTITLE+ '%20' +pURL+ '" title="Compartilhar no WhatsApp">WhatsApp</a></div>';

	var FEATURESthis = '<div class="FEATURESthis"><h4>Recursos inclusos</h4><ul>' +PAGEnavi+COOKies+CODEerror+CODErespon+CONpost+COMMents+SEOmeta+ADSspot+FAVOrite+ '</ul></div>';
	var CHANGElog = '<div class="CHANGElog"><h3>Changelog</h3><blockquote class="tr_bq">- v1.0.0 – ' +nDATE+ '\n<b>lançamento inicial</b></blockquote></div>'

	summary = '<div class="POSTcontent"><div class="POSTleft"><div class="LEFTinst"><div class="POSTdoor"><img src="'+img[0].src+'"></div><div class="TOOLSpost"><div class="ACTIONpost">' +SHAREpage+ '<div class="LIVEspot"><a class="btn LIVEtemplate" href="' +LIVEtemplate+ '" target="_blank"><i class="SEEit"></i><span>Visualizar tema</span></a></div></div></div><div class="INFORMATIONpage"><div class="DESCpost"><h3>Nossa opinião sobre o ' +pTITLE+ '</h3><p>' +DESCpost+ '</p></div>' +FEATURESthis+CHANGElog+ '</div></div></div><div class="POSTright"><div class="PURCHASEbox"><div class="PURCHASEinst"><h4><span class="LICENSEtxt">Premium</span><a target="_blank" href="#"><i class="CIRCLEhelp"></i></a><span class="PREMIUMval">' +pricePost+ '</span></h4><div class="CHECKOUTwrap"><li>Atualização do template</li><li>Nenhum script criptografado</li><li>3 Meses de suporte</li><li>Para domínios ilimitados</li><li>Remover créditos</li><span class="CHECKOUTbtn"><a href="' +CHECKOUTbtn+ '" rel="nofollow" class="btn CHECKout"><i class="CARTit"></i><span>Comprar</span></a></span></div></div></div><div class="FILEtools"><div class="ITEMdeatails"><li><strong>Atualização:</strong><i> ' +ITEMupdate+ '</i></li><li><strong>Criado:</strong><i> ' +ITEMcreate+ '</i></li><li><strong>Layout:</strong><i> ' +ITEMlayout+ '</i></li></li><li><strong>Tipo de Arquivo:</strong><i> Arquivo ZIP</i></li></div><div class="FREEdownload"><li><a class="URLfree" href="' +URLfree+ '"><div class="btn-download-left"></div><div class="btn-download-right"><span class="btn-download-right-main">Baixar Grátis</span> <span class="btn-download-right-secondary">versão de avaliação</span></div></a></li><li class="SECURITYitem">Verificado com <b>Antivírus</b></li></div></div></div></div></div></div>';
	div.innerHTML = summary;

for(var r = 0; r < 2; r++){
	var SOCIALurl = document.querySelectorAll('.SOCIALurl');
	SOCIALurl[r].addEventListener('click', function(){
		var DATAurl = this.getAttribute('data-url').replace(/(?: )/g, '%20');
		var DATAwid = this.getAttribute('data-width');
		var DATAhei = this.getAttribute('data-height');

		var WINDOWleft = (screen.width/2)-(DATAwid/2);
		var WINDOWtop = (screen.height/2)-(DATAhei/2);
		return window.open(DATAurl, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+DATAwid+', height='+DATAhei+', top='+WINDOWtop+', left='+WINDOWleft);
	});
}

for(var i = 0, c = 101; i < doc.body.querySelectorAll('.changelog').length; i++, c++){
	var STRnum = String(c).split('');
	var CHANGElog = doc.body.querySelectorAll('.changelog');
	var SPLITattr = CHANGElog[i].getAttribute('data').split('-');

	if(CHANGElog[i].getAttribute('before') > -1 ? false : true == true){
	var SPLITfixe = CHANGElog[i].getAttribute('before');
	var SPLITfixe = '<b>Retificado</b>: '+SPLITfixe+ '\n';}
	else{var SPLITfixe = '';}

	if(CHANGElog[i].getAttribute('after') > -1 ? false : true == true){
	var SPLITadde = CHANGElog[i].getAttribute('after');
	var SPLITline = SPLITadde.replace(/(\+ )/g, '\n<b>Novo</b>: ');
	var SPLITline = SPLITline.replace(/(\ \n)/g, '\n');
	var SPLITadde = '<b>Novo</b>: ' +SPLITline+ '\n';
	}else{var SPLITadde = '';}

	var MONTHlog = SPLITattr[1];

	if(MONTHlog == 1){ var MONTHlog = "Janeiro" }
	if(MONTHlog == 2){ var MONTHlog = "Fevereiro" }
	if(MONTHlog == 3){ var MONTHlog = "Março" }
	if(MONTHlog == 4){ var MONTHlog = "Abril" }
	if(MONTHlog == 5){ var MONTHlog = "Maio" }
	if(MONTHlog == 6){ var MONTHlog = "Junho" }
	if(MONTHlog == 7){ var MONTHlog = "Julho" }
	if(MONTHlog == 8){ var MONTHlog = "Agosto" }
	if(MONTHlog == 9){ var MONTHlog = "Setembro" }
	if(MONTHlog == 10){ var MONTHlog = "Outubro" }
	if(MONTHlog == 11){ var MONTHlog = "Novembro" }
	if(MONTHlog == 12){ var MONTHlog = "Dezembro" }

	var nDATE = SPLITattr[0]+ ' de ' +MONTHlog+ ' de ' +SPLITattr[2];
	var REGlog = '- v' +STRnum[0]+'.'+STRnum[2]+'.'+STRnum[1]+ ' - ' +nDATE+ '\n' +SPLITfixe+SPLITadde+ '\n';

	div.querySelector('.tr_bq').insertAdjacentHTML('afterbegin', REGlog)
}}

//]]>
