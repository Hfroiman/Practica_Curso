import express from 'express'
import Usermanager from './manager/usermanager.js';
import { uservalidator } from './manager/userValidator.js';
import { Uploader } from './Multer/multer.js';


const usermanager = new Usermanager('./user.json');
const app = express();
app.use(express.json());

app.get('/users', async (req, res)=>{
    try {
        const users = await usermanager.GetUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

app.post('/users', uservalidator,async (req, res)=>{
    try {
        const user = await  usermanager.CreateUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})


app.get('/users/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await usermanager.GetUserById(id);
        if(!user) res.status(404).json({msg: "User not found"});
        else res.status(200).json(user);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})


app.put('/users/:iduser', async (req, res)=>{
    try {
        const { iduser } = req.params;
        const userupd = await usermanager.UpdateUser(req.body, iduser);
        if(!userupd) res.status(404).json({msg:'error updating user'})
            res.status(200).json(userupd);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})

app.post('/users/profile', Uploader.single('profile'), async(res, req)=>{
    try{
        console.log(req.file);
        const user =  req.body;
        user.profile = req.file.path;
        const usercreated = await usermanager.CreateUser(user);
        res.json(usercreated);
    }
    catch (error) {
        res.json({msg:error.message})
    }
})

const PORT = 8080;
app.listen(PORT, () => console.log('Server ok on port ' + PORT));