# Template

![badge about status](https://img.shields.io/badge/status-on%20progress-blue)
![badge about version](https://img.shields.io/badge/version-1.1-yellow)

> <p> Description </p>

<br>


## How to run it
<section>

**Dev mode** - `npm run dev`

**Run** - `start`

## Setup para db:
<p> crie um .env seguindo o modelo deixado no env-example.env </p>

<p> pode adicionar sua propria url de banco ou rodar um db com o docker compose basta atualizar a url </p>

RUN - `docker compose up`

**pode enviar o schema para seu banco sem criar uma migration**
RUN = `npx prisma db push`

**OU Atualize com as migrations para ter o versionamento do banco**
RUN - `npx prisma migrate dev --name describe_changes_made`

## IMPORTANRE Atualize sempre o PrismaClient sempre que mudar o schema:
RUN - `npx prisma generate`

## Veja mais sobre relacionamentos e multiplicidade no schema do prisma aqui:
[Documentacao](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)

</section>

## Contrubua para o projeto usando commits semanticos:

> ```
> tag: descrição
> ```
>
> A **tag** deve ser o tipo de alteração, seguindo a referencia que estará abaixo com checkbox;\
> E a **descrição** deve ser uma mensagem de commit simples, que abranja todas as alterações dentro do PR;

### Que tipo de alteração esta revisão de código introduz? (Tag)

- [ ] `feat` Nova funcionalidade
- [ ] `fix` Correção de um bug
- [ ] `docs` Atualização de documentação
- [ ] `refact` Alteração no código que não é funcionalidade nova nem correção de bug
- [ ] `perf` Melhoria de performance
- [ ] `test` Adição, alteração ou remoção de testes
- [ ] `build` Alteração no processo de build ou em dependencias externas
- [ ] `ci` Alteração de pipeline ou fluxo de publicação
- [ ] `chore` Outras alterações que não modificam arquivos base ou arquivos de teste
- [ ] `revert` Reversão de commits anteriores

**Exemplo**: `fix/where: message`
