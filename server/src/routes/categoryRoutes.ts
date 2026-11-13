//categoryRoutes.ts server/src/routes/categoryRoutes/ts
// Which URL runs which function for categories.routes/index.ts puts these under /api/categories.

import { Router } from "express";
import {
  getCategories,
  getCategoryBySlug,
} from "../controllers/categoryController";

// STEP 15 (part 2): The categories API routes.

const router = Router();

router.get("/", getCategories); // GET /api/categories
router.get("/:slug", getCategoryBySlug); // GET /api/categories/home-living

export default router;
