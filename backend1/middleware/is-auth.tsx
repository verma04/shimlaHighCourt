import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction }  from 'express';
module.exports = (req:Request, res:Response ,  next:NextFunction)  => {
  
  const authHeader = req.get('authorization');

  if (!authHeader) {
    req.isAuth:Boolean = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'somesupersecretkey');
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
