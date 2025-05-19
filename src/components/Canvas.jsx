import React from 'react'
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { useBuilderStore } from '../store/builderStore';
import CanvasElement from "./CanvasElement";
import EditableImage from './EditableImage';

const Canvas = () => {
    const { elements, addElement, updateElement, selectElement, selectedId } = useBuilderStore();

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT,
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            if (!offset) return;
            addElement(item.type, offset);
        },
    }));
    return (
        <div className='className="flex justify-center items-center flex-1 bg-gray-100 p-8"'>
            <div
                ref={drop}
                className="relative bg-white border border-gray-300 shadow-md"
                style={{width: "800px", height: "600px" }}
            >
                {elements.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p className="text-gray-500 text-xl">Drop here...</p>
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