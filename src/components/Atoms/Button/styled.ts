import { styled } from '@mui/material/styles';
import { Button as MButton } from '@mui/material';
import { ButtonProps } from './index';
import { designTokens } from '@/designToken';
export const StyledButton = styled(MButton)<ButtonProps>(({ ...props }) => ({
  border: props.variant === 'outlined' ? `2px solid ${designTokens.colors.gray}` : 'none',
  borderRadius: props.circle ? '50%' : '50px',
  padding: '8.5px 18px',
  textTransform: 'none',
  color: 'white',
  width: props.fullWidth ? '100%' : props.circle ? '48px' : 'auto',
  height: props.circle ? '48px' : 'auto',
}));
