LOC.actions = LOC.actions || {};
LOC.actions.news = new function(){
console.log('news');
	this.click = function(){
		$('.button-news').css('background-color', 'gray');
		LOC.ui.activeAction = LOC.actions.news; // botão ativo
	//	console.log('LOC.actions.news');
		LOC.actions.news.newss();
		
		};

	this.data = {
		'id': 'id-button-news',
		'click': 'LOC.actions.news.click()',
		'name':'NOTICIAS'
	};

	this.newss = function(){
		LOC.ui.options['news'] = true;
		$('#id-button-news').css('background-color', 'gray');
		}

}
LOC.ui.registerAction(LOC.actions.news);



