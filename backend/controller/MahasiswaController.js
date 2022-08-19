import Mahasiswa from "../models/Mahasiswa.js";

const getMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    res.json(mahasiswa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const saveMahasiswa = async (req, res) => {
  const mahasiswa = new Mahasiswa(req.body);
  try {
    const saveMahasiswa = await mahasiswa.save();
    res.status(201).json(saveMahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateMahasiswa = async (req, res) => {
  const cekId = await Mahasiswa.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "data tidak ditemukan" });
  try {
    const updatedMahasiswa = await Mahasiswa.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedMahasiswa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteMahasiswa = async (req, res) => {
  const cekId = await Mahasiswa.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "data tidak ditemukan" });
  try {
    const deletedMahasiswa = await Mahasiswa.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedMahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getMahasiswa, saveMahasiswa, updateMahasiswa, deleteMahasiswa, getMahasiswaById };
