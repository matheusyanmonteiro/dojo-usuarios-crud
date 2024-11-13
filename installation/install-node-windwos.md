# Instalação do Node.js 20 no Windows

Este guia descreve o processo de instalação do **Node.js 20** no **Windows**, sem a necessidade do `nvm`.

## Passo 1: Baixar o Instalador do Node.js

1. Acesse o site oficial do [Node.js](https://nodejs.org/).
2. Na página inicial, você verá as opções para baixar a versão **LTS** e a versão **Current**.
3. Clique no botão **"Current"** para baixar o instalador da versão **Node.js 20** (que é a versão mais recente).

   - O arquivo de instalação será um **.msi** (Microsoft Installer) para Windows.
   - Certifique-se de baixar a versão compatível com a arquitetura do seu sistema (x64 ou x86).

## Passo 2: Executar o Instalador

1. Após o download, execute o arquivo `.msi` para iniciar o assistente de instalação.
2. Siga as instruções no assistente de instalação:
   - **Aceitar os termos** do contrato de licença.
   - Escolher o diretório de instalação ou deixar o padrão.
   - Durante a instalação, o instalador irá incluir o **npm** (Node Package Manager) automaticamente, que é necessário para gerenciar pacotes no Node.js.
   - Também pode ser útil deixar marcada a opção de adicionar o Node.js ao **PATH**, para que você possa acessar o Node.js e o npm de qualquer lugar no prompt de comando.

## Passo 3: Verificar a Instalação

Após a instalação, é importante verificar se o **Node.js** e o **npm** foram instalados corretamente.

1. Abra o **Prompt de Comando** (ou **PowerShell**) no Windows.
2. Digite o seguinte comando para verificar a versão do **Node.js**:

   ```bash
   node -v 
   ```
Isso deve retornar a versão do Node.js instalada (exemplo: `v20.x.x`).

3. Em seguida, verifique a versão do **npm**:
    
    `npm -v`
      
    Isso deve retornar a versão do npm instalada.

## Passo 4: Atualizar o npm (Opcional)

O npm geralmente vem com a versão mais recente, mas caso precise atualizar o npm para a versão mais recente, use o seguinte comando:

`npm install -g npm`

Esse comando atualiza o npm para a versão mais recente disponível.

Passo 5: (Opcional) Instalar Dependências de Build

Se você precisar compilar pacotes nativos usando o **node-gyp**, talvez seja necessário instalar algumas ferramentas adicionais para garantir que a compilação funcione corretamente no Windows.

1. Execute o comando:

 `npm install --global --production windows-build-tools`

Isso instala as dependências necessárias para compilar módulos nativos no Windows.