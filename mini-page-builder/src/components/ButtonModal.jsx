import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button } from '@chakra-ui/react';

const ButtonModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Button</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Text" mb={3} />
          <Input type="number" placeholder="X Position" mb={3} />
          <Input type="number" placeholder="Y Position" mb={3} />
          <Input type="text" placeholder="Color" mb={3} />
          <Input type="text" placeholder="Background Color" mb={3} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ButtonModal;
