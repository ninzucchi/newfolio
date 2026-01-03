/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
  safelist: ['bg-github-0', 'bg-github-1', 'bg-github-2', 'bg-github-3', 'bg-github-4'],
};
