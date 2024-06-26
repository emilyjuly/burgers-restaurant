import styled from 'styled-components';

interface ButtonProps {
  primarycolour: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100vh;
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

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
`;

export const Text = styled.p<ButtonProps>`
  font-size: 50px;
  font-weight: 600;
  color: ${(props) => props.primarycolour};
  text-align: center;
  @media (min-width: 800px) {
    font-size: 80px;
    width: 50%;
  }
`;

export const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const Btn = styled.button<ButtonProps>`
  padding: 10px;
  background-color: ${(props) => props.primarycolour};
  color: white;
  font-weight: 500;
  font-size: 18px;
  width: 200px;
  border-radius: 40px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
