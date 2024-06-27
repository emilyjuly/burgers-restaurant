import styled from 'styled-components';

interface ContainerProps {
  backgroundColour: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  padding: 10px;
  background-color: ${(props) => props.backgroundColour};
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Img = styled.img`
  object-fit: cover;
  @media (min-width: 800px) {
    width: 100%;
  }
`;
