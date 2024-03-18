import mongoose from 'mongoose';
const { Schema } = mongoose;
const blogSchema = new Schema({
  title: { type: String, required: true,default:"Untitled" }, // Title is required
  author: { type: String, required: true }, // Author is required
  body: { type: String, required: false }, // Body is optional
  comments: [{ body: { type: String, required: false }, date: { type: Date, default: Date.now } }], // Comments array is optional
  date: { type: Date, default: Date.now }, // Date is required
  hidden: { type: Boolean, default: false } // Hidden is required, default value is false
},{
  timestamps:true
});

const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);

export default Blog;