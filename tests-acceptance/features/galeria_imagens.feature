Feature: Como Administrador
	 Eu quero criar e editar albuns de imagens
	 Para poder divulgar informação aos outros usuários

Scenario: Criar um album novo
Given Eu estou na página "Galeria de imagens"
When Eu seleciono a opção "Criar Álbum novo"
When Eu preencho o campo "Nome" com "Nome de Álbum"
When Eu preencho o campo "Descrição" com "Descrição do Álbum"
When Eu seleciono "Criar Álbum"
Then Eu vejo o álbum "Nome de Álbum" na página "Galeria de imagens"

Scenario: Adicionar uma foto a um álbum
Given Eu estou na página do álbum "Nome de Álbum"
When Eu seleciono a opção "Adicionar foto"
When Preencho o campo "Nova Foto" com a foto "Foto.jpg"
When Preencho o campo "título" com "Título da Foto"
When Preencho o campo "Descrição" com "Descrição da Foto"
Then Posso visualizar a foto "Foto.jpg" com título "Título da Foto" e descrição "Descrição da FOto" no álbum "Nome de Álbum"


Scenario: Apagar imagem de um álbum
Given Eu estou na página do álbum "Nome de Álbum"
When Eu vejo foto "Foto.jpg" no álbum "Nome de Álbum"
When Eu seleciono o botão "Editar foto" abaixo da imagem
When Eu seleciono a opção "Deletar imagem" na nova janela
Then Eu não vejo a imagem "Foto.jpg" no álbum "Nome de Álbum"

Scenario: Criar um álbum novo
Given Sistema não tem nenhum álbum com nome "Nome de Álbum"
When Eu tento criar o álbum "Nome de álbum"
Then O Sistema armazena "Nome de Álbum"