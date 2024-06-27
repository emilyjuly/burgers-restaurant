import { useEffect, useRef, useState } from 'react';
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
}

const Foods = ({ categoryRefs }: FoodsProps) => {
  const dispatch = useDispatch();
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const menuData = useSelector((state: store) => state.menu.data);

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
        menuData.map((item: ItemProps) => (
          <div
            key={item.id}
            ref={(el) => (categoryRefs.current[item.name] = el)}
            data-category={item.name}
          >
            <TitleContainer onClick={() => toggleCategory(item.name)}>
              <Title className={activeCategory === item.name ? 'active' : ''}>
                {item.name}
              </Title>
              <Icon
                className={expandedCategories[item.name] ? 'expanded' : ''}
              />
            </TitleContainer>
            {expandedCategories[item.name] &&
              item.items.map((subItem: ItemProps) => (
                <ItemCard key={subItem.id}>
                  <InfoContainer>
                    <ItemName>{subItem.name}</ItemName>
                    {subItem.description && (
                      <ItemDescription>{subItem.description}</ItemDescription>
                    )}
                    {subItem.price && <ItemPrice>R$ {subItem.price}</ItemPrice>}
                  </InfoContainer>
                  {subItem.images && subItem.images.length > 0 && (
                    <ImgContainer>
                      <Img src={subItem.images[0].image} />
                    </ImgContainer>
                  )}
                </ItemCard>
              ))}
          </div>
        ))}
    </Container>
  );
};

export default Foods;
