import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { theme } from "./themes/theme";
import { AuthProvider } from "./contexts/Authentification";

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
};
