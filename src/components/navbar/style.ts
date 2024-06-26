import styled from 'styled-components';

interface NavbarProps {
  primarycolour: string;
}

interface ListItemProps {
  isActive: boolean;
  isTheLast: boolean;
}

interface DesktopMenuProps {
  isActive: boolean;
}

export const Container = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 23px 16px;
  background-color: ${(props) => props.primarycolour};
`;

export const EmptyDiv = styled.div`
  flex: 1;
`;

export const MenuText = styled.span`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
  justify-content: flex-end;
`;

export const MenuContainer = styled.div<NavbarProps>`
  position: absolute;
  top: 60px;
  right: 16px;
  color: ${(props) => props.primarycolour};
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0;
`;

export const ListItem = styled.li<ListItemProps>`
  padding: 8px 24px 8px 5px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isTheLast ? 'none' : '1px solid #ddd')};
  font-weight: ${(props) => (props.isActive ? '600' : 'normal')};
  font-size: ${(props) => (props.isActive ? '18px' : '16px')};
`;

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 500px 0 500px;
`;

export const DesktopMenuTextContainer = styled.span<DesktopMenuProps>`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding-bottom: 10px;
`;

export const MenuDesktopText = styled.span`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
`;

export const DesktopMenuTextBorder = styled.span<DesktopMenuProps>`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 150px);
  height: 4px;
  background-color: ${(props) => (props.isActive ? 'white' : 'transparent')};
`;
