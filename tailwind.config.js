/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffffff",
        
"secondary": "#92c156",
        
"accent": "#ca3a28",
        
"neutral": "#1D1A28",
        
"base-100": "#FFFFFF",
        
"info": "#64C4ED",
        
"success": "#25B670",
        
"warning": "#ECAE32",
        
"error": "#F64A37",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}