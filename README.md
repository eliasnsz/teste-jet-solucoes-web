
# Teste Técnico Jet Soluções Web
Este é um projeto proposto pela Jet Soluções Web como teste técnico de uma vaga de Desenvolvedor Front-end.

Projeto em produção: [Clique aqui](https://teste-jet-solucoes-web.vercel.app/)

## Descrição
Este projeto se resume em implementar um [design](https://www.figma.com/file/pXIEbENrC64kRCMbvctXnv/Teste-T%C3%A9cnico-Desenvolvedor-Jr.-Front-End?type=design&node-id=0-1&mode=design) responsivo de uma tabela de dados utilizando tecnologias como React, Next.js, Tailwind e Typescript. Apesar de ser um design simples, há várias tomadas de decisões que são de suma importância quando se visa escalabilidade e perfomance do projeto. 
 
## Rodando o projeto

### Pré-requisitos:

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão `18.17` ou superior)
- pnpm, npm  ou yarn (gerenciador de pacotes JavaScript)

## Instalação

Siga as etapas abaixo para instalar e configurar o projeto localmente:

1. Clone o repositório do GitHub:

	``` bash
	git clone https://github.com/eliasnsz/teste-jet-solucoes-web.git
	```

2. Acesse o diretório do projeto:

	```bash
	cd teste-jet-solucoes-web
	```

3. Instale as dependências do projeto:

   Com pnpm:

	```bash
	pnpm install
	```
   Com npm:

	```bash
	npm install
	```
   Com Yarn:

   ``` bash
	yarn install
	```


## Uso

Para rodar o projeto localmente, siga estas etapas:

1. Execute o comando de inicialização:
	Com pnpm:
	 ``` bash
	pnpm dev
	```

   Com npm:

      ``` bash
	npm run dev
	```

   Com Yarn:

      ``` bash
	yarn dev
	```

2. Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.

## Meu trajeto na construção

Foi um projeto interessante de se construir. Apesar de simples, em alguns momentos lidei com tomadas de decisões complicadas, que em um projeto real podem custar a eficiência e a manutenabilidade. Tive que me controlar pra não ter colapsos de **Analysys paralysis**. Mas no fim deu tudo certo e gostei muito do resultado.

### Tabela ou Lista?
No [design](https://www.figma.com/file/pXIEbENrC64kRCMbvctXnv/Teste-T%C3%A9cnico-Desenvolvedor-Jr.-Front-End?type=design&node-id=0-1&mode=design) percebi que o componente renderizado no desktop era uma `Table` e na versão mobile era uma `Lista não ordenada`. As estruturas se diferem consideravelmente. Portanto, optei por criar dois componentes pra facilitar a manutenção e legibilidade do código e evitar complexidade na estilização.

Depois de criar os dois componentes, pensei em como eu faria pra renderizar cada um em seu ambiente correspondente. Optei pelo meio mais simples e usei breakpoints do tailwindcss, chegando a conclusão de que os dois componentes seriam renderizados independente do ambiente, o que mudaria é ele estarem visíveis ou não. Pode parecer um ponto ruim ter dois componentes renderizados sendo que um não é usado, mas o que influenciou minha escolha foi o fato de que uma outra opção seria criar um `client component` e renderizar condicionalmente os componentes, o que aumentaria a quantidade de javascript sendo enviado pro client.

### Composition Pattern
Como requisito, foi solicitado que se usasse composition pattern na construção do projeto. É um pattern que gosto muito, e sempre uso a lib [shadcn-ui](https://ui.shadcn.com/) que aplica muito bem esse pattern. No entanto, nesse projeto resolvi que só usaria tailwindcss na estilização, então usei o pattern pra criar minha própria tabela. Gostei muito do resultado.

### Lighthouse
Também foi avisado que seria levado em conta a nota do projeto no Google Lighthouse. Aconselho que você faça por conta própria, mas fiz previamente e esses foram os resultados.

![google-light-house-result](https://i.imgur.com/px73goc.png)

### Considerações finais
Independente do resultado, gostaria de agradecer pela oportunidade da Jet Soluções Web, representada no processo pelo [Antônio Santos](https://www.linkedin.com/in/antonio-santos-bjpe/),  e espero ansiosamente poder colaborar com a evolução da empresa.
