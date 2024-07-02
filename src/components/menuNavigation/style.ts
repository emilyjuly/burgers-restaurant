import styled from 'styled-components';

interface LinkContainerProps {
  primaryColour: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InfoContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;  
  right: 0;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-weight: bold;
  background-color: white;
`;

export const InfoLink = styled.a<LinkContainerProps>`
  text-decoration: underline;
  color: ${(props) => props.primaryColour}
`;

export const EmptyContainer = styled.div`
  height: 100px;
`;