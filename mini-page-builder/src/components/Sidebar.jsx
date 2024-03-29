import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
import { HiOutlineTag, HiOutlineViewList, HiOutlineCursorClick } from 'react-icons/hi';

const DraggableItem = ({ type }) => {
  const { colorMode } = useColorMode();

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', type);
  };

  return (
    <Box
      draggable
      onDragStart={handleDragStart}
      p={4}
      m={2}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="md"
      borderRadius="md"
      cursor="move"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        bg: colorMode === 'light' ? 'gray.100' : 'gray.700',
      }}
    >
      {type === 'Label' && (
        <>
          <HiOutlineTag size={24} color={colorMode === 'light' ? 'gray.600' : 'gray.300'} />
          <Text ml={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>Label</Text>
        </>
      )}
      {type === 'Input' && (
        <>
          <HiOutlineViewList size={24} color={colorMode === 'light' ? 'gray.600' : 'gray.300'} />
          <Text ml={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>Input</Text>
        </>
      )}
      {type === 'Button' && (
        <>
          <HiOutlineCursorClick size={24} color={colorMode === 'light' ? 'gray.600' : 'gray.300'} />
          <Text ml={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>Button</Text>
        </>
      )}
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box w="200px" h="100vh" bg="black" p={4} boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={4} ml={5} color="white">Blocks</Text>
      <DraggableItem type="Label" />
      <DraggableItem type="Input" />
      <DraggableItem type="Button" />
    </Box>
  );
};

export default Sidebar;
