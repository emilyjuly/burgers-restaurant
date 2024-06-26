import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { useNavigate } from 'react-router-dom';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import {
  Container,
  ImgContainer,
  Img,
  TextContainer,
  Text,
  Subtitle,
  BtnContainer,
  Btn,
} from './style';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state: store) => state.restaurant);

  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container backgroundColour={data && data.webSettings.backgroundColour}>
        <ImgContainer>
          {data && (
            <Img src={data.webSettings.bannerImage} alt="Logo do restaurante" />
          )}
        </ImgContainer>
        <TextContainer>
          {data && (
            <Text primarycolour={data && data.webSettings.primaryColour}>
              {data.name}
            </Text>
          )}
        </TextContainer>
        <BtnContainer>
          <Subtitle>
            Clique no botão abaixo para conferir nossas opções!
          </Subtitle>
          <Btn
            primarycolour={data && data.webSettings.primaryColour}
            onClick={handleButtonClick}
          >
            Entrar
          </Btn>
        </BtnContainer>
      </Container>
    </>
  );
};

export default Home;
