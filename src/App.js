
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/About" element={<mainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
