import React from 'react'
import { useBuilderStore } from "../store/builderStore";


const PropertyEditor = () => {
    const { elements, selectedId, updateElement } = useBuilderStore();

    const selected = elements.find((el) => el.id === selectedId);

    if (!selected) {
        return <p className="text-gray-500 p-4">Select an element to edit</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "content") {
            updateElement(selectedId, { ...selected, content: value });
        } else if (name === "link") {
            updateElement(selectedId, { ...selected, link: value });
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
        <div className="p-4 border-l border-gray-300 w-64 bg-white">
            <h2 className="text-lg font-semibold mb-4">Edit Element</h2>

            {selected.type === "text" && (
                <>
                    <label className="block mb-4">
                        Content:
                        <input
                            type="text"
                            name="content"
                            value={selected.content}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1 rounded"
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
                                    className="w-full border p-1 mt-1 rounded"
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
                    <label className="block mb-2">
                        Image URL:
                        <input
                            type="text"
                            name="content"
                            value={selected.content}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1 rounded"
                        />
                    </label>

                    <label className="block mb-2">
                        Width (px):
                        <input
                            type="number"
                            name="width"
                            value={selected.style.width || 150}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1 rounded"
                        />
                    </label>
                </>
            )}


            {selected.type === "button" && (
                <>
                    <label className="block mb-2">
                        Label:
                        <input
                            type="text"
                            name="content"
                            value={selected.content}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1"
                        />
                    </label>

                    <label className="block mb-2">
                        Font Size:
                        <input
                            type="text"
                            name="fontSize"
                            value={selected.style.fontSize}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1"
                        />
                    </label>

                    <label className="block mb-2">
                        Background Color:
                        <input
                            type="color"
                            name="backgroundColor"
                            value={selected.style.backgroundColor || "#007bff"}
                            onChange={handleChange}
                            className="w-full mt-1"
                        />
                    </label>

                    <label className="block mb-2">
                        Border Radius (px):
                        <input
                            type="number"
                            name="borderRadius"
                            value={selected.style.borderRadius || 4}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1"
                        />
                    </label>

                    <label className="block mb-2">
                        Text Color:
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

            {/* {selected.type !== "button" && (
                <>
                    <label className="block mb-4">
                        Font Size:
                        <input
                            type="text"
                            name="fontSize"
                            value={selected.style.fontSize}
                            onChange={handleChange}
                            className="w-full border p-1 mt-1 rounded"
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
            )} */}

        </div>
    )
}

export default PropertyEditor