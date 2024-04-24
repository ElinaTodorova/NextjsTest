// The Card to be exported goes here
import Image from "next/image";

import { SectionParagraph } from "../../components/Typography/SectionParagraph.jsx";
import { StyledCard, StyledTitleFlexItem, StyledInfoContainer, StyledImgContainer } from "./elements.jsx";

export const Card = ({ icon, ...card }) => {
  return (
    <StyledCard>
        <StyledImgContainer>
       <Image
          layout="responsive"
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
        </StyledImgContainer>
      <StyledInfoContainer>
        <StyledTitleFlexItem>{card.title}</StyledTitleFlexItem>
        <SectionParagraph>{card.content}</SectionParagraph>
      </StyledInfoContainer>
    </StyledCard>
  );
};