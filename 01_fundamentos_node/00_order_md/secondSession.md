## Segunda sessão

### Visão Geral

Nesta seção, vamos introduzir o **NestJS**, um framework poderoso e extensível para desenvolvimento backend em Node.js que facilita a criação de APIs organizadas e escaláveis. Veremos como configurar o servidor NestJS, explorar a estrutura básica de pastas do projeto e configurar o Jest para testes. Além disso, utilizaremos o **Prisma ORM** como a ferramenta de ORM para interagir com o banco de dados de forma simplificada e eficiente.

---

### Módulo 1: Configuração do Projeto NestJS

1. **Instalação do NestJS**: Para iniciar o projeto, vamos instalar a CLI do NestJS e configurar um novo projeto.
   ```bash
   npm i -g @nestjs/cli
   nest new meu-projeto
   ```
Esse comando cria uma estrutura básica para o projeto com uma configuração inicial pronta para rodar o servidor.

2.Estrutura de Pastas do NestJS:

* src/: Diretório principal onde o código do aplicativo é desenvolvido.
* app.controller.ts: Controlador principal do aplicativo, responsável por lidar com as requisições.
* app.service.ts: Serviço responsável pela lógica de negócios e dados, chamado pelo controlador.
* app.module.ts: Módulo principal que organiza os controladores e provedores do aplicativo.
* test/: Diretório de testes, onde ficam os arquivos de teste para cada unidade do projeto.

3.Executando o Servidor: Após criar o projeto, podemos executar o servidor NestJS com o comando:

```bash
  npm run start
```

O servidor será executado por padrão na porta `http://localhost:3000`. Essa porta pode ser configurada no arquivo `main.ts`.

---

### Módulo 2: Configuração do Prisma ORM

1.Instalação do Prisma: Para integrar o Prisma ao projeto NestJS, precisamos instalar as dependências do Prisma.

```bash 
npm install prisma --save-dev
npm install @prisma/client
```

2.Inicializando o Prisma: Em seguida, inicialize o Prisma e configure o arquivo schema.prisma, onde o modelo do banco de dados será definido.

```bash
npx prisma init
```
Isso criará um arquivo prisma/schema.prisma e um diretório prisma/, onde serão definidas as configurações de conexão e os modelos do banco de dados.

3.Definindo Modelos no Prisma: No arquivo schema.prisma, defina o modelo do banco de dados conforme necessário. Exemplo de um modelo User:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```
4.Aplicando as Migrações: Para refletir as mudanças no banco de dados, crie e aplique migrações com os comandos:

```bash 
npx prisma migrate dev --name init 
```

---

### Módulo 3: Configuração de Testes com Jest
1.Instalando o Jest: O NestJS já vem com Jest configurado, então basta criar arquivos de teste no diretório `test/` ou próximo aos módulos que deseja testar.

* Testes de unidade devem ser colocados em arquivos com a extensão .spec.ts.

2.Estrutura Básica de Testes: Exemplo de um teste básico para um serviço:

```typescript 
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

3.Executando os Testes: Para rodar todos os testes, utilize o comando:
```bash
npm run test

```

---

### Modulo 4: Configurando o CRUD com Prisma no NestJS

1. Gerando um Módulo para o CRUD: Vamos criar um módulo para gerenciar usuários, por exemplo, com o seguinte comando:

``` bash
nest generate module users
nest generate service users
nest generate controller users
```

2. Integrando o Prisma ao Módulo:
 * Dentro do serviço (users.service.ts), importe o Prisma Client e crie métodos para interagir com o banco de dados.
 * Exemplo de criação de um usuário:

 ``` typescript
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }
}
```
3. Configurando o Prisma como um Provedor Global: Crie um serviço PrismaService e configure-o para ser global, permitindo acesso ao Prisma em qualquer módulo.

## Resumo

Nesta seção, configuramos o NestJS, entendemos a estrutura de pastas, configuramos testes com Jest e aprendemos a usar o Prisma ORM para a camada de dados. Essas etapas oferecem uma base sólida para o desenvolvimento de APIs robustas, escaláveis e bem organizadas.