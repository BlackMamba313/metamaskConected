import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import { Flex } from "@chakra-ui/react";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            bg="white.800"
        >
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
