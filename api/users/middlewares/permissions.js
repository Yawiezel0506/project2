function checkPermissions(req, res, next) {
  const currentUserId = req.headers.id; 
  const isAdmin = req.headers.is_admin === "true"; 
  const id = req.params.id; 

  if (req.method === "GET") {
    console.log(isAdmin, currentUserId, id);
    if (isAdmin || currentUserId == id) {
      next();
    } else {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } else if (req.method === "DELETE") {
    if (isAdmin || currentUserId == id) {
      next();
    } else {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } else if (req.method === "PUT") {
    if (currentUserId == id) {
      next();
    } else {
      res.status(403).json({ error: "Insufficient permissions" });
    }
  } else if (req.method === "POST") {
    next();
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}

export default checkPermissions;


