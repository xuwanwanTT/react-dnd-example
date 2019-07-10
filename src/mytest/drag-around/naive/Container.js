import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Box from './Box';

const style = {
  positoin: 'relative',
  width: 600,
  height: 400,
  border: '1px solid'
};

export default ({ hideSourceOnDrag }) => {
  const [site, setSite] = useState({ top: 10, left: 10 });

  const [, drop] = useDrop({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(left, top);
      return undefined;
    }
  });

  function moveBox(left, top) {
    setSite({ top, left })
  };

  console.log('container-----', Date.now());

  return (
    <div ref={drop} style={{ ...style }}>
      <Box top={site.top} left={site.left} hideSourceOnDrag={hideSourceOnDrag}>123456789</Box>
    </div>
  );
};
