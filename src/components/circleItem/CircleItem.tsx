import { useDispatch, useSelector } from 'react-redux';
import { Container, Img, ImgContainer, TextContainer, Text } from './style';
import store from '../../store';
import { useEffect } from 'react';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';

interface CircleProps {
  image: string;
  name: string;
}

const CircleItem = ({ image, name }: CircleProps) => {
  const dispatch = useDispatch();

  const restaurantData = useSelector((state: store) => state.restaurant.data);

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <Container
      primaryColour={restaurantData && restaurantData.webSettings.primaryColour}
    >
      <ImgContainer
        primaryColour={
          restaurantData && restaurantData.webSettings.primaryColour
        }
      >
        <Img src={image} />
      </ImgContainer>

      <TextContainer>
        <Text
          primaryColour={
            restaurantData && restaurantData.webSettings.primaryColour
          }
        >
          {name}
        </Text>
      </TextContainer>
    </Container>
  );
};

export default CircleItem;
