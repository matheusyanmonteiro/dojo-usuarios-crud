# Gerenciador de Versões Node (nvm) - Guia de Instalação e Uso

[versão oficial ingles](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

## Introdução

O **nvm** (Node Version Manager) permite que você instale e use diferentes versões do Node.js de forma rápida e fácil, diretamente da linha de comando.

### Exemplo de Uso:

```bash
$ nvm use 16
Agora utilizando o Node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Agora utilizando o Node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Agora utilizando o Node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```

## Sobre
O nvm é um gerenciador de versões para o Node.js, projetado para ser instalado por usuário e invocado por shell. Ele funciona em qualquer shell compatível com POSIX (sh, dash, ksh, zsh, bash) e é compatível com os seguintes sistemas operacionais: Unix, macOS e Windows WSL.

## Instalação e Atualização
Script de Instalação & Atualização
Para instalar ou atualizar o nvm, basta executar o script de instalação. Você pode fazer isso manualmente ou usando um dos seguintes comandos `curl` ou `Wget`:

```bash
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
ou
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Executando qualquer um dos comandos acima, o script será baixado e executado. Ele clona o repositório do nvm para o diretório ~/.nvm e tenta adicionar as linhas de configuração ao arquivo de perfil correto (~/.bash_profile, ~/.zshrc, ~/.profile ou ~/.bashrc).

A linha de configuração que será adicionada é a seguinte:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Isso carrega o nvm

```
# Notas Adicionais

- Se a variável de ambiente `$XDG_CONFIG_HOME` estiver presente, o nvm será instalado nesse diretório.

- Você pode adicionar a opção `--no-use` ao final do script acima (`...nvm.sh --no-use`) para adiar o uso do nvm até que você o execute manualmente.

- É possível personalizar a origem do script de instalação, o diretório de instalação, o arquivo de perfil e a versão do Node.js utilizando as variáveis `NVM_SOURCE`, `NVM_DIR`, `PROFILE` e `NODE_VERSION`. Exemplo:

    ```bash
    curl ... | NVM_DIR="caminho/para/nvm"
    ```

    **Importante:** Certifique-se de que o diretório `NVM_DIR` não contenha uma barra (`/`) no final.

- O instalador pode usar `git`, `curl` ou `wget` para baixar o nvm, dependendo do que estiver disponível no seu sistema.

- Se você não quiser que o instalador edite o arquivo de configuração do seu shell (por exemplo, se você já utiliza um plugin de nvm no zsh), pode definir `PROFILE=/dev/null` antes de executar o script de instalação. Aqui está um exemplo de comando para isso:

    ```bash
    PROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash'
    ```
---

# Resolução de Problemas no Linux

Se após rodar o script de instalação você receber o erro `nvm: command not found` ou não obter retorno ao digitar o comando `command -v nvm`, basta fechar o terminal atual, abrir um novo e tentar novamente.

Alternativamente, você pode rodar o seguinte comando para carregar o nvm dependendo do shell utilizado:

- Para **bash**:

    ```bash
    source ~/.bashrc
    ```

- Para **zsh**:

    ```bash
    source ~/.zshrc
    ```

- Para **ksh**:

    ```bash
    . ~/.profile
    ```

Esses comandos devem carregar o nvm corretamente.
