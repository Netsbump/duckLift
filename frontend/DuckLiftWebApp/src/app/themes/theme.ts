import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Styles pour :root
      ":root": {
        "--chakra-colors-black": "#000", // exemple d'ajout de variable de couleur
        "--chakra-colors-white": "#fff", // exemple d'ajout de variable de couleur
        fontSynthesis: "none",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        lineHeight: "1.5",
        fontWeight: "400",
        colorScheme: "light dark",
        color: "#000",
        backgroundColor: "#fff",
      },
      // Styles pour html
      html: {
        fontSize: "100%", // ou 16px, ou 1em
      },
      // Styles pour html et body
      "html, body": {
        margin: "0",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      },
      // Styles universels pour tous les éléments
      "*, *::before, *::after": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      // Styles spécifiques pour #root
      "#root": {
        minHeight: "inherit",
        width: "inherit",
      },
    },
  },
  // ... vous pouvez ajouter d'autres personnalisations de thème ici si nécessaire
});

export { theme };
