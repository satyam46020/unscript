import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const InputModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [inputType, setInputType] = useState(initialData?.inputType || '');
  const [x, setX] = useState(initialData?.x || '');
  const [y, setY] = useState(initialData?.y || '');

  const handleSubmit = () => {
    const inputData = {
      type: 'Input',
      inputType,
      x: parseInt(x),
      y: parseInt(y),
    };
    onSubmit(inputData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
