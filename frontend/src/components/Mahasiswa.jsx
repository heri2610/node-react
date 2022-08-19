import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Mahasiswa = () => {
  const [mahas, setMahas] = useState([]);

  useEffect(() => {
    getMahas();
  }, []);

  const getMahas = async () => {
    const response = await axios.get("http://localhost:5000");
    setMahas(response.data);
  };
  const deleteMahas = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/${_id}`);
      getMahas();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5 ">
      <div className="col-md-8 mx-auto">
        <div className="row">
          <Link to={"add"} className="btn btn-primary col-md-4">
            Add New
          </Link>
          <table className="table table-bordered mt-3 ">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Nim</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {mahas.map((maha, index) => (
                <tr key={maha._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{maha.nama}</td>
                  <td>{maha.nim}</td>
                  <td>
                    <Link to={`edit/${maha._id}`} className="btn btn-success rounded-pill mx-3 btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => deleteMahas(maha._id)} className="btn btn-danger rounded-pill btn-sm">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mahasiswa;
