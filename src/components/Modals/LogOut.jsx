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
  useDisclosure,
} from "@chakra-ui/react";

export const LogOut = () => {
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
        <ModalContent w="330px" h="179px" pb="32px" borderRadius="24px">
          <ModalHeader fontSize="14px" textAlign="center"></ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="14px" textAlign="center">
            {" "}
            Are you sure you want to log out?
          </ModalBody>
          <ModalFooter>
            <Button
              bg="green.100"
              w="137px"
              h="49px"
              mr="8px"
              color="white.100"
              fontSize="14px"
            >
              <p>Log out</p>
            </Button>
            <Button bg="grey.100" w="137px" h="49px" fontSize="14px">
              <p>Cancel</p>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      );
    </>
  );
};
