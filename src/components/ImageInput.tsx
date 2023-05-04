import React from 'react';
import styled from 'styled-components';
import { colorPalette } from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  background-color: ${colorPalette.feldgrau2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.img`
  max-width: 300px;
  margin-top: 20px;
`;

interface ImageInputProps {
  imageSource?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export const ImageInput = ({
  imageSource,
  onChangeHandler,
}: ImageInputProps) => (
  <Container>
    <Label htmlFor="file-input">Upload Image</Label>
    <Input type="file" id="file-input" onChange={onChangeHandler} />
    {imageSource && (
      <Thumbnail
        src={`data:image/jpeg;base64,${imageSource}`}
        alt="uploaded image"
      />
    )}
  </Container>
);
