import { Container, Icon, Img, ImgContainer, InfoContainer, ItemCard, Title, TitleContainer } from "./style"

const Burgers = () => {
  return (<Container>
    <TitleContainer>
      <Title>
        Burgers
      </Title>
      <Icon />
    </TitleContainer>
    <ItemCard>
      <InfoContainer>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Hard Core</span>
        <span style={{
          maxHeight: '55px',
          width: '200px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 16,
          fontWeight: 100
        }}>180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.</span>
        <span style={{ fontSize: 16, fontWeight: 600 }}>R$ 33.00</span>
      </InfoContainer>
      <ImgContainer>
        <Img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png" />
      </ImgContainer>
    </ItemCard>
  </Container>)
}

export default Burgers