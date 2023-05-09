const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number
      }
    ],
    status: {
      type: String,
      default: inactive
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);