Feature: Como Administrador
	 Eu quero criar e editar albuns de imagens
	 Para poder divulgar informa��o aos outros usu�rios

Scenario: Criar um album novo
Given Eu estou na p�gina "Galeria de imagens"
When Eu seleciono a op��o "Criar �lbum novo"
When Eu preencho o campo "Nome" com "Nome de �lbum"
When Eu preencho o campo "Descri��o" com "Descri��o do �lbum"
When Eu seleciono "Criar �lbum"
Then Eu vejo o �lbum "Nome de �lbum" na p�gina "Galeria de imagens"

Scenario: Adicionar uma foto a um �lbum
Given Eu estou na p�gina do �lbum "Nome de �lbum"
When Eu seleciono a op��o "Adicionar foto"
When Preencho o campo "Nova Foto" com a foto "Foto.jpg"
When Preencho o campo "t�tulo" com "T�tulo da Foto"
When Preencho o campo "Descri��o" com "Descri��o da Foto"
Then Posso visualizar a foto "Foto.jpg" com t�tulo "T�tulo da Foto" e descri��o "Descri��o da FOto" no �lbum "Nome de �lbum"


Scenario: Apagar imagem de um �lbum
Given Eu estou na p�gina do �lbum "Nome de �lbum"
When Eu vejo foto "Foto.jpg" no �lbum "Nome de �lbum"
When Eu seleciono o bot�o "Editar foto" abaixo da imagem
When Eu seleciono a op��o "Deletar imagem" na nova janela
Then Eu n�o vejo a imagem "Foto.jpg" no �lbum "Nome de �lbum"

Scenario: Criar um �lbum novo
Given Sistema n�o tem nenhum �lbum com nome "Nome de �lbum"
When Eu tento criar o �lbum "Nome de �lbum"
Then O Sistema armazena "Nome de �lbum"