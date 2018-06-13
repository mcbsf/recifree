Feature: As a membro do coletivo Recifree
		 I want to ter acesso aos formulários enviados pelas pessoas interessadas em participar do coletivo
		 So that eu possa analisar as informações e assim selecionar novos membros

Scenario: Salvar formulários em um arquivo externo
Given o sistema tem "2" formulários cadastrados na lista de formulários
When eu tento "baixar" todos os formulários da lista de formulários
Then o sistema gera um arquivo contendo as informações dos "2" formulários cadastrados na lista de formulários
Then o arquivo gerado é baixado localmente
Then uma mensagem de confirmação é retornada

Scenario: Salvar formulários em um arquivo externo (GUI)
Given eu estou na página "Formulários"
Given eu vejo um formulário com email "alicesiq@hotmail.com" na lista de formulários
Given eu vejo um formulário com email "alain@jc.com.br" na lista de formulários
Given eu vejo as opções "Baixar todos" e "Baixar selecionados"
When eu seleciono a opção "Baixar todos"
Then é gerado um arquivo de nome "formularios.xls" com as informações dos formulários de email "alicesiq@hotmail.com" e "alain@jc.com.br"
Then o arquivo "formularios.xls" é baixado localmente
Then eu vejo uma mensagem de confirmação para "Formulários baixados com sucesso"

Scenario: Remover formulários
Given o sistema tem "2" formulários cadastrados na lista de formulários
Given o sistema tem formulário cadastrado com email "alicesiq@hotmail.com"
When eu seleciono o formulário com email "alicesiq@hotmail.com" na lista de formulários
When eu tento "remover" os formulários selecionados
Then o sistema remove o formulário com email "alicesiq@hotmail.com"
Then o sistema tem "1" formulários cadastrados na lista de formulários
Then o sistema não tem mais o formulário com email "alicesiq@hotmail.com" na lista de formulários
Then uma mensagem de confirmação é retornada

Scenario: Remover formulários (GUI)
Given eu estou na página "Formulários"
Given o sistema tem "2" formulários cadastrados na lista de formulários
Given eu vejo um formulário com email "alicesiq@hotmail.com"
Given eu vejo as opções "Remover todos" e "Remover selecionados"
When eu seleciono o formulário com email "alicesiq@hotmail.com" na lista de formulários
When eu seleciono a opção "Remover selecionados"
Then eu vejo uma mensagem de confirmação para "Formulários removidos com sucesso"
Then eu vejo "1" formulários cadastrados na lista de formulários
Then eu não vejo mais o formulário com email "alicesiq@hotmail.com" na lista de formulários
