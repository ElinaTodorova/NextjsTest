// The Card to be exported goes here
import Image from "next/image";

import { SectionParagraph } from "../../components/Typography/SectionParagraph.jsx";
import { StyledCard, StyledTitleFlexItem, StyledInfoContainer } from "./elements.jsx";

export const Cart = ({ cardData }) => {
  return (
    <StyledCard>
       <Image
          layout="responsive"
          src={cardData.icon.src}
          alt={cardData.icon.alt}
          width={cardData.icon.width}
          height={cardData.icon.height}
        />
      <StyledInfoContainer>
        <StyledTitleFlexItem>{cardData.title}</StyledTitleFlexItem>
        <SectionParagraph>{cardData.content}</SectionParagraph>
      </StyledInfoContainer>
    </StyledCard>
  );
};