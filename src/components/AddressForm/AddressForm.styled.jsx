import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonSubmit = styled(Button)`
  height: 56px;
`;

export const Input = styled(TextField)`
  width: 210px;
`;
