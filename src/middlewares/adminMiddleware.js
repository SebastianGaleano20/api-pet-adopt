import HTTP_STATUS from "../utils/httpStatus";
const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ error: "No autenticado" });
  }

  if (req.user.rol !== "ADMIN") {
    return res
      .status(HTTP_STATUS.FORBIDDEN)
      .json({ error: "Acceso denegado: solo administradores" });
  }

  next();
};

export default adminMiddleware;
