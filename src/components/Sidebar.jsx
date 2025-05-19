import React from 'react'
import DraggableItem from "./DraggableItem";

const Sidebar = () => {
    return (
        <div className="w-64 p-4 bg-gray-100 border-r border-gray-300 h-full">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Elements</h2>
            <DraggableItem type="text" label="Text" />
            <DraggableItem type="image" label="Image" />
            <DraggableItem type="button" label="Button" />
        </div>
    )
}

export default Sidebar