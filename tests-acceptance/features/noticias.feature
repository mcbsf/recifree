Feature: Como membro do recifree
         Eu quero fazer noticias
		 Para poder alimentar o site

Scenario: fazer noticia com sucesso GUI
Given estou na pagina de noticias
When vou para a pagina de criar noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And salvo a noticia
Then consigo ver o valor "primeiro titulo" na lista de noticias

Scenario: fazer noticia com sucesso Controller
Given o sistema nao tem uma noticia com titulo "primeiro titulo" armazenado
When tento criar uma noticia com titulo "primeiro titulo"
Then tem apenas uma noticia com titulo "primeiro titulo" armazenado

Scenario: criar noticia sem sucesso com titulo duplicado GUI
Given estou na pagina de noticias
And consigo ver o valor "primeiro titulo" na lista de noticias
When vou para a pagina de criar noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And salvo a noticia
Then recebo uma mensagem “titulo ja existente”

Scenario: criar noticia sem sucesso com titulo duplicado Controller
Given o sistema tem uma noticia com titulo "primeiro titulo" armazenado
When tento criar uma noticia com titulo "primeiro titulo"
Then tem apenas uma noticia com titulo "primeiro titulo" armazenado

Scenario: criar noticia sem sucesso com titulo vazio GUI
Given estou na pagina de noticias
When vou para a pagina de criar noticias
And preencho o campo "titulo_noticia" com valor ""
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And salvo a noticia
Then recebo uma mensagem “titulo vazio”

Scenario: criar noticia sem sucesso com titulo vazio Controller
Given o sistema nao tem noticia armazenada
When tento criar uma noticia com titulo ""
Then o sistema nao tem noticia armazenada

Scenario: visualizar noticia GUI
Given estou na pagina de noticias
And consigo ver o valor "primeiro titulo" na lista de noticias
When abro a noticia
Then consigo ver o valor "primeiro titulo" na lista de noticias


