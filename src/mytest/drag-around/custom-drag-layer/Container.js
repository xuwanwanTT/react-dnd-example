import React, { useState, useCallback } from 'react';
import DraggableBox from './DraggableBox';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

const styles = {
  width: 600,
  height: 400,
  border: '1px solid black',
  position: 'relative',
}

export default () => {
  const [site, setSite] = useState({ top: 20, left: 30 });

  const moveBox = useCallback(
    (left, top) => {
      setSite(
        update(site, { $merge: { left, top } })
      );
    },
    [site]
  )

  const [, drop] = useDrop({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()

      let left = Math.round(item.left + delta.x)
      let top = Math.round(item.top + delta.y)

      // [left, top] = doSnapToGrid(left, top)

      moveBox(left, top)
      return undefined
    },
  });

  return (
    <div style={styles} ref={drop}>
      <DraggableBox {...site} />
    </div>
  );
};
