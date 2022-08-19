import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMahasiswa = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const navigate = useNavigate();

  const saveMahas = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000", {
        nama,
        nim,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-4">
      <div className="col-md-7 mx-auto">
        <div className="row">
          <form onSubmit={saveMahas}>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} id="nama" />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                Nim
              </label>
              <input type="text" className="form-control" value={nim} onChange={(e) => setNim(e.target.value)} id="nim" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMahasiswa;
