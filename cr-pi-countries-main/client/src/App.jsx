import NavBar from "./components/NavBar/NavBar";
import { Landing, Home, Detail, Form } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

function App() {
  const loaction = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
