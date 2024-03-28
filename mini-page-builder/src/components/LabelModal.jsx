import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button } from '@chakra-ui/react';

const LabelModal = ({ isOpen, onClose, onSubmit }) => {
  const [labelText, setLabelText] = useState('');
  const [xPosition, setXPosition] = useState('');
  const [yPosition, setYPosition] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [fontWeight, setFontWeight] = useState('');

  const handleSubmit = () => {
    const labelData = {
      type: 'Label',
      text: labelText,
      x: parseInt(xPosition),
      y: parseInt(yPosition),
      fontSize: parseInt(fontSize),
      fontWeight: fontWeight
    };
    onSubmit(labelData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Label</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Text" value={labelText} onChange={(e) => setLabelText(e.target.value)} mb={3} />
          <Input type="number" placeholder="X Position" value={xPosition} onChange={(e) => setXPosition(e.target.value)} mb={3} />
          <Input type="number" placeholder="Y Position" value={yPosition} onChange={(e) => setYPosition(e.target.value)} mb={3} />
          <Input type="number" placeholder="Font Size" value={fontSize} onChange={(e) => setFontSize(e.target.value)} mb={3} />
          <Input type="text" placeholder="Font Weight" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} mb={3} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LabelModal;
