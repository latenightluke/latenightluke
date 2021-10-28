import NextImage from "next/image";
import React from "react";
import styled from "@emotion/styled";

const ImageContainer = styled.div`
  > div {
    &:first-child {
      position: unset !important;
    }
    max-height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const BaseImage = styled(NextImage)`
  object-fit: cover;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

const Image = ({ width, height, maxHeight, maxWidth, ...rest }) => {
  return (
    <ImageContainer
      width={width}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
    >
      <BaseImage layout="fill" {...rest} />
    </ImageContainer>
  );
};

export default Image;
