const errorMiddleware = (err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status().json({
    success: false,
    message: err.message || "internal server error",
  });
};
export default errorMiddleware;
