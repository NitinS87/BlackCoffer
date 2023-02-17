import { Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FilterPage from "./components/FilterPage";

function App() {
  return (
    <div className="relative min-h-screen min-w-full w-full overflow-hidden">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<MainContent />} />
        <Route
          path="/table/country"
          element={<FilterPage filter={"country"} />}
        />
        <Route path="/table/region" element={<FilterPage filter="region" />} />
        <Route path="/table/source" element={<FilterPage filter="source" />} />
        <Route path="/table/topic" element={<FilterPage filter="topic" />} />
        <Route path="/table/pestle" element={<FilterPage filter="pestle" />} />
        <Route path="/table/sector" element={<FilterPage filter="sector" />} />
      </Routes>
    </div>
  );
}

export default App;
