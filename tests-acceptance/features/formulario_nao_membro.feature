Feature: As a pessoa interessada em fazer parte do coletivo Recifree
		 I want to preencher e enviar minhas informações por meio de um formulário
		 So that eu possa informar meu interesse em participar do coletivo e assim ser selecionado

Scenario: Preenchimento mal sucedido pela ausência de dados obrigatórios
Given o sistema não tem formulário cadastrado com nome "Alain de Castro"
When eu tento cadastrar um formulário com nome "Alain de Castro"
When idade "34"
When telefone "(81) 8864-2730"
When email "alain@jc.com.br"
When ocupação "Jornalista"
When pergunta1 "Há alguns meses venho pesquisando sobre Redução de Danos e encontrei o coletivo recentemente nesse processo"
When pergunta2 "Gostaria de me engajar e participar das discussões e atividades do coletivo. Penso que seria o ideal para que eu possa produzir conteúdo de qualidade pautado na questão da Redução de Danos"
When pergunta3 "Um rascunho com o resumo de minhas pesquisas pode ser lido aqui: https://goo.gl/cvXPJS"
Then o sistema não salva o formulário
Then uma mensagem de erro é retornada

Scenario: Preenchimento mal sucedido pela ausência de dados obrigatórios (GUI)
Given eu estou na página "Formulários"
When eu preencho os campos nome "Alain de Castro"
When idade "34"
When telefone "(81) 8864-2730"
When email "alain@jc.com.br"
When ocupação "Jornalista"
When pergunta1 "Há alguns meses venho pesquisando sobre Redução de Danos e encontrei o coletivo recentemente nesse processo"
When pergunta2 "Gostaria de me engajar e participar das discussões e atividades do coletivo. Penso que seria o ideal para que eu possa produzir conteúdo de qualidade pautado na questão da Redução de Danos"
When pergunta3 "Um rascunho com o resumo de minhas pesquisas pode ser lido aqui: https://goo.gl/cvXPJS"
When eu seleciono a opção "Enviar"
Then eu vejo uma mensagem de erro para "dados não informados"

Scenario: Enviar formulário com email já cadastrado
Given o sistema tem formulário cadastrado com email "alicesiq@hotmail.com"
When eu tento cadastrar um formulário com nome "Alice Siqueira"
When idade "25"
When telefone "(81) 98622-1334"
When email "alicesiq@hotmail.com"
When ocupação "Designer"
When endereço "Rua da Hora, número 65, bairro do Espinheiro, Recife"
When pergunta1 "Achei interessante ter essa iniciativa no Estado"
When pergunta2 "Desejo contribuir para a divulgação da causa"
When pergunta3 "Pouco conhecimento"
Then o sistema salva as informações no formulário cadastrado com email "alicesiq@hotmail.com"
Then uma mensagem de confirmação de reenvio é retornada 

Scenario: Enviar formulário com email já cadastrado (GUI)
Given eu estou na página "Formulários"
Given existe formulário com email "alicesiq@hotmail.com" na lista de formulários
When eu preencho o campo nome "Alice Siqueira"
When idade "25"
When telefone "(81) 98622-1334"
When email "alicesiq@hotmail.com"
When ocupação "Designer"
When endereço "Rua da Hora, número 65, bairro do Espinheiro, Recife"
When pergunta1 "Achei interessante ter essa iniciativa no Estado"
When pergunta2 "Desejo contribuir para a divulgação da causa"
When pergunta3 "Pouco conhecimento"
When eu seleciono a opção "Enviar"
Then eu vejo uma mensagem de confirmação para "Formulário reenviado com sucesso" 
Then o formulário com email "alicesiq@hotmail.com" na lista de formulários contem as novas informações passadas
