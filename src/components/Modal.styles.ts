import styled from 'styled-components';
import { colorPalette } from './styles';

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.17);
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  border: 1px ${colorPalette.feldgrau2} solid;
  width: 600px;
  max-height: 800px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colorPalette.feldgrau2};
  color: white;
  height: 30px;
  padding: 16px;
  button {
    position: absolute;
    right: 8px;
    top: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 10px;
    width: 10px;
    padding: 10px;

    border-radius: 50px;

    cursor: pointer;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colorPalette.feldgrau2};
  height: 30px;
  padding: 16px;
`;

export const ModalBody = styled.div`
  background-color: white;
`;

export const ModalTitle = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 20px;
`;
