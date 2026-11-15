// orderRoutes.ts server/src/routes/orderRoutes.ts
// routes/index.ts puts these under /api/orders

import { Router } from "express";
import { protect } from "../middleware/auth";
import {
  cancelOrder,
  getMyOrders,
  getOrder,
  getOrderSummary,
  placeOrder,
} from "../controllers/orderController";

// STEP 22 (part 5): Order routes

const router = Router();

router.use(protect); // you must be logged in to place or see orders

router.post("/", placeOrder);
router.get("/", getMyOrders);
router.get("/summary");
getOrderSummary; // BEFORE "/:orderNumber", or "summary" would be read as an order number
router.get("/:orderNumber", getOrder);
router.patch("/:orderNumber/cancel", cancelOrder);

export default router;
