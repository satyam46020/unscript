import React, { useState, useEffect } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, Text } from '@chakra-ui/react';

const BlankPage = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const savedComponents = JSON.parse(localStorage.getItem('pageComponents')) || [];
    setComponents(savedComponents);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    const newComponent = { type, id: new Date().getTime(), x: 0, y: 0 };
    setComponents([...components, newComponent]);
    localStorage.setItem('pageComponents', JSON.stringify([...components, newComponent]));
  };

  const handleDelete = (id) => {
    const updatedComponents = components.filter((component) => component.id !== id);
    setComponents(updatedComponents);
    localStorage.setItem('pageComponents', JSON.stringify(updatedComponents));
  };

  const handleEdit = (id) => {
    console.log('Edit component:', id);
  };

  return (
    <Box flex="1" p={4} onDragOver={handleDragOver} onDrop={handleDrop} bg="white">
      <Box h="100%" border="2px dashed gray" position="relative">
        {components.map((component) => (
          <Box
            key={component.id}
            p={2}
            m={2}
            bg="gray.200"
            cursor="pointer"
            position="absolute"
            left={`${component.x}px`}
            top={`${component.y}px`}
            onClick={() => handleEdit(component.id)}
          >
            {component.type}
            <Button onClick={() => handleDelete(component.id)}>Delete</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlankPage;
