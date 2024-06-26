import { Container, SearchContainer, Input, Icon } from './style';

const InputSearch = () => {
  return (
    <Container>
      <SearchContainer>
        <Icon />
        <Input type="text" placeholder="Pesquise itens do menu" />
      </SearchContainer>
    </Container>
  );
};

export default InputSearch;
