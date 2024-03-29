import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const ButtonModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [buttonName, setButtonName] = useState(initialData?.buttonName || '');
  const [x, setX] = useState(initialData?.x || '');
  const [y, setY] = useState(initialData?.y || '');

  const handleSubmit = () => {
    const buttonData = {
      type: 'Button',
      buttonName,
      x: parseInt(x),
      y: parseInt(y),
    };
    onSubmit(buttonData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ButtonModal;
