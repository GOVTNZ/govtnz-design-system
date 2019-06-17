import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 20px;
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
  padding: 0;
  border: 0;
  margin-bottom: 5px;
`;

const StyledLabel = styled.label`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  @media print {
    color: #000000;
  }
`;

const StyledSpan = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  margin-top: -5px;
`;

const StyledSpan2 = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: #b10e1e;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
`;

const StyledInput = styled.input`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  @media print {
    color: #000000;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  border: 4px solid #b10e1e;
`;

const FileUploadWithErrorMessage = ({
  fileUpload3,
  fileUpload3Hint,
  fileUpload3Error,
  name,
  disabled,
  readOnly,
  autoFocus
}) => (
  <StyledDiv>
    <StyledLabel htmlFor={fileUpload3}>Upload a file</StyledLabel>
    <StyledSpan id={fileUpload3Hint}>
      Your photo may be in your Pictures, Photos, Downloads or Desktop folder.
      Or in an app like iPhoto.
    </StyledSpan>
    <StyledSpan2 id={fileUpload3Error}>Error message goes here</StyledSpan2>
    <StyledInput
      aria-describedby={
        fileUpload3Hint !== undefined || fileUpload3Error !== undefined
          ? `${fileUpload3Hint ? fileUpload3Hint : ""}${
              fileUpload3Error ? " " + fileUpload3Error : ""
            }`
          : undefined
      }
      id={fileUpload3}
      name={name}
      type="file"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  </StyledDiv>
);

export default FileUploadWithErrorMessage;
