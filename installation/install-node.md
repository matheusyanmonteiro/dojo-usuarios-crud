# Instalação do Node.js 20 no Ubuntu (sem nvm)

Este guia mostra como instalar o **Node.js 20** no **Ubuntu** diretamente, sem utilizar o `nvm`.

## Passo 1: Atualizar o Sistema

Antes de começar, é uma boa prática atualizar o sistema para garantir que você tenha as versões mais recentes dos pacotes:

```bash
sudo apt update
sudo apt upgrade -y
```

## Passo 2: Adicionar o Repositório Oficial do Node.js

O **NodeSource** fornece pacotes binários oficiais para várias versões do Node.js. Para instalar o Node.js 20, você precisará adicionar o repositório oficial da versão desejada.

Execute o seguinte comando para adicionar o repositório de Node.js 20 ao seu sistema:

bash

Copiar código

`curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -`

Este comando faz o download e executa o script de configuração do repositório, que prepara o Ubuntu para instalar o Node.js 20.

## Passo 3: Instalar o Node.js

Agora que o repositório foi adicionado, você pode instalar o Node.js 20 com o seguinte comando:

bash

Copiar código

`sudo apt install -y nodejs`

Esse comando instalará o **Node.js** e o **npm** (Node Package Manager) automaticamente, pois o `npm` vem junto com o Node.js.

## Passo 4: Verificar a Instalação

Após a instalação, você pode verificar se o Node.js foi instalado corretamente, verificando a versão do Node.js e do npm com os seguintes comandos:

bash

Copiar código

`node -v npm -v`

Isso deve retornar a versão do Node.js (v20.x) e a versão do npm instalada.

## Passo 5: (Opcional) Instalar Dependências de Build

Em alguns casos, você pode precisar das dependências de build para compilar alguns pacotes nativos do Node.js, como o `node-gyp`. Para instalá-las, execute:

bash

Copiar código

`sudo apt install -y build-essential`


---

### Explicação:

1. **Passo 1**: Atualiza o sistema para garantir que todos os pacotes estão atualizados antes de proceder.
2. **Passo 2**: Usa o script oficial do NodeSource para configurar o repositório do Node.js 20.
3. **Passo 3**: Instala o Node.js a partir do repositório adicionado.
4. **Passo 4**: Verifica a instalação, garantindo que o Node.js e o npm estão instalados corretamente.
5. **Passo 5**: Fornece uma opção para instalar dependências de compilação, útil para pacotes nativos.

Esse processo usa o repositório oficial do Node.js e não requer o uso do `nvm`, conforme solicitado. 
