
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        white: "#fff",
        darkgray: "#a9a9a9",
        dimgray: {
          "100": "#595959",
          "200": "#4d4d4d",
        },
        black: "#000",
        deepskyblue: {
          "100": "#00a5f0",
          "200": "#00a5ec",
        },
        gainsboro: "#dedede",
        gray: {
          "100": "#192742",
          "200": "#212121",
        },
        steelblue: "#0091cf",
        black: "#000",
        deepskyblue: {
          "100": "#00a5f0",
          "200": "#00a5ec",
        },
        deepskyblue: "#00a5ec",
        darkgray: "#a9a9a9",
        dimgray: "#727272",
        deeppink: "#f00073",
        cornflowerblue: "#2867b2",
        palegoldenrod: "#cafaba",
        royalblue: "#1877f2",
        lightsteelblue:"#c4d5f5",
        lavender:"#ede4ff"
        
      },
      fontFamily: {
        oxygen: "Oxygen",
        inter: "Inter",
        "general-sans": "'General Sans'",
      },
      borderRadius: {
        "51xl": "70px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      base: "16px",
      "17xl": "36px",
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'slide-in': {
        '0%': { transform: 'translateX(-50px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      }},
  },
  
  corePlugins: {
    preflight: false,
  },
};

