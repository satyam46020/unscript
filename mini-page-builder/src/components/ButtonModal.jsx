import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const ButtonModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [buttonName, setButtonName] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  useEffect(() => {
    if (initialData) {
      setButtonName(initialData.buttonName || '');
      setX(initialData.x || '');
      setY(initialData.y || '');
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!buttonName || !x || !y) {
      alert('Please fill in all fields.');
      return;
    }

    const buttonData = {
      type: 'Button',
      buttonName,
      x: parseInt(x),
      y: parseInt(y),
    };
    onSubmit(buttonData);
    onClose();
  };

  const handleClose = () => {
    setButtonName('');
    setX('');
    setY('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Button</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Button Name</FormLabel>
            <Input value={buttonName} onChange={(e) => setButtonName(e.target.value)} />
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

export default ButtonModal;
