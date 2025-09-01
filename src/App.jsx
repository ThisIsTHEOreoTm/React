import './App.css'
import React from 'react';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Trying from './component/FirstDesign';
import { createTheme,ThemeProvider  } from '@mui/material';
import { orange, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],   // needs `main`
    },
    secondary: {
      main: red[500],
    },
  },
});
function App() {
  return (
    <>
    <ThemeProvider  theme={theme}>
    <Trying />
    </ThemeProvider>
    </>
  )
} 
export default App




