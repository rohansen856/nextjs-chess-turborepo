const baseConfig = require("@rcsen/configs/tailwind/tailwind.config.js")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    presets: [
        baseConfig
    ],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
}