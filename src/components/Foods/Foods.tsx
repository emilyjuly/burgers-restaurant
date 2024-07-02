import { useEffect, useState } from 'react';
import {
  Container,
  Icon,
  Img,
  ImgContainer,
  InfoContainer,
  ItemCard,
  ItemDescription,
  ItemName,
  ItemPrice,
  Title,
  TitleContainer,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { fetchMenu } from '../../store/slices/menuSlice';
import { useNavigate } from 'react-router-dom'

interface ItemProps {
  id: number;
  images?: [];
  items: ItemProps[];
  name: string;
  position: number;
  visible?: number;
  description?: string;
  alcoholic?: number;
  availabilityType?: string;
  available?: boolean;
  price?: number;
  sku?: string;
}

interface FoodsProps {
  categoryRefs: React.RefObject<{ [key: string]: HTMLDivElement | null }>;
  filteredItems: ItemProps[];
}

const Foods = ({ categoryRefs, filteredItems }: FoodsProps) => {
  const dispatch = useDispatch();
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const menuData = useSelector((state: store) => state.menu.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    if (menuData) {
      const initialExpandedCategories = menuData.reduce(
        (acc: any, item: ItemProps) => {
          acc[item.name] = true;
          return acc;
        },
        {},
      );
      setExpandedCategories(initialExpandedCategories);
    }
  }, [menuData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.getAttribute('data-category'));
          }
        });
      },
      { threshold: 0.5 },
    );

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(categoryRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [categoryRefs, menuData]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };


  return (
    <Container>
      {menuData &&
        menuData.map((category: ItemProps) => (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.name] = el)}
            data-category={category.name}
          >
            <TitleContainer onClick={() => toggleCategory(category.name)}>
              <Title className={activeCategory === category.name ? 'active' : ''}>
                {category.name}
              </Title>
              <Icon
                className={expandedCategories[category.name] ? 'expanded' : ''}
              />
            </TitleContainer>
<<<<<<< Updated upstream
            {expandedCategories[category.name] &&
              category.items.map((item: ItemProps) => (
                filteredItems.some(filteredItem => filteredItem.id === item.id) && (
                  <ItemCard key={item.id}>
                    <InfoContainer>
                      <ItemName>{item.name}</ItemName>
                      {item.description && (
                        <ItemDescription>{item.description}</ItemDescription>
                      )}
                      {item.price && <ItemPrice>R$ {item.price}</ItemPrice>}
                    </InfoContainer>
                    {item.images && item.images.length > 0 && (
                      <ImgContainer>
                        <Img src={item.images[0].image} />
                      </ImgContainer>
=======
            {expandedCategories[item.name] &&
              item.items.map((subItem: ItemProps) => (
                <ItemCard key={subItem.id} onClick={() => navigate(`/item/${subItem.id}`)}>
                  <InfoContainer>
                    <ItemName>{subItem.name}</ItemName>
                    {subItem.description && (
                      <ItemDescription>{subItem.description}</ItemDescription>
>>>>>>> Stashed changes
                    )}
                  </ItemCard>
                )
              ))}
          </div>
        ))}
    </Container>
  );
};

export default Foods;
