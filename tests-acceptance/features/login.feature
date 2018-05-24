Feature: Como membro do recifree
         Eu quero fazer login
		 para poder criar noticias e usar o forum

Scenario: fazer login com sucesso GUI
Given Estou na pagina inicial
When vou para a pagina de login
And preencho o login com valor "recifree.rd"
And preencho a senha com valor "rd.reducaodedanos"
Then recebo uma mensagem de confirmacao

Scenario: fazer login sem sucesso GUI
Given Estou na pagina inicial
When vou para a pagina de login
And preencho o login com valor "recifree"
And preencho a senha com valor "rd.reducaodedanos"
Then recebo uma mensagem de erro