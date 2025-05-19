import React from 'react'
import { useBuilderStore } from "../store/builderStore";


const PropertyEditor = () => {
    const { elements, selectedId, updateElement } = useBuilderStore();
    const selected = elements.find((el) => el.id === selectedId);

    if (!selected) {
        return <div className="w-72 p-6 bg-gray-50 border-l border-gray-300">Select an element to edit</div>;
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
        <div className="w-72 p-6 bg-gray-50 border-l border-gray-300">
            <h2 className="text-lg font-bold mb-4">Edit Element</h2>

            <div className="space-y-4 text-sm">
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

                        {selected.type === "text" && (
                            <>
                                <label className="block mb-4">
                                    Font Size:
                                    <input
                                        type="text"
                                        name="fontSize"
                                        value={selected.style.fontSize}
                                        onChange={handleChange}
                                        className="mt-1 w-full p-2 border rounded rounded"
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
        </div>
    )
}

export default PropertyEditor