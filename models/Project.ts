import mongoose, { Schema, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tech: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
      required: true,
    },

    liveUrl: {
      type: String,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

export default models.Project || mongoose.model("Project", ProjectSchema);
