module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#1e1e1e",
      darkSecondary: "#262626",
      blue: "#007BFF",
      gray: "#EDEDED",
      graySecondary: "#E6E6E6",
      orange: "#ff4f32",
      orangeSecondary: "#FF5C00",
      darkBlue: "#224BB8",
    },
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        pro: ["SF Pro Display", "sans-serif"],
        mono: "Roboto Mono, sans-serif",
      },
      screens: {
        "3xs": "340px",
        "2xs": "380px",
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1340px",
      },
    },
    plugins: [
      require('autoprefixer'),
    ],
  },
};
