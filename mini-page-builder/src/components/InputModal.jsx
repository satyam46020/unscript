import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const InputModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [inputType, setInputType] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  useEffect(() => {
    if (initialData) {
      setInputType(initialData.inputType || '');
      setX(initialData.x || '');
      setY(initialData.y || '');
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!inputType || !x || !y) {
      alert('Please fill in all fields.');
      return;
    }
    
    const inputData = {
      type: 'Input',
      inputType,
      x: parseInt(x),
      y: parseInt(y),
    };
    onSubmit(inputData);
    onClose();
  };

  const handleClose = () => {
    setInputType('');
    setX('');
    setY('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Input</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Input Type</FormLabel>
            <Input value={inputType} onChange={(e) => setInputType(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>X</FormLabel>
            <Input type="number" value={x} onChange={(e) => setX(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Y</FormLabel>
            <Input type="number" value={y} onChange={(e) => setY(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Save Changes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
