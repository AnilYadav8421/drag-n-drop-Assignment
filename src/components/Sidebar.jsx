import React from 'react'
import DraggableItem from "./DraggableItem";

const Sidebar = () => {
    return (
        <div className='width: 200, padding: 16, backgroundColor: "#f4f4f4"'>
            <h2 className="text-lg font-semibold mb-4">Elements</h2>
            <DraggableItem type="text" label="Text" />
            <DraggableItem type="image" label="Image" />
            <DraggableItem type="button" label="Button" />
        </div>
    )
}

export default Sidebar