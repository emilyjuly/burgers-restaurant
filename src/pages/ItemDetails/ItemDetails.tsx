import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Image,
  ItemInfo,
  ItemName,
  ItemDescription,
  SizeSelection,
  SizeOptionLabel,
  OptionContainer,
  Option,
  OptionInfo,
  OptionName,
  OptionPrice,
  CloseButton,
  CloseButtonContainer,
  CustomRadio,
  QuantityContainer,
  QuantityDisplay,
  AddToOrderButton,
  AddQuantityButton,
  RemoveQuantityButton,
  QuantityButtonContainer,
} from './style';
import store from '../../store';

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const menuData = useSelector((state: store) => state.menu.data);
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      let foundItem = null;
      if (menuData) {
        for (let section of menuData) {
          for (let i of section.items) {
            if (i.id === parseInt(id)) {
              foundItem = i;
              break;
            }
          }
          if (foundItem) break;
        }
      }
      setItem(foundItem);
    };

    fetchData();
  }, [menuData, id]);

  const handleClose = () => {
    navigate('/');
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToOrder = () => {
    // Lógica para adicionar o item ao pedido
    console.log(`Added ${quantity} of ${item.name} to order.`);
  };

  return (
    <Container>
      {item ? (
        <>
          {' '}
          {item.images && <Image src={item.images[0].image} alt={item.name} />}
          <CloseButtonContainer>
            <CloseButton onClick={handleClose} />
          </CloseButtonContainer>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemInfo>
          <SizeSelection>
            <SizeOptionLabel>Escolha o tamanho</SizeOptionLabel>
            <span>Selecione 1 opção</span>
          </SizeSelection>
          <OptionContainer>
            <Option>
              <OptionInfo>
                <OptionName>1 Carne</OptionName>
                <OptionPrice>R$ {item.price}</OptionPrice>
              </OptionInfo>
              <CustomRadio
                id="oneMeat"
                name="oneMeat"
                value="oneMeat"
                defaultChecked
              />
            </Option>
            <Option>
              <OptionInfo>
                <OptionName>2 Carnes</OptionName>
                <OptionPrice>R$ {item.price + 2}</OptionPrice>
              </OptionInfo>
              <CustomRadio
                id="oneMeat"
                name="oneMeat"
                value="oneMeat"
                defaultChecked
              />
            </Option>
            <Option>
              <OptionInfo>
                <OptionName>3 Carnes</OptionName>
                <OptionPrice>R$ {item.price + 4}</OptionPrice>
              </OptionInfo>
              <CustomRadio
                id="oneMeat"
                name="oneMeat"
                value="oneMeat"
                defaultChecked
              />
            </Option>
          </OptionContainer>
          <QuantityContainer>
            <QuantityButtonContainer disabled={quantity === 1}>
              <RemoveQuantityButton onClick={handleRemoveQuantity} />
            </QuantityButtonContainer>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <QuantityButtonContainer>
              <AddQuantityButton onClick={handleAddQuantity} />
            </QuantityButtonContainer>
          </QuantityContainer>
          <AddToOrderButton onClick={handleAddToOrder}>
            <span>Adicionar ao Pedido</span>
            <span>• R$ {(item.price * quantity).toFixed(2)}</span>
          </AddToOrderButton>
        </>
      ) : (
        <p>Item not found</p>
      )}
    </Container>
  );
};

export default ItemDetails;
