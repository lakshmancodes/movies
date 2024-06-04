import './App.css';
import Mov from './Components/MovieSearch'
import Sig from './Components/SignInpage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sig />} />
          <Route path="/movies" element={<Mov />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
