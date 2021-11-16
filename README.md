## STAR WARS API

Bem vindo jovem jedi, pronto para uma jornada.

Deixa eu te mostra o que temos aqui!

Quais techs usadas
* Docker
* Postegres
* Prisma
* Typescript
* Graphql

bacana, como roda a api?

Bela pergunta jovem jedi vamos lá.

suba o banco de dados com esse comando

```bash
sudo docker run --name some-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=starwars -p 5432:5432 -d postgres
```

certifique de ter a variável de ambiente criada

```
#.env
DATABASE_URL=postgresql://docker:docker@localhost:5432/starwars
```

lembre de rodar as migrações do banco de dados

```
npx prisma migrate dev
```

estamos quase lá, rode o comando

```
yarn dev
```

gostei e agora como consumo o seu conteúdo?

ok meu jovem, deixei uma pasta `curl` na raiz do nosso projeto
com alguns consultas, certifique de ter o [plugin](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) instalado no seu vscode


caso queira contribuir seria muito gratificante,
deixe seu link do git aqui no final. Até a proxima.

### JOVENS JEDI


<table>
  <tr>
    <td align="center"><a href="https://github.com/Andreffelipe"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/51796413?v=4" width="100px;" alt=""/><br /><sub><b>André Filipe</b></sub></a><br /><a href="#" title="Rocketseat">👨‍🚀</a></td>
  </tr>
</table>
