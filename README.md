# STAR_WARS_API

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="exemplo-image.png" alt="exemplo imagem">

> Linha adicional de texto informativo sobre o que o projeto faz. Sua introdução deve ter cerca de 2 ou 3 linhas. Não exagere, as pessoas não vão ler.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Estrutura do projeto
- [x] Integração com banco de dados
- [x] Crud com Graphql
- [ ] Crud via rest
- [ ] Crud com gRPC


## ☕ Techs usadas
* Docker
* Postegres
* Prisma
* Typescript
* Graphql


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de ` nodejs / yarn ou npm `
* Você ter  ` docker ou postgres `


## 🚀 Usando starwars-api

Para rodar a api, siga estas etapas:

suba o banco de dados com esse comando

```bash
sudo docker run --name some-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=starwars -p 5432:5432 -d postgres
```

certifique de ter a variável de ambiente criada

```
#.env
DATABASE_URL=postgresql://docker:docker@localhost:5432/starwars
```
instale as dependencias do projeto

```
yarn
```
ou
```
npm install
```

lembre de rodar as migrações do banco de dados

```
npx prisma migrate dev
```

estamos quase lá, rode o comando

```
yarn dev
```

## 📫 Contribuindo para starwars-api
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com starwars-api, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin https://github.com/Andreffelipe/starwars-api.git/main`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Andreffelipe">
        <img src="https://avatars.githubusercontent.com/u/51796413?v=4" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>André Filipe</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 😄 Seja um dos contribuidores<br>

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#STAR_WARS_API)<br>
