import { HStack, Image, Text } from "@chakra-ui/react";
import { logo } from "../assets";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingX={4}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>ML Course</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
