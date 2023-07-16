
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
        dimgray: "#626262",
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
        deepskyblue: "#00a5ec",
        darkgray: "#a9a9a9",
        dimgray: "#727272",
        deeppink: "#f00073",
        cornflowerblue: "#78a6ff",
        royalblue: "#1877f2",
        
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
  },
  corePlugins: {
    preflight: false,
  },
};

