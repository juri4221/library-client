import styled, { css } from 'styled-components';

/* CSS HEX */
// --light-cyan: #e0fbfcff;
// --light-blue: #c2dfe3ff;
// --cadet-gray: #9db4c0ff;
// --paynes-gray: #5c6b73ff;
// --gunmetal: #253237ff;

export const colorPalette = {
  feldgrau: '#4b584dff',
  feldgrau2: '#627264ff',
  celadon: '#a1cda8ff',
  celadon2: '#b5dfcaff',
  mintGreen: '#bde3d6ff',
  antiflashWhite: '#f4f5f6ff',
  linkBlue: '#89c0ff',

  error: '#EB3E0A',
  warning: '#FFBC1F',
  success: '#8BCC00',
};

export const AppContainer = styled.div`
  height: 100vh;
`;

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colorPalette.feldgrau2};
`;

export const Form = styled.div`
  textarea:focus,
  input:focus {
    outline: none;
    border: 2px ${colorPalette.feldgrau2} solid;
  }

  textarea,
  input {
    border-radius: 4px;
    border: 1px ${colorPalette.feldgrau2} solid;
  }

  .react-select-container {
    .react-select__control {
      border: 1px ${colorPalette.feldgrau2} solid;
    }
  }
`;

export const FormBody = styled.div`
  padding: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    font-size: 12px;
    margin: 4px 0;
  }
`;

export const Input = styled.input`
  height: 36px;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
`;

export const ButtonStyled = styled.button<{ $outlined?: boolean }>`
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  border: 0;
  color: ${({ $outlined }) => ($outlined ? colorPalette.feldgrau2 : '#fff')};
  background-color: ${({ $outlined }) =>
    $outlined ? '#fff' : colorPalette.feldgrau2};

  .loading-indicator {
    animation: rotate 1.5s linear infinite;
    margin-left: 12px;
  }
`;

export const ErrorMessage = styled.span`
  margin: 4px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${colorPalette.error};
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${colorPalette.feldgrau2};
  margin: 16px 0;
  &,
  th,
  td {
    border: 1px solid ${colorPalette.feldgrau2};
    border-collapse: collapse;
    padding: 16px;
    text-align: left;
  }
`;

export const TableHeader = styled.th``;

export const TableData = styled.td<{ $width?: number }>`
  max-height: 25px;
  max-width: 500px;
  flex-grow: 1;

  button {
    display: inline;
    margin-left: 5px;
  }

  ${({ $width }) =>
    $width
      ? css`
          width: ${$width}px;
        `
      : css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `};
`;
