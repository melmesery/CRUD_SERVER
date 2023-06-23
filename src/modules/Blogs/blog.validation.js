import joi from "joi";
import { generalFields } from "../../middleware/validation.js";

export const addBlog = joi.object({
  content: joi.string().required(),
  year: joi.number().min(1900).max(new Date().getFullYear()).required(),
});

export const getBlogById = joi.object({
  id: generalFields.id,
});

export const updateBlog = joi.object({
  id: generalFields.id,
  content: joi.string(),
  year: joi.number().min(1900).max(new Date().getFullYear()),
});

export const deleteBlog = joi.object({
  id: generalFields.id,
});
