import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Container, Img, ImgContainer } from './style';
import store from '../../store';
import { useEffect } from 'react';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import MenuNavigation from '../../components/menuNavigation/MenuNavigation';

const Menu = () => {
  const dispatch = useDispatch();

  const restaurantData = useSelector((state: store) => state.restaurant.data);

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ImgContainer>
        <Img
          src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
          alt="Logo do restaurante"
        />
      </ImgContainer>
      <Container
        backgroundColour={
          restaurantData && restaurantData.webSettings.backgroundColour
        }
      >
        <MenuNavigation primaryColour={restaurantData && restaurantData.webSettings.primaryColour}/>
      </Container>
    </>
  );
};

export default Menu;
