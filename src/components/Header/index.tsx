import React from 'react';
import * as S from './styled';
import { SearchBar } from '../Atoms/SearchBar';
import { Button } from '../Atoms/Button';
export default function Header() {
  return (
    <S.Container>
      <SearchBar />
      <Button title="Add New Task" />
    </S.Container>
  );
}
