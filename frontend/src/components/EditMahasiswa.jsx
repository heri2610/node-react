import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditMahasiswa = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMahasById();
  }, []);

  const updateMahas = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/${id}`, {
        nama,
        nim,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getMahasById = async () => {
    const response = await axios.get(`http://localhost:5000/${id}`);
    setNama(response.data.nama);
    setNim(response.data.nim);
  };
  return (
    <div className="container mt-4">
      <div className="col-md-7 mx-auto">
        <div className="row">
          <form onSubmit={updateMahas}>
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
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMahasiswa;
