// Styled elements for the Card go here
import styled from "styled-components";
import { SectionSubheading } from "~/components";
import { FlexItemContainer } from "../../components/Containers/FlexItemContainer/FlexItemContainer.jsx";

export const StyledCard = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => (
    <FlexItemContainer {...props} />
  )
)`
  flex-direction: row;
  gap: 1rem;
  padding: 0.3rem 0.9rem;
`;

export const StyledTitleFlexItem = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
  font-weight: bold;
  align-self: baseline;
`;

export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  flex : 1 2 0;
`;

export const StyledImgContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
`;
