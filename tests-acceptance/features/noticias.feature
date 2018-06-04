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

Scenario: fazer noticia com sucesso Controller
Given o sistema nao tem uma noticia com titulo "primeiro titulo" armazenado
When tento criar uma noticia com titulo "primeiro titulo"
Then tem uma noticia com titulo "primeiro titulo" armazenado

Scenario: fazer noticia sem estar logado como administrador GUI
Given Estou na pagina inicial
And nao tem o nome "Administrador" na tela
When vou para a pagina de noticias
And vou para a pagina de criar noticias
Then consigo ver uma mensagem de erro
And vou para a pagina de

Scenario: criar noticia sem sucesso com titulo duplicado GUI
Given vou para a pagina de noticias
And consigo ver o titulo “primeiro titulo” na lista de noticias
When vou para a pagina de criacao de noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And tento criar a noticia
Then recebo uma mensagem “titulo ja existente”

Scenario: criar noticia sem sucesso com titulo duplicado Controller
Given o sistema tem uma noticia com titulo "primeiro titulo" armazenado
When tento criar uma noticia com titulo "primeiro titulo"
Then tem uma noticia com titulo "primeiro titulo" armazenado

