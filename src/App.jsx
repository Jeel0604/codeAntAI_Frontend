import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
