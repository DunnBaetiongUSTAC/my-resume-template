import { Box } from '@chakra-ui/react'
import React from 'react';

const headerStyle = {
    backgroundColor: '#00008B',
    color: '#fff',
    textAlign: 'center',
    padding: '40px 20px',
  };

const Heading = () => {
    return ( 
        <header style={headerStyle}>
            <h1>Dunn Lester O. Baetiong</h1>
            <p>21 Years Old</p>
            <p>Quezon City</p>
            <p></p>
        </header>
            
        
     );
     
}
 
export default Heading;