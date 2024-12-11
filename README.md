# 3 Challenger from Compass

Este projeto foi criado utilizando **React** com **TypeScript** e várias bibliotecas modernas para desenvolvimento frontend. O objetivo principal foi reproduzir uma cópia de um e-commerce para aplicar e consolidar as tecnologias aprendidas ao longo do curso. Abaixo você encontrará instruções para configuração, execução e descrição das principais dependências utilizadas no projeto.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.
- **Redux Toolkit**: Gerenciamento de estado simplificado e eficiente.
- **React Router DOM**: Controle de rotas no frontend.
- **Clerk**: Autenticação e gerenciamento de usuários.
- **React Hook Form**: Gerenciamento de formulários com validação eficiente.
- **Yup**: Biblioteca para validação de esquemas e dados.
- **Axios**: Cliente HTTP para consumo de APIs.
- **Swiper**: Criação de sliders responsivos e interativos.
- **SplideJS**: Alternativa leve para sliders/carrosséis.

---

## Requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js (versão 18 ou superior recomendada)
- npm ou yarn (gerenciador de pacotes)

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

---

## Scripts Disponíveis

### Iniciar o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

### Build

Para gerar a versão de produção:

```bash
npm run build
# ou
yarn build
```

### Lint

Para verificar o código com ESLint:

```bash
npm run lint
# ou
yarn lint
```

---

## Estrutura do Projeto

```plaintext
src/
├── components/   # Componentes reutilizáveis
├── pages/        # Páginas do projeto
├── hooks/        # Hooks personalizados
├── store/        # Configuração e slices do Redux
├── styles/       # Estilos globais e configurações do TailwindCSS
├── utils/        # Funções utilitárias
└── App.tsx       # Componente principal
```

---

## Dependências

### Principais Dependências

- **@clerk/clerk-react**: Gerenciamento de autenticação e usuários.
- **@headlessui/react**: Componentes acessíveis e sem estilização.
- **@heroicons/react**: Ícones otimizados para React.
- **@reduxjs/toolkit**: Ferramentas modernas para Redux.
- **axios**: Para requisições HTTP.
- **react-hook-form**: Simplificação do gerenciamento de formulários.
- **yup**: Validação de dados e esquemas.
- **swiper** e **splidejs**: Criação de sliders/carrosséis.

### Ferramentas de Estilo

- **TailwindCSS**: Estilização baseada em classes utilitárias.
- **PostCSS** e **Autoprefixer**: Processamento e compatibilidade CSS.

---

## Contribuição

1. Faça um fork do repositório.

2. Crie uma branch para sua feature ou correção de bug:

   ```bash
   git checkout -b minha-branch
   ```

3. Commit suas alterações:

   ```bash
   git commit -m "Minha contribuição"
   ```

4. Envie suas alterações para o repositório remoto:

   ```bash
   git push origin minha-branch
   ```

5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

