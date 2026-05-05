import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  categoria: String,
  imagen: String
});

export default mongoose.model("Product", productSchema);