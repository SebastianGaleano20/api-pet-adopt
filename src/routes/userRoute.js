import { Router } from "express";
import { userController } from "../controllers/userController.js";
import verifyMiddleware from "../middlewares/verifyMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

export const userRoutes = () => {
  // Iniciamos Router de express
  const userRoute = Router();
  // Extraemos funciones del Controller
  const { newUser, getUsers, updateDataUser, loginUser, refreshToken } =
    userController();
  // Ruta para crear usuario
  userRoute.route("/create").post(verifyMiddleware, adminMiddleware, newUser);
  // Ruta para obtener usuarios
  userRoute.route("/").get(verifyMiddleware, adminMiddleware, getUsers);
  // Ruta para actualizar usuario
  userRoute
    .route("/:id")
    .patch(verifyMiddleware, adminMiddleware, updateDataUser);
  // Ruta para iniciar sesión
  userRoute.route("/login").post(loginUser);
  // Ruta para refrescar token
  userRoute.route("/refresh-token").post(refreshToken);
  // Devolvemos el router
  return userRoute;
};
