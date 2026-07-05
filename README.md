# Portfolio

A modern, responsive personal portfolio built with [TanStack Start](https://tanstack.com/start), [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), and [Supabase](https://supabase.com/).

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [TanStack Router](https://tanstack.com/router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4, `tailwind-merge`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **Backend & Auth**: Supabase

## Getting Started

This project uses `yarn` for package management.

### Prerequisites

Make sure you have Node.js and `yarn` installed.

### Installation

Clone the repository and install the dependencies:

```sh
yarn install
```

### Development

To start the development server, run:

```sh
yarn dev
```

This starts the app in development mode, rebuilding assets on file changes.

## Build

To build the app for production:

```sh
yarn build
```

## Supabase Edge Functions

This project includes Supabase Edge Functions (e.g., `send-contact-email`).
Whenever you update an edge function, you need to deploy it without verifying the JWT.

To deploy the `send-contact-email` function, run:

```sh
supabase functions deploy send-contact-email --no-verify-jwt
```
