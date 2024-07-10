import React, { useState, useEffect } from 'react';
import api from './api';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const HotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await api.get('/hotels');
                setHotels(response.data);
            } catch (error) {
                console.error('Erro ao buscar hotéis:', error);
            }
        };

        fetchHotels();
    }, []);

    const deleteHotel = async (id) => {
        try {
            await api.delete(`/hotels/${id}`);
            setHotels(hotels.filter(hotel => hotel.id !== id));
        } catch (error) {
            console.error('Erro ao excluir hotel:', error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Endereço</TableCell>
                        <TableCell>Quantidade de Quartos</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hotels.map(hotel => (
                        <TableRow key={hotel.id}>
                            <TableCell>{hotel.name}</TableCell>
                            <TableCell>{hotel.address}</TableCell>
                            <TableCell>{hotel.numberOfRooms}</TableCell>
                            <TableCell>
                                <IconButton component={Link} to={`/edit/${hotel.id}`}><Edit /></IconButton>
                                <IconButton onClick={() => deleteHotel(hotel.id)}><Delete /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HotelList;
