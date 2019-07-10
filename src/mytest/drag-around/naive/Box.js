import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

export default ({ left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { left, top, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });
  console.log('box----------', Date.now());

  if (isDragging && hideSourceOnDrag) return <div ref={drag} />;

  return (
    <div ref={drag} style={{ ...style, left, top }}>{children}</div>
  );
};
