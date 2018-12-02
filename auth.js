const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // console.log(req.headers.authorization.split(' ')[1])
    const token = req.headers.authorization.split(' ')[1];
    
    const decoded = jwt.verify(token,"webserver");
    // console.log(decoded);
    req.userData = decoded;
    next();
  } catch (err) { // thao luan xem redirect sang dau ( co the la '/' )
    next();
  }
};