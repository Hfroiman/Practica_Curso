export const uservalidator=(req, res, next)=>{
    const user = req.body;
    if(user.code === "prueba1")next();
    else res.status(403).json({msg: 'No autorizado.'})
}