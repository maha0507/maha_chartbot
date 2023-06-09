import styled from "@emotion/styled";

export const Options = styled.div`
  .learning-options-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  button {
    padding: 0.5rem;
    border-radius: 25px;
    background: transparent;
    border: 1px solid green;
    margin: 3px;
  }
  .disabled {
    color: #4f5d75;
  }
  .highlighted {
    background: #4285f4 !important;
    color: white;
  }
`;
