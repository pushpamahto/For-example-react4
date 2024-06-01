import { AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
function ErrorIndicator() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went we Wrong</AlertDescription>
    </Alert>
  );
}

export default ErrorIndicator;
