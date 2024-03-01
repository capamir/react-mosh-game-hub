import { HStack, Image, Show, Text } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch, SearchInput } from "./index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack paddingX={4}>
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="50px" objectFit="cover" />
          <Show above="md">
            <Text>Game Hub</Text>
          </Show>
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
