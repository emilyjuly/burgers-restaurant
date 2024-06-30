import { useDispatch, useSelector } from 'react-redux';
import CircleItem from '../circleItem/CircleItem';
import InputSearch from '../inputSearch/InputSearch';
import { CirclesContainer, Container } from './style';
import store from '../../store';
import { useEffect, useRef, useState } from 'react';
import { fetchMenu } from '../../store/slices/menuSlice';
import Foods from '../Foods/Foods';

interface ItemProps {
  name: string;
  image: string;
}

const MenuNavigation = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<ItemProps[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState<string>('');

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const menuData = useSelector((state: store) => state.menu.data);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    if (menuData) {
      const fetchedItems = menuData.map((item: any) => ({
        name: item.name,
        image: item.images[0].image,
      }));
      setItems(fetchedItems);
      handleSearch(searchText);
    }
  }, [menuData]);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (menuData) {
      const filteredItems = menuData.reduce((acc: ItemProps[], category: any) => {
        const filteredSubItems = category.items.filter((item: any) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        return [...acc, ...filteredSubItems];
      }, []);
      setFilteredItems(filteredItems);
    }
  };

  return (
    <Container>
      <InputSearch onSearch={handleSearch} />
      {menuData && (
        <CirclesContainer>
          {items.map((item) => (
            <CircleItem
              image={item.image}
              name={item.name}
              key={item.name}
              isActive={activeCategory === item.name}
              onClick={() => scrollToCategory(item.name)}
            />
          ))}
        </CirclesContainer>
      )}
      <Foods categoryRefs={categoryRefs} filteredItems={filteredItems} />
    </Container>
  );
};

export default MenuNavigation;
