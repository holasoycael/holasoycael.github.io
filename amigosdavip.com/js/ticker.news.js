// folha.ticker.collection carregado
( function ( collection, news ) {
	var total = collection.length ,
		i ;

	// transfere a coleção nova para o formato antigo
	for ( i = 0; i < total; i++ ) {
		news.push([
			collection[ i ][1] , // título da notícia primeiro
			collection[ i ][0] , // url depois
			"" // vazio
		]) ;
	}
	news.push([]); // insere um último array vazio

} ( folha.ticker.collection, news )) ;