module.exports = {
    "$schema": "https://json.schemastore.org/eslintrc",
    "root": true,
    "extends": [
      "next/core-web-vitals",
      "prettier",
      "plugin:tailwindcss/recommended"
    ],
    "plugins": ["tailwindcss"],
    "rules": {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-head-element": "off",
      "react/jsx-key": "off",
      "react-hooks/exhaustive-deps": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error"
    },
    "settings": {
      "tailwindcss": {
        "callees": ["cn"],
        "config": "tailwind.config.js"
      },
      "next": {
        "rootDir": true
      }
    },
    "overrides": [
      {
        "files": ["*.ts", "*.tsx"],
        "parser": "@typescript-eslint/parser"
      }
    ]
  }
  
  