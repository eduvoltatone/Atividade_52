# NestJS Base Project

Este é um projeto base em NestJS com autenticação JWT, RBAC, Prisma, Docker e Swagger, pronto para ser adaptado para qualquer tema de prova.

## Estrutura do Projeto

```
src/
  app.module.ts
  main.ts
  config/
    swagger.config.ts
  prisma/
    prisma.module.ts
    prisma.service.ts
  auth/
    auth.module.ts
    auth.service.ts
    auth.controller.ts
    dto/
      login.dto.ts
      register.dto.ts
    strategies/
      jwt.strategy.ts
    guards/
      jwt-auth.guard.ts
      roles.guard.ts
    decorators/
      roles.decorator.ts
  users/
    users.module.ts
    users.service.ts
    users.controller.ts
    dto/
      create-user.dto.ts
      update-user.dto.ts
    entities/
      user.entity.ts
prisma/
  schema.prisma
Dockerfile
docker-compose.yml
.env.example
```

## Como Adaptar para Outro Tema

Para adaptar o projeto para outro tema (ex: "Aluno", "Produto", etc), siga estes passos:

### 1. Model/Entidade no Prisma
- **Arquivo:** `prisma/schema.prisma`
- **O que fazer:**  
  - Troque o nome do model `User` para o novo nome (ex: `Aluno`).
  - Altere os campos conforme o novo tema (ex: `matricula`, `curso`, etc).
  - Atualize o enum `Role` se precisar de outros papéis.

**Exemplo:**
```prisma
model Aluno {
  id        String   @id @default(cuid())
  email     String   @unique
  nome      String
  senha     String
  curso     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 2. DTOs, Services, Controllers e Entities
- **Pastas:**  
  - `src/users/` (ou renomeie para o novo tema, ex: `src/alunos/`)
  - `src/auth/dto/` (se o registro/login mudar)
- **O que fazer:**  
  - Troque o nome das classes, arquivos e variáveis de `User` para o novo nome.
  - Altere os campos dos DTOs, services, controllers e entities para refletir o novo tema.
  - Atualize as descrições e exemplos do Swagger (`@ApiProperty`).

**Exemplo:**
- `CreateUserDto` → `CreateAlunoDto`
- `users.service.ts` → `alunos.service.ts`
- `UserEntity` → `AlunoEntity`
- Campos: `name` → `nome`, `password` → `senha`, etc.

### 3. Guards, Decorators e Roles
- **Pastas:**  
  - `src/auth/guards/`
  - `src/auth/decorators/`
- **O que fazer:**  
  - Se precisar de outros papéis além de `USER` e `ADMIN`, altere o enum `Role` no Prisma e nos arquivos que usam esse enum.

### 4. Swagger e Documentação
- **Arquivo:** `src/config/swagger.config.ts`
- **O que fazer:**  
  - Altere o título, descrição e tags para refletir o novo tema.

### 5. Ajuste de Rotas
- **Arquivo:** `users.controller.ts` (ou o controller do novo tema)
- **O que fazer:**  
  - Altere o prefixo das rotas se quiser (ex: de `/users` para `/alunos`).

### 6. Atualize o Banco de Dados
- Após alterar o `schema.prisma`, rode:
  ```
  npx prisma migrate dev --name ajuste-tema
  npx prisma generate
  ```

## Como Rodar o Projeto

1. Instale as dependências:
   ```
   npm install
   ```

2. Suba o banco de dados:
   ```
   docker-compose up -d db
   ```

3. Inicialize o Prisma:
   ```
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. Rode a aplicação:
   ```
   npm run start:dev
   ```

5. Acesse a documentação Swagger em:  
   [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

## Resumo
- Sempre que mudar o tema, pense:  
  - **Model:** Nome e campos
  - **DTOs/Services/Controllers:** Nome das classes, arquivos, variáveis e campos
  - **Enums:** Papéis/roles se necessário
  - **Swagger:** Descrições e exemplos
  - **Rotas:** Prefixos e nomes

</rewritten_file> 
