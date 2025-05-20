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
            className={`w-full p-3 bg-white border rounded text-center shadow-sm cursor-move text-sm font-medium ${
        isDragging ? "opacity-50" : ""
            }`}
        >
            {label}
        </div>
    )
}

export default DraggableItem