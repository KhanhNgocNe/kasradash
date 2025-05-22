# Kasradash Dashboard

A modern dashboard application built with Next.js, TypeScript, Tailwind CSS, and Radix UI components.

## Project Structure

```
.
├── components.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── (auth)/
│   │   ├── dashboard/
│   │   ├── mock/
│   │   └── profile/
│   ├── components/
│   │   ├── app-sidebar.tsx
│   │   ├── chart-area-interactive.tsx
│   │   ├── data-table.tsx
│   │   ├── nav-documents.tsx
│   │   ├── nav-main.tsx
│   │   ├── nav-secondary.tsx
│   │   ├── nav-user.tsx
│   │   └── ...
│   ├── hooks/
│   ├── lib/
│   ├── locales/
│   └── stores/
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone git@github.com:KhanhNgocNe/kasradash.git
   cd kasradash
   ```

2. **Install dependencies:**
   ```sh
   npm install --force
   # or
   yarn install --force
   ```

### Running the Project

To start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the project for production:

```sh
npm run build
# or
yarn build
```

To start the production server:

```sh
npm start
# or
yarn start
```

## Features

- **Modern UI:** Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Radix UI](https://www.radix-ui.com/).
- **TypeScript:** Type-safe codebase.
- **Internationalization:** Multi-language support using `react-i18next`.
- **Responsive Design:** Works on desktop and mobile.
- **Component-based:** Reusable UI components in `src/components`.

## Customization

- **Theme:** Easily switch between light, dark, and system themes.
- **Sidebar:** Collapsible sidebar with customizable navigation.
- **Localization:** Add new languages in `src/locales/`.

## License

This project is licensed under the MIT License.

---
