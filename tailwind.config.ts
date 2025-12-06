import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
            bg-todo-input-container: "#3a9d3f",
            bg-todo-container: "#ff1a1a",
            text-todo-container: "#888",
            text-completed: "#888"
      },
      spacing: {
            10: "10px"
      }
},
  },
  plugins: [],
}

export default config
