import mongoose from "mongoose";

const ClientProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    timeline: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.ClientsProject ||
  mongoose.model("ClientsProject", ClientProjectSchema);
