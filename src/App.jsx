import React from "react";
import { BuilderProvider } from "./store/builderStore";
import Canvas from "./components/Canvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropertyEditor from "./components/PropertyEditor";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BuilderProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="flex h-screen bg-gray-100">
          <div className="w-64 border-r bg-white p-4">
            <Sidebar />
          </div>

          <div className="flex-1 relative overflow-auto">
            <Canvas />
          </div>

          <div className="w-64 border-l bg-white p-4">
            <PropertyEditor />
          </div>
        </div>
      </DndProvider>
    </BuilderProvider>
  );
};

export default App;
