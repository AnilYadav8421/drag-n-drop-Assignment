import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const BuilderContext = createContext(null);

export function BuilderProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addElement = (type, clientOffset, id) => {
    const position = clientOffset;
    if (id && elements.some(el => el.id === id)) return;

    const newElement = {
      id: nanoid(),
      type,
      content: type === "text" ? "Write your name.." : "",
      style: {
        position: position || { x: 50, y: 50 },
        fontSize: "18px",
        color: "#000000",
        backgroundColor: "#ffffff",
        width: type === "image" ? 150 : undefined,
        height: type === "image" ? "auto" : undefined,
      },
    };
    setElements((prev) => [...prev, newElement]);
  };

  const updateElement = (id, updates) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...updates } : el))
    );
  };

  const selectElement = (id) => {
    setSelectedId(id);
  }

  return (
    <BuilderContext.Provider
      value={{ elements, addElement, updateElement, selectedId, selectElement }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export const useBuilderStore = () => useContext(BuilderContext);
