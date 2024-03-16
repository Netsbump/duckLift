import { EmailIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const AuthProviderButton: React.FC = () => {
  return (
    <Button
      leftIcon={<EmailIcon mt={1} />}
      loadingText="Chargement"
      variant="outline"
    >
      Se connecter avec Google
    </Button>
  );
};
