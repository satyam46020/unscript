import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react';

const ButtonModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [buttonName, setButtonName] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [missingFields, setMissingFields] = useState([]);

  useEffect(() => {
    if (initialData) {
      setButtonName(initialData.buttonName || '');
      setX(initialData.x || '');
      setY(initialData.y || '');
    }
  }, [initialData]);

  const handleSubmit = () => {
    const requiredFields = [buttonName, x, y];
    if (requiredFields.some(field => !field)) {
      setMissingFields(requiredFields.map((field, index) => field ? '' : index));
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
          <FormControl mb={3} isInvalid={missingFields.includes(0)}>
            <FormLabel>Button Name</FormLabel>
            <Input value={buttonName} onChange={(e) => setButtonName(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(1)}>
            <FormLabel>X</FormLabel>
            <Input type="number" value={x} onChange={(e) => setX(e.target.value)} />
          </FormControl>
          <FormControl mb={3} isInvalid={missingFields.includes(2)}>
            <FormLabel>Y</FormLabel>
            <Input type="number" value={y} onChange={(e) => setY(e.target.value)} />
          </FormControl>
          {missingFields.length > 0 && (
            <Text color="red.500">Please fill in all fields.</Text>
          )}
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
