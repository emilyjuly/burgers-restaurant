import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CloseButton = styled(CloseIcon)``;

export const Image = styled.img`
  width: 100%;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

export const ItemName = styled.h2`
  margin: 0;
`;

export const ItemDescription = styled.p`
  margin: 0;
`;

export const SizeSelection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: #f8f9fa;
  gap: 5px;
  border-top: 1px solid #e0e0e0;
`;

export const SizeOptionLabel = styled.span`
  font-weight: 600;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const OptionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionName = styled.span`
  font-weight: '600';
`;

export const OptionPrice = styled.span``;

export const CustomRadio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  outline: none;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;

  &:checked {
    background: #000;
    border-color: #000;
  }

  &:hover {
    border-color: #666;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 24px 0 16px 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

export const QuantityButtonContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: none;
  border-radius: 50%;
  padding: 5px;
  background-color: #e0e0e0;
  &:hover {
    background-color: #ccc;
  }
`;

export const AddQuantityButton = styled(AddIcon)``;

export const RemoveQuantityButton = styled(RemoveIcon)``;

export const QuantityDisplay = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const AddToOrderButton = styled.button`
  background-color: #000;
  color: white;
  height: 48px;
  margin: 0 24px 0 24px;
  padding: 4px 24px 4px 24px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #333;
  }
`;
