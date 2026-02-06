import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

export default models.Contact || mongoose.model("Contact", ContactSchema);
