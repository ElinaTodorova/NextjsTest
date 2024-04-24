import styled from "styled-components";

export const StyledFlexItemContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 30rem;
  height : 15svh;
  margin : 0 auto;
  background-color : rgb(243, 243, 243);
  position: relative;
  z-index: 101;
  border-radius: 15px
`;