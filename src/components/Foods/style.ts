import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  gap: 20px;
  max-height: 60vh;
  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const Icon = styled(KeyboardArrowDownIcon)`
  width: 30px;
  height: 30px;

  &.expanded {
    transform: rotate(180deg);
  }
`;

export const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0 10px 0;
  height: 117px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ItemName = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const ItemDescription = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 55px;
  width: 200px;
  font-size: 16px;
  font-weight: 100;
  color: gray;
`;

export const ItemPrice = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  width: 128px;
  height: 90px;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
`;
