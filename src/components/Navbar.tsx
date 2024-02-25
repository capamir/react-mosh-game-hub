import { HStack, Image, Text } from "@chakra-ui/react";
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
        <Image src={logo} boxSize="60px" />
        <Text>ML Course</Text>
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
