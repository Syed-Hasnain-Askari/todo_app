import React, { ReactNode } from 'react';
import { Box } from '@mui/system';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import * as S from './styled';
export type ButtonProps = MUIButtonProps & {
  icon?: ReactNode;
  title?: string;
  outlined?: boolean;
  fullWidth?: boolean;
  circle?: boolean;
  del?: boolean;
  onClick?: () => void; // Add onClick prop
  flex?: boolean;
};
export const Button: React.FC<ButtonProps> = ({ icon, title, outlined, onClick, ...props }) => {
  return (
    <S.StyledButton onClick={onClick} variant={outlined ? 'outlined' : 'contained'} {...props}>
      {title && (
        <Box component="span" sx={{ ml: icon ? 1 : 0 }}>
          {title}
        </Box>
      )}
    </S.StyledButton>
  );
};
