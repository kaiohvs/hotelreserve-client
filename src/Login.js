import React, { useState } from 'react';
import axios from 'axios';
import api from './api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/usuario/login', {
        email,
        senha,
      });      
   

      console.log(response.data);

      setMensagem(response.data);
    } catch (error) {
      setMensagem('E-mail ou senha incorretos.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        {mensagem && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {mensagem}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
