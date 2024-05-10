const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantityInStock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  managedBy: { type: String, required: true},
  image: [{ type: String }], // Agregamos el campo 'images' como un array de strings para almacenar las URLs de las imágenes
});

const Product = model("Product", productSchema);

module.exports = Product;
