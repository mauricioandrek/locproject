
LOC.actions = LOC.actions || {};

LOC.actions.film = new function(){
	
	this.click = function(){
		LOC.ui.activeAction = LOC.actions.film; // botão ativo
		console.log('LOC.actions.film');
		LOC.actions.film.films();
		
		};
	
	this.data = {
		'id': 'id-button-film',
		'click': 'LOC.actions.film.click()',
		'searchFilters':['Nome','Ano','Genero','Diretor'],
		'name':'FILMES'
	};
	this.films = function(){
		LOC.ui.options['filmes'] = true;
		$('#id-button-films').css('background-color', 'gray');
		$('#id-search-films').show();
		$('#id-button-search').show();
		
		var searchFilters = ''; // variavel com os filtros de pesquisa de acordo com cada ação
			//console.log(LOC.ui.activeAction);
		for(var i in LOC.ui.activeAction.data.searchFilters){
	//		console.log(LOC.ui.activeAction.data.searchFilters[i]);
			searchFilters +=  '<input type="radio" value=' + LOC.ui.activeAction.data.searchFilters[i] + ' name="allfilters" id="id-' + LOC.ui.activeAction.data.searchFilters[i] + '" onclick="LOC.ui.changeFilter(this)">'
				+ '<label for="id-' + LOC.ui.activeAction.data.searchFilters[i] + '">' + LOC.ui.activeAction.data.searchFilters[i] +'</label>';
		
}
		
		//console.log(searchFilters);
		
		$('#id-check-button').html(searchFilters);
		
		$( "input" ).on( "click", function() {
			$('input[type="radio"').each(function(){
				$(this).checked = false;  
			});
			
		});	
	
	
	
	};
};
LOC.ui.registerAction(LOC.actions.film);