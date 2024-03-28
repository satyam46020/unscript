import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button } from '@chakra-ui/react';

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
          <Input placeholder="Button Name" value={buttonName} onChange={(e) => setButtonName(e.target.value)} mb={3} />
          <Input type="number" placeholder="X Position" value={x} onChange={(e) => setX(e.target.value)} mb={3} />
          <Input type="number" placeholder="Y Position" value={y} onChange={(e) => setY(e.target.value)} mb={3} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ButtonModal;
