// The Card to be exported goes here
import Image from "next/image";
import Link from "next/link";

import { SectionParagraph } from "../../components/Typography/SectionParagraph.jsx";
import {
  StyledCard,
  StyledTitleFlexItem,
  StyledInfoContainer,
  StyledImgContainer,
  BlueLink
} from "./elements.jsx";

export const Card = ({ icon, index, ...card }) => {
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
        <StyledTitleFlexItem>
          {index === 2 ? (
            <Link href="/" passHref>
              <BlueLink>{card.title}</BlueLink>
            </Link>
          ) : (
            card.title
          )}
        </StyledTitleFlexItem>
        <SectionParagraph>{card.content}</SectionParagraph>
      </StyledInfoContainer>
    </StyledCard>
  );
};
