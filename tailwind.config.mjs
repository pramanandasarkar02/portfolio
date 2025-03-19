/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
      extend: {
        gridTemplateColumns:{
            "auto": `repeat(auto-fit, minmax(200px, 1fr))`
        }
      },
    },
    plugins: [],
}