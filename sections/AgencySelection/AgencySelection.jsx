import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledBackgroundContainer
} from "./element";

export const AgencySelection = ({ ...data }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      </StyledTextContainer>
      <StyledBackgroundContainer />
    </StyledContainer>
  );
};