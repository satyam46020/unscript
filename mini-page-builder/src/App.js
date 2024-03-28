// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PageBuilder from './components/PageBuilder';

function App() {
  return (
    <ChakraProvider>
      <DndProvider backend={HTML5Backend}>
        <PageBuilder />
      </DndProvider>
    </ChakraProvider>
  );
}

export default App;
