# PillPal Development Workspace

This is a monorepo powered by [Turborepo](https://turbo.build/repo/docs) and managed with **npm workspaces**. 

## What's inside?

This repository contains the following applications and packages:

### Apps
- `admin-web`: A Vite + React Single Page Application for administrators.
- `patient-web`: A Vite + React Single Page Application for patients.

### Packages
- `@repo/ui`: A stub React component library shared across applications.
- `@repo/eslint-config`: Shared `eslint` configurations.
- `@repo/typescript-config`: Shared `tsconfig.json` configurations.
- `database`: Prisma database configuration.

All apps and packages are written in [TypeScript](https://www.typescriptlang.org/).

## Getting Started

To install dependencies for all apps and packages, run the following from the root:

```sh
npm install
```

## Running Tasks

This project uses Turborepo to efficiently run tasks in parallel.

### Develop

To start the development server for all applications simultaneously:

```sh
npm run dev
```

You can also run a specific app's dev server by using a filter:

```sh
npx turbo run dev --filter=admin-web
```

### Build

To build all apps and packages:

```sh
npm run build
```

To build a specific app:

```sh
npx turbo run build --filter=patient-web
```

### Linting and Type Checking

To lint all packages and check TypeScript types:

```sh
npm run lint
npm run check-types
```
