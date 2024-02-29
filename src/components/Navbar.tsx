import { HStack, Image, Show, Text } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch, SearchInput } from "./index";

const Navbar = () => {
  return (
    <HStack paddingX={4}>
      <HStack>
        <Image src={logo} boxSize="50px" />
        <Show above="md">
          <Text>Game Hub</Text>
        </Show>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
