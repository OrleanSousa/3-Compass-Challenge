# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. Here's how to do it:

1. **Configure the top-level `parserOptions` property** in the ESLint config:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
Replace tseslint.configs.recommended with tseslint.configs.recommendedTypeChecked or tseslint.configs.strictTypeChecked.

Optionally, add ...tseslint.configs.stylisticTypeChecked to include stylistic rules for TypeScript.

Install the eslint-plugin-react and update the ESLint config:

js
Copiar código
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
Setup
Follow these steps to get the project up and running on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (v16 or later)
npm (comes with Node.js)
Installation
Clone the repository:

bash
Copiar código
git clone https://github.com/your-username/3-challegen-compass.git
Navigate into the project directory:

bash
Copiar código
cd 3-challegen-compass
Install dependencies:

bash
Copiar código
npm install
Scripts
npm run dev: Start the development server with Vite.
npm run build: Compile the project for production using TypeScript and Vite.
npm run lint: Run ESLint to lint the codebase.
npm run preview: Preview the production build.
npm run watch:tailwind: Watch for changes in Tailwind CSS files and rebuild the output.
npm run server: Start a mock JSON server for API calls (default port: 5000).
npm run start: Start the development server, Tailwind watcher, and the mock server in parallel.
Running the Project
To run the project locally:

bash
Copiar código
npm run start
This command will:

Start the Vite development server (npm run dev).
Watch and compile the TailwindCSS files (npm run watch:tailwind).
Start the mock API server using json-server (npm run server).
You can now access the app at http://localhost:3000 in your browser.

Dependencies
Frontend
React: v18.3.1
React Router: v7.0.1 for routing between views.
Redux Toolkit: v2.4.0 for state management.
React Hook Form: v7.54.0 for form handling.
Yup: v1.5.0 for schema-based form validation.
Styling
TailwindCSS: v3.4.15 for utility-first styling.
PostCSS and Autoprefixer for CSS post-processing.
Dev Tools
ESLint: v9.15.0 for linting JavaScript and React code.
Vite: v6.0.1 for fast development and production builds.
JSON Server: Mock backend for local development.