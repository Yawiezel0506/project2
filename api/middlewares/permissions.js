function checkPermissions(req, res, next) {
  const currentUserId = req.query.userId;
  const isAdmin = req.query.isAdmin;
  const id = false;
  if (req.params.id) {
    id = req.params.id;
  }

  if (req.method === "GET" && id) {
    if (isAdmin || currentUserId == id) {
      next();
    } else if (currentUserId == id) {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } else if (
    req.method === "GET" ||
    req.method === "PUT" ||
    req.method === "DELETE"
  ) {
    // Get single user, edit user, delete user: Admin or user
    if (isAdmin || currentUser.id === req.params.id) {
      next();
    } else {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } else if (req.method === "POST") {
    // Create user: No specific permissions required
    next();
  }
}
