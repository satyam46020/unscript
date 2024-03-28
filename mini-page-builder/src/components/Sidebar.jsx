// components/Sidebar.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

const ElementTypes = {
  LABEL: 'LABEL',
  INPUT: 'INPUT',
  BUTTON: 'BUTTON',
};

function Sidebar({ onConfigChange }) {
  const [{ isDragging }, drag] = useDrag({
    type: ElementTypes.LABEL,
    item: { type: ElementTypes.LABEL },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult();
        console.log(`Element dropped into ${dropResult.name}`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      width="200px"
      height="100vh"
      borderRight="1px solid #ccc"
      padding="10px"
    >
      <Box
        ref={drag}
        marginBottom="10px"
        opacity={isDragging ? 0.5 : 1}
        cursor="move"
      >
        Label
      </Box>
    </Box>
  );
}

export default Sidebar;
