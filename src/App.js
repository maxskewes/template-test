import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import "@fontsource/work-sans/700.css"
import theme from './theme'
import NavHead from './components/NavHead';
import AddContact from './pages/AddContact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavHead />
      <AddContact />
    </ChakraProvider>
  );
}

export default App;
