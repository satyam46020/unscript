import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const DraggableItem = ({ type }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', type);
  };

  return (
    <Box
      draggable
      onDragStart={handleDragStart}
      p={2}
      m={2}
      bg="gray.200"
      cursor="pointer"
    >
      {type === 'Label' && <Text>Label</Text>}
      {type === 'Input' && <Text>Input</Text>}
      {type === 'Button' && <Text>Button</Text>}
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box w="200px" h="100vh" bg="gray.100" p={4}>
      <Text fontSize="lg" mb={4}>BLOCK</Text>
      <DraggableItem type="Label" />
      <DraggableItem type="Input" />
      <DraggableItem type="Button" />
    </Box>
  );
};

export default Sidebar;
