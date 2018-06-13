Feature: Como um usu�rio
	 Eu Quero criar coment�rios
	 Para poder manter discuss�es no site

Scenario: adcionar um coment�rio
Given eu estou na p�gina da not�cia "t�tulo da noticia"
When eu seleciono a op�ao "comentar"
And eu preencho o campo "coment�rio" com "novo comet�rio"
And eu seleciono a op��o "Submeter_comentario"
Then eu vejo o coment�rio "novo coment�rio" na p�gina da not�cia "t�tulo da not�cia"

Scenario: remover um coment�rio
Given eu estou na p�gina do �lbum "nome do �lbum"
And eu vejo o coment�rio "algum coment�rio"
When eu seleciono a op��o "Remover_Comentario" do coment�rio "algum coment�rio"
Then eu n�o vejo o com�nt�rio "algum coment�rio" no �lbum "nomew do �lbum"

Scenario: editar um coment�rio
Given eu estou na pagina do t�pico "t�pico x" do forum
And eu vejo o coment�rio "algum coment�rio"
When eu seleciono a op��o "editar_comentario" de "algum coment�rio"
And eu modifico o coment�rio "algum coment�rio" para "algum novo coment�rio"
Then eu vejo o coment�rio "algum novo coment�rio" na pagina do t�pico "t�pico x" do forum

Scen�rio: adcionar coment�rio vazio (controlador)
Given o sistema n�o tem nenhum coment�rio
When eu tento adcionar o coment�rio ""
Then o sistema n�o armazena nenhum coment�ro