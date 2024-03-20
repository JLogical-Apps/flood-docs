/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',
        './theme.config.tsx',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
