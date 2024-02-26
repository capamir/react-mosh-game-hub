import { HStack, Image, Show, Text } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch, SearchInput } from "./index";
import React from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar: React.FC<Props> = ({ onSearch }) => {
  return (
    <HStack paddingX={4}>
      <HStack>
        <Image src={logo} boxSize="50px" />
        <Show above="md">
          <Text>Game Hub</Text>
        </Show>
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
