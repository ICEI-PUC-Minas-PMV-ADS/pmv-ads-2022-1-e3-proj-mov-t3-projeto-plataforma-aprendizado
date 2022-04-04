# Especificações do Projeto

Para definir de forma exata o problema e entender melhor as necessidades do público alvo, foram identificados dois perfis de usuários: os professores e os estudantes. Para mostrar de forma clara cada perfil, foram definidos as personas e as histórias de usuário.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem:

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t3-projeto-plataforma-aprendizado/blob/main/src/img/Persona_1_Estudantes.png)

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t3-projeto-plataforma-aprendizado/blob/main/src/img/Persona_2_Estudante.png)

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t3-projeto-plataforma-aprendizado/blob/main/src/img/Professor.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t3-projeto-plataforma-aprendizado/blob/main/src/img/Historias.png)

## Modelagem do Processo de Negócio

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 

![Processo 1](/src/img/Qualidade.jpeg)

## Indicadores de Desempenho

![](/src/img/indicador.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

#### A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA  | 
|RF-002| O aplicativo deve apresentar uma página inicial que contenha indicações de pesquisas de aulas, notificações, menu e informações necessárias para seu uso   | MÉDIA |
|RF-003| O aplicativo deverá permitir a exibição de notificações em um menu especial em sua barra de tarefas.    | MÉDIA |
|RF-004| O aplicativo deverá permitir filtrar por disciplina, habilidades, hobbies e/ou atividades as quais gostariam de ter aulas.   | MÉDIA |
|RF-005| O aplicativo deverá ter uma caixa de entrada para as mensagens recebidas pelo usuário.   | ALTA  |
|RF-006| O aplicativo deverá conter um espaço de chat, onde haja espaço para interação entre professores e alunos.   | MÉDIA |
|RF-007| O aplicativo poderá ordenar a lista de professores exibidos de acordo com critérios de dados disponíveis para o usuário: preço, avaliação, senioridade.   | BAIXA |
|RF-008| O aplicativo deverá ter formulário de cadastro para novo usuário: professores e alunos.    | BAIXA |
|RF-009| O aplicativo deverá permitir completar e editar o perfil de cadastro, incluindo imagens.    | BAIXA |
|RF-010| O aplicativo terá formulário de avaliação para professores e alunos.    | BAIXA |
|RF-011| O site deve conter um formulário que permita o usuário criar uma nova senha em caso de esquecimento   | BAIXA |


### Requisitos não Funcionais

#### A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O aplicativo deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) |  ALTA | 
|RNF-003| O aplicativo deverá ser construído com o critério mobile first, pois seu principal dispositivo ser ao smartphone.  |  ALTA | 
|RNF-004| O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade |  MEDIA | 
|RNF-005| O site deve ser compatível com o sistema operacional Android com maior capilaridade do mercado.  |  ALTA | 

## Restrições

#### As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2022. |
| RE-02 | A equipe não pode subcontratar o desenvolvimento do trabalho. |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

# Matriz de Rastreabilidade

A Matriz de rastreabilidade de requisitos tem como objetivo documentar, testar e codificar os requisitos compreendendo as diferentes interrelações entre eles. Além disso permite adicionar os stakeholders do projeto para compreender a complexidade e como alterar e comunicar alterações posteriores nos softwares

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t3-projeto-plataforma-aprendizado/blob/main/src/img/MatrizdeRastreabilidade.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
