import CartsDaoMongoDb from '../daos/mongodb/carts.dao.js'
const CartDao = new CartsDaoMongoDb();


export const getall = async () =>{
    try {
        return await CartDao.getall()
    } catch (error) {
        throw new error(error);
    }
}

export const create = async (obj) =>{
    try {
        return await CartDao.create(obj)
    } catch (error) {
        throw new error(error);
    }
}

export const getbyid = async (id) =>{
    try {
        return await CartDao.getbyid(id);
    } catch (error) {
        throw new error(error);
    }
}

export const update = async (id, pid) =>{
    try {
        return await CartDao.update(id, pid);
    } catch (error) {
        throw new error(error);
    }
}

export const remove = async (id) =>{
    try {
        return await CartDao.remove(id);
    } catch (error) {
        throw new error(error);
    }
}