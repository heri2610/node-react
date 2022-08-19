import mongoose from "mongoose";

const Mahasiswa = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nim: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("mahasiswa", Mahasiswa);
