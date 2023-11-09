import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getProduct, newProduct } from "@/backend/controllers/productControl";

const router = createRouter();

dbConnect();
router.get(getProduct);
router.post(newProduct);


export default router.handler();