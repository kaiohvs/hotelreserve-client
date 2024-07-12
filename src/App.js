import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelList from './HotelList';
import AddHotel from './AddHotel';
import EditHotel from './EditHotel';
import { Container, CssBaseline, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Login from './Login';
const App = () => {
    return (
        <Router>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        HotelReserve
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/add">Adicionar Hotel</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button> 
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/" element={<HotelList />} />
                    <Route path="/add" element={<AddHotel />} />
                    <Route path="/edit/:id" element={<EditHotel />} />
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
