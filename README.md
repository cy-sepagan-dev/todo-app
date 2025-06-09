# Installation Guide

## Tailwind Installation
- Until CRA updates or Tailwind provides a drop-in fix, you should use Tailwind CSS v3.4.x, which is stable and fully supported with CRA.

## Install Tailwind v3 (last compatible version)

- npm install -D tailwindcss@3.4.1 postcss autoprefixer

- No need for @tailwindcss/postcss — it’s only needed in Tailwind v4+.

## Make sure you have this file structure:

# postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

# tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

# src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# npm start

# Add some tailwind prebuild classes