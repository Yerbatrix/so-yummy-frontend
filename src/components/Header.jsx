import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout, updateUser } from "../redux/slices/authSlice";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // Assuming user object is available
  const dispatch = useDispatch();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isLogoutConfirmOpen,
    onOpen: onLogoutConfirmOpen,
    onClose: onLogoutConfirmClose,
  } = useDisclosure();
  const [username, setUsername] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatarUrl || "");

  const handleLogout = () => {
    onLogoutConfirmOpen();
  };

  const confirmLogout = () => {
    dispatch(logout());
    onLogoutConfirmClose();
  };

  const handleSaveChanges = () => {
    dispatch(updateUser({ name: username, avatar }));
    onModalClose();
  };

  const handleAvatarChange = (e) => {
    if (e.target.files.length > 0) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box
      maxW="1440px"
      mx="auto"
      bg="transparent"
      p={4}
      zIndex={999}
      position="relative"
    >
      <Flex align="center" justify="space-between">
        <Heading color="hsla(214, 9%, 15%, 1)">
          <Link as={RouterLink} to="/">
            <Image src="../../public/images/logo.svg" alt="Logo" />
          </Link>
        </Heading>

        {/* Desktop Menu */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          justify="center"
        >
          {[
            "main",
            "categories",
            "add",
            "my",
            "favorites",
            "shopping-list",
          ].map((path) => (
            <Link
              as={RouterLink}
              to={`/${path}`}
              key={path}
              mx={2}
              _hover={{ textDecoration: "none" }}
              _activeLink={{ color: "teal.500" }}
            >
              {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
            </Link>
          ))}
        </Flex>

        <Flex align="center">
          {isAuthenticated && (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
                display="flex"
                alignItems="center"
              >
                <Avatar size="sm" name={user?.name} src={user?.avatarUrl} />
                <Text ml={2}>{user?.name}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onModalOpen}>
                  <Flex justify="center" align="center" width="100%">
                    Edit Profile
                  </Flex>
                </MenuItem>
                <MenuItem
                  width="90%"
                  borderRadius="24px 44px"
                  bg="hsla(76, 52%, 44%, 1)"
                  onClick={handleLogout}
                  color="white"
                >
                  <Flex justify="center" align="center" width="100%">
                    Logout
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          )}

          <Switch ml={4} display={{ base: "none", md: "block" }} />

          {/* Mobile and Tablet Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onDrawerOpen}
            variant="outline"
            aria-label="Open Menu"
          />
        </Flex>
      </Flex>

      {/* Drawer for Mobile and Tablet */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Link as={RouterLink} to="/" onClick={onDrawerClose}>
                So Yummy
              </Link>
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column" align="start" p={4}>
                {[
                  "main",
                  "categories",
                  "add",
                  "my",
                  "favorites",
                  "shopping-list",
                ].map((path) => (
                  <Link
                    as={RouterLink}
                    to={`/${path}`}
                    key={path}
                    mb={2}
                    onClick={onDrawerClose}
                    _hover={{ textDecoration: "none" }}
                    _activeLink={{ color: "teal.500" }}
                  >
                    {path.charAt(0).toUpperCase() +
                      path.slice(1).replace("-", " ")}
                  </Link>
                ))}
                <Box mt="auto" width="100%">
                  <Switch isFullWidth />
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Edit Profile Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding="40px">
            <FormControl mb={4} textAlign="center">
              <Input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                display="none"
                id="avatar-upload"
              />
              <label htmlFor="avatar-upload">
                <Box
                  as="span"
                  display="inline-block"
                  width="100px"
                  height="100px"
                  borderRadius="full"
                  overflow="hidden"
                  position="relative"
                  cursor="pointer"
                >
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="rgba(0, 0, 0, 0.3)"
                    borderRadius="50%"
                    width="100px"
                    height="100px"
                    p={2}
                  >
                    <Image
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      src="../../public/images/user.svg" // Path to your SVG icon
                      alt="Upload Icon"
                      boxSize="54px"
                    />
                  </Box>
                </Box>
              </label>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your new username"
              />
            </FormControl>
            <Button
              bg="hsla(76, 52%, 44%, 1)"
              color="white"
              width="100%"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal isOpen={isLogoutConfirmOpen} onClose={onLogoutConfirmClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding="40px" textAlign="center">
            <Text mb={4}>Are you sure you want to log out?</Text>
            <Button
              bg="hsla(76, 52%, 44%, 1)"
              color="white"
              mr={4}
              onClick={confirmLogout}
            >
              Log Out
            </Button>
            <Button onClick={onLogoutConfirmClose}>Cancel</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
