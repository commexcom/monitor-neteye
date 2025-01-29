# Base Repository NextJS

Este repositório serve como base para projetos Next.js, ideal para quem deseja criar novos projetos rapidamente com uma configuração inicial padrão.

## 🚀 Começando

Este projeto foi criado com o objetivo de fornecer uma estrutura inicial para outros projetos. Ele contém uma configuração básica de um aplicativo Next.js, pronto para ser utilizado como base para outras aplicações.

### Requisitos

- **Node.js**: A versão recomendada do Node.js é a 16 ou superior.
- **pnpm**: Usamos o `pnpm` como gerenciador de pacotes para garantir uma instalação mais rápida e eficiente. **Recomendamos fortemente o uso do `pnpm`**.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/base-repository.git
   cd base-repository
   ```

2. Instale as dependências com o `pnpm`:

   ```bash
   pnpm install
   ```

### Scripts

- **Desenvolvimento**: Inicie o servidor de desenvolvimento com o TurboPack para maior performance:

  ```bash
  pnpm dev
  ```

- **Construção**: Gere os arquivos de produção:

  ```bash
  pnpm build
  ```

- **Iniciar**: Inicie o aplicativo em modo de produção:

  ```bash
  pnpm start
  ```

- **Lint**: Verifique o código com o ESLint:

  ```bash
  pnpm lint
  ```

## 🔧 Dependências

- **React**: `^19.0.0`
- **React-DOM**: `^19.0.0`
- **Next.js**: `15.1.6`
- **TypeScript**: `^5`
- **Tailwind CSS**: `^3.4.1`
- **ESLint**: `^9`

## 🚧 O que está por vir?

Atualmente, este repositório contém apenas a configuração básica para começar a usar o Next.js com o Tailwind CSS e TypeScript. No futuro, mais recursos serão adicionados, como configurações de integração contínua, testes automatizados, e muito mais!

## Contribuindo

Sinta-se à vontade para fazer um fork deste repositório e adicionar melhorias ou novos recursos. Se você encontrar problemas ou tiver sugestões, por favor, abra uma issue.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
