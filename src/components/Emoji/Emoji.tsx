import bullsEye from "../../assets/bullsEye.png";
import thumbsUp from "../../assets/thumbsUp.png";
import meh from "../../assets/meh.webp";

import { Image, ImageProps, Text, TextProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Фигня", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Норм", boxSize: "25px" },
    5: { src: bullsEye, alt: "Огонь!", boxSize: "35px" },
  } as const;

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
