import React, { useEffect } from 'react';
import Box from './Box';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

export default (props) => {
  const { left, top } = props;

  function getStyles(
    left,
    top,
    isDragging,
  ) {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
      position: 'absolute',
      transform,
      WebkitTransform: transform,
      // IE fallback: hide the real node using CSS when dragging
      // because IE will ignore our custom "empty image" drag preview.
      opacity: isDragging ? 0 : 1,
      // height: isDragging ? 0 : '',
    }
  };

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: 'box', left, top, },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview]);

  return (
    <div style={getStyles(left, top, isDragging)} ref={drag}>
      <Box />
    </div>
  );
};
