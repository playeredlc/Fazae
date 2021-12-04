<h1 align="center">
	Faz<i>ae</i>
</h1>

<div align="center">

<strong>
Não sabe exatamente quanto vai precisar gastar para realizar aquela viagem com a família ou amigos? Se preocupe com o que importa e deixe que o <i>Fazae</i> faça as estimativas para você.
</strong><br>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/playeredlc/Fazae/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed3047a4-e327-4685-b052-fe860d1f83fc/deploy-status)](https://fazae.netlify.app/)

Acesse: [fazae.netlify.app/](https://fazae.netlify.app/)

[Sobre](#about)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[Tecnologias](#tecnologias)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[Executando](#executando-localmente)

</div>

## Sobre
Fazae é uma aplicação para simulação e planejamento de viagens. Através de uma interface simples o usuário fornece alguns dados a respeito da sua viagem e recebe uma estimativa de quanto irá gastar com transporte, acomodação, alimentação e outros aspectos similares. Esta aplicação foi desenvolvida para evitar cálculos repetitivos ao tentar escolher o melhor formato de viagem.

Este projeto foi desenvolvido na forma de um Monorepo que contém no mesmo repositório tanto o back-end quanto o front-end, utilizando o yarn workspaces para gerenciar as dependências de cada aplicação. Uma implementação de projeto organizada dessa forma me proporcionou alguns desafios extras ao fazer o deploy em plataformas separadas e ao realizar o gerenciamento das dependências de cada uma das aplicações.

## Tecnologias

### Back-end
* [Nodejs](https://nodejs.org/en/) with [Express](https://expressjs.com/)
* [Mapbox API](https://www.mapbox.com/), para obter informações otimizadas sobre determinadas rotas.

### Front-end
* [React JS](https://reactjs.org/)
* [Material UI](https://mui.com/)
* [Mapbox Geocoder](https://docs.mapbox.com/api/search/geocoding/)
* [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup), para formulários e validação.

### Deployment
* [Heroku](https://devcenter.heroku.com/), para o back-end.
* [Netlify](https://www.netlify.com/), para o front-end.

## Executando localmente
#### Pré-requisitos
Para rodar essa aplicação localmente é necessário ter instalado o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Nodejs](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/getting-started/install).

#### Variáveis de ambiente
É também necessário criar um Access Token do Mapbox e configurá-lo no arquivo <i>.env</i>, no mesmo formato aplicado no arquivo arquivo <i>.env.example</i>.

```bash
# clone o repositório do projeto
$ git clone https://github.com/playeredlc/Fazae/

# instale as dependências do projeto utilizando o yarn
$ yarn install

# iniciando o back-end (na raíz do projeto)
$ node packages/server/server.js
# ou
$ cd packages/server
$ node server.js

# iniciando o front-end (na raíz do projeto)
$ cd packages/web-client
$ yarn start

# o back-end atenderá requisiçoes na porta 3000 do seu localhost
# o front-end poderá ser encontrado na porta 4000 do seu localhost.
# http://localhost:3000 e # http://localhost:4000
```

<hr>

<strong><i> </> </i></strong> Developed by <strong>edlc</strong>. [Get in touch!](https://github.com/playeredlc) :metal: