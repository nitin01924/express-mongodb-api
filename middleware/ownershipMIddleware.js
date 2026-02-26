
export const allowSelfOrAdmin = (paramFields = "id") => {
  return (req, res, next) => {
    if (
      req.user.role === "admin" ||
      req.user._id.toString() === req.params[paramFields]
    ) {
      return next();
    }
    return res.status(403).json({
      success: false,
      message: "forbidden",
    });
  };
};
