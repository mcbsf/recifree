Feature: Como membro do recifree
         Eu quero fazer noticias
		 Para poder alimentar o site

Scenario: fazer noticia com sucesso GUI
Given Estou na pagina inicial
And tem o nome "Administrador" na tela
When vou para a pagina de noticias
And vou para a pagina de criar noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And salvo a noticia
Then consigo ver o valor "primeiro titulo" na lista de noticias

Scenario: fazer noticia sem estar logado como administrador GUI
Given Estou na pagina inicial
And nao tem o nome "Administrador" na tela
When vou para a pagina de noticias
And vou para a pagina de criar noticias
Then consigo ver uma mensagem de erro
And vou para a pagina de

