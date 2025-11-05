import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

export default class Usermanager{
    constructor(path){
        this.path = path;
    }

    async GetUsers(){
        try{
            if(fs.existsSync(this.path)){
                const users = await  fs.promises.readFile(this.path, 'utf8');
                return JSON.parse(users);
            }else return [];
        }catch(error){
            console.log(error);
        }
    }

    async CreateUser(obj){
        try {
            const user = {
                id: uuidv4(),
                ...obj
            };
            const users = await this.GetUsers();
            const userExist =  users.find((u) => u.username === user.username);
            if(userExist) return "User already exist";
            users.push(user);
            await fs.promises.writeFile( this.path, JSON.stringify(users));
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async GetUserById(id){
        try {
            const users = await this.GetUsers();
            const userExist = users.find((u)=> u.id === id);
            if (!userExist) return null;
            return userExist;
        } catch (error) {
            console.log(error);
        }
    }

    async UpdateUser(obj, id){
        try {
            const users = await this.GetUsers();
            const userExist =  await this.GetUserById(id);
            if(!userExist) return null;
            userExist = { ...userExist, ...obj};
            const newarray = users.filter((u)=> u.id !== id);
            newarray.push(userExist);
            await fs.promises.writeFile(this.path, JSON.stringify(newarray));
            return userExist;
        } catch (error) {
            console.log(error);
        }
    }

    async DeleteUser(id){
        const users = await this.GetUsers();
        if(users.length > 0){
            const userExist = await this.GetUserById(id);
            if(userExist){
                const newarray = users.filter((u)=>u.id !== id);
                await fs.promises.writeFile(this.path, JSON.stringify(newarray));
            }
        }
    }
}