import Image from "next/image";

import { Card } from "../../collections/Card/Card.jsx";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledBackgroundContainer,
  StyledFlexContainer,
  StyledImageContainer,
  StyledFlexItem,
  StyledImgContainer
} from "./element";

export const AgencySelection = ({ video, ...data }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      </StyledTextContainer>
      <StyledBackgroundContainer />
      <StyledFlexContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={video.src}
            alt={video.alt}
            width={video.width}
            height={video.height}
          />
        </StyledImageContainer>
        <StyledFlexItem>
          {data.cards.map((card) => (
            <Card {...card} icon={card.icon} key={card.id} />
          ))}
        </StyledFlexItem>
      </StyledFlexContainer>
      
    </StyledContainer>
  );
};