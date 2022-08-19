import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mahasiswa from "./components/Mahasiswa";
import EditMahasiswa from "./components/EditMahasiswa";
import Navbar from "./components/Navbar";
import AddMahasiswa from "./components/AddMahassiswa";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mahasiswa />}></Route>
        <Route path="/add" element={<AddMahasiswa />}></Route>
        <Route path="/edit/:id" element={<EditMahasiswa />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
