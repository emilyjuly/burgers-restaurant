import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #8a94a4;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  left: 10px;
`;

export const Input = styled.input`
  height: 40px;
  font-size: 16px;
  border: 1px solid #8a94a4;
  border-radius: 7px;
  padding: 10px 10px 10px 40px;
  width: 350px;
  box-sizing: border-box;

   &:focus {
    border-color: #8a94a4; 
    outline: none;
  }
`;
