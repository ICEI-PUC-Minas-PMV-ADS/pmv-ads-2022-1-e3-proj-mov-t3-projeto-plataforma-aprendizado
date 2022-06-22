# Plano de Testes de Software

|     Casos de Teste    | 		CT-01 Cadastro do usuário		|
|-----------------------|-----------------------------------------------|
|**Requisitos Associados:**|  RF-01 "O aplicativo deverá permitir o a autenticação de usuários por meio de senha e identificação pessoal"|
|**Entrada:**|Cadastro: Após preencher o email, senha, telefone. Login: Após preencher o email e senha.|
|**Objetivo dos Teste:**|Permitir que o usuário acesse a plataforma através do login e cadastro, identificando assim o seu perfil "Aluno" ou "Professor"|
|**Passos:**| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Clicar no botão Cadastre-se 4) Preencher os campos com informações validas 5) Clicar no botão Cadastrar.|
|**Critérios de Êxito:**| "Cadastro concluido :) seja muito bem vindo".|

|     Casos de Teste    | 		CT-02 Login do usuário		|
|-----------------------|-----------------------------------------|
|**Requisitos Associados:**| RF-01 "O aplicativo deverá permitir o a autenticação de usuários por meio de senha e identificação pessoal"|
|**Entrada:**|Login: Após preencher o email e senha.|
|**Objetivo dos Teste:**|Permitir que o usuário acesse a plataforma através do login.|
|**Passos:**| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Clicar no botão no canto superior de login 4) Preencher os campos com informações validas 5) Clicar no botão Logar.|
|**Critérios de Êxito:**|O usuário sera direcionado a homepage e tera acesso ao seu menu.|

|     Casos de Teste    | 		CT-03 Alterar Senha			|
|----------------|------------------------------------------------------|
|**Requisitos Associados:**|    RF-11 O site deve conter um formulário que permita o usuário criar uma nova senha em caso de esquecimento.
|**Entrada:**|Após clicar no botão esqueci senha, o usuário deverá informar o email cadastrado.|
|**Objetivo dos Teste:**|Permite o usuário trocar a senha tanto em caso de esquecimento quanto de necessidade
|**Passos:**|1) Acessar o Navegador  2) Informar o endereço do Site  3) Visualizar a página de login  4)Esqueci senha 5) Informar o email, onde será enviado um link para a nova senha 11) Insira uma nova senha no campo [senha] e no campo [confirme sua senha] redigite a senha e clique no botão próximo que levará para a próxima tela|
|**Critérios de Êxito:**| Senha alterada com sucesso e mudança no BD|

|     Casos de Teste    | 		CT-04 Tela Principal			|
|-----------------------|-----------------------------------------------|
|Requisitos Associados:|RF-02 O aplicativo deve apresentar uma página inicial as opções "Sou Aluno" e "Sou Professor".|
|**Entrada:**|Acessar a tela incial|
|**Objetivo dos Teste:**|Disponibilizar o acesso do usuário.|
|**Passos:**|1) Acessar o Navegador  2) Informar o endereço do Site 3) Acessar a HomePage|
|**Critérios de Êxito:**|Permitir todas as funcionalidades acima.|

|     Casos de Teste    | 		CT-05 Redirecionamento do itens do Menu  |
|-----------------------|----------------------------------------------------|
|**Requisitos Associados:**|    RF-03 O aplicativo deverá permitir a exibição de notificações em um menu especial em sua barra de tarefa.|
|**Entrada:**|Clicar nos Buttons do Navbar|
|**Objetivo dos Teste:**|Verificar se os links do navbar estão redirecionando para as devidas telas.|
|**Passos:**|1) Acessar o Navegador  2) Informar o endereço do Site 3) Acessar a HomePage|
|**Critérios de Êxito:**| Clicar no Logo e ser direcionado a "HomePage", clicar nas notificações e ser redirecionado a devida tela, clicar em perfil e ser direcionado ao perfil pessoal.|


|     Casos de Teste    | 		CT-06 Avaliação				|
|-----------------------|-----------------------------------------------|
|**Requisitos Associados:**| RF-10 O aplicativo terá formulário de avaliação para professores e alunos.|
|**Entrada:**| Ao finalizar uma conversa ou contratação de serviço, será enviado um questionario de avaliação do processo|
|**Objetivo dos Teste:**| Acompanhar feedback e possíveis melhorias no app|
|**Critérios de Êxito:**| Todos os campos do formulário serem preenchidos e enviados corretamente.|

|     Casos de Teste    | 		CT-07 Editar Perfil			|
|-----------------------|-----------------------------------------------|
|**Requisitos Associados:**|RF-09 O aplicativo deverá permitir completar e editar o perfil de cadastro, incluindo imagens.|
|**Entrada:**|Controle do perfil pessoal|
|**Objetivo dos Teste:**|Permitir a edição do perfil do professor e aluno, podendo assim alterar fotos, descrição...etc|
|**Critérios de Êxito:**|odos as funcionalidades acima estarem funcionando corretamente.|

                                                                        
