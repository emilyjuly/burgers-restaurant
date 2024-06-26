import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import {
  Container,
  EmptyDiv,
  MenuText,
  IconContainer,
  MenuContainer,
  List,
  ListItem,
  DesktopMenu,
  DesktopMenuTextContainer,
  MenuDesktopText,
  DesktopMenuTextBorder,
} from './style';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuItems = ['Menu', 'Entrar', 'Contato'];
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const screenWidth = useScreenWidth();

  const { data } = useSelector((state: store) => state.restaurant);

  const handleItemClick = (item: string) => {
    setShowMenu(false);
    navigate(item === 'Menu' ? '/' : `/${item.toLowerCase()}`);
  };

  const getPageName = (pathname: string): string => {
    const name: string = pathname.replace('/', '');
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <>
      {data && (
        <Container primarycolour={data && data.webSettings.primaryColour}>
          {screenWidth < 800 ? (
            <>
              <EmptyDiv style={{ flex: 1 }} />
              <MenuText>
                {location.pathname === '/'
                  ? 'Menu'
                  : getPageName(location.pathname)}
              </MenuText>

              <IconContainer onClick={() => setShowMenu(!showMenu)}>
                <MenuIcon />
              </IconContainer>
              {showMenu && (
                <MenuContainer
                  primarycolour={data && data.webSettings.primaryColour}
                >
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem
                        isActive={
                          location.pathname ===
                          (item === 'Menu' ? '/' : `/${item.toLowerCase()}`)
                            ? true
                            : false
                        }
                        isTheLast={
                          index === menuItems.length - 1 ? true : false
                        }
                        key={index}
                        onClick={() => handleItemClick(item)}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </MenuContainer>
              )}
            </>
          ) : (
            <DesktopMenu>
              {menuItems.map((item) => (
                <DesktopMenuTextContainer
                  isActive={
                    location.pathname ===
                    (item === 'Menu' ? '/' : `/${item.toLowerCase()}`)
                  }
                  onClick={() => handleItemClick(item)}
                >
                  <MenuDesktopText>{item.toUpperCase()}</MenuDesktopText>
                  <DesktopMenuTextBorder
                    isActive={
                      location.pathname ===
                      (item === 'Menu' ? '/' : `/${item.toLowerCase()}`)
                    }
                  />
                </DesktopMenuTextContainer>
              ))}
            </DesktopMenu>
          )}
        </Container>
      )}
    </>
  );
};

export default Navbar;
