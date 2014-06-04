/**
 * ...
 * @author ...
 */

LOC.ui =  new function() {
	
	this.activeAction = {};
	this.currentFilter = '';
	this.options = {
		'filmes': false,
		'noticias':false,
		'promocoes':false,
		'alocadora':false,
		'contato':false
	};
	this.init = function(){
		console.log('init LOC.ui');
		$('#id-button-films').on('click', LOC.ui.films);
		$('#id-button-news').on('click', LOC.ui.news);
		$('#id-button-promotions').on('click', LOC.ui.promotions);
		$('#id-button-info').on('click', LOC.ui.info);
		$('#id-button-contact').on('click', LOC.ui.contact);
		$('#id-button-search').on('click', LOC.ui.dbRequest);
	};
	
	this.registerAction = function(button){
		
		var buttonName = button.data.id;
		//console.log(buttonName);
		$('#id-menu-actions').html($('#id-menu-actions').html() +
			'<div class="button_film" id=' +button.data.id +' onclick=' + button.data.click +'>'
			+ '<p>'+button.data.name+'</p>'
			+ '</div>'
		);
	}

	this.films = function(){
		LOC.ui.options['filmes'] = true;
		$('#id-button-films').css('background-color', 'gray');
		$('#id-search-films').show();
		$('#id-button-search').show();
		
		var searchFilters = ''; // variavel com os filtros de pesquisa de acordo com cada ação
	//		console.log(LOC.ui.activeAction);
		for(var i in LOC.ui.activeAction.data.searchFilters){
			//console.log(LOC.ui.activeAction.data.searchFilters[i]);
			searchFilters +=  '<input type="radio" value=' + LOC.ui.activeAction.data.searchFilters[i] + ' name="allfilters" id="id-' + LOC.ui.activeAction.data.searchFilters[i] + '" onclick="LOC.ui.changeFilter(this)">'
				+ '<label for="id-' + LOC.ui.activeAction.data.searchFilters[i] + '">' + LOC.ui.activeAction.data.searchFilters[i] +'</label>';
		
}
		
		//console.log(searchFilter);
		
		$('#id-check-button').html(searchFilters);
		
		$( "input" ).on( "click", function() {
			$('input[type="radio"').each(function(){
				$(this).checked = false;  
			});
			
		});	
	}
		
	this.changeFilter = function(e){
		LOC.ui.currentFilter = e.value;
	};
	
	this.dbRequest = function(){
		var send = { 
			'table':LOC.ui.activeAction.data.name, 
			'filter':LOC.ui.currentFilter,
			'string':$("input:text[name=string]").val()
		};
				
		$.ajax({
			type:  'post',
			cache:  false ,
			url:  'search.php',
			data:  {result:JSON.stringify(send)},
			success: function(resp) {
				alert(resp);
			} 
		});
	}
		
	this.news = function(){
		LOC.ui.options['news'] = true;
		$('#id-button-news').css('background-color', 'gray');
		//$('#id-search-news').show();
		}
		
		
	this.promotions = function(){
		LOC.ui.options['promotions'] = true;
		$('#id-button-promotions').css('background-color', 'gray');
		//$('#id-search-promotions').show();
		}
		
		
	this.info= function(){
		LOC.ui.options['alocadora'] = true;
		$('#id-button-info').css('background-color', 'gray');
		//$('#id-search-films').show();
		}
		
		
	this.contact = function(){
		LOC.ui.options['contact'] = true;
		$('#id-button-contact').css('background-color', 'gray');
		//$('#id-search-films').show();
		}

};