
var ticker_layer = false ;
var step_time = 25 ;
var freeze_time = 2000 ;
var news_index = 0 ;
var title_index = 0 ;
var end_title = "_" ;
var title_max_size = 62 ; // 62
var pause = false ;
var freeze_timeout_id ;
var step_timeout_id ;
var step_char_length = 1 ;

function prepare(){
	var container_size = 475 ; // 475
	for ( var i = 0 ; i < news.length - 1 ; i++ ){
		var t = news[i][0] ;

		t = t.replace(/\&quot;/gi,'"') ;
		t = t.replace(/\&amp;/gi,'&') ;
		t = t.replace(/\&#039;/gi,'\'') ;

		var dummy = document.createTextNode( t ) ;
		document.getElementById('dummy').appendChild( dummy ) ;
		var size = document.getElementById('dummy').offsetWidth ;

		while( size > container_size ){
			t = t.substring( 0 , t.lastIndexOf( ' ' ) ) ;
			t += '...';
			clear_element( 'dummy' ) ;
			var dummy = document.createTextNode( t ) ;
			document.getElementById('dummy').appendChild( dummy ) ;
			size = document.getElementById('dummy').offsetWidth ;
		}
		clear_element( 'dummy' ) ;
		news[i][0] = t ;
	}
}

function clear_element( name ){
	/* esvaziar dummy */
	if ( document.getElementById( name ) ){
		while ( document.getElementById( name ).lastChild != null ){
			var child = document.getElementById( name ).lastChild ;
			document.getElementById( name ).removeChild( child ) ;
		}
	}
}

function begin_roll_ticker(){
	window.setTimeout( "roll_ticker()" , step_time ) ;
}

function move_next(){
	if ( title_index == 0 ){
		// índice de notícias já está na posição certa, apenas dar play
		freeze_timeout_id = window.setTimeout( "roll_ticker()" , news[title_index][0] ) ;
	}
	else{
		title_index = 0 ;
		next_line(0) ;
	}
}

function move_prev(){
	if ( title_index == 0 ){
		// índice de notícias já foi movido; corrigir
		news_index == 0 ? news_index = news.length - 2 : news_index-- ;
		prev_line(0) ;
	}
	else{
		title_index = 0 ;
		prev_line(0) ;
	}
}

function fill_line(){
	news_index-- ;
	if ( news_index < 0 ){
		news_index = news.length - 2 ;
	}

	step_char_length = news[news_index][0].length - title_index ;
	step_timeout_id = window.setTimeout( "roll_ticker()" , step_time ) ;
}

function t_next( obj ){
	pause = false ;
	freeze_timeout_id = window.clearTimeout( freeze_timeout_id ) ;
	step_timeout_id = window.clearTimeout( step_timeout_id ) ;
	step_timeout_id = window.setTimeout( 'move_next()' , step_time ) ;
}

function t_prev( obj ){
	pause = false ;
	freeze_timeout_id = window.clearTimeout( freeze_timeout_id ) ;
	step_timeout_id = window.clearTimeout( step_timeout_id ) ;
	step_timeout_id = window.setTimeout( 'move_prev()' , step_time ) ;
}

function t_pause( obj ){
	pause = !pause ;
	if ( pause ){
		// limpar timeout se uma notícia já estiver presente
		if ( title_index == 0 && freeze_timeout_id ){
			window.clearTimeout( freeze_timeout_id ) ;
		}
		else{
			news_index >= news.length - 2 ? news_index = 0 : news_index++ ;
			window.clearTimeout( step_timeout_id ) ;
			step_timeout_id = window.setTimeout( "fill_line()" , step_time ) ;
		}
	}
	else{
		if ( title_index == 0 ){
			next_line(0) ;
		}
	}
}

function roll_ticker(){
	prepare() ;

	var title ;
	if ( title_index == 0 ){
		while ( document.getElementById('ticker').lastChild != null ){
			document.getElementById('ticker').removeChild( document.getElementById('ticker').lastChild ) ;
		}
	}

	if ( news[news_index][1].indexOf('/videocasts/') != -1 ){
		document.getElementById('ticon').innerHTML = '<img border="0" src="http://f.i.uol.com.br/folha/multimidia/images/icn-videocast.gif" alt="Videocast" title="Videocast" style="margin-right:5px">' ;
	}
	else if( news[news_index][1].indexOf('/podcasts/') != -1 ){
		document.getElementById('ticon').innerHTML = '<img border="0" src="http://f.i.uol.com.br/folha/multimidia/images/icn-podcast.gif" alt="Podcast" title="Podcast" style="margin-right:5px">' ;
	}
	else{
		document.getElementById('ticon').innerHTML = '' ;
	}

	if ( news[news_index][2] != '' && typeof( news[news_index][2] ) != "undefined" ){
		if( document.getElementById('ticker_anchor').getElementsByTagName('img').length > 0 ){
			document.getElementById('ticker_anchor').removeChild( document.getElementById('ticker_anchor').getElementsByTagName('img')[0] ) ;
		}
		var img = document.createElement( "img" ) ;
		img.setAttribute( 'src' , news[news_index][2] ) ;
		img.setAttribute( 'border' , '0' ) ;
		img.setAttribute( 'alt' , news[news_index][0] ) ;
		document.getElementById('ticker_anchor').appendChild( img ) ;
		document.getElementById('ticker_anchor').getElementsByTagName('img')[0].style.margin = '0 0 -4px 5px' ;
	}

	if ( news[news_index][2] == '' ){
		if ( document.getElementById('ticker_anchor').getElementsByTagName('img').length > 0 ){
			document.getElementById('ticker_anchor').removeChild( document.getElementById('ticker_anchor').getElementsByTagName('img')[0] ) ;
		}
	}

	if ( news_index < news.length + 2 && news[news_index][0].length >= title_index ){
		title = news[ news_index ] ;

		document.getElementById('ticker_anchor').setAttribute( "href" , title[1] ) ;

		if ( news_index == 0 && typeof( ticker_ad ) != "undefined" ){
			document.getElementById('ticker_anchor').setAttribute( "target" , "_blank" ) ;
			document.getElementById('ticker_anchor').style.color = "#0033cc" ;
		}
		else{
			document.getElementById('ticker_anchor').setAttribute( "target" , "_parent" ) ;
			document.getElementById('ticker_anchor').style.color = "#cc3300" ;
		}

		var s_text = title[0].substring( title_index  , title_index + step_char_length ) ;
		title_index += step_char_length ;

		if ( step_char_length > 1 ){
			step_char_length = 1 ;
		}

		if ( document.getElementById('ticker').lastChild != null ){
			if ( document.getElementById('ticker').lastChild.nodeValue == "_" ){
				child = document.getElementById('ticker').lastChild ;
				document.getElementById('ticker').removeChild( child ) ;
			}
		}

		var txt = document.createTextNode( s_text ) ;
		document.getElementById('ticker').appendChild( txt ) ;

		if ( title[0].length > title_index ) {
			if ( title_index % 10 != 0 ){
				txt = document.createTextNode( "" ) ;
				document.getElementById('ticker').appendChild( txt ) ;
			}
		}

		step_timeout_id = window.setTimeout( "roll_ticker()" , step_time ) ;
	}
	else{
		title_index = 0 ;

		if ( !pause ){
			next_line( freeze_time ) ;
		}
	}
}

function next_line( t ){
	news_index >= news.length - 2 ? news_index = 0 : news_index++ ;
	freeze_timeout_id = window.setTimeout( "roll_ticker()" , t ) ;
}

function prev_line( t ){
	news_index == 0 ? news_index = news.length - 2 : news_index-- ;
	freeze_timeout_id = window.setTimeout( "roll_ticker()" , t ) ;
}

//-->