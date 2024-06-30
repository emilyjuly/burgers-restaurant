import { Container, SearchContainer, Input, Icon } from './style';
import { useState } from 'react';


interface InputSearchProps {
  onSearch: (searchText: string) => void;
}


const InputSearch = ({ onSearch }: InputSearchProps) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };


  return (
    <Container>
      <SearchContainer>
        <Icon />
        <Input
          type="text"
          placeholder="Pesquise itens do menu"
          value={searchText}
          onChange={handleSearchChange} />
      </SearchContainer>
    </Container>
  );
};

export default InputSearch;
