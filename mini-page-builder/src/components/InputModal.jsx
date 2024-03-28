import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button } from '@chakra-ui/react';

const InputModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Input</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Type" mb={3} />
          <Input type="number" placeholder="X Position" mb={3} />
          <Input type="number" placeholder="Y Position" mb={3} />
          <Input type="number" placeholder="Width" mb={3} />
          <Input type="number" placeholder="Height" mb={3} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
