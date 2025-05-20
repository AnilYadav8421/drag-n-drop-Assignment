import React, { useRef } from 'react'
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { useBuilderStore } from '../store/builderStore';
import CanvasElement from "./CanvasElement";
import EditableImage from './EditableImage';

const Canvas = () => {
    const canvasRef = useRef(null);
    const { elements, addElement, updateElement, selectElement, selectedId } = useBuilderStore();

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT,
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            const canvasRect = canvasRef.current.getBoundingClientRect();
            if (!offset || !canvasRef.current) return;

            const position = {
                x: offset.x - canvasRect.left - 75,
                y: offset.y - canvasRect.top - 25,
            }
            addElement(item.type, position);
        },
    }));
    return (
        <div className="flex justify-center items-center flex-1 bg-gray-200 p-4 h-full overflow-auto">
            <div
                ref={(node) => {
                    drop(node);
                    canvasRef.current = node;
                }}
                className="relative w-full max-w-[700px] h-[500px] border-2 border-dashed border-gray-600 bg-white overflow-hidden rounded-md shadow-sm"
                style={{ minWidth: '300px' }}
            >
                {elements.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg pointer-events-none">
                        Drop elements here...
                    </div>
                )}
                {elements.map(el => {
                    switch (el.type) {
                        case "image":
                            return (
                                <EditableImage
                                    key={el.id}
                                    el={el}
                                    selectedId={selectedId}
                                    selectElement={selectElement}
                                    updateElement={updateElement}
                                />
                            );
                        case "text":
                        case "button":
                        default:
                            return (
                                <CanvasElement
                                    key={el.id}
                                    el={el}
                                    selectedId={selectedId}
                                    selectElement={selectElement}
                                    updateElement={updateElement}
                                />
                            );
                    }
                })}
            </div>
        </div>

    )
}

export default Canvas