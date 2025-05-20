import { BuilderProvider } from "./store/builderStore";
import Canvas from "./components/Canvas";
import PropertyEditor from "./components/PropertyEditor";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BuilderProvider>
      <div className="min-h-[100vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 border-r bg-gray-100">
          <Sidebar />
        </div>

        <div className="w-full md:w-3/5">
          <Canvas />
        </div>

        <div className="w-full md:w-1/5 border-l bg-white overflow-y-auto">
          <PropertyEditor />
        </div>
      </div>
    </BuilderProvider>
  );
};

export default App;
