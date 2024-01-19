import { designTokens } from '@/designToken';
import { styled } from '@mui/material/styles';
export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: `${designTokens.spacing.xxs}`,
});
