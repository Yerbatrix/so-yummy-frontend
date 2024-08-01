import React from "react";

import {
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  useDisclosure,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";

export const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent
          w="330px"
          h="327px"
          pb="32px"
          borderRadius="24px"
          display="flex"
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody
            as={Flex}
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            position="relative"
            flexGrow={1}
          >
            <Box position="relative" w="88px" h="88px">
              <Image
                src="src/assets/Ellipse.png"
                w="88px"
                h="88px"
                position="absolute"
                top="0"
                left="0"
              />
              <Image
                src="src/assets/user.png"
                w="40px"
                h="40px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
              <Image
                src="src/assets/plus.png"
                w="24px"
                h="24px"
                position="absolute"
                top="93%"
                left="65%"
                transform="translate(-50%, -50%)"
              />
            </Box>
            <Box mt="auto">
              <FormControl position="relative">
                <Input
                  w="282px"
                  h="48px"
                  border="1px"
                  borderColor="black.100"
                  justify="center"
                />
                <Image
                  src="src/assets/pen.png"
                  w="14.52px"
                  h="14.52px"
                  position="absolute"
                  right="10px"
                  top="23px"
                  transform="translate(-50%, -50%)"
                />
                <Image
                  src="src/assets/userInput.png"
                  w="14.52px"
                  h="14.52px"
                  position="absolute"
                  left="15px"
                  top="23px"
                  transform="translate(-50%, -50%)"
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="green.100"
              w="282px"
              h="49px"
              color="white.100"
              fontSize="14px"
            >
              <p>Save changes</p>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      );
    </>
  );
};
