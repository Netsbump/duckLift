import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
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
      html: {
        fontSize: "100%", // ou 16px, ou 1em
      },
      "html, body": {
        margin: "0",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      },
      // Styles universels pour tous les éléments
      "*, *::before, *::after": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
    },
  },
});

export { theme };
