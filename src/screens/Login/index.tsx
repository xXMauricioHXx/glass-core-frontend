import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PrimaryButton from '../../components/PrimaryButton';
import './style.scss';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate('/home');
  };

  return (
    <Grid container sx={{ backgroundColor: '#F2F4FD', height: '100vh' }}>
      <Grid
        item
        sx={{ display: { xs: 'none', sm: 'block' } }}
        sm={5}
        md={6}
        lg={8}
        className='image'
      ></Grid>
      <Grid
        item
        xs={12}
        sm={7}
        md={6}
        lg={4}
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            paddingX: { xs: '1rem', sm: '2rem', md: '3rem' },
            width: '100%',
            maxWidth: '550px',
          }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='E-mail'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <PrimaryButton
            type='submit'
            text='Entrar'
            style={{ marginTop: 2, marginBottom: 3 }}
          />
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Esqueceu sua senha?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
