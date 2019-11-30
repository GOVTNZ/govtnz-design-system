import * as React from "react";
import * as styled from "styled-components";

type Props = {};

const StyledDiv = styled.div`
  margin-top: 0px;
`;

const InsetText = ({}: Props) => (
  <StyledDiv>
    It can take up to 8 weeks to register a lasting power of attorney if there
    are no mistakes in the application.
  </StyledDiv>
);

export default InsetText;
