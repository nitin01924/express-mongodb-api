export const allowSelfOrAdmin = (req, res, next) => {
  if (
    req.user.role === "admin" ||
    req.user._id.toString() === req.params.id
  ) {
    return next();
  }

  return res.status(403).json({
    success: false,
    message: "Forbidden (you are not able to access another user's data)",
  });
};