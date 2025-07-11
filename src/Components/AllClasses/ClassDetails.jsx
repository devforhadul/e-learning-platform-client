import React from 'react';
import Container from '../Shared/Container';
import { Button } from '@mui/material';

const ClassDetails = () => {
    
    const handlePayButton = ()=>{
        console.log("Pay data")
    }

    return (
        <Container>
            <h2>Full Stack web development</h2>
            <img src="" alt="" />
            <p>Description</p>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>Name</p>
                    <p>Instructor</p>
                </div>
            </div>
            <p>Price</p>
            <p>Enrollments</p>
            <Button variant='contained' onClick={handlePayButton}>Pay and Enroll</Button>
        </Container>
    );
};

export default ClassDetails;