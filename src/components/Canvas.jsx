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
        <div
            ref={drop}
            style={{
                flex: 1,
                border: "2px dashed #aaa",
                position: "relative",
                height: "100vh",
                marginLeft: 16,
                backgroundColor: "#fafafa",
            }}
        >
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
    )
}

export default Canvas