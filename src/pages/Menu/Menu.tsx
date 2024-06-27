import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Container, Img, ImgContainer, CirclesContainer } from './style';
import store from '../../store';
import { useEffect, useState } from 'react';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import InputSearch from '../../components/inputSearch/InputSearch';
import CircleItem from '../../components/circleItem/CircleItem';
import { fetchMenu } from '../../store/slices/menuSlice';
import Burgers from '../../components/burgers/Burgers';

interface ItemProps {
  name: string;
  image: string;
}

const Menu = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<ItemProps[]>([]);

  const restaurantData = useSelector((state: store) => state.restaurant.data);
  const menuData = useSelector((state: store) => state.menu.data);

  useEffect(() => {
    dispatch(fetchRestaurant());
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    if (menuData) {
      const fetchedItems = menuData.map((item: any) => ({
        name: item.name,
        image: item.images[0].image,
      }));
      setItems(fetchedItems);
    }
  }, [menuData]);

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
        <InputSearch />
        {menuData && (
          <CirclesContainer>
            {items.map((item) => (
              <CircleItem image={item.image} name={item.name} key={item.name} />
            ))}
          </CirclesContainer>
        )}
        <Burgers />
      </Container>
    </>
  );
};

export default Menu;
