import { styled } from '@mui/material/styles';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { designTokens } from '@/designToken';
const StyledSearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50px',
  padding: `${designTokens.spacing.xxs}`,
  border: `1px solid ${designTokens.colors.gray}`,
  width: '320px',
});
const StyledInputBase = styled(InputBase)({
  marginLeft: '8px',
  flex: 1,
  fontFamily: 'NoirPro, sans-serif',
  fontSize: designTokens.fontSize.s,
});
const StyledIconButton = styled(IconButton)({
  padding: '10px',
  color: `${designTokens.colors.placeholder}`,
});
export const SearchBar = () => {
  return (
    <StyledSearchWrapper>
      <StyledIconButton>
        <SearchIcon />
      </StyledIconButton>
      <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
    </StyledSearchWrapper>
  );
};
