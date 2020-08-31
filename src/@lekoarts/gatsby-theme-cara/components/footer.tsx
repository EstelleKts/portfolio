/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br /> Made by EstelleKts with 🖤 Theme by{" "}
      <a href="https://www.lekoarts.de/en/">LekoArts.</a>
      <br /> Having unusual taste? Switch to{" "}
      <a onClick={toggleColorMode}> light mode.</a>
    </Box>
  );
};

export default Footer;
