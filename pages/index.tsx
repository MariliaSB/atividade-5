import { Typography, Box } from '@mui/material';
import React from 'react';

import rocket from '../img/rocket-bg.jpg';

export default function index() {
  return (
    <Box component="main" sx={{
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `url(${rocket.src})`,
      backgroundSize: 'contain no-repeat',
      backgroundPosition: 'center',
    }}
    >
        <Typography component="h1" variant="h2" sx={{fontFamily: 'Verdana'}}>Executando React com Next.JS</Typography>
        <Typography component="h2" variant="h4" sx={{mt: 2, fontFamily: 'Verdana'}}>Site criado em TypeScript publicado na Vercel.</Typography>
        <Typography component="h3" variant="h5" sx={{mt: 3, fontFamily: 'Verdana'}}>Grupo 3 | IL2MR</Typography>

    </Box>
  )
}