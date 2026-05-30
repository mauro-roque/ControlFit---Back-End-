module.exports = (role)=> (req,res,next)=>{
  if(req.usuario?.role !== role){
    return res.status(403).json({erro:"Acesso negado"});
  }
  next();
};