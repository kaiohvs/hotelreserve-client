import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from './api';
import { Link } from 'react-router-dom';

const AddHotel = () => {
    const [hotel, setHotel] = useState({ name: '', address: '', numberOfRooms: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel((prevHotel) => ({ ...prevHotel, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/hotels', hotel);
            alert('Hotel adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar hotel:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4">Adicionar Hotel</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome"
                    name="name"
                    value={hotel.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Endereço"
                    name="address"
                    value={hotel.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Quantidade de Quartos"
                    name="numberOfRooms"
                    type="number"
                    value={hotel.numberOfRooms}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Adicionar</Button>                
            </form>
        </Container>
    );
};

export default AddHotel;
