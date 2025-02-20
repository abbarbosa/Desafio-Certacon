import React from 'react';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

interface CustomAlertProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ severity, message }) => {
  return (
    <StyledStack>
      <Alert severity={severity}>{message}</Alert>
    </StyledStack>
  );
};

export default CustomAlert;
