import blogModel from "../../../../DB/models/Blog.model.js";
import { asyncHandler } from "../../../../utils/ErrorHandling.js";

export const getAllBlogs = asyncHandler(async (req, res, next) => {
  const Blogs = await blogModel
    .find()
    .populate({ path: "addedBy", select: "userName email" });
  return Blogs
    ? res.json({ message: "Done", Blogs })
    : res.json({ message: "No Blogs Found!" });
});

export const addBlog = asyncHandler(async (req, res, next) => {
  const { content, year } = req.body;
  const Blog = await blogModel.create({
    content,
    year,
    addedBy: req.user._id,
  });
  return res.json({ message: 'Done', Blog });
});

export const getBlogById = asyncHandler(async (req, res, next) => {
  const Blog = await blogModel
    .findById(req.params.id)
    .select("-createdAt")
    .populate({ path: "addedBy", select: "userName email" });
  return Blog
    ? res.json({ message: "Done", Blog })
    : res.json({ message: "Blog Not Found, Check Id" });
});

export const updateBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { content, year } = req.body;
  const Blog = await blogModel.findOneAndUpdate(
    {
      _id: id,
      addedBy: req.user._id,
    },
    { content, year },
    { new: true }
  );
  return Blog
    ? res.json({ message: "Done", Blog })
    : res.json({ message: "Not Authenticated" });
});

export const deleteBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const Blog = await blogModel.findOneAndDelete({
    _id: id,
    addedBy: req.user._id,
  });
  return Blog
    ? res.json({ message: "Done", Blog })
    : res.json({ message: "Not Authenticated" });
});
