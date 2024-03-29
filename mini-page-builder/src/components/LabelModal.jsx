import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

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
          <FormControl mb={3}>
            <FormLabel>Text</FormLabel>
            <Input value={labelText} onChange={(e) => setLabelText(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>X</FormLabel>
            <Input type="number" value={xPosition} onChange={(e) => setXPosition(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Y</FormLabel>
            <Input type="number" value={yPosition} onChange={(e) => setYPosition(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Font Size</FormLabel>
            <Input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Font Weight</FormLabel>
            <Input type="text" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} />
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

export default LabelModal;
