import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";
import { bullsEye, thumbsUp, meh } from "../assets";

interface Props {
  rating: number;
}

interface EmojiType {
  [key: number]: ImageProps;
}

const emojiMap: EmojiType = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

const Emoji: React.FC<Props> = ({ rating }) => {
  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
