import React, { useState } from 'react'

const EditableImage = ({ el, selectedId, selectElement }) => {
    const { id, style={}, content: imageUrl } = el;

    return (
        <img
            src={imageUrl || "https://documents.bcci.tv/resizedimageskirti/164_compress.png"}
            alt="User added"
            style={{
                position: "absolute",
                top: style.position?.y || 50,
                left: style.position?.x || 50,
                width: style.width || 150,
                border: selectedId === id ? "2px solid blue" : "none",
                cursor: "pointer",
                objectFit: "cover",
            }}
            onClick={(e) => {
                e.stopPropagation();
                selectElement(id);
            }}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.png";
            }}
        />
    )
}

export default EditableImage