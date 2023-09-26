const login = (req, res) =>{
    res.status(200).json({res: 'login ready'})
}
const register = (req, res) =>{
    res.status(200).json({res: 'register ready'})
}
export{
    login,
    register
}