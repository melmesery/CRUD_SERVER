import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import endpoint from "./blog.endpoint.js";
import * as validators from "./blog.validation.js";
import * as blogController from "./controller/blog.js";
const router = Router();

router.post(
  "/",
  auth(endpoint.addBlog),
  validation(validators.addBlog),
  blogController.addBlog
);

router.get("/", blogController.getAllBlogs);

router.get(
  "/:id",
  auth(endpoint.getBlogById),
  validation(validators.getBlogById),
  blogController.getBlogById
);

router.put(
  "/:id",
  auth(endpoint.updateBlog),
  validation(validators.updateBlog),
  blogController.updateBlog
);

router.delete(
  "/:id",
  auth(endpoint.deleteBlog),
  validation(validators.deleteBlog),
  blogController.deleteBlog
);

export default router;
