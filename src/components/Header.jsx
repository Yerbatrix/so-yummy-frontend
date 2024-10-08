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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link as RouterLink, useNavigate } from "react-router-dom";
import { logout, updateUser, fetchUserData } from "../redux/slices/authSlice";
import ThemeToggle from "./ThemeToggle";
import axios from "../redux/axiosConfig";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
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
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserData()); // Pobranie danych użytkownika po zalogowaniu
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (user) {
      setUsername(user.name || "");
      setAvatar(user.avatar || "");
    }
  }, [user]);

  const handleLogout = () => {
    onLogoutConfirmOpen();
  };

  const confirmLogout = () => {
    dispatch(logout());
    onLogoutConfirmClose();
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put("/api/auth/user", {
        name: username,
        avatar,
      });

      dispatch(updateUser(response.data));

      toast({
        title: "Profile updated.",
        description: "Your profile information has been updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onModalClose();
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error.",
        description: "An error occurred while updating your profile.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
          <Link as={RouterLink} to="/main">
            <Image src="/images/logo.png" alt="Logo" />
          </Link>
        </Heading>

        {/* Desktop Menu */}
        <Flex
          display={{ base: "none", md: "flex" }}
          fontSize={{ base: "none", md: "17px", lg: "20px" }}
          align="center"
          justify="center"
          fontWeight="500"
        >
          {[
            "main",
            "categories",
            "add-recipes",
            "my-recipes",
            "favorites",
            "shopping-list",
          ].map((path) => (
            <NavLink
              to={path === "categories" ? "/categories/beef" : `/${path}`}
              key={path}
              style={({ isActive }) => ({
                margin: "0 0.5rem",
                textDecoration: "none",
                color: isActive ? "hsla(76, 52%, 44%, 1)" : "inherit",
                backgroundColor: isActive ? "transparent" : "transparent",
                fontWeight: "500",
              })}
            >
              {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
            </NavLink>
          ))}
        </Flex>

        <Flex align="center">
          {isAuthenticated && user && (
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
                <Avatar
                  size="sm"
                  name={user.name}
                  src={
                    user.avatar
                      ? `/path/to/avatars/${user.avatar}`
                      : "/images/default-avatar.png"
                  }
                />
                <Text ml={2} fontWeight="bold">
                  {user.name}
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onModalOpen}>
                  <Flex justify="center" align="center" width="100%">
                    Edit Profile
                  </Flex>
                </MenuItem>
                <MenuItem
                  width="70%"
                  borderRadius="24px 44px"
                  bg="hsla(76, 52%, 44%, 1)"
                  onClick={handleLogout}
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}

          {/* <Switch
            ml={4}
            display={{ base: "none", md: "block" }}
            css={{
              ".chakra-switch__track": {
                backgroundColor: "hsla(76, 52%, 44%, 1)",
              },
              ".chakra-switch__thumb": {
                backgroundColor: "white",
              },
            }}
          /> */}
          <ThemeToggle />
          {/* Mobile and Tablet Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onDrawerOpen}
            variant="outline"
            aria-label="Open Menu"
            marginLeft="20px"
          />
        </Flex>
      </Flex>

      {/* Drawer for Mobile and Tablet */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay>
          <DrawerContent
            width="100vw"
            height="100vh"
            maxWidth="100vw"
            display="flex"
            flexDirection="column"
            backgroundColor="hsla(75, 56%, 89%, 1);
"
          >
            <DrawerCloseButton />
            <DrawerHeader>
              <Link as={RouterLink} to="/" onClick={onDrawerClose}>
                <Image src="/images/logo.svg" alt="Logo" />
              </Link>
            </DrawerHeader>
            <DrawerBody flex="1">
              <Flex direction="column" align="start" p={4} width="100%">
                {[
                  "main",
                  "categories",
                  "add-recipes",
                  "my-recipes",
                  "favorites",
                  "shopping-list",
                ].map((path) => (
                  <Link
                    as={RouterLink}
                    to={path === "categories" ? "/categories/beef" : `/${path}`}
                    key={path}
                    mb={2}
                    onClick={onDrawerClose}
                    color="hsla(218, 11%, 15%, 1)"
                    _hover={{
                      textDecoration: "none",
                      color: "hsla(76, 52%, 44%, 1)",
                    }}
                    _activeLink={{ color: "hsla(76, 52%, 44%, 1)" }}
                    width="100%"
                    textAlign="center"
                    fontWeight="600"
                  >
                    {path.charAt(0).toUpperCase() +
                      path.slice(1).replace("-", " ")}
                  </Link>
                ))}
                <Box mt="auto" width="100%">
                  <Switch isFullWidth />
                </Box>
                <Box
                  position="absolute"
                  width={{ base: "750px", md: "876px" }}
                  height="944px"
                  top={{ base: "-100px", md: "-700px" }}
                  left={{ base: "-430px", md: "-850px", lg: "-1150px" }}
                  zIndex={-2}
                  display={{ base: "block", md: "block" }}
                  transform={{ base: "rotate(50deg)", md: "rotate(140.57deg)" }}
                >
                  <Image
                    src="/images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473 1.png"
                    alt="Additional Decorative"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
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
                      src={avatar || "/images/user.svg"}
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
