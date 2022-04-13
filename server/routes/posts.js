import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  commentPost,
} from "../controllers/posts.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
