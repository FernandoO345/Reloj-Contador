import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contador from "./components/Contador/contador";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
