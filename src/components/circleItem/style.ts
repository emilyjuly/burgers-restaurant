import styled from 'styled-components';

interface CircleProps {
  primaryColour: string;
}

export const Container = styled.div<CircleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130%;
  gap: 20px;
  border-bottom: 3px solid ${(props) => props.primaryColour};
`;

export const ImgContainer = styled.div<CircleProps>`
  display: flex;
  height: 82px;
  width: 82px;
  padding: 3px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${(props) => props.primaryColour};
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
