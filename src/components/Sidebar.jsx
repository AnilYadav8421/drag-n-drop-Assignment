import React, { useState } from "react";
import DraggableItem from "./DraggableItem";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePanel = () => setIsOpen(!isOpen);

    return (
        <div className="w-full bg-gray-50 border-b md:border-b-0 h-full">
            <div className="flex items-center justify-between p-4 md:hidden border-b">
                <span className="font-bold text-lg">Elements</span>
                <button
                    onClick={togglePanel}
                    className="text-md text-black cursor-pointer"
                >
                    {isOpen ? "Hide" : "Show"}
                </button>
            </div>

            <div className={`p-4 space-y-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <span className="hidden md:block font-semibold mb-2">Elements</span>

                <DraggableItem type="text" label="Text" />
                <DraggableItem type="image" label="Image" />
                <DraggableItem type="button" label="Button" />
            </div>
        </div>
    );
};

export default Sidebar;
