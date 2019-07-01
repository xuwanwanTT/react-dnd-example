import React from 'react'
import { useState, useCallback } from 'react'
import { DropTargetMonitor } from 'react-dnd'
import TargetBox from './TargetBox'
import FileList from './FileList'

const Container: React.FC = () => {
	const [droppedFiles, setDroppedFiles] = useState([])

	const handleFileDrop = useCallback(
		(item: any, monitor: DropTargetMonitor) => {
			if (monitor) {
				const files = monitor.getItem().files
				setDroppedFiles(files)
			}
		},
		[],
	)

	return (
		<>
			<TargetBox onDrop={handleFileDrop} />
			<FileList files={droppedFiles} />
		</>
	)
}
export default Container
