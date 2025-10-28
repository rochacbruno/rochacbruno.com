---
tags: ensino,tech
title: Nunca hesite em sacrificar o pedantismo em favor da clareza
---

# Nunca hesite em sacrificar o pedantismo em favor da clareza

Quem me conhece sabe que eu demoro pelo menos 1 hora só para introduzir um tema. Eu já aceitei que sou prolixo, falo bastante, desenvolvo meu discurso durante a apresentação de algumas ideias e isso faz com que as conversas comigo levem tempo e minhas aulas, palestras, podcasts etc. tenham no mínimo 1 hora de duração.

Eu consigo tranquilamente ficar uma, ou até 2 horas, falando apenas sobre uma linha de código. É sério, tem tanta coisa para falar em um simples `print("hello world")` que é quase uma ansiedade insaciável a minha vontade de ficar falando e abordando detalhes a respeito das coisas.

## O formato esperado no discurso de um especialista

Eu sempre gosto de fazer uma autoanálise, uma retrospectiva da minha participação em eventos, podcasts e aulas, e uma coisa que eu tenho percebido, não só na comunidade em geral, mas até mesmo em reuniões de trabalho, é que existe uma expectativa por um certo formato.

Esse formato me parece ser uma expectativa, um ideal que as pessoas têm, uma visão predefinida de quem é especialista em um assunto.

Eu, por estar em uma posição ocupando o título de "Principal Engineer" e algumas vezes "Lead Architect" no trabalho, e na comunidade por estar em uma posição de "Dev experiente" ou "Referência técnica", me parece que existe uma expectativa de que eu siga um determinado formato ao falar sobre tecnologia.

Acontece que eu sou uma pessoa simples, vindo do interior, e que tenho uma certa aversão por comunicação rebuscada. E talvez seja isso que me dá prazer em ser professor, pois remover essa sofisticação é um dos trabalhos em ensinar, transformar o rebuscado em simples.

E eu estou mencionando isso aqui pois acredito que muitas pessoas, ao conversar comigo, esperam um formato específico, o modo de falar de um especialista.

## A língua do especialista

Quero deixar bem claro sobre o que eu estou falando. Estou tentando enfatizar que, mesmo sendo um especialista em desenvolvimento de software, com uma carreira profissional de 25 anos e estando em uma posição de liderança em uma das maiores empresas de tecnologia, eu ainda prefiro, conscientemente, manter meu vocabulário simplificado.

E isso muitas vezes é mal interpretado, dá ao interlocutor uma impressão errada, coloca minha palavra em um lugar de descredibilidade, pois não entrega as respostas no formato esperado.

Vou tentar dar exemplos para deixar mais claro:

**Pergunta:**  
> Qual estratégia pode ser adotada para criar software sustentável?  


**Resposta no formato que é esperado de um especialista:**  
> Os engenheiros podem adotar princípios de código limpo, preferir arquitetura hexagonal, aplicar os conceitos de SOLID com foco na criação de interfaces com baixo acoplamento.  


**Minha resposta:**
>>>
Os desenvolvedores devem seguir padrões bem estabelecidos, mas não vou nomear esses padrões, pois a viabilidade deles vai variar em cada projeto. Não existe uma resposta certa, muitas vezes aplicar o padrão é inviável a depender da prioridade do seu projeto e o time-to-market. 

Portanto, os desenvolvedores devem se apegar inicialmente a abordagens simples, que não causem impacto direto no tempo de entrega, mas que podem ajudar na futura melhoria. Entre essas abordagens está criar código que é autoexplicativo, com comentários concisos, modularizar bem o código, criando muitas funções, cada uma com responsabilidade única. Ao criar essas funções, pensar em suas entradas como contextos genéricos, para que possam facilmente serem substituídas. 

Levar essas práticas para todo o restante do projeto. Ao escrever um pedaço de código, pense se pode deixar aquele código mais fácil de ser substituído e mais fácil de ser deletado. Crie código para ser integrado, refatorado e, principalmente, para ser facilmente excluído. Não se apegue ao código, o código não é a solução.  
>>>

Analisando a minha resposta, já se percebem 2 coisas. Primeiro, **eu evito usar termos rebuscados** e nomenclaturas que não sejam inclusivas. SOLID, por exemplo, é um conceito que eu gosto muito, mas citar SOLID sem contextualizar seria algo que iria me incomodar. Eu sei que às vezes o público-alvo já está familiarizado com o tema, mas eu geralmente me preocupo em me comunicar com a mais ampla diversidade de público.

Outro ponto na **minha resposta é que ela é extensa.** Sim, eu poderia ter resumido tudo isso aí em uma única sigla, mas qual seria o ponto de fazer isso? Eu prefiro acreditar que ler, pensar e refletir não são incômodos e que uma resposta mais extensa será mais valiosa.

Infelizmente, esta característica me coloca em um lugar onde a impressão é que eu seria menos especialista. Quando as pessoas ouvem especialistas, elas esperam ouvir respostas autoritativas, determinísticas e diretas, mesmo que não sejam facilmente entendíveis. 

Se meu discurso tiver SOLID, Clean Code, hexagonal, e eu citar algum autor ou paper, parece que virtualmente amplifica minha especialização. Mas, felizmente, eu não vou aderir a essa pressão e vou continuar preferindo explicar concorrência com a analogia da lanchonete que demora para fazer os lanches e vou continuar minha filosofia de que a única maneira de saber escrever código bom é escrevendo código ruim primeiro.


## O pedantismo

Neste contexto, de dar respostas simplificadas, durante pelo menos os 15 anos que tenho sido ativo no compartilhamento de conteúdo nas comunidades, tenho repetidamente ouvido críticas de figuras que hoje eu chamo de "Pedantes de Software", "Os sabe-tudo", "Fiscal de explicação" ou simplesmente pessoas com um nível muito, mas muito alto de autoconfiança.

Perdi as contas de quantas vezes alguém veio em uma live me dizer algo do tipo: "Ah, mas isso que você está explicando é o conceito SCHABLAU que foi definido pelo Fulano de tal e sua explicação está incompleta ou muito simplificada."

Eu muitas vezes tenho a paciência de responder: sim, eu sei que o nome que dão a isso é SCHABLAU, mas eu preferi usar a minha liberdade e o meu próprio raciocínio para encontrar outra maneira de explicar a mesma coisa, sabe, com minhas palavras.

E eu, no final, quero falar com o pedante, quero que ele seja parte do meu público-alvo, e por isso não subestimo a capacidade dele. Se ele é capaz de saber tantas siglas, livros, autores e conceitos, será que ele não é capaz de ouvir uma explicação diferente e por conta própria fazer a ligação?

Às vezes fico pensando que algumas dessas pessoas, de tanto se acharem tão inteligentes, são na verdade "Inteligentes Funcionais", ou seja, só conseguem receber a mensagem se estiver formatada da maneira como foram preparadas para receber, sem flexibilidade ou espaço para interpretação.

> Não hesite em sacrificar o pedantismo em favor da clareza!

Essa frase original é `Never hesitate to sacrifice truth for clarity` e foi dita pelo Greg Wilson em seu guia de 10 dicas para lecionar (10 Rules for teaching, Teaching Tech Together).

## Liberdade de explicação

O meu ponto aqui é manifestar minha defesa à liberdade de explicação. Eu, pessoalmente, acho lindo quando especialistas explicam as coisas de maneira fácil de entender, mesmo que para isso seja necessário sacrificar alguns pontos ou adicionar um pouco de açúcar.

Eu vou creditar isso à minha adolescência que passei assistindo Telecurso 2000, Mundo de Beakman e lendo a revista Ciência Hoje, que foram meios de divulgação científica com uma abordagem muito simplificada, com foco em analogias do mundo real e contextualização dos problemas.


## Contexto

É claro que tudo tem seu contexto. As pessoas precisam parar de achar que postagem em blog, conversa de podcast, papo de bar etc. é a mesma coisa que livro, artigo científico e defesa de mestrado.

Existem contextos onde faz todo o sentido se adequar a nomenclaturas, referências e pedantismo científico.

Mas a expectativa de que isso seja igual em ambientes mais informais é algo perigoso, algo que mata a criatividade, cria uma comunicação engessada e, além de tudo, é elitista, faz com que o conhecimento seja colocado atrás de uma barreira.

## Conclusão

- Não julgue a experiência e a capacidade das pessoas pelo modo como elas se comunicam
- Sempre leve em consideração o contexto, em ambientes informais não tenha expectativas formais (e vice-versa)
- Seja flexível, leia, interprete, entenda que tudo tem motivação e geralmente a motivação é diferente da sua
- Ao consumir um conteúdo, você não é o centro das atenções, existe um público-alvo bastante diverso
- Não se apegue a siglas, autores, metodologias, tudo isso deveria ser efêmero, aprenda, avalie, recicle
- Não seja o pedante, é chato!

## 10 regras para ensinar

Traduzido de [Teaching Tech Together](https://teachtogether.tech/en/index.html)

* **Seja gentil:** todo o resto são detalhes.

* **Lembre-se de que você não é o seu aluno…**

* **…que a maioria das pessoas prefere falhar a mudar…**

* **…e que 90% da “mágica” está em saber uma coisa a mais que os outros.**

* **Nunca ensine sozinho.**

* **Nunca hesite em sacrificar a ~verdade~ o pedantismo em nome da clareza.**

* **Transforme todo erro em uma lição.**

* **Lembre-se de que nenhuma aula sobrevive ao primeiro contato com os alunos…**

* **…que toda aula é curta demais para quem ensina e longa demais para quem aprende…**

* **…e que ninguém vai se empolgar tanto com a aula quanto você.**
