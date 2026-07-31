import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader.startWith("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization header",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user =  prisma.user.findUnique({ 
      where: {
         id: decoded.id
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true
      }
      });

      if (!user || !user.isActive) {
        return res.status(401).json({
          success: false,
          message: "Invalid user"
        })
      }


    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token" || error.message,
    });
  }
};