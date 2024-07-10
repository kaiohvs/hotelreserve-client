import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from './api';

const EditHotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({ name: '', address: '', numberOfRooms: 0 });

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await api.get(`/hotels/${id}`);
                setHotel(response.data);
            } catch (error) {
                console.error('Erro ao buscar hotel:', error);
            }
        };

        fetchHotel();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel((prevHotel) => ({ ...prevHotel, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/hotels/${hotel.id}`, hotel);
            alert('Hotel atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar hotel:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4">Editar Hotel</Typography>
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
                <Button type="submit" variant="contained" color="primary">Atualizar</Button>
            </form>
        </Container>
    );
};

export default EditHotel;
