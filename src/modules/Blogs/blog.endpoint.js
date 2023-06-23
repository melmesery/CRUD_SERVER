import { roles } from "../../middleware/auth.js";

const endpoint = { 
  addBlog: [roles.User],
  getBlogById: [roles.User],
  updateBlog: [roles.User],
  deleteBlog: [roles.User],
};

export default endpoint;
