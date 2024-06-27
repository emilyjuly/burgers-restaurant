import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 30px 0 30px 0;
`;

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0 10px 0;
`;

export const Title = styled.span`
font-weight: 600;
font-size: 24px;
`;

export const Icon = styled(KeyboardArrowDownIcon)`
width: 30px;
height: 30px;
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
justify-content: space-between;
`;

export const ImgContainer = styled.div`
display: flex;
justify-content: center;
overflow: hidden;
border-radius: 10px;
width: 128px;
height: 85px;
`;

export const Img = styled.img`
object-fit: cover;
width: 100%;
`;