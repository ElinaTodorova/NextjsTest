import styled from "styled-components";
import {SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";


export const StyledContainer = styled(SectionContainer)`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledTextContainer = styled.div`
  color: black;
  width: 50%;
  margin: 0 auto;
  font-family: sans-serif;
  position: relative;
  z-index: 100;
`;

export const StyledTitle = styled(SectionBigHeading)`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  color: black;
  text-align: center;
`;

export const StyledSubtitle = styled(SectionSubheading)`
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
`;

export const StyledBackgroundContainer = styled.div`
  width: 50vw;
  height: 60vh;
  margin-left: auto;
  display: block;
  position: absolute;
  bottom: 0;
  top: 10rem;
  left: 15rem;
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;
`;

export const StyledFlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
`;

export const StyledImageContainer = styled.div`
  heigth: 35rem;
  width : 20rem;
  position: relative;
  z-index: 102;
  box-sizing: border-box;
`;

export const StyledFlexItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;