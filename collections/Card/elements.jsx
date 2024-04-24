// Styled elements for the Card go here
import styled from "styled-components";
import { SectionSubheading } from "~/components";
import { FlexItemContainer } from "../../components/Containers/FlexItemContainer/FlexItemContainer.jsx";

export const StyledCard = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => (
    <FlexItemContainer {...props} />
  )
)``;

export const StyledTitleFlexItem = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
  font-weight: bold;
`;

export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;
