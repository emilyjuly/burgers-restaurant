import styled from 'styled-components';

interface CircleProps {
  primaryColour: string;
  isActive?: boolean;
}

export const Container = styled.div<CircleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120%;
  gap: 15px;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.primaryColour}` : 'none'};
`;

export const ImgContainer = styled.div<CircleProps>`
  display: flex;
  height: 82px;
  width: 82px;
  padding: 3px;
  overflow: hidden;
  border-radius: 50%;
  border: ${(props) =>
    props.isActive ? `2px solid ${props.primaryColour}` : 'none'};
  box-sizing: border-box;
`;

export const Img = styled.img`
  max-width: 82px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span<CircleProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.primaryColour};
`;
