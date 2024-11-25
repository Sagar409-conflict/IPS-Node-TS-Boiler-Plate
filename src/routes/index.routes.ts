import { Router } from "express";
import userRoutes from "../modules/users/routes/user.routes";
const route = Router();

route.use("users", userRoutes);

export default route;
