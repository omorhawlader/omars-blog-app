import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String,require:false },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  authorEmail: { type: String, required: true },
  html:{ type: String,require:false }
});


const Blog = mongoose.models.Blog || mongoose.model("Blog",postSchema);

export default Blog;