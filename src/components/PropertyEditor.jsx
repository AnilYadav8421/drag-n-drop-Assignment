import React, { useState } from "react";
import { useBuilderStore } from "../store/builderStore";

const PropertyEditor = () => {
    const { elements, selectedId, updateElement } = useBuilderStore();
    const selected = elements.find((el) => el.id === selectedId);
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => setIsOpen(!isOpen);

    if (!selected) {
        return (
            <div className="w-full md:w-64 p-4 bg-gray-50 border-t md:border-l md:border-t-0 border-gray-300">
                <div className="flex items-center justify-between md:hidden mb-2">
                    <span className="font-semibold">Edit Panel</span>
                    <button
                        onClick={togglePanel}
                        className="text-sm text-blue-600 underline"
                    >
                        {isOpen ? "Hide" : "Show"}
                    </button>
                </div>
                {(isOpen || window.innerWidth >= 768) && (
                    <p className="text-md text-gray-600">Select an element to edit.</p>
                )}
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "content") {
            updateElement(selectedId, { ...selected, content: value });
        } else {
            updateElement(selectedId, {
                ...selected,
                style: {
                    ...selected.style,
                    [name]: name === "width" || name === "borderRadius" ? Number(value) : value,
                },
            });
        }
    };

    return (
        <div className="w-full md:w-64 p-4 bg-white border-t md:border-l md:border-t-0 border-gray-300">
            <div className="flex items-center justify-between md:hidden mb-2">
                <span className="font-semibold">Edit Panel</span>
                <button
                    onClick={togglePanel}
                    className="text-sm text-black "
                >
                    {isOpen ? "Hide" : "Show"}
                </button>
            </div>

            {(isOpen || window.innerWidth >= 768) && (
                <>
                    <h2 className="text-lg font-semibold mb-4 hidden md:block">Edit Element</h2>

                    <div className="space-y-4 text-sm">
                        {/* TEXT */}
                        {selected.type === "text" && (
                            <>
                                <label className="block">
                                    Content:
                                    <input
                                        type="text"
                                        name="content"
                                        value={selected.content}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block mb-4">
                                    Font Size:
                                    <input
                                        type="text"
                                        name="fontSize"
                                        value={selected.style.fontSize}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block mb-4">
                                    Color:
                                    <input
                                        type="color"
                                        name="color"
                                        value={selected.style.color}
                                        onChange={handleChange}
                                        className="w-full mt-1"
                                    />
                                </label>
                            </>
                        )}

                        {selected.type === "image" && (
                            <>
                                <label className="block">
                                    Image URL:
                                    <input
                                        type="text"
                                        name="content"
                                        value={selected.content}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block">
                                    Width (px):
                                    <input
                                        type="number"
                                        name="width"
                                        value={selected.style.width || 150}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>
                            </>
                        )}

                        {selected.type === "button" && (
                            <>
                                <label className="block">
                                    Label:
                                    <input
                                        type="text"
                                        name="content"
                                        value={selected.content}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block mb-2">
                                    Font Size:
                                    <input
                                        type="text"
                                        name="fontSize"
                                        value={selected.style.fontSize}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block">
                                    Background Color:
                                    <input
                                        type="color"
                                        name="backgroundColor"
                                        value={selected.style.backgroundColor || "#007bff"}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </label>

                                <label className="block">
                                    Border Radius (px):
                                    <input
                                        type="number"
                                        name="borderRadius"
                                        value={selected.style.borderRadius || 4}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded"
                                    />
                                </label>

                                <label className="block">
                                    Text Color:
                                    <input
                                        type="color"
                                        name="color"
                                        value={selected.style.color}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </label>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default PropertyEditor;
