import { useDrag } from 'react-dnd';
import { ItemTypes } from "../constants";

const DraggableItem = ({ type, label }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT,
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
                padding: "8px",
                marginBottom: "8px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
            }}
        >
            {label}
        </div>
    )
}

export default DraggableItem