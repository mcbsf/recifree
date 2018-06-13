Feature: Como um usuário
	 Eu Quero criar comentários
	 Para poder manter discussões no site

Scenario: adcionar um comentário
Given eu estou na página da notícia "título da noticia"
When eu seleciono a opçao "comentar"
And eu preencho o campo "comentário" com "novo cometário"
And eu seleciono a opção "Submeter_comentario"
Then eu vejo o comentário "novo comentário" na página da notícia "título da notícia"

Scenario: remover um comentário
Given eu estou na página do álbum "nome do álbum"
And eu vejo o comentário "algum comentário"
When eu seleciono a opção "Remover_Comentario" do comentário "algum comentário"
Then eu não vejo o coméntário "algum comentário" no álbum "nomew do álbum"

Scenario: editar um comentário
Given eu estou na pagina do tópico "tópico x" do forum
And eu vejo o comentário "algum comentário"
When eu seleciono a opção "editar_comentario" de "algum comentário"
And eu modifico o comentário "algum comentário" para "algum novo comentário"
Then eu vejo o comentário "algum novo comentário" na pagina do tópico "tópico x" do forum

Scenário: adcionar comentário vazio (controlador)
Given o sistema não tem nenhum comentário
When eu tento adcionar o comentário ""
Then o sistema não armazena nenhum comentáro