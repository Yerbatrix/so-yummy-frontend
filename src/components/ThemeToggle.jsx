import { Switch } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { keepTheme, setTheme } from "../utils/themes";

function ThemeToggle() {
  const [isChecked, setIsChecked] = useState(true); // Default to light theme

  const changeThemeAndToggle = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "theme-dark") {
      setTheme("theme-light");
      setIsChecked(true);
      document.body.style.backgroundColor = "#1e1f28"; // Dark background
      document.body.style.color = "#FAFAFA";
      document.body.style.fontWeight = " 500";
      document.body.style.fontSize = "14px"; // Light text
    } else {
      setTheme("theme-dark");
      document.body.style.backgroundColor = "#ececec"; // Light background
      document.body.style.color = " #23262a";
      document.body.style.fontWeight = " 500";
      document.body.style.fontSize = "14px"; // Dark text
      setIsChecked(false);
    }
  };

  const handleOnChange = () => {
    changeThemeAndToggle();
  };

  useEffect(() => {
    keepTheme();
    const theme = localStorage.getItem("theme");
    if (theme === "theme-dark") {
      setIsChecked(false);
      document.body.style.backgroundColor = "#ececec"; // Light background
      document.body.style.color = "#23262A"; // Dark text
    } else {
      setIsChecked(true);
      document.body.style.backgroundColor = "#1e1f28"; // Dark background
      document.body.style.color = "#FAFAFA"; // Light text
    }
  }, []);

  return (
    <Switch
      ml={50}
      display={{ base: "none", md: "block" }}
      isChecked={isChecked}
      onChange={handleOnChange}
      css={{
        width: "30px",
        // marginTop: "10px",
        height: "21px",
        borderRadius: " 50px",
        boxShadow: "inset 0 6px 8px 3px rgba(0, 0, 0, 0.1)",
        background: " #efefef",
      }}
    />
  );
}

export default ThemeToggle;
