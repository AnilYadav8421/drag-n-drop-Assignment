
const CanvasElement = ({ el, selectedId, selectElement, updateElement }) => {
    const { id, type, style, content } = el;
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                selectElement(id);
            }}
            style={{
                position: "absolute",
                top: style.position.y,
                left: style.position.x,
                fontSize: style.fontSize,
                color: style.color,
                cursor: "pointer",
                border: selectedId === id ? "2px solid blue" : "none",
                padding: 8,
                backgroundColor: "white",
                userSelect: "none",
            }}
        >
            {type === "text" && content}
            {type === "button" && (
                <button
                    style={{
                        fontSize: style.fontSize,
                        color: style.color,
                        backgroundColor: style.backgroundColor || "#007bff",
                        borderRadius: style.borderRadius || "4px",
                        padding: "8px 16px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    {content || "Button"}
                </button>
            )}
            {type === "image" && (
                <img
                    src={content || "https://via.placeholder.com/150"}
                    alt="User provided"
                    style={{
                        width: 150,
                        position: "absolute",
                        top: style.position?.y || 50,
                        left: style.position?.x || 50,
                        border: selectedId === id ? "2px solid blue" : "none",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        selectElement(id);
                    }}
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150";
                    }}
                />
            )}
        </div>
    )
}

export default CanvasElement