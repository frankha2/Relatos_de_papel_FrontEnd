# Relatos de Papel

Es una aplicación para la venta de libros online.

- Te permite visualizar, realizar busqueda por filtros de los tipos de libros.
- Seleccionar los libros y la cantidad que quieres comprar.
- Visualizar el carrito de compras con la lista de los libros y las cantidades.
- Tambien permite realizar el checkout de la compra.
- Ademas de realizar todo el CRUD de los libros que existen en stock.

## Requisitos 📋

Proyecto hecho con 
[React](https://react.dev/learn/installation) version 18.3.1. <br>
[TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) <br>
[Vite](https://es.vite.dev/guide/) <br>
[NodeJS](https://github.com/angular/angular-cli) <br>

## Instalación 🔧

Primero descarga el repositorio

```bash
git clone "url"
```
Instala el NPM en la carpeta del proyecto

```bash
npm install
```
Ahora inicializa un servidor de desarrollo local, ejecutando

```bash
npm run dev o npm start
```
Al ejecutar el servidor, sino se abre automanticamente el navegador, abrelo y accede a http://localhost:4200/ 

## Herramientas utilizadas 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Angular](https://angular.dev/tools/cli/setup-local) - El framework web usado
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje
* [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5) - Lenguaje de marcado de hipertexto
* [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) - Hojas de Estilo en Cascada

## Building 📦

Para compilar el proyecto, ejecute:

```bash
npm run build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio dist/. Por defecto, la compilación de producción optimiza tu aplicación para mejorar el rendimiento y la velocidad.


## React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usos [Babel](https://babeljs.io/) para una actualización rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usos [SWC](https://swc.rs/) para una actualización rápida

## Ampliando la configuración de ESLint

Si está desarrollando una aplicación de producción, le recomendamos actualizar la configuración para habilitar las reglas de análisis estático de tipos:

- Configurar el nivel superior `parserOptions` propiedad como esta:

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
```

- Reemplazar `tseslint.configs.recommended` a `tseslint.configs.recommendedTypeChecked` ó `tseslint.configs.strictTypeChecked`
- Opcionalmente, agregue `...tseslint.configs.stylisticTypeChecked`
- Instalar [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualizar la configuración:

```js
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
```
